/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import supabase from '../../services/supabaseClient';

function WelcomePopup({ item, handleHide }) {
  // Get user ID
  const userId = supabase.auth.user().id;
  // Get Campus data
  const { name, country, flag, imageUrl, id, latitude, longitude } = item;
  // For redirection
  const history = useHistory();
  const location = useLocation();

  // Create an user_campus row into user_campus table : join an user and an campus
  async function createUserCampus() {
    const { data, error } = await supabase.from('user_campus').insert({
      user_id: userId,
      campus: id,
      name: name,
      country: country,
      latitude: latitude,
      longitude: longitude,
    });
    console.log(data);
    if (error) {
      console.log(error);
    }

    console.log('Post OK.');
    history.push('/charts');
  }

  return (
    // Animation
    <AnimatePresence exitBeforeEnter>
      <motion.div
        location={location}
        key={location.state}
        className="fixed flex items-center justify-center h-full w-full bg-gray-800 bg-opacity-20 z-30"
        initial={{ opacity: 0, translateY: 15 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 15 }}
        transition={{ duration: 0.2 }}
      >
        <div className="fixed px-4 max-w-xl w-full">
          <div className="flex w-full h-full flex-col justify-between bg-white z-50 shadow-2xl rounded-3xl">
            <div className="mb-8 text-center">
              <div className="relative mb-8">
                <img
                  className="h-52 w-full rounded-t-3xl object-cover bg-center bg-blend-luminosity"
                  src={imageUrl}
                  alt={name}
                />
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
            <div className="h-px bg-gray-300 mb-6 mx-14" />
            <p className="text-center text-gray-500 font-normal text-xl pt-2 px-14">
              Can you confirm that you are in {name} ?
            </p>
            <div className="flex flex-col px-14 pb-14 gap-y-2 sm:flex-row sm:gap-y-0 mt-8 gap-x-2">
              <button
                onClick={() => {
                  handleHide();
                }}
                className="px-12 py-4 bg-gray-200 rounded-md font-bold tracking-wider text-gray-500 text-sm uppercase hover:bg-gray-300 transition-all transition-duration-150 ease-in-out"
              >
                Dismiss
              </button>
              <button
                type="submit"
                onClick={createUserCampus}
                className="w-full px-4 py-4 bg-wild_red rounded-md font-bold tracking-wider text-white text-sm uppercase  hover:bg-dark_wild_red transition-all transition-duration-150 ease-in-out"
              >
                Yes, I confirm !
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default WelcomePopup;
