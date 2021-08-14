import React from 'react';
import MainBanner from "./MainBanner/MainBanner";
import MainTopSales from "./MainTopSales/MainTopSales";

function Main() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <MainBanner/>
          <MainTopSales/>
        </div>
      </div>
    </main>
  );
}

export default Main;