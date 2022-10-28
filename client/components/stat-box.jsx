import React from 'react';

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
        <div name={this.props.name} className='stat-box mb-1 number'>{this.state.character[this.props.name]}</div>
        <div className='border-box mb-1'>{this.props.bonus}</div>
      </div>
    );
  }
}
