import React from 'react';
import CatalogNavbar from "./CatalogNavbar/CatalogNavbar";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import CatalogLoadButton from "./CatalogLoadButton/CatalogLoadButton";

type Props = {
  children?: JSX.Element
}

function MainCatalog({ children }: Props) {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {children}
      <CatalogNavbar/>
      <CatalogProducts/>
      <CatalogLoadButton/>
    </section>
  );
}

export default MainCatalog;