import React from 'react';
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderMain from "./HeaderMain/HeaderMain";


function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <HeaderLogo/>
            <div className="collapse navbar-collapse" id="navbarMain">
              <HeaderMain/>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;