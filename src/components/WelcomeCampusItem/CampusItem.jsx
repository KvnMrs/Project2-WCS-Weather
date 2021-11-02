/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const CampusItem = ({ item }) => {
  // eslint-disable-next-line object-curly-newline
  const { name, country, flag, imageUrl } = item;

  return (
    <div className="group w-full flex flex-col pb-6 rounded-md bg-white border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
      <div className="relative mb-5">
        <img
          className="h-52 w-full rounded-t-md object-cover bg-center bg-blend-luminosity"
          src={imageUrl}
          alt=""
        />
        <div className="bg-gray-900 h-full w-full absolute inset-0 bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-200 ease-in-out" />
      </div>

      <div className="flex flex-col px-6">
        <div className="flex flex-row align-middle">
          <p className="mr-3 text-sm">{flag}</p>
          <p className="text-sm font-bold text-gray-500 tracking-wide uppercase mb-4">
            {country}
          </p>
        </div>
        <p className="text-4xl font-light text-gray-800">{name}</p>
      </div>
    </div>
  );
};

export default CampusItem;
