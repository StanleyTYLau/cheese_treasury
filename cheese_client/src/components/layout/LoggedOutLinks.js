import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to="/register">Sign Up</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>     
    </ul>
  )
}

export default LoggedOutLinks;