/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */

import React from 'react';

export const CurrentWeatherCard = ({ weather, temperature }) => {
  return (
    <div className="grid grid-rows-1 gap-4">
      <div className="justify-self-center self-center ml-9 sm:pt-4">
        <div className="sm: grid grid-row-span-3 mt-2">
          <h1 className="text-xl md:text-3xl text-center">
            {weather.description}
          </h1>
          <div className="justify-self-center grid-rows-2 sm:pt-4">
            <img src={'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'} alt="weather icon" />
          </div>
          <h2 className="whitespace-nowrap text-center text-3xl md:text-4xl">{Math.round(temperature.temp)} °C</h2>
        </div>
        <br />
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

export const AirPollutionCard = ({ airIndice }) => {
  return (
    <div className="sm: grid grid-row-span-3 mt-2">
      <h1 className="text-6xl md:text-7xl">
        {airIndice.main.aqi}
        <span className="text-xl">
        / 5
        </span>
      </h1>
    </div>
  );
};

export const AirPollutionCompositionCard = ({ AirComposition }) => {
  return(
    <div className="grid-rows-2 sm:pt-9">
      <h1 className="pt-3">
        AIR QUALITY
        <br />
        <span>Index(A.Q.I)</span>
      </h1>
      <div>
        <p className="pt-7 col-span-2">
          Carbon monoxyde:
          <span className="pl-5">
            {AirComposition.components.co}
          </span>
        </p>
        <p className="pt-5 col-span-2">
          Fines particules:
          <span className="pl-5">
            {AirComposition.components.pm2_5}
          </span>
        </p>
      </div>
    </div>
  );
};
