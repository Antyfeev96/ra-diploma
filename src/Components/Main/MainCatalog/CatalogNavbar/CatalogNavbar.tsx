import React from 'react';
import CatalogLink, { ILink } from "../CatalogLink/CatalogLink";

const LINKS: ILink[] = [
  {
    href: '#',
    text: 'Все'
  },
  {
    href: '#',
    text: 'Женская обувь'
  },
  {
    href: '#',
    text: 'Мужская обувь'
  },
  {
    href: '#',
    text: 'Обувь унисекс'
  },
  {
    href: '#',
    text: 'Детская обувь'
  }
]

function CatalogNavbar() {
  return (
    <ul className="catalog-categories nav justify-content-center">
      {LINKS.map((link, index) => <CatalogLink key={index} href={link.href} text={link.text}/>)}
    </ul>
  );
}

export default CatalogNavbar;