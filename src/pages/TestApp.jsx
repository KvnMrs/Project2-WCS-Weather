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
import React, { useEffect } from 'react';
import { useState } from 'react';
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
  function handleData(fetchedData) {
    setApiData(fetchedData);
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
      console.log('Campus Array item =', campus);

      const userCampus = campus[0];
      const latitude = await userCampus.latitude;
      const longitude = await userCampus.longitude;

      console.log(userCampus);
      console.log(latitude);
      console.log(longitude);

      ApiHistoryFetch({ latitude, longitude, handleData });
    }
    initFetch();
  }, []);
  //
  //
  return (
    <div>
      <div>{ApiData ? console.log(ApiData.data) : null}</div>
    </div>
  );
};

export default Home;
