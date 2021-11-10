/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */

import React from 'react';

export const CurrentWeatherCard = ({ weather, temperature }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-1 gap-4">
      <div className="justify-self-center grid-rows-2 sm:pt-8">
        <h1 className="text-xl md:text-3xl text-center">
          {weather.description}
          <img src={'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'} alt="weather icon" />
          <br />
        </h1>
      </div>
      <div className="justify-self-center self-center ml-9 sm:pt-8">
        <div className="sm: grid grid-row-span-3 mt-2">
          <h2 className="text-3xl md:text-4xl">{Math.round(temperature.temp)} °C</h2>
        </div>
      </div>
    </div>
  );
};

export const ForecastCard = ({ day, weather, temperature }) => {
  return (
    <div className="grid grid-cols-1 px-7 justify-items-center text-center">
      <div className="h-auto pt-2 text-xl">
        <h2>
          {(new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }))}
        </h2>
      </div>
      <div className="justify-self-center grid-rows-2 sm:pt-6">
        <img src={'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'} alt="weather icon" />
      </div>
      <div>
        <h2 className="text-center">{Math.round(temperature.min) + '°C to ' + Math.round(temperature.max) + '°C'}</h2>
      </div>
    </div>
  );
};

export const AirPollutionCard = ({ element }) => {
  return (
    <div>
      {element.aqi} / 5
    </div>
  );
};
