/**
* @jest-environment jsdom
*/

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from '../src/App';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
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
      }),
  })
);

test('renders weather data properly', async () => {
  const { getByText } = render(<App />);

  
  await waitFor(() => {
    
    expect(getByText('25')).toBeInTheDocument();
    expect(getByText('Humidity: 80%')).toBeInTheDocument();
    expect(getByText('Location: London')).toBeInTheDocument();
    expect(getByText('Wind Speed: 10 m/s')).toBeInTheDocument();
    
  });
});
