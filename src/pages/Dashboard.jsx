import React, { useEffect, useState, useContext } from 'react';
import supabase from '../services/supabaseClient';
import DashCity from '../components/dashComponents/dashCityCampus';
import DashAirQuality from '../components/dashComponents/dashPrincipalAir';
import DashMeteo from '../components/dashComponents/dashPrincipalMeteo';
import Charts from '../components/HistoryChart/Charts';
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';
import NavBarDesktop from '../components/navigationComponents/NavbarDesktop';
import NavbarMobile from '../components/navigationComponents/NavbarMobile';
import { AuthContext } from '../services/Context';

function Dash() {
  /**
   * Definition useState
   */
  const [campus, setCampus] = useState([]);
  const [wildCampus, setWildCampus] = useState([]);

  /**
   * get user Id from context
   */
  const { user } = useContext(AuthContext);

  /**
   * Recupération de supabase du nom, du pays, de la latitude
   * & de la longitude du campus choisi lors du sign up
   */
  async function fetchCampus() {
    const { data: userCampus, error } = await supabase
      .from('user_campus')
      .select('name, country, latitude, longitude')
      .eq('user_id', user.id);

    if (error) {
      console.log(error);
      return console.log('error');
    }
    return userCampus;
  }
  useEffect(async () => {
    const MyCampus = await fetchCampus();
    setCampus(MyCampus);
  }, []);

  /**
   * Recupération de supabase de la latitude, la longitude, le nom et le pays
   * des différents campus de la Wild Code School
   */
  const fetchAllCampus = async () => {
    const { data: allCampus, error } = await supabase
      .from('campus')
      .select('name, country, latitude , longitude');

    if (error) {
      console.log(error);
      return console.log('error');
    }
    return allCampus;
  };
  useEffect(async () => {
    const campusWild = await fetchAllCampus();
    setWildCampus(campusWild);
  }, []);

  const wildCity = () => {
    const wildCities = [];
    if (wildCampus.length > 0) {
      for (let i = 0; i < wildCampus.length; i += 1) {
        wildCities.push(
          <DashCity
            key={[i]}
            campus={wildCampus[i]}
          />,
        );
      }
    }
    return wildCities;
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-white rounded-lg">
      {/** BACKGROUND COLOR FOR NAVBAR DESKTOP */}
      <NavbarMobile />
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
                      {campus.length > 0 ? campus[0].name : ''}
                    </h1>
                    <div className="px-4 max-w-7xl sm:px-6 md:px-8">
                      <h1 className="text-lg text-neutral-600">
                        {campus.length > 0 ? campus[0].country : ''}
                      </h1>
                    </div>
                  </section>
                  <section className="m-2 p-2 row grid-cols md:grid grid-cols-2 gap-4">
                    <div>
                      {campus.length > 0 ? (
                        <DashAirQuality campus={campus[0]} />
                      ) : (
                        ''
                      )}
                    </div>
                    <div>
                      {campus.length > 0 ? (
                        <DashMeteo campus={campus[0]} />
                      ) : (
                        ''
                      )}
                    </div>
                  </section>
                  <div className="m-2 p-2 md:grid grid-cols-1">
                    <Charts />
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
                    <div className="px-4 max-w-7xl sm:px-6 md:px-8" />
                  </section>
                  <section className="m-2 overflow-scroll h-96 hide-scrollbar p-2 row grid-cols md:grid grid-cols-1">
                    {wildCity()}
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
