import React from 'react';

export default class CharacterCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      races: [],
      backgrounds: [],
      name: '',
      class: '',
      race: '',
      background: '',
      stats: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      str: 0,
      dex: 0,
      con: 0,
      wis: 0,
      int: 0,
      cha: 0,
      prof: [],
      profic: '',
      addon: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/classes')
      .then(res => res.json())
      .then(data => {
        this.setState({ classes: data });
      }
      );
    fetch('/api/races')
      .then(res => res.json())
      .then(data => {
        this.setState({ races: data });
      }
      );
    fetch('/api/backgrounds')
      .then(res => res.json())
      .then(data => {
        this.setState({ backgrounds: data });
      }
      );
    fetch('/api/proficiency')
      .then(res => res.json())
      .then(data => {
        this.setState({ prof: data });
      }
      );
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`/api/races/${this.state.race}`)
      .then(res => res.json())
      .then(data => {
        const info = {
          name: this.state.name,
          role: this.state.class,
          race: this.state.race,
          background: this.state.background,
          str: parseInt(this.state.str) + parseInt(data[0].str),
          dex: parseInt(this.state.dex) + parseInt(data[0].dex),
          con: parseInt(this.state.con) + parseInt(data[0].con),
          wis: parseInt(this.state.wis) + parseInt(data[0].wis),
          int: parseInt(this.state.int) + parseInt(data[0].int),
          cha: parseInt(this.state.cha) + parseInt(data[0].cha),
          prof: this.state.profic
        };
        const req = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(info)
        };
        fetch('/api/characters', req);
        window.location.hash = '#';
      }
      );
  }

  handleChange(event) {
    if (event.target.name === 'profic') {
      this.setState({ profic: this.state.addon + ' ' + event.target.value });
    } else {
      const { name, value } = event.target;
      this.setState({ [name]: value });
    }
  }

  render() {
    const listClasses = this.state.classes.map(classes =>
            <option key={classes.class} value={classes.class}>{classes.class}</option>
    );
    const listRaces = this.state.races.map(races =>
        <option key={races.race} value={races.race}>{races.race}</option>
    );
    const listBackgrounds = this.state.backgrounds.map(backgrounds =>
        <option key={backgrounds.background} value={backgrounds.background}>{backgrounds.background}</option>
    );
    const listProf = this.state.prof.map(prof =>
      <option key={prof.name} value={prof.name}>{prof.name}</option>
    );
    const statNums = this.state.stats.map(stats =>
      <option key={stats} value={stats}>{stats}</option>
    );

    return (

      <form className='row justify-content-center' onSubmit={this.handleSubmit}>
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
        <input
          required
          autoFocus
          type="text"
          name="name"
          onChange={this.handleChange}
          placeholder="Name"
          className="form-control bg-light" />
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='class' onChange={this.handleChange}>
              <option value="" disabled selected hidden>Class</option>
              {listClasses}
              </select>
      </div>
      </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='race' onChange={this.handleChange}>
              <option value="" disabled selected hidden>Race</option>
              {listRaces}
              </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='addon' onChange={this.handleChange}>
              <option value="" disabled selected hidden>Proficency</option>
              {listProf}
            </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='profic' onChange={this.handleChange}>
              <option value="" disabled selected hidden>Proficency</option>
              {listProf}
            </select>
          </div>
        </div >
            <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='background' onChange={this.handleChange}>
              <option value="" disabled selected hidden>Background</option>
              {listBackgrounds}
              </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='str' onChange={this.handleChange}>
              <option value="" disabled selected hidden>STR</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='dex' onChange={this.handleChange}>
              <option value="" disabled selected hidden>DEX</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='con' onChange={this.handleChange}>
              <option value="" disabled selected hidden>CON</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='int' onChange={this.handleChange}>
              <option value="" disabled selected hidden>INT</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='wis' onChange={this.handleChange}>
              <option value="" disabled selected hidden>WIS</option>
              {statNums}
            </select>
          </div>
        </div >
        <div className='row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='cha' onChange={this.handleChange}>
              <option value="" disabled selected hidden>CHA</option>
              {statNums}
            </select>
          </div>
        </div >
        <button className="btn btn-primary mt-4" type="submit">Create</button>
        </form>

    );
  }
}
