import SearchBar from './Components/SearchBar'
import WeatherImage from './Components/WeatherImage'
import WeatherData from './Components/WeatherData'
import Wind from './Components/Wind'
import Humidity from './Components/Humidity'
import './App.css';


function App() {
  
  return (
    <div className='Container'> 
    <SearchBar/> 
    <WeatherImage/> 
    <WeatherData /> 
    <Wind/> 
    <Humidity />
    </div>
  )
}

export default App
