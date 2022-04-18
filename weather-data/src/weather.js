import React from 'react';
import './weather.css';

function Weather(currentWeather) {
  return (
       <>
       {currentWeather.temp}
       </>
  )
}

export default Weather;