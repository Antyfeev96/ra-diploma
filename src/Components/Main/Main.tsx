import React from 'react';
import { Route, Switch } from "react-router-dom";
import MainBanner from "./MainBanner/MainBanner";
import MainTopSales from "./MainTopSales/MainTopSales";
import MainCatalog from "./MainCatalog/MainCatalog";
import CatalogInput from "./MainCatalog/CatalogInput/CatalogInput";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import NotFound from "./NotFound/NotFound";

function Main() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <MainBanner/>
          <Switch>
            <Route exact path="/">
              <MainTopSales/>
              <MainCatalog/>
            </Route>
            <Route path="/catalog">
              <MainCatalog>
                <CatalogInput/>
              </MainCatalog>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/contacts">
              <Contacts/>
            </Route>
            <Route path="/404">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </main>
  );
}

export default Main;