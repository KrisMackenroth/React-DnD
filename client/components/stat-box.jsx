import React from 'react';

// function StatBox(props) {
//   return (
//     <div className="stat-block">
//       <div className="stat-text mb-1">{props.name}</div>
//       <div className='stat-box mb-1'>{props.stat}</div>
//       <div className='border-box mb-1'>{props.bonus}</div>
//     </div>

//   );
// }

// export default StatBox;

export default class StatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoll: '',
      proficent: 'not-proficent',
      editModeEnabled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }

  render() {

    return (
      <div className="stat-block">
        <div className="stat-text mb-1">{this.props.name}</div>
        <input type="number" value={this.props.stat} className='stat-box mb-1 number' disabled={!this.state.editModeEnabled}></input>
        <div className='border-box mb-1'>{this.props.bonus}</div>
        <a role="button" title="Edit" onClick={this.handleClick}>✏️</a>
      </div>
    );
  }
}
