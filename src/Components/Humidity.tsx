import { WiHumidity } from "react-icons/wi";

const Humidity = () => {
  return (
    <div className="element">
      <div className="humidity-percent">%</div>
      <div className="text">Humidity</div>
      <WiHumidity size="50" />
    </div>
  );
};

export default Humidity;
