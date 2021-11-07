import React from 'react';

const WelcomeHeader = () => (
  <div className="w-full pt-24">
    <h1 className="text-center text-4xl sm:text-5xl tracking-tight text-gray-700 font-bold">
      Welcome
      <span className="text-dark_wild_red"> Wilder</span>
      {' '}
      !
    </h1>
    <p className="text-center text-gray-500 font-normal text-xl pt-2">
      Choose your campus from the list.
    </p>
  </div>
);

export default WelcomeHeader;
