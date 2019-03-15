import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInLinks = () => {
  return(
    <ul className="right">
      <li><NavLink to="/cart">Cart</NavLink></li>
      <li><NavLink to="/">Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">TEST</NavLink></li>      
    </ul>
  )
}

export default LoggedInLinks;