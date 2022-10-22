// import React from 'react';

function ProfCalc(props) {
  let bonus;
  if (props <= 4 && props >= 1) {
    bonus = 2;
  } else if (props <= 8 && props >= 5) {
    bonus = 3;
  } else if (props <= 12 && props >= 9) {
    bonus = 4;
  } else if (props <= 16 && props >= 13) {
    bonus = 5;
  } else if (props >= 17) {
    bonus = 6;
  }

  return bonus;
}

export default ProfCalc;
