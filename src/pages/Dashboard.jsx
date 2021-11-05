/* eslint-disable react/jsx-indent */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DashCity from '../components/dashComponents/dashCityCampus';
import DashAirQuality from '../components/dashComponents/dashPrincipalAir';
import DashMeteo from '../components/dashComponents/dashPrincipalMeteo';
import GraphiqueAir from '../components/dashComponents/graphiqueAir';
import GraphiqueMeteo from '../components/dashComponents/graphiqueMeteo';
import NavBarDesktop from '../components/navigation_Desktop/navbarDesktop';

function Dash() {
  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-lg">
      <div>
        <NavBarDesktop />
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 bg-gray-50">
              {/* DASHBOARD de la ville sélectionnée par l'utilisateur */}
              <section>
                <h1 className="text-3xl font-semibold leading-none tracking-tighter text-neutral-600 pl-2 pt-5">
                  Hello, Utilisateur !
                </h1>
              </section>
              <div className="py-4 pt-4">
                <div className="rounded-lg bg-gray-50 h-110">
                <section className="pl-4 pt-10">
                <h1 className="text-3xl font-semibold leading-none tracking-tighter text-neutral-600">
                  Nantes
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
                <div className="rounded-lg bg-white h-auto border border-gray-100">
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
}

export default Dash;
