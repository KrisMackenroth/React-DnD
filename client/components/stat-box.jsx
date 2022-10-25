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
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }

  handleChange(event) {
  }

  render() {
    const temp = this.props.stat.toString();
    return (
      <div className="stat-block">
        <div className="stat-text mb-1">{this.props.name}</div>
        <input onChange={this.handleChange} type="number" defaultValue={temp} className='stat-box mb-1 number'></input>
        <div className='border-box mb-1'>{this.props.bonus}</div>
      </div>
    );
  }
}
