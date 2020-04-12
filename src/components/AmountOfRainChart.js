import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/**
 * Returns a decorated array for the BarChart component
 * that shows the amount of rainfall on each day
 *
 * @returns {array}
 */
const decorate = data => 
  data.reduce((arr, item) => [
    ...arr,
    {
      name: item.day,
      amount: item.amount,
    },
  ], []);

/**
 * Returns a function that creates an style descriptor that is compatible with
 * the className attribute and can be passed it
 *
 * @returns {function}
 */
const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    width: '100%',
  },
}));

const AmountOfRainChart = (props) => {
  const classes = useStyles();
  const data = props.data || [];

  return (
    <div className={classes.root}>
      <ResponsiveContainer>
        <BarChart data={decorate(data)}
          margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="name" label="Days" height={60}/>
          <YAxis unit=" l/m²" />
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip/>
          <Bar type="monotone" dataKey="amount" fill="#8884d8"/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AmountOfRainChart;
