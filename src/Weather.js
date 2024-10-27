import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
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
      <h1>Johannesburg</h1>
      <ul>
        <li>Sunday 14:41</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_s_cloudy.png"
              alt="Cloudy"
              className="sky"
            />

            <span className="temperature">19</span>
            <span className="unit">℃|℉</span>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 24%</li>
            <li>Humidity: 48%</li>
            <li>WindSpeed: 37 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
