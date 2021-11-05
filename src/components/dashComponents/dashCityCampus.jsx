import React from 'react';

function DashCity() {
  return (
    <div className="rounded-lg bg-gray-50 h-100 mb-5 h-40 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="grid-rows lg:grid grid-cols-10">
        <div className="m-10">

          {/** VILLE */}

          <h1 className="text-center lg:text-start text-2xl">
            Lisbonne
            <br />
            <span className="text-sm">
              Portugal
            </span>
          </h1>
        </div>
        <div />
        <div className="bg-green-50 h-40  grid-cols-6 grid col-span-4">
          <div>
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
          <div className="rounded-lg bg-red-200 h-24 align-items-center mt-7 ml-4 grid col-span-2 lg:grid col-span-1">
            image
          </div>
          <div className="p-6">
            <div>
              <p className="text-sm">
                Carbon monoxyde:
                <span>
                  infos
                </span>
              </p>
            </div>
            <p className="text-sm">
              Fines particules:
              <span className="pl-10">
                infos
              </span>
            </p>
            <p className="text-sm">
              Coarse particules:
              <span className="pl-10">
                infos
              </span>
            </p>
          </div>
        </div>
        <div />
        <div />
      </div>
    </div>
  );
}

export default DashCity;
