/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashCity from '../components/dashComponents/DashCityCampus';
import DashAirQuality from '../components/dashComponents/DashPrincipalAir';
import DashMeteo from '../components/dashComponents/DashPrincipalMeteo';
import GraphiqueAir from '../components/dashComponents/GraphiqueAir';
import GraphiqueMeteo from '../components/dashComponents/GraphiqueMeteo';
import {
  AirPollutionCard,
} from '../components/dashComponents/DashboardCard';
import supabase from '../services/supabaseClient';

const Dash = () => {
  /**
  * get user Id from context
  */
  const user = supabase.auth.user();
  const id = user.id;

  /* Appel API */
  const [pollution, setPollution] = useState('');
  const [lat, setLat] = useState(2);
  const [long, setLong] = useState(0);
  const [campus, setCampus] = useState('');
  let campusCoordonates = [];
  useEffect(() => {
    /**
     * Call API air_pollution of openweathermap -> get air pollution data
     */
    axios
      .get('http://api.openweathermap.org/data/2.5/air_pollution', {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_AIR_WEATHER_KEY,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        setPollution(data.list[0].main);
      });
  }, []);

  /**
   * Recupération de supabase de la latitude & la longitude
   * du campus choisi lors du sign up
   */
  async function fetchCampus() {
    const { data: user_campus, error } = await supabase
      .from('user_campus')
      .select('latitude , longitude, name')
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
    setCampus(campusCoordonates[0].name);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-lg">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="
            flex flex-col flex-grow
            pt-5
            overflow-y-auto
            bg-white
            border-r border-gray-50
          "
          >
            <div className="flex flex-col items-center flex-shrink-0 px-4">
              <a href="/" className="px-8 text-left focus:outline-none">
                <h2 className="
                  block
                  p-2
                  text-2xl
                  font-medium
                  tracking-tighter
                  text-wild_red
                  transition
                  duration-500
                  ease-in-out
                  transform
                  cursor-pointer
                "
                >
                  WCS Weather
                </h2>
              </a>
              <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col flex-grow px-4 mt-5">
              <nav className="flex-1 space-y-1 bg-white">
                <ul>
                  <li>
                    <a
                      className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-white
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      bg-wild_red
                      focus:shadow-outline
                    "
                      href="#"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="ml-4"> Overview</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-gray-50
                    "
                      href="#"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span className="ml-4">Chat</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-gray-50
                    "
                      href="#"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="ml-4">User</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-gray-50
                    "
                      href="#"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="ml-4">Settings</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* 1er DASHBOARD */}
              <section>
                <h1 className="text-3xl font-semibold leading-none tracking-tighter text-neutral-600 pl-2">
                  Hello, Wilder !
                </h1>
              </section>
              <div className="py-4 pt-4">
                <div className="rounded-lg bg-gray-50 h-110">
                  <section className="pl-4 pt-8">
                    <h1 className="text-3xl font-semibold leading-none tracking-tighter text-neutral-600">
                      {campus}
                    </h1>
                    <div className="px-4 max-w-7xl sm:px-6 md:px-8">
                      <h1 className="text-lg text-neutral-600">France</h1>
                    </div>
                  </section>
                  <section className="m-2 p-2 row grid-cols md:grid grid-cols-2 gap-4">
                    <div>
                      <DashAirQuality />
                      <div className="bg-green-300 w-60 m-auto">
                        <AirPollutionCard element={pollution} />
                      </div>
                    </div>
                    <div>
                      <DashMeteo />
                    </div>
                    <div>
                      <GraphiqueAir />
                    </div>
                    <div>
                      <GraphiqueMeteo />
                    </div>
                  </section>
                  {/* CONTENT HERE */}
                </div>
              </div>
              {/* DASHBOARD CAMPUS VILLES */}
              <div className="py-4 pt-4 mt-6">
                <div className="rounded-lg bg-gray-50 h-110">
                  <section className="pl-4 pt-8">
                    <h1 className="text-3xl font-semibold leading-none tracking-tighter text-neutral-600">
                      WCS CAMPUS
                    </h1>
                    <div className="px-4 max-w-7xl sm:px-6 md:px-8">
                      <h1 className="text-lg text-neutral-600">in Nantes, France</h1>
                    </div>
                  </section>
                  <section className="m-2 p-2 row grid-cols md:grid grid-cols-1">
                    <div>
                      <DashCity />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dash;
