import React, { useState } from 'react';
import './nav.css';
import Settings from './Settings.js';
import {UserSettingContext} from './UserSettingContext.js';

function Nav({cityName}) {
  return ( 
          <div className='nav'>
                  <div className="city">{cityName}</div>
                  <Settings />
          </div>  
  )
}

export default Nav;