import React from 'react';

function DashAirQuality() {
  return (
    <div className="rounded-lg bg-green-50 h-full">
      <section>
        <div className="container flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="grid grid-cols-3 gap-4">
              <div className="grid-rows-2 sm:pt-9">
                <h1 className="pt-3">
                  AIR QUALITY
                  <br />
                  <span>Index(A.Q.I)</span>
                </h1>
                <div>
                  <p className="pt-7 col-span-2">
                    Carbon monoxyde:
                    <span className="pl-5">
                      infos
                    </span>
                  </p>
                  <p className="pt-5 col-span-2">
                    Fines particules:
                    <span className="pl-5">
                      infos
                    </span>
                  </p>
                  <p className="pt-5 col-span-2">
                    Coarse particules:
                    <span className="pl-5">
                      infos
                    </span>
                  </p>
                </div>
              </div>
              <div className="ml-9">
                <div className="sm: grid grid-row-span-3 mt-2">
                  <h1 className="text-6xl md:text-7xl">
                    1
                    <span className="text-xl">
                      /5
                    </span>
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-1 px-7 justify-items-center">
                <div className="h-auto">
                  <div className="rounded-lg bg-red-200 h-24">
                    image
                  </div>
                </div>
                <h1 className="sm:m-auto text-2xl md:text-2xl">
                  GOOD
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashAirQuality;
