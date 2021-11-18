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
      <div className="bg-gray-50">
        {chartData ? (
          <div className="flex flex-col">
            <AQIchart items={chartData} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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
