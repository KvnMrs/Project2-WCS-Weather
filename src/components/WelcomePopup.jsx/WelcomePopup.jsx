/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const WelcomePopup = ({ item }) => {
  const { name, country, flag } = item;
  return (
    <div className="absolute inset-0 max-h-96 max-w-xs p-5">
      <div>
        <p>So you are in the campus of</p>
        <p>{name}</p>
        <div>
          <p>{flag}</p>
          <p>{country}</p>
        </div>
        <button
          type="submit"
          className="px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
        >
          Yes, I confirm !
        </button>
        <button
          type="submit"
          className="px-4 py-4 bg-gray-400 rounded-md font-bold tracking-wider text-gray-700 text-sm uppercase mt-8 hover:bg-gray-500 transition-all transition-duration-150 ease-in-out"
        >
          No, another one
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
