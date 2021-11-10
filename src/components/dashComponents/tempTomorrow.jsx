/* eslint-disable arrow-body-style */
import React from 'react';

const TempTomorrow = () => {
  return (
    <div className="flex justify-center items-center text-xs text-center lg:text-sm">
      <div>
        <h1 className="pb-1">
          Tomorrow
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

export default TempTomorrow;
