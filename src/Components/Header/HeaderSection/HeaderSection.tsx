import React from 'react';
import {
  NavLink
} from "react-router-dom";

export type Section = {
  title: string,
  link: string
}

function HeaderSection({ title, link }: Section) {
  return (
    <li className="nav-item active">
      <NavLink className="nav-link" to={link}>{title}</NavLink>
    </li>
  );
}

export default HeaderSection;