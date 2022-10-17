import React from 'react';
import BonusCalc from './bonus-calc';

export default class StatCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoll: ''
    };

  }

  render() {
    const bonus = BonusCalc(this.props.stat);

    return (
      <React.Fragment>
        <span>
          {bonus}
        </span>

        <a id={bonus} className='roll fa-solid fa-dice-d20 no-underline' data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
      </React.Fragment>
    );
  }
}
