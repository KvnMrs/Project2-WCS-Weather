/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const PMchart = (items) => {
  return (
    <div className="md:py-10 md:pr-5 py-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all transform duration-200">
      <div className="flex flex-col mb-12 pl-5">
        <h1 className=" text-xl font-semibold text-gray-700">
          Coarse Particules Matter (μg/m3)
        </h1>
        <p className=" pt-1 uppercase text-sm font-medium text-gray-500">
          last 30 days
        </p>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={items.items}>
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
            dataKey="dt"
            ticks
            tickLine={false}
            axisLine={false}
            padding={{ left: 30, right: 30, top: 30 }}
            tickMargin="15"
          />

          <Area
            dataKey="pm10"
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

export default PMchart;
