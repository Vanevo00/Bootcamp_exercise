import React from 'react';
// import { BrowserRouter as Router, Link } from "react-router-dom";


 const Nav = (props) => {
    const bruceClick = () => {
      props.setActor('22616');
    } 

    const salmaClick = () => {
      props.setActor('19302');
    } 
  
    return (
          <>
            <button type="button" className="btn btn-primary" onClick={bruceClick}>Bruce Willis</button>
            <button type="button" className="btn btn-primary" onClick={salmaClick}>Salma Hayek</button>
          </>
        )
}

export default Nav