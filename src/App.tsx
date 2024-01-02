import { useEffect, useState } from "react";
import "./App.css";
import apiClient from "./index.ts";
import SearchBar from "./Components/SearchBar";
// import WeatherImage from "./Components/WeatherImage";
import WeatherData from "./Components/WeatherData";
import Wind from "./Components/Wind";
import Humidity from "./Components/Humidity";
import WeatherImage from "./Components/WeatherImage.tsx";
// import { WiDaySunny } from "react-icons/wi";

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  wind: {
    speed: number;
  };
  weather: {
    icon: string;
    description: string;
  }[];
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState("London");

  const search = (searchCity?: string) => {
    const api_key = "5e0d79d511e1ab5f09cd6435c9e76dcb";
    const queryCity = searchCity || city;

    apiClient
      .get(`/data/2.5/weather?q=${queryCity}&appid=${api_key}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setWeatherData(res.data);
        console.log("Weather Data State:", weatherData);
      })
      .catch((err) => console.error("Error fetching data: ", err));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="Container">
      <SearchBar
        search={(searchCity?: string) => search(searchCity)}
        city={city}
        setCity={setCity}
      />

      {weatherData && weatherData.main && weatherData.wind && (
        <>
          <WeatherData
            temperature={Math.round(weatherData.main.temp)}
            location={weatherData.name}
          />

          <div className="weather-image">
            <WeatherImage iconCode={weatherData?.weather[0].icon} />
          </div>

          <div className="elements">
            <Wind windSpeed={weatherData.wind.speed} />
            <Humidity humidity={weatherData.main.humidity} />
          </div>
        </>
      )}
    </div>
  );
}
export default App;
