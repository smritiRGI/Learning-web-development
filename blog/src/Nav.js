import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='nav'>
        <ul type="none" className="nav-list">
            <li className='nav-item'>
                <Link to="/home" >Home</Link>
            </li>
            <li className='nav-item'>
                <Link to="/articles" >Articles</Link>
            </li>
            <li className='nav-item'>
                <Link to="/about" >About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav;