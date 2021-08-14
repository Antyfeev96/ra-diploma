import React from 'react';
import CatalogLink, { ILink } from "../CatalogLink/CatalogLink";

const LINKS: ILink[] = [
  {
    href: '#',
    text: 'Все'
  },
  {
    href: '#',
    text: 'Женская обусь'
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
      {LINKS.map(link => <CatalogLink href={link.href} text={link.text}/>)}
    </ul>
  );
}

export default CatalogNavbar;