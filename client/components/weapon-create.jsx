import React from 'react';

export default class WeaponCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weaponName: '',
      weaponDam: '',
      weaponStat: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const info = {
      name: this.state.weaponName,
      stat: this.state.weaponStat,
      damage: this.state.weaponDam
    };

    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    };
    fetch('/api/weapons', req);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
      <form>
        <div className='m-auto row text-center test align-items-center'>
          <div className='col'>
            <label>Weapon Name:</label>
            <textarea onChange={this.handleChange} name='WeaponName'></textarea>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='weaponDam'>
              <option value="0">Select Damage:</option>
              <option value="1d4">1d4</option>
              <option value="1d6">1d6</option>
              <option value="1d8">1d8</option>
              <option value="1d10">1d10</option>
              <option value="1d12">1d12</option>
              <option value="1d20">1d20</option>
            </select>
          </div>
        </div >
        <div className='m-auto row text-center test align-items-center'>
          <div className='col mt-4'>
            <select name='weaponStat'>
              <option value="0">Select Stat:</option>
              <option value="str">Str</option>
              <option value="dex">Dex</option>
              <option value="con">Con</option>
              <option value="wis">Wis</option>
              <option value="int">Int</option>
              <option value="cha">Cha</option>
            </select>
          </div>
        </div >
      </form>
    );
  }
}
