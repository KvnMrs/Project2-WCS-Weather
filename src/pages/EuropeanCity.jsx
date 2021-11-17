/* eslint-disable */
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
// import DashAirQuality from '../components/dashComponents/DashPrincipalAir';
// import DashMeteo from '../components/dashComponents/DashPrincipalMeteo';
// import GraphiqueAir from '../components/dashComponents/GraphiqueAir';
// import GraphiqueMeteo from '../components/dashComponents/GraphiqueMeteo';
// import { AirPollutionCard } from '../components/dashComponents/DashboardCard';
// import supabase from '../services/supabaseClient';
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';
import NavBarDesktop from '../components/navigation_Desktop/NavbarDesktop';
// import EuroCityMap from '../components/EuroCityMap/EuroCityMap'
import Map from '../components/EuroCityMap/EuroCityMap';

const EuropeanCity = () => {

  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-lg">
      {/** BACKGROUND COLOR FOR NAVBAR DESKTOP */}

      {/** HERE IS THE NAVBAR DESKTOP VERSION */}
      <div>
        <NavBarDesktop />
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* WELCOME MESSAGE WITH THE NAME OF THE USER */}
              <UserWelcomemsg />
              <div className="py-4 pt-4">
                <div className="rounded-lg bg-gray-50 h-110">
                  <div className="w3/4 h-56 mx-auto mt-4 rounded-lg">
                    <Map />
                  </div>
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
                      <h1 className="text-lg text-neutral-600">
                        in Nantes, France
                      </h1>
                    </div>
                  </section>
                  <section className="m-2 p-2 row grid-cols md:grid grid-cols-1">
                    <div>
                      <DashCity />
                    </div>
                    <div>
                      <DashCity />
                    </div>
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

export default EuropeanCity;
