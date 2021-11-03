/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */

import React, { useEffect, useState } from 'react';
import CampusItem from '../components/WelcomeCampusItem/CampusItem';
import supabase from '../services/supabaseClient';

const Welcome = () => {
  let campusList = [];
  const [finalList, setFinalList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState('');

  async function fetchCampus() {
    const { data: campus, error } = await supabase
      .from('campus')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.log(error);
      return [];
    }
    return campus;
  }

  useEffect(async () => {
    const getList = await fetchCampus();
    campusList = getList;
    if (campusList.length > 0) {
      setLoaded(true);
      setFinalList(campusList);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="flex flex-col pt-24 lg:p-20 mx-auto max-w-6xl lg:max-w-7xl items-center">
        <h1 className="text-center text-4xl sm:text-5xl tracking-tight text-gray-700 font-bold">
          Welcome
          <span className="text-dark_wild_red"> Wilder</span> !
        </h1>
        <p className="text-center text-gray-500 font-normal text-xl pt-2">
          Choose your campus from the list.
        </p>
        <div className="flex flex-col min-w-full items-center">
          <form className="mt-10 w-64">
            <label className="text-gray-800 pt-14">
              <input
                value={search}
                type="email"
                placeholder="search your campus..."
                className="mt-1
                    block
                    w-full
                    py-3
                    px-4
                    rounded-md
                    border
                    border-gray-300
                    shadow-sm
                    transition-all
                    transition-duration-200
                    ease-in-out
                    outline-none
                    focus:border-dark_wild_red"
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
          </form>
        </div>
        {loaded ? null : (
          <div className="text-center w-full text-gray-500 font-normal text-xl mt-16">
            Loading... 🙃
          </div>
        )}
        <div className="grid px-4 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10  mt-16">
          {loaded && search.length > 0
            ? finalList
                .filter(
                  (item) =>
                    item.name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    item.country
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()),
                )
                .map((campus) => <CampusItem item={campus} key={campus.id} />)
            : finalList.map((campus) => (
                <CampusItem item={campus} key={campus.id} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
