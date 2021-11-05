/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// import supabase from '../services/supabaseClient';

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-row items-center justify-between lg:justify-start p-4">
        <Link
          href="/Home"
          className="text-lg font-bold tracking-tighter text-wild_red transition duration-500 ease-in-out transform tracking-relaxed"
        >
          WCSweather
        </Link>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Fermer' : 'Ouvert'}
        </button>
        {isOpen && (
          <div className="fixed right-4 p-4">
            <div className="absolute right-0 mt-4">
              <div className="px-2 py-2 bg-white rounded-md shadow">
                <Link
                  to="/Home"
                  className="block px-4 py-2 mt-2 text-sm md:mt-0 text-dark_wild_red hover:bg-grey focus:outline-none focus:shadow-outline"
                >
                  Home
                </Link>
                <Link
                  to="/AboutUs"
                  className="block px-4 py-2 mt-2 text-sm md:mt-0 text-dark_wild_red focus:outline-none focus:shadow-outline"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="user-container">
              <h1 className="text-center my-5">Hello Francois</h1>
            </div>

            <div className="card card-about-descript space-card">
              <div className="card-body">
                <h2>About this Project</h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, libero labore unde repellat mollitia quos voluptas in
                  veritatis repellendus obcaecati rerum. Ut voluptate laudantium
                  facilis similique sequi veritatis consectetur blanditiis.
                </p>
              </div>
            </div>

            <div className="card card-about-people text-center space-card">
              <div className="card-body">
                <img
                  src="https://th.bing.com/th/id/R.bbcc509890c5e4cc1baa2075543923ac?rik=rdyB29H1rY8IQA&pid=ImgRaw&r=0"
                  alt="People 1"
                  className="people"
                />
              </div>
              <div>
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg"
                  alt="Lindkedin"
                  className="logo-reseau"
                />
                <img
                  src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Simbolo-1080x608.jpg"
                  alt="Lindkedin"
                  className="logo-reseau"
                />
                <div>
                  <h4 className="litle-margin"> Prénom - Nom</h4>
                  <p> Jr. Web Developer</p>
                </div>
              </div>
            </div>
            <div className="card card-about-people text-center m-auto space-card">
              <div className="card-body">
                <img
                  src="https://th.bing.com/th/id/R.bbcc509890c5e4cc1baa2075543923ac?rik=rdyB29H1rY8IQA&pid=ImgRaw&r=0"
                  alt="People 1"
                  className="people"
                />
              </div>
              <div>
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/03/Color-of-the-LinkedIn-Logo.jpg"
                  alt="Lindkedin"
                  className="logo-reseau"
                />
                <img
                  src="https://1000marcas.net/wp-content/uploads/2020/02/GitHub-Simbolo-1080x608.jpg"
                  alt="Lindkedin"
                  className="logo-reseau"
                />
                <div>
                  <h4> Prénom - Nom</h4>
                  <p> Jr. Web Developer</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
