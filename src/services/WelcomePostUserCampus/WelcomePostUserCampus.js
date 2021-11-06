/* eslint-disable import/prefer-default-export */
// Fetch All Campus from Supabase and export to Welcome Page grid.
import supabase from '../supabaseClient';

export const WelcomePostUserCampus = async ({ campus }) => {
  (async () => {
    if (supabase.auth.user()) {
      const { data, error } = await supabase
      .from('user_campus')
      .insert([{ campus: campusId }, { user_id: user.id }]);
    }
    if (error) {
      console.log(error);
      return ErrorEvent.toString;
    }
    return data;
  };

  
  const { campusId } = campus;
  console.log(user);
  console.log(campusId);

  const { data, error } = await supabase
    .from('user_campus')
    .insert([{ campus: campusId }, { user_id: user.id }]);
  if (error) {
    console.log(error);
    return ErrorEvent.toString;
  }
  return data;
};
