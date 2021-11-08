import React from 'react';

export const DashboardCardMeteo = ({ element }) => (
  <div className="flex flex-row items-center">
    <img src={`https://openweathermap.org/img/wn/${element.icon}@2x.png`} alt="weather icon" />
  </div>
);

export const DashboardCardTemperature = ({ element }) => (
  <div className="flex flex-row items-center">
    <div className="text-3xl">
      {Math.round(element.temp)}
      {' '}
      °C
    </div>
  </div>
);

export const DashboardCardPollution = ({ element }) => (
  <div>
    <ul>
      <li>
        {element.aqi}
        {' '}
        / 5
      </li>
    </ul>
  </div>
);
