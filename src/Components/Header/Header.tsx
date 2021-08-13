import React, { Fragment } from 'react';
import styled from 'styled-components';
import header_logo from '../../img/header-logo.png'

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
`

function Header() {
  return (
    <Fragment>
      <StyledHeader className="container">
        <a className="navbar-brand" href="/">
          <img src={header_logo} alt="Bosa Noga"/>
        </a>
      </StyledHeader>
    </Fragment>
  );
}

export default Header;