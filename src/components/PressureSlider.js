import React from 'react';
import GreenSlider from './GreenSlider';

const TITLE = 'Pressure [hPa]';
const MIN_PRESSURE = 970;
const MAX_PRESSURE = 1030;

const PressureSlider = props =>
  <GreenSlider
  	{...props}
    title={TITLE}
    defaultValue={MIN_PRESSURE}
    aria-labelledby="discrete-slider-custom"
    step={1}
    valueLabelDisplay="auto"
    min={MIN_PRESSURE}
    max={MAX_PRESSURE}
  />;

export default PressureSlider;