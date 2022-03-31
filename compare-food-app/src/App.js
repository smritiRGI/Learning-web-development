import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = "269381ee8d2e4daa91d0a98e49a82250";
function App() {

  useEffect (() => {
     if(window.navigator.geolocation){
         navigator.geolocation.getCurrentPosition((position)=>{
           const {latitude , longitude} = position.coords;
           const request = axios.get(`https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${latitude}+${longitude}&pretty=1&no_annotations=1`);
           
          } 

         )
     }
     
  },[]);

  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
