import React from 'react';

export type Section = {
  title: string,
  link: string
}

function HeaderSection({ title, link }: Section) {
  return (
    <li className="nav-item active">
      <a className="nav-link" href={link}>{title}</a>
    </li>
  );
}

export default HeaderSection;