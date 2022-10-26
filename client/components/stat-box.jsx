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
      editModeEnabled: false,
      stat: [],
      character: [],
      test: [],
      level: '',
      str: '',
      dex: '',
      con: '',
      wis: '',
      int: '',
      cha: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(event) {
    const info = {
      str: this.state.str,
      dex: this.state.dex,
      con: this.state.con,
      wis: this.state.wis,
      int: this.state.int,
      cha: this.state.cha,
      characterId: this.props.characterId
    };
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    };
    fetch(`/api/stats/${info.characterId}`, req);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });

  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ str: data[0].str });
        this.setState({ dex: data[0].dex });
        this.setState({ con: data[0].con });
        this.setState({ wis: data[0].wis });
        this.setState({ cha: data[0].cha });
        this.setState({ int: data[0].int });
        this.setState({ test: data[0].prof });
        this.setState({ level: data[0].level });
        this.setState({ character: data[0] });
      }
      );
    fetch('/api/races')
      .then(res => res.json())
      .then(data => {
        this.setState({ races: data });
      }
      );

  }

  render() {
    return (
      <div className="stat-block">
        <div className="stat-text mb-1">{this.props.name}</div>
        <input name={this.props.name} onChange={this.handleChange} type="number" defaultValue={this.state.character[this.props.name]} className='stat-box mb-1 number'></input>
        <div className='border-box mb-1'>{this.props.bonus}</div>
        <a onClick={this.handleClick}>Edit</a>
      </div>
    );
  }
}
