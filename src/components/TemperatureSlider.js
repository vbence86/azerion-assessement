import React from 'react';
import GreenSlider from './GreenSlider';

const TITLE = 'Temperature [°C]';
const MIN_TEMPERATURE = 10;
const MAX_TEMPERATURE = 35;

const toAria = value => `${value}°C`;

const TemperatureSlider = props =>
  <GreenSlider
    {...props}
    title={TITLE}
    defaultValue={MIN_TEMPERATURE}
    getAriaValueText={toAria}
    aria-labelledby="discrete-slider-custom"
    step={1}
    valueLabelDisplay="auto"
    min={MIN_TEMPERATURE}
    max={MAX_TEMPERATURE}
  />;

export default TemperatureSlider;