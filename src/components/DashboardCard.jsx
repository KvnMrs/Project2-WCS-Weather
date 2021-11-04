/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prefer-template */

import React from 'react';

export const DashboardCardMeteo = ({ element }) => {
  return (
    <div className="flex flex-row items-center">
      <img src={'https://openweathermap.org/img/wn/' + element.icon + '@2x.png'} alt="weather icon" />
    </div>
  );
};

export const DashboardCardTemperature = ({ element }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="text-3xl">{Math.round(element.temp)} °C</div>
    </div>
  );
};

export const DashboardCardPollution = ({ element }) => {
  return (
    <div>
      <ul>
        <li>
          {element.aqi} / 5
        </li>
      </ul>
    </div>
  );
};
