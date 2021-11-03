/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import supabase from '../../services/supabaseClient';
import CampusItem from '../WelcomeCampusItem/CampusItem';

const CampusGrid = ({ search }) => {
  const [campusList, setCampusList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchCampus = async () => {
    const { data: campus, error } = await supabase
      .from('campus')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      console.log(error);
      return ErrorEvent.toString;
    }
    setCampusList(campus);
    setLoaded(true);
    console.log(campus);
    return campus;
  };

  useEffect(() => {
    fetchCampus();
  }, []);

  return (
    <div className="flex flex-col mt-5">
      {!loaded ? (
        <div className="text-center w-full text-gray-500 font-normal text-xl mt-16">
          Loading... 🙃
        </div>
      ) : null}
      <div className="grid px-4 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10  mt-16">
        {loaded && search.length > 0
          ? campusList
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.country.toLowerCase().includes(search.toLowerCase()),
              )
              .map((campus) => <CampusItem item={campus} key={campus.id} />)
          : campusList.map((campus) => (
              <CampusItem item={campus} key={campus.id} />
            ))}
      </div>
    </div>
  );
};

export default CampusGrid;
