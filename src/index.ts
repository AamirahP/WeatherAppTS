import express from 'express';
import axios from 'axios';
const app = express();
import cors from 'cors';  
app.use(cors());

const api_key = '5e0d79d511e1ab5f09cd6435c9e76dcb';

app.use(express.json());

app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: api_key,
      },
      headers: {
              'Accept': 'application/json',
            },
          });

          console.log(response);

          if (response.status === 200) {
            res.json(response.data);
          } else {
            res.status(500).json({ error: 'Failed to fetch weather data' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

// Serve the React frontend
declare const __dirname: string;

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});