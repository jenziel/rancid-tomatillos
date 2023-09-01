import  { useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./ErrorComponent.css";
import setError from '../App/App'

function ErrorComponent(props) {
  console.log('error props', props)
  console.log('error props.message', props.message.message)

  const handleReset = () => {
      props.resetError()
      props.resetLoading()
    };
  
  return (
    <div className="error-msg">
      <h1>Woops!</h1>
      <h2>{props.message.message}</h2>    
      <NavLink to='/' className='nav'>
      <div onClick={handleReset}>
          <button>Return to Homepage</button>
      </div>
  
      </NavLink>
    </div>
  );
}

export default ErrorComponent;
