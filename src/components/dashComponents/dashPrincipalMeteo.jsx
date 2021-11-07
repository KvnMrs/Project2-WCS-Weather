import React from 'react';

function DashMeteo() {
  return (
    <div className="rounded-lg bg-white h-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <section>
        <div className="container flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 mb-5 lg:px-8">
          <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
            <div className="grid grid-cols-3 gap-4">
              <div className="grid-rows-2 sm:pt-6">
                <h1 className="pt-3">
                  MOSTLY SUNNY
                  <br />
                </h1>
                <div className="pt-5">
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
              <div className="ml-5 lg:ml-9">
                <div className="sm: grid grid-row-span-2 mt-2">
                  <h1 className="text-5xl md:text-6xl">
                    25°
                  </h1>
                </div>
              </div>
              <div className="grid grid-cols-1 px-7 pt-4 justify-items-center text-sm h-full">
                <div className="h-auto">
                  <h1>Today</h1>
                  <div className="rounded-lg bg-red-200 h-20 ">
                    image
                  </div>
                </div>
                <h1 className="text-center text-xs lg:text-sm">12°C to 23°C</h1>
                <div className="h-auto pt-2">
                  <h1>Tomorrow</h1>
                  <div className="rounded-lg bg-red-200 h-20 ">
                    image
                  </div>
                </div>
                <h1 className="text-center text-xs lg:text-sm">12°C to 23°C</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashMeteo;
