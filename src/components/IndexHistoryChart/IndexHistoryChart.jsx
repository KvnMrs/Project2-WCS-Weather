/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import { fromUnixTime, formatISO9075 } from 'date-fns';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const IndexHistoryChart = ({ data }) => {
  const items = [];

  function createItems() {
    data.forEach((item) => {
      const newItem = {
        aqi: item.main.aqi,
        dt: formatISO9075(fromUnixTime(item.dt)).substr(0, 16),
        co: item.components.co,
        pm25: item.components.pm2_5,
        pm10: item.components.pm10,
      };

      items.push(newItem);
      return newItem;
    });
    console.log(items);
  }

  createItems();

  return (
    <div>
      {data ? (
        <div className="p-6">
          <h1>Air Quality Index, last 31 days.</h1>
          <br />
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={items}>
              <defs>
                <linearGradient id="color-index" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="20%" stopColor="#7C3AED" stopOpacity="1" />
                  <stop offset="40%" stopColor="#DC2626" stopOpacity="1" />
                  <stop offset="60%" stopColor="#FBBF24" stopOpacity="1" />
                  <stop offset="80%" stopColor="#34D399" stopOpacity="1" />
                </linearGradient>
              </defs>
              <YAxis
                yAxisId="left"
                orientation="left"
                height="5"
                axisLine={false}
              />

              <Area
                yAxisId="left"
                strokeWidth="2"
                stroke="#F87171"
                fill="url(#color-index)"
                type="monotone"
                activeDot="true"
                dataKey="aqi"
              />

              <XAxis dataKey="dt" tickCount="3" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <br />
          <h1>Carbon Monoxide (μg/m3), last 31 days.</h1>
          <br />
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={items}>
              <defs>
                <linearGradient id="color-co" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7C3AED" stopOpacity="1" />
                  <stop offset="40%" stopColor="#DC2626" stopOpacity="1" />
                  <stop offset="50%" stopColor="#DC2626" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#DC2626" stopOpacity="0.8" />
                  <stop offset="90%" stopColor="#FBBF24" stopOpacity="0.8" />
                  <stop offset="98%" stopColor="#34D399" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <YAxis yAxisId="left" orientation="left" />

              <Area
                strokeWidth="2"
                stroke="#F87171"
                fill="url(#color-co)"
                yAxisId="left"
                type="monotone"
                dataKey="co"
                activeDot="true"
              />

              <XAxis dataKey="dt" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <br />
          <h1>Fines & Coarse particules matter (μg/m3), last 31 days.</h1>
          <br />
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={items}>
              <YAxis yAxisId="left" orientation="left" />

              <Area yAxisId="left" type="monotone" dataKey="pm25" />
              <Area yAxisId="left" type="monotone" dataKey="pm10" />

              <XAxis dataKey="dt" />
              <Tooltip />
            </AreaChart>
          </ResponsiveContainer>
          <br />
        </div>
      ) : null}
    </div>
  );
};

export default IndexHistoryChart;
