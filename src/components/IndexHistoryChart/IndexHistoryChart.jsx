/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import { fromUnixTime, formatRFC7231 } from 'date-fns';
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
        dt: formatRFC7231(fromUnixTime(item.dt)).substr(4, 8),
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
        <div className="p-6 bg-gray-50">
          <div className="py-10 pr-10 pl-6 bg-white border-red-200 rounded-lg shadow-sm">
            <div className="flex flex-col">
              <h1>Air Quality Index, last 31 days.</h1>
              <br />
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={items}>
                  <defs>
                    <linearGradient
                      id="color-index"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
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

                  <Tooltip />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <br />
          <br />

          <br />
          <br />
          <div className="grid grid-cols-2 gap-x-6">
            <div className="py-10 pr-10 pl-6 bg-white border-red-200 rounded-lg shadow-sm">
              <div className="flex flex-col">
                <h1 className="pl-5 text-xl font-semibold text-gray-700">
                  Carbon Monoxide (μg/m3)
                </h1>
                <p className="pl-6 pt-3 uppercase text-sm font-medium text-gray-500">
                  last 31 days
                </p>
              </div>
              <div className="h-4 my-5" />
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={items}>
                  <defs>
                    <linearGradient id="color-co" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DC2626" stopOpacity="1" />
                      <stop
                        offset="80"
                        stopColor="#DC2626"
                        stopOpacity="0.00"
                      />
                      {/*<stop offset="50%" stopColor="#DC2626" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#DC2626" stopOpacity="0.8" />
                  <stop offset="90%" stopColor="#FBBF24" stopOpacity="0.8" />
                  <stop offset="98%" stopColor="#34D399" stopOpacity="0.8" /> */}
                    </linearGradient>
                  </defs>
                  <YAxis
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Inter',
                    }}
                    yAxisId="left"
                    orientation="left"
                    tickLine={false}
                    ticks={false}
                    axisLine={false}
                  />

                  <XAxis
                    style={{
                      fontSize: '11px',
                      fontFamily: 'Inter',
                      paddingTop: '10px',
                      marginTop: '10px',
                    }}
                    dataKey="dt"
                    ticks
                    tickLine={false}
                    axisLine={false}
                    padding={{ left: 30, right: 30, top: 30 }}
                    tickMargin="10"
                  />

                  <Area
                    className="px"
                    strokeWidth="2"
                    stroke="#F87171"
                    fill="url(#color-co)"
                    yAxisId="left"
                    type="monotone"
                    dataKey="co"
                    activeDot="true"
                  />
                  <Tooltip />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="py-10 pr-10 pl-6 bg-white border-red-200 rounded-lg shadow-sm">
              <div className="flex flex-col">
                <h1 className="pl-5 text-xl font-semibold text-gray-700">
                  Fines particules matter (μg/m3)
                </h1>
                <p className="pl-6 pt-3 uppercase text-sm font-medium text-gray-500">
                  last 31 days
                </p>
              </div>
              <div className="h-4 my-5" />
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={items}>
                  <defs>
                    <linearGradient id="color-co" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#DC2626" stopOpacity="1" />
                      <stop
                        offset="80"
                        stopColor="#DC2626"
                        stopOpacity="0.00"
                      />
                      {/*<stop offset="50%" stopColor="#DC2626" stopOpacity="0.9" />
                  <stop offset="75%" stopColor="#DC2626" stopOpacity="0.8" />
                  <stop offset="90%" stopColor="#FBBF24" stopOpacity="0.8" />
                  <stop offset="98%" stopColor="#34D399" stopOpacity="0.8" /> */}
                    </linearGradient>
                  </defs>
                  <YAxis
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Inter',
                    }}
                    yAxisId="left"
                    orientation="left"
                    tickLine={false}
                    ticks={false}
                    axisLine={false}
                  />

                  <XAxis
                    style={{
                      fontSize: '11px',
                      fontFamily: 'Inter',
                      paddingTop: '10px',
                      marginTop: '10px',
                    }}
                    dataKey="dt"
                    ticks
                    tickLine={false}
                    axisLine={false}
                    padding={{ left: 30, right: 30, top: 30 }}
                    tickMargin="10"
                  />

                  <Area
                    strokeWidth="2"
                    stroke="#F87171"
                    fill="url(#color-co)"
                    yAxisId="left"
                    type="monotone"
                    activeDot="true"
                    dataKey="pm10"
                  />

                  <Tooltip />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

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
