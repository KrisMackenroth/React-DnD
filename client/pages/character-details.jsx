import React from 'react';
import StatCalc from '../components/stat-calc';

export default class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ character: data[0] });
      }
      );
  }

  render() {
    return (
      <React.Fragment>
      <div className='row'>
      {/* <div className='col text-start'>
          <a href="#" className='btn btn-primary mt-4'>Back</a>
      </div> */}
        </div>
        <h1>Character Details</h1>
      <div className='row'>
        <div className='col'>
<div className='row'>
            <div className='col'><b>Name:</b>  {this.state.character.name}</div>
</div>
          <div className='row'>
            <div className='col'><b>Class:</b>  {this.state.character.class}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Background:</b>  {this.state.character.background}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Race:</b>  {this.state.character.race}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Strength:</b>  {this.state.character.str}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Dexterity:</b>  {this.state.character.dex}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Constitution:</b>  {this.state.character.con}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Wisdom:</b>  {this.state.character.wis}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Intelligence:</b>  {this.state.character.int}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Charisma:</b>  {this.state.character.cha}</div>
          </div>

          </div>
          <div className='col'>
            <div className='row'>
              <div className='col'><b>Acrobatics:</b>  <StatCalc stat={this.state.character.dex} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Animal Handling:</b>  <StatCalc stat={this.state.character.wis} /> </div>
            </div>
            <div className='row'>
              <div className='col'><b>Arcana:</b>  <StatCalc stat={this.state.character.int} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Athletics:</b>  <StatCalc stat={this.state.character.str} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Deception:</b>  <StatCalc stat={this.state.character.cha} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>History:</b>  <StatCalc stat={this.state.character.int} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Insight:</b>  <StatCalc stat={this.state.character.wis} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Intimidation:</b>  <StatCalc stat={this.state.character.cha} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Investigation:</b>  <StatCalc stat={this.state.character.int} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Medicine:</b>  <StatCalc stat={this.state.character.wis} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Nature:</b>  <StatCalc stat={this.state.character.int} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Perception:</b>  <StatCalc stat={this.state.character.wis} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Performance:</b>  <StatCalc stat={this.state.character.cha} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Persuasion:</b>  <StatCalc stat={this.state.character.cha} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Religion:</b>  <StatCalc stat={this.state.character.int} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Sleight of Hand:</b>  <StatCalc stat={this.state.character.dex} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Stealth:</b> <StatCalc stat={this.state.character.dex} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Survival:</b>  <StatCalc stat={this.state.character.wis} /></div>
            </div>

          </div>
      </div>

      </React.Fragment>
    );
  }
}
