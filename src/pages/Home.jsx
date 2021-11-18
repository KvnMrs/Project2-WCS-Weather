/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../components/HomeComponents/Slider';

// import supabase from '../services/supabaseClient';

function Home() {
  return (
    <div>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:h-screen 2xl:flex 2xl: items-center">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="flex flex-col items-start mb-8 text-left lg:flex-grow lg:w-1/2 xl:pr-24 md:mb-0">
            <div className="mb-8 text-center mx-auto">
              <h1 className="text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-6xl text-wild_red main-title">
                WCSweather.
              </h1>
              <h2>Meteo and air pollution application</h2>
            </div>
            <p className="mb-8 text-base leading-relaxed text-gray-400 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              libero labore unde repellat mollitia quos voluptas in veritatis
              repellendus obcaecati rerum. Ut voluptate laudantium facilis
              similique sequi veritatis consectetur blanditiis..
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex self-center grid grid-cols-2 gap-2">
              <div className="mt-3 rounded-lg sm:mt-0 ">
                <div className="">
                  <button
                    type="button"
                    className="px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase mt-8 hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
                  >
                    <Link to="/signup">Get started</Link>
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
          <div className="w-full mt-12 lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 place-items-center m-auto">
            <div>
              <div className="relative w-full max-w-lg m-auto ">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                <div className="relative">
                  {/* <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg"
                  /> */}
                  <Slider />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 text-base justify-center grid grid-cols-1 w-24 mx-auto place-items-center ">
            <div>
              <img
                src="https://content.digitalwallonia.be/profile/13206-20180716092048000/wild-code-school.png"
                alt=""
                className="w-24"
              />
            </div>
            <div className="">
              <p className="footer-text m-3 text-wild_red font-bold">
                Project 2 - React application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
