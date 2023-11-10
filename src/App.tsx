import SearchBar from "./Components/SearchBar";
import WeatherImage from "./Components/WeatherImage";
import WeatherData from "./Components/WeatherData";
import Wind from "./Components/Wind";
import Humidity from "./Components/Humidity";
import { WiDaySunny } from "react-icons/wi";
import { useState } from "react";
import "./App.css";
import axios from "axios";

interface Props {
  search: () => void;
}

function App() {
  const [Wicon, setWicon] = useState(<WiDaySunny />);
  const [weatherData, setWeatherData] = useState({});

  const search = () => {
    axios
      .get("/api/weather", {
        params: {
          city: "London",
        },
      })
      .then((response) => {
        setWeatherData(response.data);
      });
  }

  return (
    <div className="Container">
      <SearchBar search={search} />
      <WeatherImage setWicon={setWicon} weatherData={weatherData} />
      <WeatherData />
      <Wind />
      <Humidity />
    </div>
  );
}

    return (
      <div className="Container">
        <SearchBar search={search} />
        <WeatherImage setWicon={WeatherImage} weatherData={weatherData} search={search}/>
        <WeatherData />
        <Wind />
        <Humidity />
      </div>
    );
      <><WeatherImage setWicon={WeatherImage} weatherData={WeatherData} search={search} /><WeatherData /><Wind /><Humidity /></>
    
  );
}

export default App;
