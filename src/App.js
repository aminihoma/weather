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
      </header>
      <footer>
        {" "}
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/homa-amini-ba327296/"
          target="_blank"
          rel="noreferrer"
        >
          Homa Amini{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/aminihoma/weather"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
        and{" "}
        <a
          href="https://magical-faun-9e4bf8.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
