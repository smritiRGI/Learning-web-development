import React from 'react';

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

function Weather({weatherData}) {
  return (
       <div className='weather_details'>
              <div className='weather_day'>
                <div><b>{getDayOfWeek(new Date())}, {getMonth(new Date())} {new Date().getDate()}, {new Date().getFullYear()}</b></div>
                <div><b>{weatherData.weather[0].main.toString()}</b></div>
              </div>
              <div className='weather_humidity_temperature'>
                <div>Temperature: {toCelsius(weatherData.main.temp.toString())} &deg;C</div>
                <div>Humidity: {weatherData.main.humidity}%</div>
              </div>
              <div className='weather_sunrise_sunset'>
                <div>Sunrise : {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</div>
                <div>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</div>
              </div>
       </div>
  )
}

export default Weather;