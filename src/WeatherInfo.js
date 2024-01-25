import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
  <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearFix">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
           <div className="float-left">
          <span className="temperature">
          {Math.round(props.data.temperature)}  </span>
          <span className="unit"> °C </span>| °F
          </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: {weatherData.humidity}% </li>
          <li>Wind: {weatherData.wind} Km/h</li>
          </ul>
        </div>
      </div>
    </div>
    );
    }

