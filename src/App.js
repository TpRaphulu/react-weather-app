import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
<footer>
          This project was code by{" "}
          <a href="" target="_blank">
            Thabiso Raphulu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TpRaphulu/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


