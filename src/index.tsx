import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "./stylesheets/bootstrap-access-tool.css"
import "./stylesheets/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <App
      films={[]}
      locations={[]}
      filmTitle={""}
      filmDescription={""}
      filmProducer={""}
      filmReleaseDate={""}
      filmsLoaded={false}
      locationName={""}
      locationClimate={""}
      locationWaterTemp={""}
      locationTerrain={""}
      locationsLoaded={false}
      start={true}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
