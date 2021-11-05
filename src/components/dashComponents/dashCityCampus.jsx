import React from 'react';

function DashCity() {
  return (
    <div className="rounded-lg bg-white h-100 mb-5 h-40">
      <div className="grid-rows lg:grid grid-cols-10">
        <div className="m-10">
          <h1 className="text-center lg:text-start text-2xl">
            Lisbonne
            <br />
            <span className="text-sm">
              Portugal
            </span>
          </h1>
        </div>
        <div />
        <div className="bg-green-50 h-40 grid grid-cols-6 grid col-span-4">
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
          <div className="rounded-lg bg-red-200 h-24 align-items-center">
            image
          </div>
          <div className="p-6">
            <p className="text-sm">
              Carbon monoxyde:
              <span className="pl-7">
                infos
              </span>
            </p>
            <p className="text-sm">
              Fines particules:
              <span className="pl-7">
                infos
              </span>
            </p>
            <p className="text-sm">
              Coarse particules:
              <span className="pl-7">
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
