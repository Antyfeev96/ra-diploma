import React from 'react';
import HeaderSection, {Section} from '../HeaderSection/HeaderSection'

const CATEGORIES: Section[] = [
  {
    title: 'Главная',
    link: '/'
  },
  {
    title: 'Каталог',
    link: '/catalog'
  },
  {
    title: 'О магазине',
    link: '/about'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  },
  {
    title: '404',
    link: '/404'
  }
]

function HeaderSections() {
  return (
    <ul className="navbar-nav mr-auto">
      {CATEGORIES.map((section, index) => <HeaderSection key={index} title={section.title} link={section.link}/>)}
    </ul>
  );
}

export default HeaderSections;