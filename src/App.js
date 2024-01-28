import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This Project was coded by{" "}
          <a
            href="https://www.shecodes.io/hall-of-fame?q=Thabiso+Paulinah+Raphulu&commit=Search "
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
            Open-Sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/snazzy-caramel-b75eb2/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
