/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from '../src/App';
import fetchMock from 'jest-fetch-mock';

describe('WeatherApp component rendering', () => {
  it('renders WeatherApp components with data', () => {
    fetchMock.mockResponse(
      JSON.stringify({
        "coord": {"lon": -0.1257, "lat": 51.5085},
        "weather": [{"id": 502, "main": "Rain", "description": "heavy intensity rain", "icon": "10d"}],
        "base": "stations",
        "main": {"temp": 8.09, "feels_like": 5.86, "temp_min": 6.83, "temp_max": 8.96, "pressure": 997, "humidity": 88},
        "visibility": 10000,
        "wind": {"speed": 3.6, "deg": 100},
        "rain": {"1h": 5.1},
        "clouds": {"all": 75},
        "dt": 1704383477,
        "sys": {"type": 2, "id": 2075535, "country": "GB", "sunrise": 1704355543, "sunset": 1704384253},
        "timezone": 0,
        "id": 2643743,
        "name": "London",
        "cod": 200
      })
    );
    const { container } = render(<App />);

    const weatherImage = container.getElementsByClassName('.weather-image');
    const weatherTemp = container.getElementsByClassName('.weather-temp');
    const weatherLocation = container.getElementsByClassName('.weather-location');
    const humidityIcon = container.getElementsByClassName('.icon[src*="humidity"]');
    const windIcon = container.getElementsByClassName('.icon[src*="wind"]');

    expect(weatherImage).not.toBeNull();
    expect(weatherTemp).not.toBeNull();
    expect(weatherLocation).not.toBeNull();
    expect(humidityIcon).not.toBeNull();
    expect(windIcon).not.toBeNull();
  });
});
