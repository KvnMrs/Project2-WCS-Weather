/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserWelcomemsg from '../components/userWelcomemsg/UserWelcomemsg';
import './About.css';
import NavBarDesktop from '../components/navigation_Desktop/NavbarDesktop';

// import supabase from '../services/supabaseClient';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white rounded-lg">
      <div className="flex flex-row items-center justify-between lg:hidden p-4">
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
      <div>
        <NavBarDesktop />        
      </div>
      <div className="flex flex-col flex-1 w-0 lg:overflow-hidden">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 md:px-8">
            <UserWelcomemsg />

            <div className="container flex w-full p-5 m-auto">
              <div className="flex flex-col m-auto bg-white shadow-2xl rounded-xl">
                <div className="px-6 py-8">
                  <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                    About this project{' '}
                  </h4>
                  <p className="mt-4 text-base font-normal text-gray-300 leading-relax">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas perspiciatis ab eum voluptates eligendi aperiam,
                    eos odit nam. Eius aperiam nemo, voluptatem ea delectus
                    dolores? Adipisci dolor ipsa delectus minima.Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Voluptas
                    perspiciatis ab eum voluptates eligendi aperiam, eos odit
                    nam. Eius aperiam nemo, voluptatem ea delectus dolores?
                    Adipisci dolor ipsa delectus minima.
                  </p>
                </div>
              </div>
            </div>

            <div className="container p-5 mx-auto max-w-7xl">
              <div className="flex flex-wrap mx-auto md:flex-nowrap">
                <div className="flex w-full">
                  <div className="relative flex flex-col m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-4">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Camille Hautois
                      </h4>
                      <a href="">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-8 m-auto">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Francois Chatelier
                      </h4>
                      <a href="">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-8 m-auto">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Robin Beaudru
                      </h4>
                      <a href="">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex w-full">
                  <div className="relative flex flex-col items-start m-1 p-4 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                    <img
                      className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36"
                      src="https://th.bing.com/th/id/OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd?pid=ImgDet&rs=1"
                      alt="blog"
                    />
                    <div className="px-6 py-8 m-auto">
                      <h4 className="mt-4 text-2xl font-semibold text-neutral-600 text-center">
                        Kévin Marais
                      </h4>
                      <a href="">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                        />
                      </a>
                      <a href="">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
