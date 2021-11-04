import React from 'react';

function DashPrincipal() {
  return (
    <section className="text-gray-700">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto lg:px-24">
        <div>
          <div className="flex flex-wrap py-8 md:flex-nowrap">
            <div className="prose md:flex-grow prose-md lg:pr-12">
              <p>text</p>
            </div>
            <div className="flex flex-col flex-shrink-0 px-4 mb-6 md:w-64 md:mb-0">
              <strong className="
              flex
              text-3xl
              font-thin
              leading-none
              text-left text-neutral-600
              lg:text-4xl
            " >
                1.0
                <span className="text-sm">PPI </span>
              </strong>
              <span className="mt-1 text-xs font-normal leading-relaxed text-gray-700">Text</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default DashPrincipal;
