/* eslint-disable react/prop-types */
import React from 'react';

function DashboardCard({ element }) {
  return (
    <div className="bg-green-300">
      <ul>
        <li>{element.icon}</li>
        <li>{element.description}</li>
      </ul>
    </div>
  );
}
export default DashboardCard;
