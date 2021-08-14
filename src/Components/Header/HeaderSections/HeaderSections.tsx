import React from 'react';
import HeaderSection, { Section } from '../HeaderSection/HeaderSection'

const CATEGORIES: Section[] = [
  {
    title: 'Главная',
    link: '/'
  },
  {
    title: 'Каталог',
    link: '/'
  },
  {
    title: 'О магазине',
    link: '/'
  },
  {
    title: 'Контакты',
    link: '/'
  }
]

function HeaderSections() {
  return (
    <ul className="navbar-nav mr-auto">
      {CATEGORIES.map(section => <HeaderSection title={section.title} link={section.link}/>)}
    </ul>
  );
}

export default HeaderSections;