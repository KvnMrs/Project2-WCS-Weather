import React from 'react';

function GraphiqueMeteo() {
  return (
    <div className="rounded-lg bg-blue-300 h-100">
      <div className="grid grid-row-2">
        <div>
          <h1>
            TEMP HISTORY
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

export default GraphiqueMeteo;
