import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import { TemperatureSlider, PressureSlider } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 25,
    padding: 25,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>
            <PressureSlider />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>
            <TemperatureSlider />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
