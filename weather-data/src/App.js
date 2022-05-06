import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './nav.js';
import Weather from './Weather.js';
import { UserSettingContext } from './UserSettingContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function getWeatherData() {
      if (window.navigator.geolocation) {
        // returns latitude & longitude
        navigator.geolocation.getCurrentPosition((position) => {
          axios.get(`${process.env.REACT_APP_WEATHER_URL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_API_KEY_WEATHER}`)
            .then((response) => {
              setData(response.data)
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
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
         <UserSettingContext>
              <Nav cityName = {data?.name} />
              {data ? <Weather weatherData = {data} /> : <></>} 
          </UserSettingContext>
        </div>
    </React.StrictMode>

  );
}

export default App;
