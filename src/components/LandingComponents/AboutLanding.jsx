/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import GitHubLogo from '../../assets/GitHublogo.png';
import LinkedinLogo from '../../assets/Linkedinlogo.png';
import CamillePicture from '../../assets/photo-camille.jpeg';
import FrancoisPicture from '../../assets/photo-francois.jpeg';
import KevinPicture from '../../assets/photo-kevin.jpeg';
import RobinPicture from '../../assets/photo-robin.jpeg';

const features = [
  {
    name: 'Camille Hautois',
    linkedin: 'https://www.linkedin.com/in/camille-hautois-075633146/',
    github: 'https://github.com/Camille1993',
    photo: CamillePicture,
  },
  {
    name: 'Kévin Marais',
    linkedin: 'https://www.linkedin.com/in/k%C3%A9vin-marais-861314216/',
    github: 'https://github.com/KvnMrs',
    photo: KevinPicture,
  },
  {
    name: 'François Chatelier',
    linkedin: 'https://www.linkedin.com/in/francois-chatelier',
    github: 'https://github.com/Francois-Chatelier',
    photo: FrancoisPicture,
  },
  {
    name: 'Robin Beaudru',
    linkedin: 'https://www.linkedin.com/in/robinbeaudru/',
    github: 'https://github.com/robinbdru',
    photo: RobinPicture,
  },
];

const AboutLanding = () => {
  return (
    <div className="px-4 mt-28 sm:mt-36 mx-auto w-full max-w-7xl">
      <div>
        <h1 className=" text-4xl text-gray-800 pr-12 sm:text-6xl font-bold tracking-tight">
          Learn more about this project.
        </h1>
        <p className="mt-8 text-xl">
          We are<span className="text-dark_wild_red"> 4 Wilders</span>, students
          in Nantes, France.
          <br />
          This is our <span className="text-dark_wild_red">2nd project</span>
          wich is part of the Web Dev bootcamp.
          <br />
          <br />
          We think 
          <span className="text-dark_wild_red">
            that air pollution is a very real problem 
          </span>
          and wanted to create a little product about it.
        </p>
      </div>
      <div className="w-full mt-16 flex-grow grid grid-cols-1 gap-x-2 sm:gap-x-4 gap-y-4 sm:grid-cols-4">
        {features.map((item) => (
          <div className="p-8 mb-10 flex flex-col items-center justify-center bg-white rounded-lg border border-gray-100 text-center hover:scale-105 hover:shadow-lg transform hover:-translate-y-2 transition-all ease-in-out duration-200">
            <div className="bg-gray-100 mb-10 rounded-full h-20 w-20 border border-gray-200 overflow-hidden">
              <img src={item.photo} alt="Photo" />
            </div>

            <h2 className=" w-full mb-1 font-medium text-gray-800 text-xl">
              {item.name}
            </h2>
            <p className="mb-10 text-gray-500 text-sm">Jr. Web Developer</p>
            <div className="flex flex-row gap-x-5 justify-center">
              <a href={item.github} target={item.github}>
                <img src={GitHubLogo} alt="GitHub Logo" className="h-6" />
              </a>
              <a href={item.linkedin} target={item.linkedin}>
                <img src={LinkedinLogo} alt="LinkedIn Logo" className="h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutLanding;
