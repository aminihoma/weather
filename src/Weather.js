import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let apikey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUnits = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=${apiUnits}`;
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  axios.get(apiUrl).then(showTemperature);
  return (
    <h2>
      The weather in {props.city} is {temperature}
    </h2>
  );
}
