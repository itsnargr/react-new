import React from "react";
import "./styles.css";
export default function Form() {
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      <div className="container">
        <div className="weather-app">
          <form id="search-form">
            <input
              type="search"
              placeholder="City"
              autofocus="on"
              className="search-bar"
              id="input-city"
              autocomplete="off"
            />
            <input type="submit" value="Search" class="btn btn-secondary" />
          </form>
        </div>
      </div>
    </div>
  );
}
