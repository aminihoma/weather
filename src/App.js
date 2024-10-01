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
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/homa-amini-ba327296"
            target="_blank"
            rel="noreferrer"
          >
            Homa Amini
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aminihoma/homework-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="#" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
