import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { connect } from 'react-redux'

const Navbar = (props) => {
  const links = props.auth.uid ? <LoggedInLinks /> : <LoggedOutLinks />

  return(
    <nav className="nav-wrapper grey darken-2">
      <div className="container">
        <Link to='/' className="brand-logo">Cheese Treasury</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);