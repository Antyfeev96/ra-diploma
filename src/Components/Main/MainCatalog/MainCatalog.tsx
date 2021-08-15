import React, {useRef} from 'react';
import CatalogNavbar from "./CatalogNavbar/CatalogNavbar";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogLoadButton from "./CatalogLoadButton/CatalogLoadButton";

function MainCatalog() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <CatalogNavbar/>
      <CatalogProducts/>
      <CatalogLoadButton/>
    </section>
  );
}

export default MainCatalog;