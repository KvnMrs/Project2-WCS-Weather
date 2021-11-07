/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CityCountryUser from '../components/cityUser/cityCountryUser';
import DashCity from '../components/dashComponents/dashCityCampus';
import DashAirQuality from '../components/dashComponents/dashPrincipalAir';
import DashMeteo from '../components/dashComponents/dashPrincipalMeteo';
import GraphiqueAir from '../components/dashComponents/graphiqueAir';
import GraphiqueMeteo from '../components/dashComponents/graphiqueMeteo';
import NavBarDesktop from '../components/navigation_Desktop/navbarDesktop';
import UserWelcomemsg from '../components/userWelcome.jsx/userWelcomemsg';

function Dash() {
  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-lg">
    {/** BACKGROUND COLOR FOR NAVBAR DESKTOP */}

    {/** HERE IS THE NAVBAR DESKTOP VERSION */}
      <div>
        <NavBarDesktop />
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 bg-gray-50">
              {/* WELCOME MESSAGE WITH THE NAME OF THE USER */}
              <div>
                <UserWelcomemsg />
              </div>
              <div className="py-4 pt-4">
                <div className="rounded-lg bg-white h-110 border-gray-100">
                <div>
                <CityCountryUser />
                </div>
                <section className="m-2 p-2 row grid-cols md:grid grid-cols-2 gap-4 gap-y-9">
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
               {/* DASHBOARD CAMPUS CITY */}
               <div className="py-4 pt-4 mt-6">
                <div className="rounded-lg bg-white border-gray-100">
                <section className="pl-4 pt-8">
                <h1 className="text-3xl font-semibold leading-none tracking-tighter text-neutral-600">
                  WCS CAMPUS
                </h1>
                <div className="pl-1">
                {/** CITY CHOOSEN */}
              <h1 className="text-lg text-neutral-600">in Nantes, France</h1>
                </div>
                </section>
                <section className="m-2 p-2 row grid-cols md:grid grid-cols-1">
                <div>
                <DashCity />
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
}

export default Dash;
