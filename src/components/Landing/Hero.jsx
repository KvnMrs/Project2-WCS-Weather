/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import WCSlogo from '../../assets/logo-HD-fond-transparent-titre.png';
import OWMlogo from '../../assets/OWMlogo.png';

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 max-w-7xl w-full min-h-screen pb-20 p-4 grid grid-cols-1 gap-10 md:gap-32 lg:grid-cols-2 lg:mx-auto">
      <div
        className="flex flex-col justify-between lg:mt-20
text-left text-gray-800"
      >
        <div>
          <h1 className=" text-4xl pr-12 sm:text-6xl font-bold tracking-tight">
            Learn more about the air quality near your
            <span className="text-wild_red"> Wild Code School</span> campus !
          </h1>
          <p className="mt-4 sm:mt-8 text-xl">
            We provide Air Quality Index (A.Q.I.) and stats for the air you are
            breathing in the city where your WCS campus is located.
            <br />
            <br />
            Stay safe !
          </p>
          <button
            type="button"
            className="mt-6 px-10 py-3 rounded-lg bg-wild_red text-white uppercase text-md font-bold tracking-wider hover:bg-dark_wild_red transition-all duration-150 ease-in-out"
          >
            Get Started
          </button>
        </div>
        <div className="mt-12 lg:mt-28">
          <p className="mb-6 text-gray-500 text-sm">Thanks to our partners !</p>
          <div className="flex flex-row gap-x-8">
            <img className="h-9" src={WCSlogo} alt="Logo WCS" />
            <img className="h-9" src={OWMlogo} alt="Open Weather Map logo" />
          </div>
        </div>
      </div>
      <div className="mt-24 bg-gray-300 p-10 rounded-lg">1</div>
    </div>
  );
};

export default Hero;
