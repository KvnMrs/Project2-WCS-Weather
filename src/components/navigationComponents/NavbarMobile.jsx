import React, { useState } from 'react';
import { motion } from 'framer-motion';

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div className=" w-full mb-5 fixed top-0 bg-gray-200 z-50 flex flex-row items-center justify-between sm:hidden p-4">
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
              // fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
      <div className="sm:hidden ">
        {isOpen && (
          <motion.div
            className="absolute inset-x-0 top-0 z-40 mt-16"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: '-0%' }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full">
              <ul className=" flex flex-col bg-gray-200 px-4 py-2 w-full">
                <a
                  className="hover:bg-wild_red py-2 text-left text-2xl font-normal text-gray-800"
                  href="/dashboard"
                >
                  Dashboard
                </a>
                <a
                  className="hover:bg-wild_red py-2 text-left text-2xl font-normal text-gray-800"
                  href="/europeancity"
                >
                  European city
                </a>
                <a
                  className="hover:bg-wild_red py-2 text-left text-2xl font-normal text-gray-800"
                  href="/about"
                >
                  About
                </a>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default NavbarMobile;
