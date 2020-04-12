import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chanceOfRain } from '../services/helpers'; 

/**
 * Returns a decorated array for the BarChart component
 * that shows the amount of rainfall on each day
 *
 * @returns {array}
 */
const decorate = props => {
  const { pressure, temperature, amounts } = props;
  if (!amounts) return [];
  return amounts.reduce((arr, item) => {
    const chance = chanceOfRain(pressure, temperature, item.amount);
    return [
      ...arr,
      {
        name: item.day,
        range: [
          chance.lower_bound,
          chance.upper_bound,
        ],
        mean: chance.mean,
      },
    ];
  }, []);
};

/**
 * Returns a function that creates an style descriptor that is compatible with
 * the className attribute and can be passed it
 *
 * @returns {function}
 */
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    width: '100%'
  },
}));

const ChanceOfRainChart = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveContainer>
        <ComposedChart data={decorate(props)}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={0.5}/>
              <stop offset="50%" stopColor="#8884d8" stopOpacity={0.05}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" label="Days" height={60} />
          <YAxis unit="%" type="number" domain={[0, 100]}/>
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip />
          <Area type="monotone" dataKey="range" stroke="#ee84d8" fillOpacity={1} fill="url(#colorGrad)" />
          <Line type="monotone" dataKey="mean" stroke="#8884d8"/>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChanceOfRainChart;
