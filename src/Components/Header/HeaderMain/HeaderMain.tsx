import React from 'react';
import HeaderSections from "../HeaderSections/HeaderSections";
import HeaderPics from "../HeaderPics/HeaderPics";
import HeaderForm from "../HeaderForm/HeaderForm";

function HeaderMain() {
  return (
    <div className="collapse navbar-collapse" id="navbarMain">
      <HeaderSections/>
      <div>
        <HeaderPics/>
        <HeaderForm/>
      </div>
    </div>
  );
}

export default HeaderMain;