// import React from 'react';

function BonusCalc(props) {
  let bonus;
  if (props <= 1) {
    bonus = -5;
  } else if (props === 3 || props === 2) {
    bonus = -4;
  } else if (props === 4 || props === 5) {
    bonus = -3;
  } else if (props === 6 || props === 7) {
    bonus = -2;
  } else if (props === 8 || props === 9) {
    bonus = -1;
  } else if (props === 10 || props === 11) {
    bonus = 0;
  } else if (props === 12 || props === 13) {
    bonus = 1;
  } else if (props === 14 || props === 15) {
    bonus = 2;
  } else if (props === 16 || props === 17) {
    bonus = 3;
  } else if (props === 18 || props === 19) {
    bonus = 4;
  } else if (props === 20 || props > 20) {
    bonus = 5;
  }

  return bonus;
}

export default BonusCalc;
