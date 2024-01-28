import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      This project was coded by{" "}
      <a
        rel="noreferrer"
        href="https://magenta-khapse-6f3ded.netlify.app/"
        target="_blank"
      >
        Thabiso Raphulu
      </a>{" "}
      and is
      <a
        rel="noreferrer"
        href="https://github.com/TpRaphulu/react-weather-app"
        target="_blank"
      >
        {" "}
        open-sourced on GitHub
      </a>
    </div>
  );
}
