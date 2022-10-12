import React from 'react';
import StatCalc from '../components/stat-calc';

export default class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      currentRoll: '',
      races: [],
      str: '',
      dex: '',
      con: '',
      wis: '',
      int: '',
      cha: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.target.classList.contains('roll')) {
      const roll = RollCalc(event.target.id);
      this.setState({ currentRoll: roll });
    }

  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ character: data[0] });
        fetch(`/api/races/${data[0].race}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ races: data[0] });
            this.setState({ str: data[0].str });
            this.setState({ dex: data[0].dex });
            this.setState({ con: data[0].con });
            this.setState({ wis: data[0].wis });
            this.setState({ cha: data[0].cha });
            this.setState({ int: data[0].int });
          }
          );
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

    const strength = parseInt(this.state.str) + parseInt(this.state.character.str);
    const dexterity = parseInt(this.state.dex) + parseInt(this.state.character.dex);
    const constitution = parseInt(this.state.con) + parseInt(this.state.character.con);
    const wisdom = parseInt(this.state.wis) + parseInt(this.state.character.wis);
    const intelligence = parseInt(this.state.int) + parseInt(this.state.character.int);
    const charisma = parseInt(this.state.cha) + parseInt(this.state.character.cha);

    return (
      <React.Fragment>
      <div className='row'>
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
            <div className='col'><b>Strength:</b>  {strength}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Dexterity:</b>  {dexterity}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Constitution:</b>  {constitution}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Wisdom:</b>  {wisdom}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Intelligence:</b>  {intelligence}</div>
          </div>
          <div className='row'>
            <div className='col'><b>Charisma:</b>  {charisma}</div>
          </div>

          </div>
          <div className='col' onClick={this.handleClick}>
            <div className='row'>
              <div className='col'><b>Acrobatics:</b>  <StatCalc stat={dexterity} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Animal Handling:</b>  <StatCalc stat={wisdom} /> </div>
            </div>
            <div className='row'>
              <div className='col'><b>Arcana:</b>  <StatCalc stat={intelligence} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Athletics:</b>  <StatCalc stat={strength} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Deception:</b>  <StatCalc stat={charisma} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>History:</b>  <StatCalc stat={intelligence} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Insight:</b>  <StatCalc stat={wisdom} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Intimidation:</b>  <StatCalc stat={charisma} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Investigation:</b>  <StatCalc stat={intelligence} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Medicine:</b>  <StatCalc stat={wisdom} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Nature:</b>  <StatCalc stat={intelligence} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Perception:</b>  <StatCalc stat={wisdom} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Performance:</b>  <StatCalc stat={charisma} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Persuasion:</b>  <StatCalc stat={charisma} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Religion:</b>  <StatCalc stat={intelligence} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Sleight of Hand:</b>  <StatCalc stat={dexterity} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Stealth:</b> <StatCalc stat={dexterity} /></div>
            </div>
            <div className='row'>
              <div className='col'><b>Survival:</b>  <StatCalc stat={wisdom} /></div>
            </div>

          </div>
      </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Ability Check</h1>
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
