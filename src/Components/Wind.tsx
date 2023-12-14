import { TiWeatherWindy } from "react-icons/ti";

const Wind = () => {
  return (
    <div className="element">
      <div className="wind-rate">km/h</div>
      <div className="text">Wind Speed</div>
      <TiWeatherWindy size="50" />
    </div>
  );
};

export default Wind;
