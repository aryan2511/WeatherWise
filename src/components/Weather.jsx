import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import { WiDegrees, WiCelsius, WiThermometer } from "react-icons/wi";
import search_icon from "../assets/search.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);

  const search = async (city) => {
    try {
      // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      if (!response.ok) {
        // Handle non-200 HTTP responses (e.g., 404, 500)
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        feelsLike: Math.floor(data.main.feels_like),
        currentWeather: data.weather[0].description,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search("japan");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="search" />
        <img
          src={search_icon}
          alt="s"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <img src={weatherData.icon} alt="s" className="weather-icon" />
      <p className="curweather">{weatherData.currentWeather}</p>

      <p className="location">{weatherData.location}</p>
      <p className="temp">{weatherData.temperature}°</p>

      {/* below this i have the icons for different stuff */}
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="s" />
          <p> {weatherData.humidity} %</p>
          <span> Humidity </span>
        </div>
        <div className="col">
          <img src={wind_icon} alt="s" />
          <p> {weatherData.windSpeed}</p>
          <span> Wind Speed </span>
        </div>
        <div className="col">
          <WiThermometer size={40} />
          <p> {weatherData.feelsLike}</p>
          <span> Feels Like </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
