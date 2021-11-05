import React from 'react';

function GraphiqueAir() {
  return (
    <div className="rounded-lg bg-blue-300 h-100 mb-5 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="grid grid-row-2">
        <div>
          <h1>
            A.Q.I HISTORY
          </h1>
          <span>
            in Nantes, France
          </span>
        </div>
        <div className="rounded-lg bg-red-200 h-48 md:h-96">
          Graphique
        </div>
      </div>
    </div>
  );
}

export default GraphiqueAir;
