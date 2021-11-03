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
// import WelcomePopup from '../components/WelcomePopup.jsx/WelcomePopup';
import WelcomeSearch from '../components/WelcomeSearch/WelcomeSearch';

const Welcome = () => {
  // Welcome Page
  //
  // Search input States
  const [search, setSearch] = useState('');

  /*   const [popupVisible, setPopupVisible] = useState(false);
  const [popupItem, setPopupItem] = useState(null);

  function DisplayPopup(item) {
    setPopupItem(item);
    setPopupVisible(true);
  }

  function HidePopup() {
    setPopupItem(null);
    setPopupVisible(false);
  } */

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="flex flex-col pt-24 lg:p-20 mx-auto max-w-6xl lg:max-w-7xl items-center">
        {/*         {popupVisible ? (
          <WelcomePopup popupItem={popupItem} HidePopup={HidePopup()} />
        ) : null} */}
        <WelcomeHeader />
        <WelcomeSearch search={search} setSearch={setSearch} />
        <div>
          <CampusGrid
            search={search}
            // DisplayPopup={DisplayPopup()}
            // HidePopup={HidePopup()}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
