import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './weather';

function App() {
  const [latitude ,setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [location , setLocation] = useState('');
  const [temperature , setTemperature] = useState();

  useEffect (() => {
     async function getLocation(){
      if(window.navigator.geolocation){
        // returns latitude & longitude
         navigator.geolocation.getCurrentPosition((position)=>{
           setLatitude(position.coords.latitude);
           setLongitude(position.coords.longitude);
           let request = axios.get(`${process.env.REACT_APP_LOCATION_URL}?q=${position.coords.latitude}+${position.coords.longitude}&key=${process.env.REACT_APP_API_KEY_LOCATION}`);
           request.then(response => setLocation(response.data.results[0].components.state_district))
          })
      }
    }
    getLocation();
  },[]);

  useEffect (()=>{
   async function getTemperature(){
      if(latitude && longitude){
      const request = axios.get(`${process.env.REACT_APP_WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY_WEATHER}`);
      console.log((await request).data.main.temp);
      setTemperature((await request).data.main.temp);
    }
  }
   getTemperature();
  },[latitude,longitude])
  
  return (
    // to get warnings if your code does not follow React best practices.
    <React.StrictMode>
      <div className="App">
        <nav className="nav">{location}</nav>
        <Weather temperature={temperature} />
      </div> 
    </React.StrictMode>
   
  );
}

export default App;
