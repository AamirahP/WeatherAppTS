import { useState } from "react";
import { WiCloud } from "react-icons/wi";

const WeatherApp = () => {
  const [city, setcity] = useState("London");
  const [weatherData, setWeatherData] = useState({});
  const [Wicon, setWicon] = useState(<WiCloud />);

  const search = async () => {
    if (city === "") {
      return;
    }
    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        alert("Location not found or invalid input.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occured while fetching data");
    }
  };
};

const WeatherData = () => {
  return (
    <>
      <div className="weatherTemp">Temperature °C</div>
      <div className="weatherLocation"> Location </div>{" "}
    </>
  );
};

export default WeatherData;
