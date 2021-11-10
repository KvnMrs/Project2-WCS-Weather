/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import axios from 'apisauce/node_modules/axios';
import { getUnixTime } from 'date-fns';

export const ApiHistoryFetch = ({ latitude, longitude, handleData }) => {
  //
  // Latitude + Longitude + Key Parameters
  const key = 'ae8db554743a0d9e76dda942a3f3fb05';

  console.log(latitude, longitude);
  //
  // Start & End Dates Parameters (UNIX format)
  const endDateUnix = getUnixTime(new Date());
  const startDateUnix = endDateUnix - 2678400 / 2;
  //
  // URL
  //
  const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${startDateUnix}&end=${endDateUnix}&appid=${key}`;
  //
  // Fetch Data from API
  const fetchAPI = async () => {
    axios.get(url).then((res) => handleData(res));
  };

  fetchAPI();

  console.log(url);
  //
  //
};
