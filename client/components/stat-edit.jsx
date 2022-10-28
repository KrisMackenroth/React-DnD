import React from 'react';

export default class StatEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      str: 0,
      dex: 0,
      con: 0,
      wis: 0,
      int: 0,
      cha: 0,
      race: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    fetch(`/api/races/${this.props.race}`)
      .then(res => res.json())
      .then(data => {
        const info = {
          str: parseInt(this.state.str) + parseInt(data[0].str),
          dex: parseInt(this.state.dex) + parseInt(data[0].dex),
          con: parseInt(this.state.con) + parseInt(data[0].con),
          wis: parseInt(this.state.wis) + parseInt(data[0].wis),
          int: parseInt(this.state.int) + parseInt(data[0].int),
          cha: parseInt(this.state.cha) + parseInt(data[0].cha),
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
      );
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const statNums = this.state.stats.map(stats =>
      <option key={stats} value={stats}>{stats}</option>
    );
    return (
<form>
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='str' onChange={this.handleChange}>
              <option value="" disabled selected hidden>STR</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='dex' onChange={this.handleChange}>
              <option value="" disabled selected hidden>DEX</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='con' onChange={this.handleChange}>
              <option value="" disabled selected hidden>CON</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='int' onChange={this.handleChange}>
              <option value="" disabled selected hidden>INT</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='wis' onChange={this.handleChange}>
              <option value="" disabled selected hidden>WIS</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='cha' onChange={this.handleChange}>
              <option value="" disabled selected hidden>CHA</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='row'>
          <div className='col'>
        <button type="button" className="btn btn-secondary mt-4" data-bs-dismiss="modal">Cancel</button>
          </div>
          <div className='col'>
        <button onClick={this.handleSubmit} className="btn btn-primary mt-4" type="submit" data-bs-dismiss="modal">Confirm</button>
          </div>
        </div>
</form>
    );
  }
}
