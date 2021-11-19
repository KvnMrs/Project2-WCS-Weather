/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import ParisChart from './ParisChart';

const CtaLanding = () => {
  return (
    <div className="px-4 mt-28 sm:mt-36 mx-auto w-full max-w-7xl">
      <div>
        <h1 className=" text-4xl text-gray-800 pr-12 sm:text-6xl font-bold tracking-tight">
          How dangerous is the air around you ?
        </h1>
        <p className="mt-8 text-xl">
          Here you can see the concentration of{' '}
          <span className="text-dark_wild_red">Carbon Monoxyde</span> (C.O.,
          µg/m³) in
          <span className="text-dark_wild_red"> Paris </span>for the last 15
          days.
          <br />
        </p>
      </div>
      <ParisChart />
    </div>
  );
};

export default CtaLanding;
