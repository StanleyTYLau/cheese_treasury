import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const LoggedInLinks = (props) => {
  return(
    <ul className="right">
      <li><NavLink to="/cart">Cart</NavLink></li>
      <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">TT</NavLink></li>      
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks)