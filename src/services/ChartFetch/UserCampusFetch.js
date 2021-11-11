/* eslint-disable import/prefer-default-export */
import supabase from '../supabaseClient';

// This file fetch the current user user_campus

export const UserCampusFetch = async (id) => {
  // Get current user_campus
  const { data: userCampus, error } = await supabase
    .from('user_campus')
    .select('*')
    .eq('user_id', id);
  if (error) {
    console.log(error);
    return ErrorEvent.toString;
  }
  // Return the user_campus
  return userCampus;
};
