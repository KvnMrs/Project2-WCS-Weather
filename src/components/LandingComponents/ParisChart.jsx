/* eslint-disable import/order */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */

import React, { useEffect, useState } from 'react';
import ParisChartFetch from '../../components/LandingComponents/ParisChartFetch';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const ParisChart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const itemsFetched = await ParisChartFetch();
      setItems(itemsFetched);
      return itemsFetched;
    }
    fetchData();
  }, []);

  return (
    <div className="mt-20 sm:mt-32 z-10">
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={items}>
          <defs>
            <linearGradient id="color-co" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="1" />
              <stop offset="80" stopColor="#DC2626" stopOpacity="0.00" />
            </linearGradient>
          </defs>

          <YAxis
            style={{
              fontSize: '14px',
              fontFamily: 'system-ui',
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
              fontFamily: 'system-ui',
              paddingTop: '10px',
              marginTop: '10px',
            }}
            dataKey="date"
            ticks
            tickLine={false}
            axisLine={false}
            padding={{ left: 30, right: 30, top: 30 }}
            tickMargin="15"
          />

          <Area
            dataKey="Carbon_Monoxyde"
            strokeWidth="2"
            stroke="#F87171"
            fill="url(#color-co)"
            yAxisId="left"
            type="monotone"
            activeDot="true"
          />

          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ParisChart;
