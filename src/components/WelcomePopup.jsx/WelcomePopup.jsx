import React from 'react';

const WelcomePopup = ({ item, handleHide }) => {
  const {
    name, country, flag, imageUrl,
  } = item;
  // WelcomePopup display the selected campus and ask for confirmation
  return (
    <div className="fixed max-w-xl w-full">
      <div className="flex w-full h-full flex-col justify-between bg-white z-50 p-14 shadow-2xl rounded-3xl">
        <div className="mb-8 text-center">
          <div className="relative mb-8">
            <img
              className="h-52 w-full rounded-3xl object-cover bg-center bg-blend-luminosity"
              src={imageUrl}
              alt={name}
            />
            <div className="bg-gray-900 h-full w-full absolute inset-0 rounded-3xl bg-opacity-30 group-hover:bg-opacity-10 transition-all duration-200 ease-in-out" />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row align-middle justify-center">
              <p className="mr-3 text-sm">{flag}</p>
              <p className="text-sm font-bold text-gray-500 tracking-wide uppercase mb-2">
                {country}
              </p>
            </div>
            <p className="text-5xl font-light text-gray-800">{name}</p>
          </div>
        </div>
        <div className="h-px bg-gray-300 mb-6" />
        <p className="text-center text-gray-500 font-normal text-xl pt-2">
          Can you confirm that you are in
          {' '}
          {name}
          {' '}
          ?
        </p>
        <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-y-0 mt-8 gap-x-2">
          <button
            type="button"
            onClick={() => handleHide()}
            className="px-12 py-4 bg-gray-200 rounded-md font-bold tracking-wider text-gray-500 text-sm uppercase hover:bg-gray-300 transition-all transition-duration-150 ease-in-out"
          >
            Dismiss
          </button>
          <button
            type="submit"
            className="w-full px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase  hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
          >
            Yes, I confirm !
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
