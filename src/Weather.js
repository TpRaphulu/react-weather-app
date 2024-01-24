import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Johannesburg</h1>
      <ul>
        <li>Thursday 01:23</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearFix">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostlycloudy"
            className="float-left"
          />
           <div className="float-left">
          <span className="temperature"> 17 </span>
          <span className="unit"> °C </span>| °F
          </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 85%</li>
            <li>Wind: 8Km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
  }
