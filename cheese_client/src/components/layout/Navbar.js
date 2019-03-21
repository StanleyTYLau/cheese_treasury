import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { connect } from 'react-redux'

const Navbar = () => {
  return(
    <nav className="nav-wrapper grey darken-2">
      <div className="container">
        <Link to='/' className="brand-logo">Cheese Treasury</Link>
        <LoggedInLinks />
        <LoggedOutLinks />
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Navbar);