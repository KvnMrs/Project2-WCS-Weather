import React, { useEffect, useState } from 'react';
import supabase from '../services/supabaseClient';

const Home = () => {
  const user = supabase.auth.user();
  const userId = supabase.auth.user().id;
  console.log(user);
  console.log(userId);

  const [userCampus, setUserCampus] = useState([]);

  const getUserCampus = async () => {
    const { data: userCampusData, error } = await supabase
      .from('user_campus')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.log(error);
      return ErrorEvent.toString;
    }
    return userCampusData;
  };

  useEffect(() => {
    (async () => {
      const data = await getUserCampus();
      setUserCampus(data[0]);
    })();
  }, []);

  return (
    <div>
      Home Page :
      {user.email}
      <div>{userCampus.name}</div>
      <div>{userCampus.latitude}</div>
      <div>{userCampus.longitude}</div>
      <div>{userCampus.country}</div>
      <div>{userCampus.request}</div>
    </div>
  );
};

export default Home;
