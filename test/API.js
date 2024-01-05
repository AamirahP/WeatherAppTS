const supertest = require('supertest');
const app = require('../backend/backend');

test('GET /weather should return weather data for a specific city', async () => {
  const cityName = 'London'; 
  const response = await supertest(app).get(`/weather?city=${cityName}`);

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('base', 'stations');
  expect(response.body).toHaveProperty('clouds', expect.objectContaining({ all: expect.any(Number) }));
  expect(response.body).toHaveProperty('weather');
  expect(response.body.weather.length).toBeGreaterThan(0);
  expect(response.body.weather[0]).toHaveProperty('id', expect.any(Number));
  expect(response.body.weather[0]).toHaveProperty('main', expect.any(String));
  expect(response.body.weather[0]).toHaveProperty('description', expect.any(String));
  expect(response.body.weather[0]).toHaveProperty('icon', expect.any(String));
  
});
