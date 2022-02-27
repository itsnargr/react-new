import React from "react";
import Form from "./Form";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    city: "tehran",
    temperature: "33 ",
    status: "windy",
    time: "tuesday",
    humidity: "70",
    wind: "55 km/h",
  };
  return (
    <div className="body">
      <Form />
      <div className="overview">
        <h1>Tehran</h1>
        <ul className="nonstyle">
          <li> city :{weatherData.city}</li>
          <li> status {weatherData.status}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny icon"
              className="float-left"
            />
            <div className="float-left">
              <strong> temperature : {weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="nonstyle">
            <li> humidity :{weatherData.humidity}</li>
            <li> wind :{weatherData.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
