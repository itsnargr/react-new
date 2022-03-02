import React from "react";

import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      ></link>
      <Weather />
      <a href="https://github.com/itsnargr/react-new">github code</a>
    </div>
  );
}

export default App;
