/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';

const features = [
  {
    title: 'Get the air quality index (A.Q.I.) hour by hour.',
    text: 'The air quality index is rated from 1 to 5, with 1 being "good" and 5 being "poor". Different methods are used to develop this index.',
  },
  {
    title: 'Get accurate pollutant data composing A.Q.I.',
    text: 'The A.Q.I. is measured according to the concentrations of different pollutants, we give you access to these details.',
  },
  {
    title: 'Reveice alerts when A.Q.I. is poor',
    text: 'In order to anticipate the upcoming pollution peaks, we warn you by SMS before they appear.',
  },
];

const FeaturesLanding = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl mt-24">
      <div className="w-full flex-grow grid grid-cols-1 gap-24 sm:grid-cols-3">
        {features.map((item) => (
          <div>
            <h2 className="flex w-full mb-3 font-semibold text-gray-800 text-xl">
              {item.title}
            </h2>
            <p className="text-xl text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesLanding;
