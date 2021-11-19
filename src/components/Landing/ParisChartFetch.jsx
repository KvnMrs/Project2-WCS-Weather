/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

import axios from 'apisauce/node_modules/axios';
import { formatRFC7231, getUnixTime, fromUnixTime } from 'date-fns';

async function getApiData() {
  const latitude = '48.8534';
  const longitude = '2.3488';
  const endDateUnix = getUnixTime(new Date());
  const startDateUnix = endDateUnix - 1339200;

  const key = 'ae8db554743a0d9e76dda942a3f3fb05';
  const url = `http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${latitude}&lon=${longitude}&start=${startDateUnix}&end=${endDateUnix}&appid=${key}`;

  // Axios Get request
  const RowData = await axios.get(url).then((res) => res.data?.list);

  return RowData;
}

async function structureData(data) {
  const newItems = data.map((item) => ({
    Carbon_Monoxyde: item.components.co,
    date: new Date(formatRFC7231(fromUnixTime(item.dt))).toLocaleDateString(
      'fr-FR',
      {
        month: 'short',
        day: 'numeric',
      },
    ),
  }));
  // Return structured Datas
  return newItems;
}

const ParisChartFetch = async () => {
  const rawData = await getApiData();
  const structuredData = await structureData(rawData);

  return structuredData;
};

export default ParisChartFetch;
