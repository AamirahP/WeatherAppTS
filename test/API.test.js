/**
* @jest-environment jsdom
*/

const getWeatherData = require('../backend/backend')
const axios = require('axios');
const { default: App } = require('../src/App');

jest.mock('axios');

it('returns the weather data of an inputted city', async () =>{
  axios.get.mockResolvedValue({
    main: {
      temp: '25',
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
  })
});

const name = await App();
expect(name).toEqual('London')
