import supabase from '../supabaseClient';

// This file fetch the current user user_campus

const UserCampusFetch = async (id) => {
  // Get current user_campus
  const { data: userCampus, error } = await supabase
    .from('user_campus')
    .select('*')
    .eq('user_id', id);
  if (error) {
    return ErrorEvent.toString;
  }
  // Return the user_campus
  return userCampus;
};

export default UserCampusFetch;
