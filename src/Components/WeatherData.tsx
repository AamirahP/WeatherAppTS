
const WeatherApp = () => {
  const [city, setcity] = useState('London');
  const [weatherData, setWeatherData] = useState('');

  const search = async () => {
    if (city ==="") {
      return;
    
      try { 
        const response = await fetch (`/api/weather?city=${city}`);
        if (response.status === 200) {
          const data = await response.json();
          setWeatherData(data);

        }
      }
    }
  }
}

const WeatherData = () => {
  return (
  
    <div> Temperature °C
    
      <div> Location </div>
    
    </div>
  )
}

export default WeatherData