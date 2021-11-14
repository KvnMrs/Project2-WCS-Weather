/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable prefer-destructuring */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import supabase from '../../services/supabaseClient';
import Smile from '../icones/Smile';
import {
  AirPollutionCard,
  AirPollutionCompositionCard,
} from './DashboardCard';

const DashAirQuality = () => {
/**
* Definition useState
*/
  const [pollution, setPollution] = useState([]);
  const [lat, setLat] = useState(2);
  const [long, setLong] = useState(0);
  let campusCoordonates = [];

  /**
  * Call API air_pollution of openweathermap -> get air pollution data
  */
  async function airPollutionApi() {
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
        console.console.log(data.list);
      });
  }
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
    <div className="rounded-lg bg-green-50 h-full">
      <section>
        <div className="container flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 mb-5 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="grid grid-cols-3 gap-4">
              {pollution.length > 0
                ? (
                  <AirPollutionCompositionCard airComposition={pollution[0].components} />
                ) : ''}
              <div className="ml-9">
                {pollution.length > 0
                  ? (
                    <AirPollutionCard airIndice={pollution[0].main} />
                  ) : ''}
              </div>
              <div className="grid grid-cols-1 px-7 justify-items-center">
                <div className="h-auto">
                  {/** RANDOM EMOJI */}
                  <div>
                    <Smile />
                  </div>
                </div>
                <h1 className="sm:m-auto text-2xl md:text-2xl">
                  GOOD
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashAirQuality;
