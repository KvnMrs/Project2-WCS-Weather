/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

import axios from 'apisauce/node_modules/axios';
import { getUnixTime, formatRFC7231, fromUnixTime } from 'date-fns';
import UserCampusFetch from './UserCampusFetch';
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
  const url = `https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${startDateUnix}&end=${endDateUnix}&appid=${key}`;
  // Log URL
  // Axios Get request
  const RowData = await axios.get(url).then((res) => res.data?.list);
  return RowData;
}

// Structuring function for each items from API
async function createItems(RowData) {
  const newItems = RowData.map((item) => ({
    aqi: item.main.aqi,
    dt: new Date(formatRFC7231(fromUnixTime(item.dt))).toLocaleDateString(
      'fr-FR',
      {
        month: 'short',
        day: 'numeric',
      },
    ),
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
  // Invoke API Fetch with Lat and Long from user_campus
  const fetchRowData = await getData(userCampus[0]);
  // Invoke items creation function
  const structuredItems = await createItems(fetchRowData);

  return structuredItems;
};

export const ApiHistoryFetch = async () => {
  const data = await fetchAPI();
  return data;
};
