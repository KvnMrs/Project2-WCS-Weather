/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';

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

const NavMobileLanding = () => {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active);
  }

  return (
    <div>
      <div className="bg-gray-50 w-full h-16 flex flex-row px-4 justify-between items-center sm:hidden">
        <div>
          <p className="text-left text-2xl text-wild_red font-bold">
            WCS <span className="font-normal text-xl">weather</span>
          </p>
        </div>
        <div onClick={handleActive}>
          <div className="w-8 h-auto flex flex-col justify-between">
            <div className="h-px w-full bg-gray-800" />
            <div className="h-px w-full my-2 bg-gray-800" />
            <div className="h-px w-full bg-gray-800" />
          </div>
        </div>
      </div>
      {active ? (
        <div className="bg-gray-50 px-10 w-full flex flex-col items-center justify-center absolute inset-y-0 right-0 top-16 transition-all">
          {menus.map((item) => (
            <a
              key={item.title}
              className="px-4 py-12 w-full text-center text-5xl text-gray-700 font-light rounded-md hover:bg-gray-200 transition-all duration-150 ease-out"
              href={item.url}
            >
              {item.title}
            </a>
          ))}

          <a href="/signup">
            <button
              type="button"
              className="mt-12 px-6 py-6 w-full rounded-lg bg-wild_red text-white uppercase text-xl font-bold tracking-wider"
            >
              Get Started
            </button>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default NavMobileLanding;
