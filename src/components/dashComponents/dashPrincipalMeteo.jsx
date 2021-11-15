/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import supabase from '../../services/supabaseClient';
import {
  CurrentWeatherCard,
  ForecastCard,
} from './DashboardCard';

const DashMeteo = () => {
  /**
  * get user Id from context
  */
  const user = supabase.auth.user();
  const id = user.id;

  /**
   * Definition useState
   */
  const [currentWeather, setcurrentWeather] = useState({ weather: [] });
  const [forecast, setForecast] = useState([]);
  const [lat, setLat] = useState(2);
  const [long, setLong] = useState(0);
  let campusCoordonates = [];

  /**
  * Call API onecall of openweathermap -> get weather data
  */
  const oneCallWeatherApi = async () => {
    await axios
      .get('http://api.openweathermap.org/data/2.5/onecall', {
        params: {
          lat: lat,
          lon: long,
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
      for (let i = 0; i < 3; i++) {
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

  /**
   * Recupération de supabase de la latitude & la longitude
   * du campus choisi lors du sign up
   */
  const fetchCampus = async () => {
    const { data: user_campus, error } = await supabase
      .from('user_campus')
      .select('latitude , longitude')
      .eq('user_id', id);

    if (error) {
      console.log(error);
      return console.log('error');
    }
    return user_campus;
  };
  useEffect(async () => {
    const getCampus = await fetchCampus();
    campusCoordonates = getCampus;
    setLat(campusCoordonates[0].latitude);
    setLong(campusCoordonates[0].longitude);
  }, []);

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
};

export default DashMeteo;
