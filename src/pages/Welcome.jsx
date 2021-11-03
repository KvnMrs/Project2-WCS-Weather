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
import WelcomeSearch from '../components/WelcomeSearch/WelcomeSearch';
import WelcomePopup from '../components/WelcomePopup.jsx/WelcomePopup';

const Welcome = () => {
  const [search, setSearch] = useState('');
  const [popup, setPopup] = useState([]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div className="flex flex-col pt-24 lg:p-20 mx-auto max-w-6xl lg:max-w-7xl items-center">
        <WelcomeHeader />
        <WelcomeSearch search={search} setSearch={setSearch} />
        <div>
          <CampusGrid search={search} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
