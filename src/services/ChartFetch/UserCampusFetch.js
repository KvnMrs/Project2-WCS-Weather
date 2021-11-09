/* eslint-disable import/prefer-default-export */
import supabase from '../supabaseClient';

// This file fetch the weather API with the current campus latitude and longitude.

export const UserCampusFetch = async () => {
  //
  // Get User and Id from current session
  //
  const userId = supabase.auth.user().id;
  console.log(userId);
  //
  // Get current user_campus
  //
  const { data: userCampus, error } = await supabase
    .from('user_campus')
    .select('*')
    .eq('user_id', userId);
  if (error) {
    console.log(error);
    return ErrorEvent.toString;
  }
  //
  // Return Campus to parent
  //
  console.log(userCampus);
  return userCampus;
};
