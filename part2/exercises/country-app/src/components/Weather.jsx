import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ countryCapital }) => {
  const [weather, setWeather] = useState(null);
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    if (countryCapital) {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryCapital}&appid=${api_key}&units=metric`;

      axios
        .get(weatherUrl)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.log("Weather error:", error);
          setWeather(null);
        });
    }
  }, [countryCapital, api_key]);

  return (
    <div>
      <h3>Weather in {countryCapital}</h3>
      {weather ? (
        <div>
          <div>Temperature: {weather.main.temp}°C</div>
          <div>Wind: {weather.wind.speed} km/h</div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={`${weather.weather[0].description} icon`}
          />
        </div>
      ) : (
        <div>Loading weather...</div>
      )}
    </div>
  );
};

export default Weather;
