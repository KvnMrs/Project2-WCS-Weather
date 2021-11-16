/* eslint-disable import/prefer-default-export */
// import axios from 'apisauce/node_modules/axios';
import { capitales } from './CapitalesJSON';

const key = 'ae8db554743a0d9e76dda942a3f3fb05';

export const CapitalesFetch = async () => {
  const queries = capitales.map((item) => {
    const query = {
      city: item.city,
      latitude: item.latitude,
      longitude: item.longitude,
      url: `http://api.openweathermap.org/data/2.5/air_pollution?lat=${item.latitude}&lon=${item.longitude}&appid=${key}`,
    };
    return query;
  });
  const data = queries;
  console.log(data);
  return data;
};

/* const data = await capitales.map((item) => {
  const { latitude, longitude, city } = item;
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${key}`;
  const fetchAPI = axios.get(url).then((res) => res.data?.list);

  return fetchAPI;
}); */
