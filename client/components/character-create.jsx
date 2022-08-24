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
      background: ''
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
  }

  handleSubmit(event) {
    event.preventDefault();
    const info = {
      name: this.state.name,
      role: this.state.class,
      race: this.state.race,
      background: this.state.background
    };
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    };
    fetch('/api/characters', req);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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

    return (

      <form onSubmit={this.handleSubmit}>
        <div className='row text-center test align-items-center'>
          <div className='col'>
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
          <div className='col'>
            <select name='class' onChange={this.handleChange}>{listClasses}</select>
      </div>
      </div >
        <div className='row text-center test align-items-center'>
          <div className='col'>
            <select name='race' onChange={this.handleChange}>{listRaces}</select>
          </div>
        </div >
            <div className='row text-center test align-items-center'>
              <div className='col'>
            <select name='background' onChange={this.handleChange}>{listBackgrounds}</select>
          </div>
        </div >
        <button className="btn btn-primary" type="submit">Create</button>
        </form>

    );
  }
}
