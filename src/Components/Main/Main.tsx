import React from 'react';
import MainBanner from "./MainBanner/MainBanner";
import MainTopSales from "./MainTopSales/MainTopSales";
import MainCatalog from "./MainCatalog/MainCatalog";

function Main() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <MainBanner/>
          <MainTopSales/>
          <MainCatalog/>
        </div>
      </div>
    </main>
  );
}

export default Main;