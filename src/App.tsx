import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './Components/Header/Header'
import './App.css';
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

import { getItems } from './AsyncActions/items'


function App() {
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItems)
  },[dispatch])

  return (
    <Router>
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
