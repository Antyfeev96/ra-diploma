import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderSection, {Section} from '../HeaderSection/HeaderSection'

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
    <Router>
      <ul className="navbar-nav mr-auto">
        {CATEGORIES.map((section, index) => <HeaderSection key={index} title={section.title} link={section.link}/>)}
      </ul>
    </Router>
  );
}

export default HeaderSections;