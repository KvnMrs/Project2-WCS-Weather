/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import supabase from '../../services/supabaseClient';
import {
  WeatherCard,
  TemperatureCard,
  Forecast,
} from './DashboardCard';

function DashMeteo() {
  /**
  * get user Id from context
  */
  const user = supabase.auth.user();
  const id = user.id;

  /**
   * Definition useState
   */
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState('');
  const [forecastWeather, setForecastWeather] = useState('');
  const [forecastWeather2, setForecastWeather2] = useState('');
  const [forecastWeather3, setForecastWeather3] = useState('');
  const [forecastTemp, setForecastTemp] = useState('');
  const [forecastTemp2, setForecastTemp2] = useState('');
  const [forecastTemp3, setForecastTemp3] = useState('');
  const [forecastDay, setForecastDay] = useState('');
  const [forecastDay2, setForecastDay2] = useState('');
  const [forecastDay3, setForecastDay3] = useState('');
  const [lat, setLat] = useState(2);
  const [long, setLong] = useState(0);
  let campusCoordonates = [];
  /* Appel API */
  useEffect(() => {
    /**
     * Call API onecall of openweathermap -> get weather data
     */
    axios
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
        setWeather(data.current.weather[0]);
        setTemperature(data.current);
        setForecastWeather(data.daily[0].weather[0]);
        setForecastWeather2(data.daily[1].weather[0]);
        setForecastWeather3(data.daily[2].weather[0]);
        setForecastTemp(data.daily[0].temp);
        setForecastTemp2(data.daily[1].temp);
        setForecastTemp3(data.daily[2].temp);
        setForecastDay(data.daily[0]);
        setForecastDay2(data.daily[1]);
        setForecastDay3(data.daily[2]);
      });
  }, []);
  /**
   * Recupération de supabase de la latitude & la longitude
   * du campus choisi lors du sign up
   */
  async function fetchCampus() {
    const { data: user_campus, error } = await supabase
      .from('user_campus')
      .select('latitude , longitude')
      .eq('user_id', id);

    if (error) {
      console.log(error);
      return console.log('error');
    }
    return user_campus;
  }

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
            <div className="grid grid-cols-3 gap-4">
              <WeatherCard element={weather} />
              <TemperatureCard element={temperature} />
              {/**
              * Weather forecast 3days
              */}
              <div />
              <Forecast day={forecastDay} weather={forecastWeather} temperature={forecastTemp} />
              <Forecast day={forecastDay2} weather={forecastWeather2} temperature={forecastTemp2} />
              <Forecast day={forecastDay3} weather={forecastWeather3} temperature={forecastTemp3} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashMeteo;
