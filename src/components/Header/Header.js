import React from "react";
import tomatillo from "../../images/tomatillo.png";
import circle2 from "../../images/circle2.png";
import "./Header.css";

function Header() {
  return (
    <header className='App-header'>
      <div className='App-logo'>
        <img src={tomatillo} alt='tomatillo'/>
        <img src={tomatillo} alt='tomatillo'/>
        <img src={tomatillo} alt='tomatillo'/>
        <h1> Rancid Tomatillos</h1>
      </div>
      <div className='circle'>
        <img src={circle2} alt='profile'></img>
      </div>
    </header>
  );
}

export default Header;
