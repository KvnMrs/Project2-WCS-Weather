/* eslint-disable */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import DashCity from '../components/dashComponents/dashCityCampus';
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';
import NavBarDesktop from '../components/navigation_Desktop/navbarDesktop';
// import EuroCityMap from '../components/EuroCityMap/EuroCityMap'
import Map from '../components/EuroCityMap/EuroCityMap';
import { capitales } from '../services/CapitalesFetch/CapitalesJSON';

const EuropeanCity = () => {

  const EuropeanCapital = () => {
    const EuropeanCapitals = [];
    if (capitales.length > 0) {
      for (let i = 0; i < capitales.length; i++) {
        EuropeanCapitals.push(
          <DashCity
            key={[i]}
            campus={capitales[i]}
          />,
        );
      }
    }
    return EuropeanCapitals;
  };

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
                  <div className="w3/4 h-96 mx-auto mt-4 rounded-lg">
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
                      European Capitals
                    </h1>
                    <div className="px-4 max-w-7xl sm:px-6 md:px-8" />
                  </section>
                  <section className="m-2 p-2 overflow-scroll h-96 hide-scrollbar row grid-cols md:grid grid-cols-1">
                    {EuropeanCapital()}
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
