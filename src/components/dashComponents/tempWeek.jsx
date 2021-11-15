import React from 'react';

export const TempToday = () => {
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
  </div>;
};

export const TempTomorrow = () => {
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
  </div>;
};

export const TempWeek = () => {
  <div className="flex justify-center items-center text-xs text-center lg:text-sm">
    <div>
      <h1 className="pb-1">
        {/** EVERY DAY OF THE WEEK */}
        Wednesday
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
  </div>;
};
