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
import DashAirQuality from '../components/dashComponents/DashPrincipalAir';
import DashMeteo from '../components/dashComponents/DashPrincipalMeteo';
import GraphiqueAir from '../components/dashComponents/GraphiqueAir';
import GraphiqueMeteo from '../components/dashComponents/GraphiqueMeteo';
import supabase from '../services/supabaseClient';
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';
import NavBarDesktop from '../components/navigation_Desktop/NavbarDesktop';

const Dash = () => {
  /**
  * get user Id from context
  */
  const user = supabase.auth.user();
  const id = user.id;

  /* Appel API */
  const [campus, setCampus] = useState('');
  let campusName = [];
  /**
   * Recupération de supabase de la latitude & la longitude
   * du campus choisi lors du sign up
   */
  async function fetchCampus() {
    const { data: user_campus, error } = await supabase
      .from('user_campus')
      .select('name')
      .eq('user_id', id);

    if (error) {
      console.log(error);
      return console.log('error');
    }
    return user_campus;
  }

  useEffect(async () => {
    const getCampus = await fetchCampus();
    campusName = getCampus;
    setCampus(campusName[0].name);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-lg">
      {/** BACKGROUND COLOR FOR NAVBAR DESKTOP */}

      {/** HERE IS THE NAVBAR DESKTOP VERSION */}
      <div className="md:w-40 lg:w-auto">
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

export default Dash;
