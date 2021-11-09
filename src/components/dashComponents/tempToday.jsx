/* eslint-disable arrow-body-style */
import React from 'react';

const TempToday = () => {
  return (
    <div className="flex justify-center items-center text-xs text-center lg:text-sm">
      <div>
        <h1 className="pb-1">
          Today
        </h1>
        <div className="rounded-lg bg-red-200 h-24 ">
          temp
        </div>
        <div>
          <h1>
            12°C to 23°C
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TempToday;