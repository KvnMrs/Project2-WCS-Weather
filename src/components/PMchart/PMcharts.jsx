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
    <div className="py-10 pr-10 pl-6 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all transform duration-200">
      <div className="flex flex-col mb-12">
        <h1 className="pl-5 text-xl font-semibold text-gray-700">
          Coarse Particules Matter (μg/m3)
        </h1>
        <p className="pl-6 pt-1 uppercase text-sm font-medium text-gray-500">
          last 30 days
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
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
