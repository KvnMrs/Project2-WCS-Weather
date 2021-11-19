/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';

const FooterLanding = () => {
  return (
    <div className="w-full mt-20 pt-20 pb-12 px-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 items-end">
        <div>
          <div className="max-w-sm">
            <p className="text-left text-2xl text-wild_red font-bold">
              WCS <span className="font-normal text-xl">weather</span>
            </p>
            <p className="mt-2 text-base text-gray-600">
              We provide Air Quality Index (A.Q.I.) and stats for the air you
              are breathing in the city where your WCS campus is located.
              <br />
              <br />
              Stay safe !
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-xs text-left my-8 md:mt-8 md:my-0">
              All right reserved WCS WEATHER® - 2021
            </p>
          </div>
        </div>

        <div className="flex md:justify-end">
          <div className="flex flex-row flex-wrap text-left md:flex-col justify-start md:justify-end md:text-center gap-x-5 gap-y-4 mt-2 text-base text-gray-600">
            <div className="flex justify-end">
              <a className="hover:underline" href="/login">
                Login
              </a>
            </div>
            <div className="flex justify-end">
              <a className="hover:underline" href="/login">
                Create account
              </a>
            </div>
            <div className="flex justify-end">
              <a className="hover:underline" href="/login">
                Dashboard
              </a>
            </div>
            <div className="flex justify-end">
              <a className="hover:underline" href="/login">
                Legal Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLanding;
