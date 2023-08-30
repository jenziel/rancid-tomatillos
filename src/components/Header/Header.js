import React from "react";
import tomatillo from "../../images/tomatillo.png";
import circle2 from "../../images/circle2.png";
import "./Header.css";
import { NavLink, Routes, Route } from "react-router-dom";

function Header() {
  return (
    <header className='App-header'>
      <NavLink to='/' className='nav'>
        <div className='App-logo'>
          <img src={tomatillo} />
          <img src={tomatillo} />
          <img src={tomatillo} />
          <h1> Rancid Tomatillos</h1>
        </div>
      </NavLink>

      <div className='circle'>
        <img src={circle2} alt='profile'></img>
      </div>
    </header>
  );
}

export default Header;
