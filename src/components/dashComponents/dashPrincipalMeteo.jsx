import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  CurrentWeatherCard,
  ForecastCard,
} from './DashboardCard';

function DashMeteo({ campus }) {
  /**
   * Definition useState
   */
  const [currentWeather, setcurrentWeather] = useState({ weather: [] });
  const [forecast, setForecast] = useState([]);

  /**
  * Call API onecall of openweathermap -> get weather data
  * lat & long call by prop campus text in base -> parseFloat to have number
  */
  const oneCallWeatherApi = async () => {
    await axios
      .get('https://api.openweathermap.org/data/2.5/onecall', {
        params: {
          lat: parseFloat(campus.latitude),
          lon: parseFloat(campus.longitude),
          exclude: 'hourly,minutely',
          appid: process.env.REACT_APP_AIR_WEATHER_KEY,
          units: 'metric',
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setcurrentWeather(data.current);
        setForecast(data.daily);
      });
  };

  useEffect(() => {
    oneCallWeatherApi();
  }, []);
  /**
 * Hook to render 3 forecastCard components for 3day weather forecast
 */
  const forecastDiv = () => {
    const forcastItem = [];
    if (forecast.length > 0) {
      for (let i = 0; i < 3; i += 1) {
        forcastItem.push(
          <ForecastCard
            key={[i]}
            day={forecast[i]}
            weather={forecast[i].weather[0]}
            temperature={forecast[i].temp}
          />,
        );
      }
    }
    return forcastItem;
  };

  return (
    <div className="rounded-lg bg-white h-full">
      <section>
        <div className="container flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 mb-5 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div>
              {currentWeather.weather.length > 0
                ? (
                  <CurrentWeatherCard
                    weather={currentWeather.weather[0]}
                    temperature={currentWeather}
                  />
                ) : ''}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {forecastDiv()}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashMeteo;
