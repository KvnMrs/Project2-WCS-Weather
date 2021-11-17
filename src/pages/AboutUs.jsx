/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable */
import React, { useState } from 'react';
import UserWelcomemsg from '../components/welcomeComponents/UserWelcomemsg';
import './About.css';
import NavBarDesktop from '../components/navigation_Desktop/NavbarDesktop';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div className=" flex h-screen overflow-hidden rounded-lg">
      <div className=" w-full mb-5 absolute bg-gray-300 z-50 flex flex-row items-center justify-between sm:hidden p-4">
        <a
          href="/"
          className="text-lg font-bold tracking-tighter text-wild_red transition duration-500 ease-in-out transform tracking-relaxed"
        >
          WCSweather
        </a>
        <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none "
          type="button"
          onClick={handleChange}
        >
          {isOpen ? false : null}
          <svg className="h-6 w-6 fill-current " viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <div className="sm:hidden ">
        {isOpen && (
          <ul className="absolute z-50 mt-16 flex flex-col bg-gray-200 px-4 py-2 w-full ">
            <a className="hover:bg-wild_red" href="/">
              Home
            </a>
            <a className="hover:bg-wild_red" href="/europeancity">
              Euroean city
            </a>
            <a className="hover:bg-wild_red" href="/dashboard">
              Dashboard
            </a>
          </ul>
        )}
      </div>
      <div className="hidden sm:block">
        <NavBarDesktop />
      </div>
      <div className="flex flex-col flex-1 w-0 lg:overflow-hidden bg-gray-100">
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
                      <a href="https://github.com/Camille1993">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/camille-hautois-075633146/">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
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
                        François Chatelier
                      </h4>
                      <a href="https://github.com/Francois-Chatelier">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/francois-chatelier">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
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
                      <a href="https://github.com/robinbdru">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/robinbeaudru/">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
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
                      <a href="https://github.com/KvnMrs">
                        <img
                          src="https://th.bing.com/th/id/R.6887faf2095ba8705ceb01787c3f9c93?rik=UJ6IgpvP19ePsA&pid=ImgRaw&r=0"
                          className="w-16 m-auto mt-4"
                          alt="lien github"
                        />
                      </a>
                      <a href="https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/">
                        <img
                          src="https://loptimisme.pro/wp-content/uploads/2019/08/Logo-LinkedIn-rond-300x300.png"
                          className="w-10 m-auto mt-4"
                          alt="lien linkedin"
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
