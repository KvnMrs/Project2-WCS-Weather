/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/named */
/* eslint-disable prefer-destructuring */
/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
//
import React, { useEffect, useState } from 'react';
import { UserCampusFetch } from '../services/ChartFetch/UserCampusFetch';
import { ApiHistoryFetch } from '../services/ChartFetch/ApiHistoryFetch';

const Home = () => {
  //
  // Fetching Campus Loading State
  const [loading, setLoading] = useState(false);
  //
  // Data State
  const [ApiData, setApiData] = useState([]);
  //
  // Set Data handler
  /**
   *
   * @param {*} fetchedData
   * @returns
   */
  function handleData(fetchedData) {
    // Conditional Chaining for setting ApiData
    setApiData(fetchedData?.data?.list);
    return ApiData;
  }
  //
  // InvokeFunction
  //
  useEffect(() => {
    async function initFetch() {
      const fetchCampus = await UserCampusFetch();
      setLoading(true);
      const campus = fetchCampus;
      const userCampus = campus[0];
      const latitude = await userCampus.latitude;
      const longitude = await userCampus.longitude;

      ApiHistoryFetch({ latitude, longitude, handleData });
    }

    // Invoke Functions
    (async () => {
      // start
      const promiseData = await initFetch();
      return promiseData;
    })();
  }, []);
  //
  //
  return (
    <div>
      <div>testapp</div>
    </div>
  );
};

export default Home;
