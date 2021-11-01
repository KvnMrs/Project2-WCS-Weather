/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';

const CampusItem = ({ item }) => {
  // eslint-disable-next-line object-curly-newline
  const { name, country, flag, imageUrl } = item;

  return (
    <div className="w-full flex flex-col pb-6 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <img
        className="h-52 w-full mb-5 rounded-t-md object-cover"
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col px-6">
        <div className="flex flex-row align-middle">
          <p className="mr-3">{flag}</p>
          <p className="text-md font-light">{country}</p>
        </div>
        <p className="text-3xl font-normal text-gray-800">{name}</p>
      </div>
    </div>
  );
};

export default CampusItem;
