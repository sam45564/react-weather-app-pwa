import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { fetchWeather } from "../services/fetchWeather";

const App = () => {
  const [query, setQuery] = useState("");

  const search = async (event) => {
    if (event.key === "Enter") {
      const data = fetchWeather(query);
    }
  };

  return (
    <div className="container vertical-center">
      <div className="row">
        <div className="col-6 offset-4">
          <input type="text" className="form-control" placeholder="Enter City..." value={query} onChange={(event) => setQuery(event.target.value)} />

          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">{query}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
