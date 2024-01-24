import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity= "Johannesburg"/>
<footer>
          This Project was code by{" "}
          <a href="" target="_blank">
            TP Raphulu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TpRaphulu/react-weather-app"
            target="_blank"
          >
            Open-Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


