import request from 'supertest';
import axios from 'axios';

import app from '../backend/backend';

// Define mockWeatherData before using it
const mockWeatherData = {
  // Your mock weather data here
  main: {
    temp: 25,
    humidity: 80,
  },
  name: 'London',
  wind: {
    speed: 10,
  },
  weather: [
    {
      icon: '01d',
      description: 'clear sky',
    },
  ],
};

// Mock axios.get implementation
jest.mock('axios'); // Mock axios for unit testing
jest.spyOn(axios, 'get').mockResolvedValueOnce({ status: 200, data: mockWeatherData });

describe('Backend API Test', () => {
  it('should return weather data in JSON format', async () => {
    // Make a request to the backend endpoint
    const response = await request(app).get('/weather');

    // Assertion: Check if the fetched data matches the mocked weather data
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockWeatherData);
  });
});
