/* eslint-disable no-shadow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import CampusItem from '../WelcomeCampusItem/CampusItem';
import { WelcomeFetchCampus } from '../../services/WelcomeFetchCampus/WelcomeFetchItems';
import WelcomeLoading from '../WelcomeLoading/WelcomeLoading';
import WelcomeNoResults from '../WelcomeNoResults/WelcomeNoResults';

const CampusGrid = ({ search /* DisplayPopup */ }) => {
  // CampusGrid contains CampusItems and Map the Fetch function
  // Also contains the Popup Display function
  //
  // Fetch States
  const [loaded, setLoaded] = useState(false);
  const [campusArray, setCampusArray] = useState([]);

  // Fetched Campus
  async function fetchData() {
    const campus = await WelcomeFetchCampus();
    if (campus) {
      setLoaded(true);
      console.log(`Campus from Fetch : + ${campus}`);
      setCampusArray(campus);
      return campus;
    }
    console.log('Error Fetching campus.');
    return null;
  }

  // Invoke fetch function
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col mt-5">
      {!loaded ? <WelcomeLoading /> : null}
      {loaded &&
      campusArray.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.country.toLowerCase().includes(search.toLowerCase()),
      ).length === 0 ? (
        <WelcomeNoResults />
      ) : null}
      <div className="grid px-4 w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8  mt-16">
        {loaded && search.length > 0
          ? campusArray
              .filter(
                (item) =>
                  item.name.toLowerCase().includes(search.toLowerCase()) ||
                  item.country.toLowerCase().includes(search.toLowerCase()),
              )
              .map((campus) => (
                <CampusItem
                  item={campus}
                  key={campus.id}
                  // onClick={DisplayPopup(campus)}
                />
              ))
          : campusArray.map((campus) => (
              <CampusItem
                item={campus}
                key={campus.id}
                // onClick={DisplayPopup(campus)}
              />
            ))}
      </div>
    </div>
  );
};

export default CampusGrid;
