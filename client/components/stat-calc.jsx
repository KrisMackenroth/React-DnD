import React from 'react';
import BonusCalc from './bonus-calc';

export default class StatCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoll: '',
      proficent: 'not-proficent'
    };
  }

  render() {
    let bonus;
    let confirm;
    if (this.props.name === this.props.character) {
      bonus = BonusCalc(this.props.stat + this.props.prof);
      confirm = ' yes';
    } else {
      bonus = BonusCalc(this.props.stat);
      confirm = '';
    }

    return (
      <React.Fragment>
        <b>{this.props.name}</b>
        <span>
          {bonus}
          {confirm}
        </span>

        <a id={bonus} className='roll fa-solid fa-dice-d20 no-underline' data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
      </React.Fragment>
    );
  }
}
