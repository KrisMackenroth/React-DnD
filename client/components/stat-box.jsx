import React from 'react';

function StatBox(props) {
  return (
    <div className="stat-block">
      <div className="stat-text mb-1">{props.name}</div>
      <div className='stat-box mb-1'>{props.stat}</div>
      <div className='border-box mb-1'>{props.bonus}</div>
    </div>

  );
}

export default StatBox;
