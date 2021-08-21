import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export type Section = {
  title: string,
  link: string
}

function HeaderSection({ title, link }: Section) {
  return (
    <li className="nav-item active">
      <Link className="nav-link" to={link}>{title}</Link>
    </li>
  );
}

export default HeaderSection;