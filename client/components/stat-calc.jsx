import React from 'react';
import BonusCalc from './bonus-calc';

export default class StatCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoll: '',
      proficent: 'not-proficent'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.classList.contains('not-proficent')) {
      this.setState({ proficent: 'proficent' });
    } else {
      this.setState({ proficent: 'not-proficent' });
    }
  }

  render() {
    let bonus;
    if (this.state.proficent === 'proficent') {
      bonus = BonusCalc(this.props.stat + this.props.prof);
    } else {
      bonus = BonusCalc(this.props.stat);
    }

    return (
      <React.Fragment>
        <span>
          {bonus}
        </span>

        <a id={bonus} className='roll fa-solid fa-dice-d20 no-underline' data-bs-toggle="modal" data-bs-target="#exampleModal"></a>
        <a onClick={this.handleClick} className={this.state.proficent}> test</a>
      </React.Fragment>
    );
  }
}
