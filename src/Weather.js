import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "be81f193e065bf5feb2d944c7336968b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="body">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="overview">
          <h1 className="citycss">{weatherData.city}</h1>
          <h2>
            <FormattedDate date={weatherData.date} />
          </h2>
          <ul className="nonstyle">
            <li> city :{weatherData.city}</li>
            <li> status : {weatherData.description}</li>
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
                  <a href="/">??C</a> | <a href="/">??F</a>
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
  } else {
    search();
    return <p>Loading...</p>;
  }
}
