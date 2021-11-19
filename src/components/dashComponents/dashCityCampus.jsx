import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ForecastCard,
  AirPollutionCard,
  AirPollutionCompositionCard,
  AirPollutionIconCard,
} from './DashboardCard';

function DashCity({ campus }) {
  /**
   * Definition useState
   */
  const [forecast, setForecast] = useState([]);
  const [pollution, setPollution] = useState([]);
  const [bgColor, setBgColor] = useState('');

  /**
   * Call API onecall of openweathermap -> get weather data
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
        setForecast(data.daily);
      });
  };
  const airPollutionApi = async () => {
    await axios
      .get('https://api.openweathermap.org/data/2.5/air_pollution', {
        params: {
          lat: parseFloat(campus.latitude),
          lon: parseFloat(campus.longitude),
          appid: process.env.REACT_APP_AIR_WEATHER_KEY,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setPollution(data.list);
        if (pollution.length > 0) {
          if (pollution[0].main.aqi < 2) {
            setBgColor('bg-green-50');
          }
          if (pollution[0].main.aqi > 3) {
            setBgColor('bg-red-50');
          }
          if (pollution[0].main.aqi > 1 && pollution[0].main.aqi < 4) {
            setBgColor('bg-yellow-50');
          }
        }
      });
  };
  useEffect(async () => {
    await oneCallWeatherApi();
    await airPollutionApi();
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
    <div className="rounded-lg bg-gray-50 h-100 mb-5 h-400 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="bg-white rounded-lg grid-rows lg:grid grid-cols-9">
        <div className="m-8 pt-8">
          {/** ALL CITY CAMPUS */}
          <h1 className="items-center grid justify-items-center lg:text-start text-2xl">
            {campus !== undefined
              ? (
                campus.name
              ) : ''}
            <br />
            <span className="text-sm">
              {campus !== undefined ? campus.country : ''}
            </span>
          </h1>
        </div>
        <div />
        <div
          className={`${bgColor} h-full  grid-cols-4 xl:grid-cols-6 grid col-span-4 content-center`}
        >
          <div className="self-center">
            {/** INDEX */}
            {pollution.length > 0 ? (
              <AirPollutionCard airIndice={pollution[0].main} />
            ) : (
              ''
            )}
          </div>
          <div className="mt-4 mr-3 pr-4 col-span-2 lg:col-span-2">
            {/** EMOJI ABOUT AQI */}
            {pollution.length > 0 ? (
              <AirPollutionIconCard airIndice={pollution[0].main} />
            ) : (
              ''
            )}
          </div>
          {/** INFOS ABOUT AIR QUALITY */}
          <ul className="grid col-span-3 text-xs lg:text-sm">
            {pollution.length > 0 ? (
              <AirPollutionCompositionCard
                airComposition={pollution[0].components}
              />
            ) : (
              ''
            )}
          </ul>
        </div>
        {/** WEATHER ON 3 DAYS */}
        <div className="grid grid-cols-3 py-2 text-sm lg:col-span-3">
          {forecastDiv()}
        </div>
      </div>
    </div>
  );
}

export default DashCity;
