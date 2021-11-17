import React, { useState } from 'react';

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
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
              // fill-rule="evenodd"
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
    </div>
  );
}

export default NavbarMobile;
