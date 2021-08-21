import React from 'react';

function FooterInformation() {
  return (
    <div className="col">
      <section>
        <h5>Информация</h5>
        <ul className="nav flex-column">
          <li className="nav-item"><a href="#" className="nav-link">О магазине</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Каталог</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Контакты</a></li>
        </ul>
      </section>
    </div>
  );
}

export default FooterInformation;