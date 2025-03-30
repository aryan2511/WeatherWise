import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import { WiDegrees, WiHumidity, WiThermometer } from "react-icons/wi";
import { CiCloudOn } from "react-icons/ci";
import { FaWind, FaSearchLocation } from "react-icons/fa";
import search_icon from "../assets/search.png";
import Swal from "sweetalert2";

const WeatherService = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(false);
  const [forecastData, setForecastData] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  const search = async (city) => {
    try {
      const currentWeatherfromApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const forecastWeatherfromApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(currentWeatherfromApi),
        fetch(forecastWeatherfromApi),
      ]);

      if (!currentResponse.ok || !forecastResponse.ok) {
        throw new Error(
          `HTTP error! status: ${currentResponse.status} or ${forecastResponse.status}`
        );
      }

      const current_data = await currentResponse.json();
      const forecast_data = await forecastResponse.json();

      // console.log(current_data);
      // console.log(forecast_data);
      // Fetch timezone offset
      const timezoneOffsetSeconds = current_data.timezone;
      const timezoneOffsetMilliseconds = timezoneOffsetSeconds * 1000;

      updateBackground(timezoneOffsetMilliseconds);

      setWeatherData({
        currDate: current_data.Date,
        humidity: current_data.main.humidity,
        windSpeed: current_data.wind.speed,
        temperature: Math.floor(current_data.main.temp),
        location: current_data.name,
        code: current_data.country,
        icon: `https://openweathermap.org/img/wn/${current_data.weather[0].icon}@2x.png`,
        feelsLike: Math.floor(current_data.main.feels_like),
        currentWeather: current_data.weather[0].description,
        clouds: current_data.clouds.all,
      });

      // Process forecast data
      if (
        forecast_data &&
        forecast_data.list &&
        forecast_data.list.length > 0
      ) {
        // Example: Get the forecast for the next 5 days (noon time)
        const dailyForecast = forecast_data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );

        setForecastData(dailyForecast); // Store daily forecast in state
      } else {
        setForecastData(null); // Or set to a default state
      }
    } catch (error) {
      Swal.fire({
        title: "PLEASE CHECK THE CITY NAME AND TRY AGAIN",
        text: error,
        icon: "warning",
      });
      setWeatherData(null);
      setForecastData(null);
    }
  };

  // useEffect(() => {
  //   search("");
  // }, [""]);

  useEffect(() => {
    // Clear input field on mount
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  const updateBackground = (timezoneOffsetMilliseconds) => {
    const now = new Date();
    const locationTime = new Date(now.getTime() + timezoneOffsetMilliseconds);
    const hour = locationTime.getHours();

    let bgStyle = {};

    if (hour >= 6 && hour < 12) {
      // Morning (6 AM - 12 PM)
      bgStyle = {
        backgroundImage: "linear-gradient(45deg, #87CEEB, #FDB833)", // Light blue gradient
      };
    } else if (hour >= 12 && hour < 18) {
      // Afternoon (12 PM - 6 PM)
      bgStyle = {
        backgroundImage: "linear-gradient(45deg, #FFA500, #FFD700)", // Orange/yellow gradient  #ff8c00, #ff4b2b  old -> #ff8c00, #ff4b2b
      };
    } else if (hour >= 18 && hour < 22) {
      // Evening (6 PM - 10 PM)
      bgStyle = {
        backgroundImage: "linear-gradient(45deg, #ff8c00, #ff4b2b)", // Dark purple gradient
      };
    } else {
      // Night (10 PM - 6 AM)
      bgStyle = {
        backgroundImage: "linear-gradient(45deg, #034B63, #4682B4)", // Dark blue gradient
      };
    }
    // console.log("Background Style:", bgStyle);

    setBackgroundStyle(bgStyle);
  };

  useEffect(() => {
    updateBackground(0); // 0 offset for local time
  }, []);

  return (
    <div className="weather" style={backgroundStyle}>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="SEARCH" />
        <img
          src={search_icon}
          alt="s"
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      <div className="weather-container">
        <div className="current-weather">
          {weatherData && (
            <>
              <img src={weatherData.icon} alt="s" className="weather-icon" />
              <p className="curweather">
                {weatherData.currentWeather.toUpperCase()}
              </p>
              <p className="location">{weatherData.location.toUpperCase()}</p>
              <p className="temp">{weatherData.temperature}°</p>
              <p className="date">{weatherData.currDate}</p>

              <div className="weather-data">
                <div className="col">
                  <WiHumidity size={40} />
                  <p> {weatherData.humidity} %</p>
                  <span> HUMIDITY </span>
                </div>
                <div className="col">
                  <FaWind size={40} />
                  <p> {weatherData.windSpeed} m/s</p>
                  <span> WIND SPEED </span>
                </div>
                <div className="col">
                  <WiThermometer size={40} />
                  <p> {weatherData.feelsLike}°C</p>
                  <span> FEELS LIKE </span>
                </div>
                <div className="col">
                  <CiCloudOn size={40} />
                  <p> {weatherData.clouds}%</p>
                  <span> CLOUDS </span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="forecast-data">
          {forecastData && (
            <>
              <h3>Weekly Forecast</h3>
              {forecastData.map((item, index) => (
                <div key={index} className="forecast-item">
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
                    <WiHumidity size={20} color="#fff" />
                    <p>{item.main.humidity}%</p>
                  </div>
                  <div className="wind-data">
                    <FaWind size={20} color="#fff" />
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
      </div>

      {!weatherData && <p>ENTER A CITY TO SEE THE WEATHER FORECAST.</p>}
    </div>
  );
};

export default WeatherService;
