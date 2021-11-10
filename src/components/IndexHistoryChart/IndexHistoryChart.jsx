/* eslint-disable new-cap */
/* eslint-disable camelcase */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const IndexHistoryChart = ({ data }) => {
  const items = [];

  function createItems() {
    data.forEach((item) => {
      const newItem = {
        dt: item.dt,
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
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <Area type="monotone" dataKey="value1" />
            <XAxis dataKey="date" />
            <YAxis dataKey="value1" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
};

export default IndexHistoryChart;
