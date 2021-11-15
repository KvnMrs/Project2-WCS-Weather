/* eslint-disable */
import React from 'react';
import SmileCampus from './IconeswcsCampus/Smile_wcsCampus';
import { TempToday } from './TempWeek';

function DashCity() {
  return (
    <div className="rounded-lg bg-gray-50 h-100 mb-5 h-400 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="grid-rows lg:grid grid-cols-9">
        <div className="m-8 pt-8">
          {/** ALL CITY CAMPUS */}
          <h1 className="items-center grid justify-items-center lg:text-start text-2xl">
            Lisbonne
            <br />
            <span className="text-sm">
              Portugal
            </span>
          </h1>
        </div>
        <div />
        <div className="bg-green-100 h-40  grid-cols-6 grid col-span-4">
          <div>
            {/** INDEX */}
            <h1>
              <div className="justify-content-start">
                <div className="mt-14 lg:mt-10 ml-2">
                  <h1 className="text-6xl md:text-7xl">
                    1
                    <span className="text-xl">
                      /5
                    </span>
                  </h1>
                </div>
              </div>
            </h1>
          </div>
          <div className="justify-items-center items-center mt-8 mr-3 pr-4 col-span-2 lg:col-span-1">
            {/** EMOJI ABOUT TIME */}
            <SmileCampus />
          </div>
          {/** INFOS ABOUT AIR QUALITY */}
          <ul className="grid col-span-3 text-xs lg:text-sm">
            <li className="flex justify-between items-end mb-5 mr-1 ml-1 lg:mr-3">
              Carbon monoxyde:
              <span>
                infos
              </span>
            </li>
            <li className="flex justify-between items-end mb-5 mr-1 ml-1 lg:mr-3">
              Fines particules:
              <span>
                infos
              </span>
            </li>
            <li className="flex justify-between items-end mb-5 mr-1 ml-1 lg:mr-3">
              Coarses particules:
              <span>
                infos
              </span>
            </li>
          </ul>
        </div>
        {/** WEATHER ON 3 DAYS */}
        <div className="grid grid-cols-3 pt-1 lg:col-span-3">
          <TempToday />
        </div>
      </div>
    </div>
  );
}

export default DashCity;
