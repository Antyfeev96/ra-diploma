import React from "react";
import {
  Link
} from "react-router-dom";
import header_logo from '../../../img/header-logo.png'

function HeaderLogo() {
  return (
    <Link to="/" className="navbar-brand">
      <img src={header_logo} alt="Bosa Noga" />
    </Link>
  );
}

export default HeaderLogo;