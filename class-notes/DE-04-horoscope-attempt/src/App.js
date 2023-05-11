import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import horoscopeData from "./data"

import "./App.scss"

function App() {
  return (
    <div>
      <Header/>
      <Card data={horoscopeData}/>
    </div>
  );
}

export default App;
