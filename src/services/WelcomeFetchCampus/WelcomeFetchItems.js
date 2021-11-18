/* eslint-disable import/prefer-default-export */
// Fetch All Campus from Supabase and export to Welcome Page grid.
import supabase from '../supabaseClient';

const WelcomeFetchCampus = async () => {
  const { data: campus, error } = await supabase
    .from('campus')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.log(error);
    return ErrorEvent.toString;
  }
  console.log(campus);
  return campus;
};

export default WelcomeFetchCampus;
