import React from 'react';

function CharacterStats(props) {
  return (
    <div key={props.name}>
      <div className='col'>
        <li key={props.name}>{props.name}</li>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default CharacterStats;
