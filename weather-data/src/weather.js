import React from 'react';
import './weather.css';

function Weather({temperature}) {
  return (
    <div className='temp'>
        {temperature}
    </div>
  )
}

export default Weather;