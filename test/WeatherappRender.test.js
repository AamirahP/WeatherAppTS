/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from '../src/App';

describe('WeatherApp component rendering', () => {
  it('renders WeatherApp components with data', () => {
    const { container } = render(<App />);

    const weatherImage = container.querySelector('.weather-image');
    const weatherTemp = container.querySelector('.weather-temp');
    const weatherLocation = container.querySelector('.weather-location');
    const humidityIcon = container.querySelector('.icon[src*="humidity"]');
    const windIcon = container.querySelector('.icon[src*="wind"]');

    expect(weatherImage).not.toBeNull();
    expect(weatherTemp).not.toBeNull();
    expect(weatherLocation).not.toBeNull();
    expect(humidityIcon).not.toBeNull();
    expect(windIcon).not.toBeNull();
  });
});
