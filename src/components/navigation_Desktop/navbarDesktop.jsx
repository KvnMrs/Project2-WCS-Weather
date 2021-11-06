/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function NavBarDesktop() {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="
            flex flex-col flex-grow
            pt-5
            overflow-y-auto
            bg-white
            border-r border-gray-50
          "
        >
          <div className="flex flex-col items-center flex-shrink-0 px-4">
            <a href="/" className="px-8 text-left focus:outline-none">
              <h2 className="
                  block
                  p-2
                  text-xl
                  font-medium
                  tracking-tighter
                  text-gray-900
                  transition
                  duration-500
                  ease-in-out
                  transform
                  cursor-pointer
                  hover:text-gray-900
                "
              >
                {' '}
                WCS Weather
                {' '}

              </h2>
            </a>
            <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col flex-grow px-4 mt-5">
            <nav className="flex-1 space-y-1 bg-white">
              <ul>
                <li>
                  <a
                    className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      bg-wild_red
                      focus:shadow-outline
                      hover:bg-dark_wild_red
                    "
                    href="#"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="ml-4">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-gray-100
                    "
                    href="#"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span className="ml-4">WCS Campus</span>
                  </a>
                </li>
                <li>
                  <a
                    className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-gray-100
                    "
                    href="#"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokelinecap="round" strokeLinejoin="round" strokewidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="ml-4">European Cities</span>
                  </a>
                </li>
                <li>
                  <a
                    className="
                      inline-flex
                      items-center
                      w-full
                      px-4
                      py-2
                      mt-1
                      text-base text-gray-900
                      transition
                      duration-500
                      ease-in-out
                      transform
                      rounded-lg
                      focus:shadow-outline
                      hover:bg-gray-100
                    "
                    href="#"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="ml-4">About</span>

                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarDesktop;
