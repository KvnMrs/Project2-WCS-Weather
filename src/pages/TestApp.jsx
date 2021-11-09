/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import supabase from '../services/supabaseClient';

const Home = () => {
  // Get current User and user Id
  const currentUser = supabase.auth.user();
  const currentUserId = currentUser.id;

  console.log(currentUser);

  // eslint-disable-next-line no-unused-vars
  const [userCampus, setUserCampus] = useState([]);

  // Get the currentUser's associeted campus in user_campus
  const getUserCampus = async () => {
    const { data: userCampusData, error } = await supabase
      .from('user_campus')
      .select('*')
      .eq('user_id', currentUserId);

    if (error) {
      console.log(error);
      return ErrorEvent.toString;
    }
    return userCampusData;
  };

  // On mount, fetch user-campus
  useEffect(() => {
    (async () => {
      const data = await getUserCampus();
      setUserCampus(data[0]);
    })();
  }, []);

  return (
    <div>
      Home Page :{currentUser.email}
      <div>{userCampus.name}</div>
      <div>{userCampus.latitude}</div>
      <div>{userCampus.longitude}</div>
      <div>{userCampus.country}</div>
      <div>{userCampus.request}</div>
    </div>
  );
};

export default Home;
