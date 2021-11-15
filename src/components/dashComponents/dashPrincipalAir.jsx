/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import supabase from '../../services/supabaseClient';
import {
  AirPollutionCard,
  AirPollutionCompositionCard,
  AirPollutionIconCard,
} from './DashboardCard';

const DashAirQuality = () => {
  /**
   * Definition useState
   */
  const [pollution, setPollution] = useState([]);
  const [lat, setLat] = useState(2);
  const [long, setLong] = useState(0);
  const [bgColor, setBgColor] = useState('');
  let campusCoordonates = [];

  /**
   * Call API air_pollution of openweathermap -> get air pollution data
   * if (pollution.length > 0) -> this part is to define the background color
   * according to air pollution indice (aqi)
   */
  const airPollutionApi = async () => {
    await axios
      .get('http://api.openweathermap.org/data/2.5/air_pollution', {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_AIR_WEATHER_KEY,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setPollution(data.list);
        if (pollution.length > 0) {
          const aqi = pollution[0].main.aqi;
          if (aqi < 2) {
            setBgColor('bg-green-50');
          }
          if (aqi > 3) {
            setBgColor('bg-red-50');
          }
          if (aqi > 1 && aqi < 4) {
            setBgColor('bg-yellow-50');
          }
        }
      });
  };
  useEffect(() => {
    airPollutionApi();
  }, []);

  /**
   * get user Id from context
   */
  const user = supabase.auth.user();
  const id = user.id;

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
    <div className={`rounded-lg ${bgColor} h-full`}>
      <section>
        <div className="container flex flex-col items-center px-5 py-32 mx-auto max-w-7xl sm:px-6 mb-5 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
