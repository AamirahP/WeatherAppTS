import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import path from 'path';

const app= express();
const api_key = '5e0d79d511e1ab5f09cd6435c9e76dcb';

app.use(cors());
app.use(express.json());

app.get('/weather', async (req: Request, res: Response) => {
  const { city } = req.query;

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        units: 'metric',
        appid: api_key,
      },
    });

    if (response.status === 200) {
      console.log('Weather data fetched successfully:', response.data);
      res.json(response.data);
    } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

// Serve the React frontend - assuming the frontend build folder is at the specified location
const frontendPath = path.join(__dirname, '../weather-app-frontend/build');
app.use(express.static(frontendPath));

// Handle the root URL
app.get('/', (_req: Request, res: Response) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
})

const port = process.env.PORT ?? 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


export default app;