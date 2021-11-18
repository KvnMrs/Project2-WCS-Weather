import React from 'react';
import Smile from '../icones/smile';
import Sad from '../icones/sad';
import Neutral from '../icones/neutral';

/**
 * display current weather card -> description, icon & temperature
 * @param {object} param0
 * @returns
 */
export function CurrentWeatherCard({ weather, temperature }) {
  return (
    <div className="grid grid-rows-1 gap-4">
      <div className="justify-self-center self-center ml-9 sm:pt-4">
        <div className="sm: grid grid-row-span-3 mt-2">
          <h1 className="text-xl md:text-3xl text-center">
            {weather.description}
          </h1>
          <div className="justify-self-center grid-rows-2 sm:pt-4">
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt="weather icon"
            />
          </div>
          <h2 className="whitespace-nowrap text-center text-3xl md:text-4xl">
            {Math.round(temperature.temp)}
            °C
          </h2>
        </div>
        <br />
      </div>
    </div>
  );
}

/**
 * display forecast weather card -> short date, icon & gap temperature
 * @param {object} param0
 * @returns
 */
export function ForecastCard({ day, weather, temperature }) {
  return (
    <div className="grid grid-cols-1 px-7 justify-items-center text-center">
      <div className="h-auto pt-2 text-xl">
        <h2>
          {new Date(day.dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short',
          })}
        </h2>
      </div>
      <div className="justify-self-center grid-rows-2 h-28 w-24 sm:pt-6 md:pt-2">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="weather icon"
        />
      </div>
      <div>
        <h2 className="text-center">
          {
            `${Math.round(temperature.min)}°C to ${Math.round(temperature.max)}°C`
          }
        </h2>
      </div>
    </div>
  );
}

/**
 * display air pollution card -> indice pollution
 * @param {object} param0
 * @returns
 */
export function AirPollutionCard({ airIndice }) {
  return (
    <div className="sm: grid row-span-3 mt-2 md:row-span-2">
      <h1 className="text-6xl md:text-5xl">
        {parseFloat(airIndice.aqi)}
        <span className="text-xl">/ 5</span>
      </h1>
    </div>
  );
}

/**
 * display air composition card -> description, composition in ug/m3
 * @param {object} param0
 * @returns
 */
export function AirPollutionCompositionCard({ airComposition }) {
  return (
    <div className="grid-rows-2 sm:pt-9 md:pt-0">
      <h1 className="pt-3">
        AIR QUALITY
        <br />
        <span>Index(A.Q.I)</span>
      </h1>
      <div>
        <p className="pt-7 col-span-2">
          Carbon monoxyde:
          <span className="pl-5">
            {airComposition.co}
            μg/m3
          </span>
        </p>
        <p className="pt-5 col-span-2">
          Coarse particules:
          <span className="pl-5">
            {airComposition.pm10}
            μg/m3
          </span>
        </p>
      </div>
    </div>
  );
}

/**
 * display emoticon and text according to air pollution indice (aqi)
 * @param {object} param0
 * @returns
 */
export function AirPollutionIconCard({ airIndice }) {
  const icons = [];
  if (parseFloat(airIndice.aqi) < 2) {
    icons.push(
      <div className="grid grid-rows-1 px-7 md:px-12 lg:px-7 justify-items-center">
        <div className="h-auto self-center">
          <Smile key="good" />
        </div>
        <h1 className="sm:m-auto text-2xl md:text-2xl">GOOD</h1>
      </div>,
    );
  }
  if (parseFloat(airIndice.aqi) > 3) {
    icons.push(
      <div className="grid grid-rows-1 px-7 md:px-12 lg:px-7 justify-items-center">
        <div className="h-auto self-center">
          <Sad key="danger" />
        </div>
        <h1 className="sm:m-auto text-2xl md:text-2xl">DANGER</h1>
      </div>,
    );
  }
  if (parseFloat(airIndice.aqi) > 1 && parseFloat(airIndice.aqi) < 4) {
    icons.push(
      <div className="grid grid-rows-1 px-7 md:px-12 lg:px-7 justify-items-center">
        <div className="h-auto self-center">
          <Neutral key="bad" />
        </div>
        <h1 className="sm:m-auto text-2xl md:text-2xl">BAD</h1>
      </div>,
    );
  }
  return icons;
}
