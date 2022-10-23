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
    for (let x = 0; x < this.props.character.length; x++) {
      if (this.props.name === this.props.character[x]) {
        bonus = BonusCalc(this.props.stat + this.props.prof);
        confirm = <i className="fa-solid fa-circle"></i>;
        break;
      } else {
        bonus = BonusCalc(this.props.stat);
        confirm = '';
      }
    }

    return (
      <React.Fragment>
        <span>{confirm}  </span>
        <b>{this.props.name}: </b>
        <span>
          {bonus}
        </span>

        <a id={bonus} className='ms-1 roll fa-solid fa-dice-d20 no-underline' data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
      </React.Fragment>
    );
  }
}
