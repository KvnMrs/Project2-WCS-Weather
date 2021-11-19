/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';

import NavLanding from './NavLanding';
import NavMobileLanding from './NavMobileLanding';
import Hero from './Hero';
import FeaturesLanding from './FeaturesLanding';
import CtaLanding from './CtaLanding';
import AboutLanding from './AboutLanding';
import FooterLanding from './FooterLanding';

export const Landing = () => {
  return (
    <div className="bg-gray-50">
      <NavLanding />
      <NavMobileLanding />
      <Hero />
      <FeaturesLanding />
      <CtaLanding />
      <AboutLanding />
      <FooterLanding />
    </div>
  );
};
