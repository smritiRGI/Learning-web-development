import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const API_KEY_LOCATION = "269381ee8d2e4daa91d0a98e49a82250";
const API_KEY_WEATHER = "292b85741527662de50310552f1d5d52";

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
           let request = axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=${API_KEY_LOCATION}`);
           request.then(response => setLocation(response.data.results[0].components.state_district))
          })
      }
    }
    getLocation();
  },[]);

  useEffect (()=>{
   async function getTemperature(){
      if(latitude && longitude){
      const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_WEATHER}`);
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
        <div className="temperature">{temperature}</div>
      </div>
    </React.StrictMode>
   
  );
}

export default App;
