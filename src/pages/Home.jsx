/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React from 'react';
import supabase from '../services/supabaseClient';

const Home = () => {
  const user = supabase.auth.user();
  console.log(user);

  return <h1>Home Page :{user.email}</h1>;
};

export default Home;
