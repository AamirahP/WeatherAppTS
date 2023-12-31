import SearchBar from "./Components/SearchBar";
import WeatherImage from "./Components/WeatherImage";
import WeatherData from "./Components/WeatherData";
import Wind from "./Components/Wind";
import Humidity from "./Components/Humidity";
import { WiDaySunny } from "react-icons/wi";
import { useEffect, useState } from "react";
import "./App.css";
import apiClient from "./index.ts";

function App() {
  // const [Wicon, setWicon] = useState(<WiDaySunny />);
  const [weatherData] = useState({});

  const search = () => {
    const api_key = "5e0d79d511e1ab5f09cd6435c9e76dcb";
    apiClient
      .get(`/data/2.5/weather?q=london&appid=${api_key}`)
      .then((res) => console.log(res));
  };
  useEffect(() => {
    search(), [];
  });

  return (
    <div className="Container">
      <SearchBar search={search} />
      <div className="weather-image">
        <WeatherImage setWicon={WiDaySunny} weatherData={weatherData} />
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
