/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
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
import { WelcomeFetchCampus } from '../services/WelcomeFetchCampus/WelcomeFetchItems';
import WelcomeHeader from '../components/WelcomeHeader/WelcomeHeader';
import CampusGrid from '../components/WelcomeCampusGrid/CampusGrid';
import WelcomeLoading from '../components/WelcomeLoading/WelcomeLoading';

const Welcome = () => {
  //
  // Fetched Data States
  //
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  //
  // Fetch Campus from Files
  //
  async function promisedData() {
    const campus = await WelcomeFetchCampus()
      .then((result) => setData(result))
      .then(setLoaded(true));
    return campus;
  }
  //
  // Await Data
  useEffect(() => {
    (async () => {
      await promisedData();
    })();
  }, []);
  //
  //
  if (data.length > 0) {
    console.log(data);
  } else {
    console.log('No data yet.');
  }
  //
  //
  return (
    <div className="static min-h-screen bg-gray-50">
      <div className="static flex flex-col mx-auto max-w-6xl lg:max-w-7xl items-center">
        <WelcomeHeader />
        {loaded && data.length > 0 ? <CampusGrid data={data} /> : null}
        <div className="pt-10">{loaded ? null : <WelcomeLoading />}</div>
      </div>
    </div>
  );
};

export default Welcome;
