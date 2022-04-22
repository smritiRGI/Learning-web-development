import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

function getMonth(date) {
  const dayOfMonth = new Date(date).getMonth();    
  return isNaN(dayOfMonth) ? null : 
    ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September',
    'October','November','December'][dayOfMonth];
}

function toCelsius(temp){
  let celsius = Math.round((Number(temp)-32) / 1.8);
  return celsius.toString();
}

function App() {
  const[index , setIndex] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
    async function getWeatherData() {
      if (window.navigator.geolocation) {
        // returns latitude & longitude
        navigator.geolocation.getCurrentPosition((position) => {
          axios.get(`${process.env.REACT_APP_WEATHER_URL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY_WEATHER}`)
            .then((response) => {
              setData(response.data)
              console.log(response.data)
            })
        })
      }
    }
    getWeatherData();


  }, []);



  return (
    // to get warnings if your code does not follow React best practices.
    <React.StrictMode>
      <div className="App">
        <div className='nav'><b>{data?.name}</b></div>
        <div className='weather_details'>
          <div className='weather_day'>
            <div><b>{getDayOfWeek(new Date())}, {getMonth(new Date())} {new Date().getDate()}, {new Date().getFullYear()}</b></div>
            <div><b>{data?.weather[0].main}</b></div>
          </div>
          <div className='weather_humidity_temperature'>
            <div>Temperature: {toCelsius(data?.main.temp.toString())} &deg;C</div>
            <div>Humidity: {data?.main.humidity}%</div>
          </div>
          <div className='weather_sunrise_sunset'>
            <div>Sunrise : {new Date(data?.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
            <div>Sunset: {new Date(data?.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
          </div>
        </div>
       </div>
    </React.StrictMode>

  );
}

export default App;
