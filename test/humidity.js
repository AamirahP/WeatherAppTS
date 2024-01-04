/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Humidity from '../src/Components/Humidity';

test('renders humidity component with correct props', () => {
  const humidityValue = 50;
  render(<Humidity humidity={humidityValue} />);

  const humidityElement = screen.getByText(`${humidityValue}%`);
  expect(humidityElement).toBeInTheDocument();
});
