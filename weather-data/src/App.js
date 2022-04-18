import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './weather';
import cloudy from './cloudysky.jpg';
import haze from './haze.jpg';
import clear from './clear.jpg';
import rainfall from './rainfall.jpg';

const BACKGROUND_IMAGES = [
 cloudy , haze,clear,rainfall
]

function App() {
  const[index , setIndex] = useState(0);
  const [data, setData] = useState();

  useEffect(() => {
     const interval = setInterval(()=>setIndex((index+1)%4) , 3000)

     return() => clearInterval(interval);
     
  },[index])

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
      <div className="App" style ={{
        backgroundImage : `url(${BACKGROUND_IMAGES[index]})`
      }}>
       </div>
    </React.StrictMode>

  );
}

export default App;
