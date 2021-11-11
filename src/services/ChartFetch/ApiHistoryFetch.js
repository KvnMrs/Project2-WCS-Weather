/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import axios from 'apisauce/node_modules/axios';
import { getUnixTime, formatRFC7231, fromUnixTime } from 'date-fns';
import { UserCampusFetch } from './UserCampusFetch';
import supabase from '../supabaseClient';

// Fetch the index history on the API
async function getData(userCampus) {
  // API key (normally from .env.local)
  const key = 'ae8db554743a0d9e76dda942a3f3fb05';
  // Start & End Dates Parameters (UNIX format, for the last 30 days)
  const endDateUnix = getUnixTime(new Date());
  const startDateUnix = endDateUnix - 2678400;
  // Latitude and Longitude Parameters from user_campus
  const { latitude, longitude } = userCampus;
  // API url construction
  const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${startDateUnix}&end=${endDateUnix}&appid=${key}`;
  // Log URL
  // console.log(url);
  // Axios Get request
  const RowData = await axios.get(url).then((res) => res.data?.list);
  // console.log('Row Data = ', RowData);
  return RowData;
}

// Structuring function for each items from API
async function createItems(RowData) {
  const newItems = RowData.map((item) => ({
    aqi: item.main.aqi,
    dt: formatRFC7231(fromUnixTime(item.dt)),
    co: item.components.co,
    pm10: item.components.pm10,
  }));
  return newItems;
}

// Invoke ALL functions
const fetchAPI = async () => {
  // Get User and Id from current session
  const userId = supabase.auth.user().id;
  // Invoke use_campus fetch from Supabase
  const userCampus = await UserCampusFetch(userId);
  // console.log(userCampus);
  // Invoke API Fetch with Lat and Long from user_campus
  const fetchRowData = await getData(userCampus[0]);
  // Invoke items creation function
  const structuredItems = await createItems(fetchRowData);
  // console.log(structuredItems);

  return structuredItems;
};

export const ApiHistoryFetch = async () => {
  // console.log('User ID = ', userId);

  const data = await fetchAPI();
  return data;
};
