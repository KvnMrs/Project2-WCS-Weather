/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';

const menus = [
  {
    title: 'About',
    url: '/#about',
  },
  {
    title: 'Login',
    url: '/login',
  },
];

const NavLanding = () => {
  return (
    <div className="fixed hidden w-full px-6 sm:flex h-20 z-50 bg-gray-50 justify-between items-center">
      <div>
        <div>
          <p className="text-left text-2xl text-wild_red font-bold">
            WCS <span className="font-normal text-xl">weather</span>
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        {menus.map((item) => (
          <a
            key={item.title}
            className="mr-3 px-4 py-3 text-center text-lg text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-all duration-150 ease-out"
            href={item.url}
          >
            {item.title}
          </a>
        ))}
        <div>
          <a href="/signup">
            <button
              type="button"
              className="ml-3 px-5 py-3 rounded-lg bg-wild_red text-white uppercase text-md font-bold tracking-wider"
            >
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavLanding;
