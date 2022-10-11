import React from 'react';

export default class StatCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      current: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  componentDidMount() {

  }

  render() {

    const bonus = rollCalc(this.props.stat);

    return (
      <React.Fragment>
        <span>
          {bonus}
        </span>
        <a id={bonus} onClick={this.handleClick}> Roll</a>

      </React.Fragment>
    );
  }
}

function rollCalc(props) {
  let bonus;
  if (props === '1') {
    bonus = -5;
  } else if (props === '3' || props === '2') {
    bonus = -4;
  } else if (props === '4' || props === '5') {
    bonus = -3;
  } else if (props === '6' || props === '7') {
    bonus = -2;
  } else if (props === '8' || props === '9') {
    bonus = -1;
  } else if (props === '10' || props === '11') {
    bonus = 0;
  } else if (props === '12' || props === '13') {
    bonus = 1;
  } else if (props === '14' || props === '15') {
    bonus = 2;
  } else if (props === '16' || props === '17') {
    bonus = 3;
  } else if (props === '18' || props === '19') {
    bonus = 4;
  } else if (props === '20') {
    bonus = 5;
  }

  return bonus;
}
