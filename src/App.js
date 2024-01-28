import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/graduates/77611-thabiso-paulinah-raphulu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thabiso Raphulu
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/TpRaphulu/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://charming-truffle-4fbaf7.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
