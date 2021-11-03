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

const WelcomePopup = ({ popupItem, functionToggleShowPopup }) => {
  const { name, country, flag, id } = popupItem;

  // WelcomePopup display the selected campus and ask for confirmation
  return (
    <div>
      <p>{name}</p>
      <p>{country}</p>
      <p>{flag}</p>
      <p>{id}</p>
      <button onClick={functionToggleShowPopup()}>Dismiss</button>
    </div>
  );
};

export default WelcomePopup;
