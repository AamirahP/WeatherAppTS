import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import WeatherData from "./Components/WeatherData";
import Wind from "./Components/Wind";
import Humidity from "./Components/Humidity";
import WeatherImage from "./Components/WeatherImage.tsx";
import WeatherDescription from "./Components/WeatherDescription.tsx";

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

  const search = async (searchCity?: string) => {
    try {
      const response = await fetch(
        `http://localhost:3001/weather?city=${searchCity ?? city}`
      );

      const data = await response.json();
      console.log("Response from backend:", data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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

          <div className="description">
            <WeatherDescription
              description={weatherData.weather[0].description}
            />
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
