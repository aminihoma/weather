import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>
        <Weather city="Tehran" />
        <p>
          This project was coded by Homa Amini and is open-sourced on GitHub and
          hosted on Netlify
        </p>
      </header>
    </div>
  );
}

export default App;
