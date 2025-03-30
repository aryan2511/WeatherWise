import React from "react";
import { WiThermometer, WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import "./Weather.css";

const Forecast = ({ forecastData }) => {
  if (!forecastData) {
    return <p>No forecast available.</p>;
  }
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="forecast-data">
      {forecastData && (
        <>
          <h3>Weekly Forecast</h3>
          {forecastData.map((item, index) => (
            <div key={index} className="forecast-item">
              <p className="day">{getDayName(item.dt_txt)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
                className="forecast-icon"
              />
              <div className="temp-data">
                <WiThermometer size={20} color="#fff" />
                <p>{Math.floor(item.main.temp)}°C</p>
              </div>
              <div className="humidity-data">
                <WiHumidity size={20} />
                <p>{item.main.humidity}%</p>
              </div>
              <div className="wind-data">
                <FaWind size={20} />
                <p>{item.wind.speed} m/s</p>
              </div>
              <p className="description">
                {item.weather[0].description.toUpperCase()}
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Forecast;
