import React from 'react';
import StatCalc from '../components/stat-calc';
import BonusCalc from '../components/bonus-calc';
import StatBox from '../components/stat-box';
import ProfCalc from '../components/prof-bonus';

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
      cha: '',
      hitPoint: '',
      speed: '',
      level: '',
      test: []
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
        this.setState({ test: data[0].prof });
        this.setState({ level: data[0].level });
        this.setState({ character: data[0] });
        fetch(`/api/races/${data[0].race}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ speed: data[0].speed });
            this.setState({ races: data[0] });
            this.setState({ str: data[0].str });
            this.setState({ dex: data[0].dex });
            this.setState({ con: data[0].con });
            this.setState({ wis: data[0].wis });
            this.setState({ cha: data[0].cha });
            this.setState({ int: data[0].int });
          }
          );
        fetch(`/api/classes/${data[0].class}`)
          .then(res => res.json())
          .then(data => {
            this.setState({ hitPoint: data[0].startHealth });
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
    // console.log(this.state.test);
    const prof = ProfCalc(parseInt(this.state.level));
    const strength = parseInt(this.state.str) + parseInt(this.state.character.str);
    const dexterity = parseInt(this.state.dex) + parseInt(this.state.character.dex);
    const constitution = parseInt(this.state.con) + parseInt(this.state.character.con);
    const wisdom = parseInt(this.state.wis) + parseInt(this.state.character.wis);
    const intelligence = parseInt(this.state.int) + parseInt(this.state.character.int);
    const charisma = parseInt(this.state.cha) + parseInt(this.state.character.cha);
    const healthBonus = BonusCalc(constitution);
    const hitPoints = parseInt(healthBonus) + parseInt(this.state.hitPoint);
    const strengthBonus = BonusCalc(strength);
    const dexBonus = BonusCalc(dexterity);
    const conBonus = BonusCalc(constitution);
    const wisBonus = BonusCalc(wisdom);
    const intBonus = BonusCalc(intelligence);
    const chaBonus = BonusCalc(charisma);
    return (
      <React.Fragment>
        <div className='row'>
        </div>
        <h1>Character Details</h1>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox name="Strength" stat={strength} bonus={strengthBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox name="Dexterity" stat={dexterity} bonus={dexBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox name="Constitution" stat={constitution} bonus={conBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox name="Wisdom" stat={wisdom} bonus={wisBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox name="Intelligence" stat={intelligence} bonus={intBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox name="Charisma" stat={charisma} bonus={chaBonus} /></div>
            </div>
          </div>
          <div className='col-4'>
            <div className='row'>
              <div className='col test'><b>Name:</b>  {this.state.character.name}</div>
            </div>
            <div className='row'>
              <div className='col test'><b>Hit Points:</b>  {hitPoints}</div>
            </div>
            <div className='row'>
              <div className='col test'><b>Class:</b>  {this.state.character.class}</div>
            </div>
            <div className='row'>
              <div className='col test'><b>Background:</b>  {this.state.character.background}</div>
            </div>
            <div className='row'>
              <div className='col test'><b>Race:</b>  {this.state.character.race}</div>
            </div>
            <div className='row'>
              <div className=' col test'><b>Speed:</b> {this.state.speed}</div>
            </div>

          </div>

          <div className='col-4' onClick={this.handleClick}>
            <div className='test'>
              <div className='row'>
                <div className='col'><b>Saving Throws</b>  </div>
              </div>
              <div className='row'>
                <div className='col'><b>Strength:</b> <StatCalc prof={prof} stat={strength} /> </div>
              </div>
              <div className='row'>
                <div className='col'><b>Dexterity:</b> <StatCalc prof={prof} stat={dexterity} /> </div>
              </div>
              <div className='row'>
                <div className='col'><b>Constitution:</b> <StatCalc prof={prof} stat={constitution} /> </div>
              </div>
              <div className='row'>
                <div className='col'><b>Wisdom:</b> <StatCalc prof={prof} stat={wisdom} /> </div>
              </div>
              <div className='row'>
                <div className='col'><b>Intelligence:</b> <StatCalc prof={prof} stat={intelligence} /> </div>
              </div>
              <div className='row'>
                <div className='col'><b>Charisma:</b> <StatCalc prof={prof} stat={charisma} /> </div>
              </div>
            </div>
            <div className='test'>
              <div className='row'>
                <div className='col'><b>Skills</b> </div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Acrobatics" stat={dexterity} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Animal Handling" stat={wisdom} /> </div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Arcana" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="athletics" stat={strength} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Deception" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="History" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Insight" stat={wisdom} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Intimidation" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Investigation" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Medicine" stat={wisdom} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Nature" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Perception" stat={wisdom} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Performance" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Persuasion" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Religion" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Sleight of Hand" stat={dexterity} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Stealth" stat={dexterity} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={this.state.test} name="Survival" stat={wisdom} /></div>
              </div>

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
