/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { ApiHistoryFetch } from '../../services/ChartFetch/ApiHistoryFetch';
import COchart from '../COchart/COchart';

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
        {chartData ? <p>1. THERE IS DATAAA !</p> : null}
        {chartData ? (
          <div>
            <COchart items={chartData} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Charts;
