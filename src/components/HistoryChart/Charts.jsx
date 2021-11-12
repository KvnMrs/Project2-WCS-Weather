/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { ApiHistoryFetch } from '../../services/ChartFetch/ApiHistoryFetch';
import COchart from '../COchart/COchart';
import PMchart from '../PMchart/PMcharts';
import AQIchart from '../AQIchart/AQIchart';

const Charts = () => {
  const [chartData, setChartData] = useState([]);

  // Launch Fetching Process
  useEffect(async () => {
    const finalData = await ApiHistoryFetch();
    setChartData(finalData);
  }, []);

  return (
    <>
      <div className="h-full bg-gray-50">
        History Charts
        {chartData.length > 0 ? console.log('ChartData = ', chartData) : null}
        {chartData ? <p>THERE IS DATAAA !</p> : null}
        {chartData ? (
          <div className="grid grid-cols-1 grid-rows-2">
            <AQIchart items={chartData} />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <COchart items={chartData} />
              <PMchart items={chartData} />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Charts;
