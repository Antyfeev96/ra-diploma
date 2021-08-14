import header_logo from '../../../img/header-logo.png'
import React from "react";

function HeaderLogo() {
  return (
    <a className="navbar-brand" href="/">
      <img src={header_logo} alt="Bosa Noga" />
    </a>
  );
}

export default HeaderLogo;