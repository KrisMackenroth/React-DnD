import React from 'react';

export default class StatCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      current: '',
      currentRoll: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const roll = RollCalc(event.target.id);
    this.setState({ currentRoll: roll });

  }

  componentDidMount() {

  }

  render() {

    const bonus = BonusCalc(this.props.stat);

    return (
      <React.Fragment>
        <span>
          {bonus}
        </span>
        <a id={bonus} className={bonus} onClick={this.handleClick} data-bs-toggle="modal" data-bs-target="#exampleModal"> Roll</a>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {this.state.currentRoll}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function BonusCalc(props) {
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

function RollCalc(props) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const roll = getRandomInt(1, 21);

  const final = roll + parseInt(props);

  return final;
}
