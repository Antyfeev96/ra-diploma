import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Header from './Components/Header/Header'
import './App.css';
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
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
