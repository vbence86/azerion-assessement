import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Backdrop, CircularProgress } from '@material-ui/core';
import {
  TemperatureSlider,
  PressureSlider,
  ChanceOfRainChart,
  AmountOfRainChart,
} from './components';
import { getAmounts } from './services/rainfallAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 10,
    padding: 25,
    height: 300,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const GridItem = props =>
  <Grid item xs={6}>
    <Paper elevation={3} className={props.className}>
      {props.children}
    </Paper>
  </Grid>;

export default function App() {
  const classes = useStyles();
  const [amounts, setAmounts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [pressure, setPressure] = useState(970);
  const [temperature, setTemperature] = useState(10);

  const renderLoading = () =>
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>;

  const renderStage = () =>
    <Grid container spacing={1}>
      <GridItem className={classes.paper}>
        <PressureSlider onChange={(event, value) => setPressure(value)} />
      </GridItem>
      <GridItem className={classes.paper}>
        <ChanceOfRainChart amounts={amounts} pressure={pressure} temperature={temperature} />
      </GridItem>
      <GridItem className={classes.paper}>
        <TemperatureSlider onChange={(event, value) => setTemperature(value)} />
      </GridItem>
      <GridItem className={classes.paper}>
        <AmountOfRainChart data={amounts} />
      </GridItem>        
    </Grid>;

  getAmounts().then((response) => {
    setLoading(false);
    setAmounts(response);
  });

  return (
    <div className={classes.root}>
      {renderStage()}      
      {isLoading && renderLoading()}
    </div>
  );
}
