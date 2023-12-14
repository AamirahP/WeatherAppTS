import SearchBar from "./Components/SearchBar";
import WeatherImage from "./Components/WeatherImage";
import WeatherData from "./Components/WeatherData";
import Wind from "./Components/Wind";
import Humidity from "./Components/Humidity";
import { WiDaySunny } from "react-icons/wi";
import { useState } from "react";
import "./App.css";
import axios from "axios";

/* interface Props {
  search: () => void;
} */

function App() {
  const [Wicon, setWicon] = useState(<WiDaySunny />);
  const [weatherData, setWeatherData] = useState({});

  const api_key = "5e0d79d511e1ab5f09cd6435c9e76dcb";
  const search = () => {
    App.get('/api/weather', async (req: { query: { city: any; }; }, res: any) => {
      const { city } = req.query;
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
          params: {
            q: city,
            units: 'metric',
            appid: api_key,
          },
        });
      })
      .then((res) => console.log(res));
  };

  return (
    <div className="Container">
      <SearchBar search={search} />
      <div className="weather-image">
        <WeatherImage setWicon={setWicon} weatherData={weatherData} />
      </div>
      <WeatherData />
      <div className="elements">
        <Wind />
        <Humidity />
      </div>
    </div>
  );
}

export default App;
