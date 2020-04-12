import React from 'react';
import { Slider, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    marginTop: 40,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const GreenSlider = props =>
  <>
    <Typography variant="button" gutterBottom>
      {props.title}
    </Typography>
    <StyledSlider {...props} />
  </>;

export default GreenSlider;