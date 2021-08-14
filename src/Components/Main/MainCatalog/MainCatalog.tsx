import React from 'react';
import CatalogNavbar from "./CatalogNavbar/CatalogNavbar";

function MainCatalog() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogNavbar/>
    </section>
  );
}

export default MainCatalog;