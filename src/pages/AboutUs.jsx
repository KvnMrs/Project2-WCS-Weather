/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserWelcomemsg from '../components/userWelcomemsg/UserWelcomemsg';
import './About.css';

// import supabase from '../services/supabaseClient';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row items-center justify-between lg:justify-start p-4">
        <Link
          href="/Home"
          className="text-lg font-bold tracking-tighter text-wild_red transition duration-500 ease-in-out transform tracking-relaxed"
        >
          WCSweather
        </Link>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Fermer' : 'Ouvert'}
        </button>
        {isOpen && (
          <div className="fixed right-4 p-4">
            <div className="absolute right-0 mt-4">
              <div className="px-2 py-2 bg-white rounded-md shadow">
                <Link
                  to="/Home"
                  className="block px-4 py-2 mt-2 text-sm md:mt-0 text-dark_wild_red hover:bg-grey focus:outline-none focus:shadow-outline"
                >
                  Home
                </Link>
                <Link
                  to="/AboutUs"
                  className="block px-4 py-2 mt-2 text-sm md:mt-0 text-dark_wild_red focus:outline-none focus:shadow-outline"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <UserWelcomemsg />

      <div className="flex w-80 m-auto">
        <div className="flex flex-col m-auto bg-white shadow-2xl rounded-xl">
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
              About this <span className=""> project </span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-300 leading-relax">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              perspiciatis ab eum voluptates eligendi aperiam, eos odit nam.
              Eius aperiam nemo, voluptatem ea delectus dolores? Adipisci dolor
              ipsa delectus minima.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptas perspiciatis ab eum voluptates eligendi
              aperiam, eos odit nam. Eius aperiam nemo, voluptatem ea delectus
              dolores? Adipisci dolor ipsa delectus minima.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
