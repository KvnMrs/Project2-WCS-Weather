/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AirPollutionCard,
  AirPollutionCompositionCard,
  AirPollutionIconCard,
} from './DashboardCard';

const DashAirQuality = ({ campus }) => {
  /**
   * Definition useState
   */
  const [pollution, setPollution] = useState([]);
  const [bgColor, setBgColor] = useState('');

  /**
   * Call API air_pollution of openweathermap -> get air pollution data
   * if (pollution.length > 0) -> this part is to define the background color
   * according to air pollution indice (aqi)
   */
  const airPollutionApi = async () => {
    await axios
      .get('http://api.openweathermap.org/data/2.5/air_pollution', {
        params: {
          lat: parseFloat(campus.latitude),
          lon: parseFloat(campus.longitude),
          appid: process.env.REACT_APP_AIR_WEATHER_KEY,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setPollution(data.list);
      });
  };
  useEffect(() => {
    airPollutionApi();
    if (pollution.length > 0) {
      if (pollution[0].main.aqi > 1 && pollution[0].main.aqi < 4) {
        setBgColor('bg-yellow-50');
      }
      if (pollution[0].main.aqi < 2) {
        setBgColor('bg-green-50');
      }
      if (pollution[0].main.aqi > 3) {
        setBgColor('bg-red-50');
      }
    }
  }, []);

  return (
    <div className={`rounded-lg ${bgColor} h-full`}>
      <section>
        <div className="container flex flex-col items-center px-5 py-32 mx-auto max-w-7xl sm:px-6 mb-5 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              {pollution.length > 0 ? (
                <AirPollutionCompositionCard
                  airComposition={pollution[0].components}
                />
              ) : (
                ''
              )}
              <div className="ml-9 sm:ml-7 md:ml-7">
                {pollution.length > 0 ? (
                  <AirPollutionCard airIndice={pollution[0].main} />
                ) : (
                  ''
                )}
              </div>
              {pollution.length > 0 ? (
                <AirPollutionIconCard airIndice={pollution[0].main} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashAirQuality;
