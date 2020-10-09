import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { fetchWeather } from "../services/fetchWeather";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (event) => {
    if (event.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  };

  return (
    <div className="container vertical-center">
      <div className="row col-12">
        <div className="col-6 offset-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyPress={search}
          />
        </div>
        {weather.main && (
          <div className="col-6 offset-3 mt-2 city">
            <div className="card">
              <div className="card-body  text-center">
                <h3 className="card-title city-name">
                  <span>{weather.name}</span>
                  <sup>{weather.sys.country}</sup>
                </h3>
                <div className="card-text">
                  <div className="city-temp">
                    {Math.round(weather.main.temp)}
                    <sup>&deg;C</sup>
                  </div>
                  <div className="info">
                    <img
                      className="city-icon"
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                    />
                    <p>{weather.weather[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
