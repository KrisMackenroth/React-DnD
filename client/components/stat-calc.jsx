import React from 'react';

function StatCalc(props) {
  let bonus;
  if (props.stat === '3') {
    bonus = -4;
  } else if (props.stat === '4' || props.stat === '5') {
    bonus = -3;
  } else if (props.stat === '6' || props.stat === '7') {
    bonus = -2;
  } else if (props.stat === '8' || props.stat === '9') {
    bonus = -1;
  } else if (props.stat === '10' || props.stat === '11') {
    bonus = 0;
  } else if (props.stat === '12' || props.stat === '13') {
    bonus = 1;
  } else if (props.stat === '14' || props.stat === '15') {
    bonus = 2;
  } else if (props.stat === '16' || props.stat === '17') {
    bonus = 3;
  } else if (props.stat === '18' || props.stat === '19') {
    bonus = 4;
  } else if (props.stat === '20') {
    bonus = 5;
  }
  return (
    <div>
      {bonus}
    </div>
  );
}

export default StatCalc;
