/* eslint-disable */
import React from 'react';

const CampusItem = ({ item, functionShow }) => {
  const { name, country, flag, imageUrl } = item;

  return (
    // Item for every Campus to Map into CampusGrid
    <div
      onClick={() => functionShow()}
      className="group w-full flex flex-col pb-8 rounded-3xl bg-white border border-gray-100 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
    >
      <div className="relative mb-8">
        <img
          className="h-52 w-full rounded-t-3xl object-cover bg-center bg-blend-luminosity"
          src={imageUrl}
          alt={name}
        />
        <div className="bg-gray-900 h-full w-full absolute inset-0 rounded-t-3xl bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-200 ease-in-out" />
      </div>

      <div className="flex flex-col px-8">
        <div className="flex flex-row align-middle">
          <p className="mr-3 text-sm">{flag}</p>
          <p className="text-sm font-bold text-gray-500 tracking-wide uppercase mb-2">
            {country}
          </p>
        </div>
        <p className="text-3xl font-light text-gray-700">{name}</p>
      </div>
    </div>
  );
};

export default CampusItem;
