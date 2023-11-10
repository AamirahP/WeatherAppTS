import axios from "axios";
import { useEffect } from "react";
import {
  WiCloudy,
  WiDaySprinkle,
  WiDayRain,
  WiSnow,
  WiDaySunny,
} from "react-icons/wi";

interface Props {
  setWicon: any;
  weatherData: {
    main?: {
      temp?: number;
    };
    weather?: {
      icon: string;
    }[];
  };
}

const WeatherImage = ({ setWicon, weatherData }: Props) => {
  if (weatherData && weatherData.main && weatherData.main.temp !== undefined) {
    switch (weatherData?.weather && weatherData.weather[0].icon) {
      case "01":
      case "01n":
        break;
      case "02d":
      case "012n":
        setWicon(<WiCloudy />);
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setWicon(<WiDaySprinkle />);
        break;
      case "09d":
      case "09n":
        setWicon(<WiDayRain />);
        break;
      case "13d":
      case "13n":
        setWicon(<WiSnow />);
        break;
      default:
        setWicon(<WiDaySunny />);
        break;
    }
  }
  return null;
};

useEffect(() => {
  updateWIcon();
}, [setWeatherData]);

useEffect(() => {
  // Fetch data for the default city when the component mounts
  search();
}, []);

export default WeatherImage;

function setWeatherData(data: any) {
  throw new Error("Function not implemented.");
}

function updateWIcon() {
  throw new Error("Function not implemented.");
}
