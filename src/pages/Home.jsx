import React from 'react';
import { Link } from 'react-router-dom';
// import supabase from '../services/supabaseClient';

const Home = () => (
  <div>
    <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl md:place-content-center sm:place-content-center">
        <div className="flex flex-col items-start mb-8 text-left lg:flex-grow lg:w-1/2 xl:pr-24 md:mb-0">
          <div className="mb-8 text-center mx-auto">
            <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-6xl text-wild_red main-title">
              WCSweather.
            </h1>
            <h2>Meteo and air pollution application</h2>
          </div>
          <p className="mb-8 text-base leading-relaxed text-gray-400 text-center">
            This application allows students to know the air quality index in
            the city where their WCS campus is located. The goal is also to
            raise awareness about the underestimated problem of air pollution,
            which we all need to live.
          </p>
          <div className="mt-0 lg:mt-6 max-w-7xl sm:flex self-center grid grid-cols-2 gap-2">
            <div className="mt-3 rounded-lg sm:mt-0 ">
              <div className="">
                <button
                  type="button"
                  className="px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
                >
                  {' '}
                  <Link to="/signUp">Get started</Link>
                </button>
              </div>
            </div>
            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
              <button
                type="button"
                className="
                  px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out
                  "
              >
                <Link to="/login">Sign in</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 place-items-center ">
          <div>
            <div className="relative w-full max-w-lg sm:mx-auto">
              <div className="relative">
                <img
                  className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                  alt="hero"
                  src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-base xl:flex justify-center grid grid-cols-1  mx-auto place-items-center w-full">
        <div className="xl:w-2/4">
          <img
            src="https://content.digitalwallonia.be/profile/13206-20180716092048000/wild-code-school.png"
            alt=""
            className="w-28"
          />
        </div>
        <div className="xl:w-2/4 xl:ml-9">
          <p className="footer-text m-3 text-wild_red font-bold">
            Project 2 - React application
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
