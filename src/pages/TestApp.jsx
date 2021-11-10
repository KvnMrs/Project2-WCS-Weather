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
import { fromUnixTime } from 'date-fns';
import { UserCampusFetch } from '../services/ChartFetch/UserCampusFetch';
import { ApiHistoryFetch } from '../services/ChartFetch/ApiHistoryFetch';
import IndexHistoryChart from '../components/IndexHistoryChart/IndexHistoryChart';

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
      <div>
        {ApiData
          ? console.log(`TestApp Console = ${ApiData?.components}`)
          : null}
        {ApiData ? <IndexHistoryChart data={ApiData} /> : null}
        {ApiData.map((item) => (
          <div>
            <p>________________</p>
            <p>{item.components.co}</p>
            <p>{item.components.pm2_5}</p>
            <p>{item.components.pm10}</p>
            <p>at </p>
            <p>{item.dt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
