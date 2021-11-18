/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import AboutLanding from '../components/LandingComponents/AboutLanding';
import CtaLanding from '../components/LandingComponents/CtaLanding';
import FeaturesLanding from '../components/LandingComponents/FeaturesLanding';
import FooterLanding from '../components/LandingComponents/FooterLanding';
import Hero from '../components/LandingComponents/Hero';

import NavLanding from '../components/LandingComponents/NavLanding';
import NavMobileLanding from '../components/LandingComponents/NavMobileLanding';

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
