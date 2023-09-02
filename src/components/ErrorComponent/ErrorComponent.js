import { NavLink } from "react-router-dom";
import "./ErrorComponent.css";

function ErrorComponent(props) {
  const handleReset = () => {
      props.resetError()
      props.resetLoading()
    };

  return (
    <div className="error-msg">
      <h1>Woops!</h1>
      {!props.message ? (
         <h2>That Page Doesn't Exist.</h2>  
      ): (<h2>{props.message.message}</h2> )}
         
      <NavLink to='/' className='nav'>
      <div onClick={handleReset}>
          <button className="back-button2">Return to Homepage</button>
      </div>
      </NavLink>
    </div>
  );
}

export default ErrorComponent;
