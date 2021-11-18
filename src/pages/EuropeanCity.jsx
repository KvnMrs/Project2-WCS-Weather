/* eslint-disable */
import React, { useEffect, useState } from 'react';
import DashCity from '../components/dashComponents/dashCityCampus';
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';
import NavBarDesktop from '../components/navigationComponents/NavbarDesktop';
import Map from '../components/EuroCityMap/EuroCityMap';
import { capitales } from '../services/CapitalesFetch/CapitalesJSON';
import NavbarMobile from '../components/navigationComponents/NavbarMobile';
import CapitalesFetch from '../services/CapitalesFetch/CapitalesFetch';
import { WelcomeFetchCampus } from '../services/WelcomeFetchCampus/WelcomeFetchItems';

const EuropeanCity = () => {
  const [campus, setCampus] = useState([]);
  const [cityCapitales, setCityCapitales] = useState([]);

  const [showCampus, setShowCampus] = useState(true);
  const [showCapitales, setShowCapitales] = useState(true);
  async function promisedData() {
    const campus = await WelcomeFetchCampus();
    const capitales = await CapitalesFetch();
    console.log(capitales);
    setCampus(campus);
    setCityCapitales(capitales);
  }

  useEffect(() => {
    (async () => {
      await promisedData();
    })();
  }, []);
  return (
    <div className=" flex h-screen overflow-hidden rounded-lg">
      {/** BACKGROUND COLOR FOR NAVBAR DESKTOP */}
      <NavbarMobile />
      {/** HERE IS THE NAVBAR DESKTOP VERSION */}
      <div>
        <NavBarDesktop />
      </div>
      <div className="bg-gray-100 flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              {/* WELCOME MESSAGE WITH THE NAME OF THE USER */}
              <UserWelcomemsg />
              <div className="py-4 pt-4">
                <div className="rounded-lg bg-gray-100 h-110">
                  <div className="w3/4 h-96 mx-auto mt-4 rounded-lg">
                    <Map
                      capitales={cityCapitales}
                      campus={campus}
                      showCampus={showCampus}
                      showCapitales={showCapitales}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => setShowCampus(!showCampus)}
                      type="button"
                      className="mr-4 px-4 py-4 bg-red-300 rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-wild_red transition-all transition-duration-150 ease-in-out"
                    >
                      Campus
                    </button>
                    <button
                      onClick={() => setShowCapitales(!showCapitales)}
                      type="button"
                      className="mr-4 px-4 py-4 bg-blue-300 rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-blue-600 transition-all transition-duration-150 ease-in-out"
                    >
                      Capitals
                    </button>
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
                    {capitales.map((capitale) => (
                      <DashCity key={capitale.name} campus={capitale} />
                    ))}
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
