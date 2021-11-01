/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const CampusItem = ({ item }) => {
  const { name, country, flag } = item;

  return (
    <div className="w-full flex flex-col p-8 rounded-md bg-white border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition-all transition-duration-100 ease-in-out">
      <p className="text-3xl font-normal text-gray-800 mb-3">{name}</p>
      <div className="flex flex-row align-middle">
        <p className="mr-3">{flag}</p>
        <p className="text-md">{country}</p>
      </div>
    </div>
  );
};

export default CampusItem;
