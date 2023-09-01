import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div>
      <h1>`Error: something went wrong!`</h1>
      <NavLink to='/' className='nav'>
        <button>Return to Homepage</button>
      </NavLink>
    </div>
  );
}

export default Error;
