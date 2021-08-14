import React from 'react';

export interface ILink {
  href: string,
  text: string
}

function CatalogLink({href, text}: ILink) {
  return (
    <li className="nav-item">
      <a className="nav-link active" href={href}>{text}</a>
    </li>
  );
}

export default CatalogLink;