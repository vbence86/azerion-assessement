import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Temperature slider', () => {
  const { getByText } = render(<App />);
  const temperatureElm = getByText(/Temperature/i);
  expect(temperatureElm).toBeInTheDocument();
});

test('renders Pressure slider', () => {
  const { getByText } = render(<App />);
  const pressureElm = getByText(/Pressure/i);
  expect(pressureElm).toBeInTheDocument();
});
