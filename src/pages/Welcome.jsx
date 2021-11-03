/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-shadow */
/* eslint-disable radix */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable operator-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */

import React, { useState } from 'react';
import CampusGrid from '../components/WelcomeCampusGrid/CampusGrid';
import WelcomeHeader from '../components/WelcomeHeader/WelcomeHeader';
import WelcomePopup from '../components/WelcomePopup.jsx/WelcomePopup';
import WelcomeSearch from '../components/WelcomeSearch/WelcomeSearch';

const Welcome = () => {
  // Welcome Page
  //
  // Search input States
  const [search, setSearch] = useState('');

  // Popup Display States
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState([null]);

  // Toggle Show state function
  function functionToggleShowPopup() {
    setPopupItem([null]);
    setShowPopup(false);
  }

  // Clean popupItem and set new Item into import PropTypes from 'prop-types'
  function functionSetupPopupItem(itemForPopup) {
    setPopupItem([]);
    setPopupItem([itemForPopup]);
    setShowPopup(true);
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="flex flex-col pt-24 lg:p-20 mx-auto max-w-6xl lg:max-w-7xl items-center">
        {showPopup ? (
          <WelcomePopup
            popupItem={popupItem.length > 0 ? popupItem[0] : null}
            functionToggleShowPopup={functionToggleShowPopup()}
          />
        ) : null}

        <WelcomeHeader />
        <WelcomeSearch search={search} setSearch={setSearch} />
        <div>
          <CampusGrid
            search={search}
            functionToggleShowPopup={functionToggleShowPopup()}
            functionSetPopupItem={functionSetupPopupItem()}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
