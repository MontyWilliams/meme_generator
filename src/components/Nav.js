import React from 'react';
import '../styles/nav_styles.css';
import logo from '../images/Logo.png';
import Clock from './Clock'



export default function Nav() {
  
  return(
    <div className="nav">
      <div className="nav_con">
        <div className="nav_con_L">
        <img src={logo} alt="" />
        <span>Meme Generator</span>
        </div>
        <div className="nav_con_R">
        <span>Rick & Morty!</span>
      <Clock />
        </div>
      </div>

    </div>
  )
}
