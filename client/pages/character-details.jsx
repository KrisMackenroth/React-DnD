import React from 'react';
import StatCalc from '../components/stat-calc';
import BonusCalc from '../components/bonus-calc';
import StatBox from '../components/stat-box';
import ProfCalc from '../components/prof-bonus';
import StatEdit from '../components/stat-edit';
// import WeaponCreate from '../components/weapon-create';

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
      test: [],
      savingThrows: '',
      inventory: '',
      inventoryText: '',
      temp: '',
      tempGold: '',
      tempSilver: '',
      tempElectrum: '',
      tempCopper: '',
      gold: '',
      silver: '',
      electrum: '',
      copper: '',
      silverText: '',
      electrumText: '',
      copperTExt: '',
      goldText: '',
      weaponName: '',
      weaponDam: '',
      weaponStat: '',
      weaponRow: '',
      weapons: [],
      chosenWeapon: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const info = {
      weapons: this.state.chosenWeapon
    };
    const req = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    };
    fetch(`/api/weapons/${this.props.characterId}`, req);
  }

  handleClick(event) {

    if (event.target.classList.contains('roll')) {
      const roll = RollCalc(event.target.id);
      this.setState({ currentRoll: roll });
    }

    if (event.target.classList.contains('edit-inventory')) {
      this.setState({ tempSilver: <div><textarea onChange={this.handleChange} name='silverText'>{this.state.silver}</textarea></div> });
      this.setState({ tempElectrum: <div><textarea onChange={this.handleChange} name='electrumText'>{this.state.electrum}</textarea></div> });
      this.setState({ tempCopper: <div><textarea onChange={this.handleChange} name='copperText'>{this.state.copper}</textarea></div> });
      this.setState({ tempGold: <div><textarea onChange={this.handleChange} name='goldText'>{this.state.gold}</textarea></div> });
      this.setState({ temp: <div><textarea onChange={this.handleChange} name='inventoryText'>{this.state.inventory}</textarea><div className='row'><div className='col'><a className='change-inventory btn navbar-color' onClick={this.handleClick}>Confirm</a></div> <div className='col'><a className='cancel-inventory btn navbar-color' onClick={this.handleClick}>Cancel</a></div></div></div> });
    }

    if (event.target.classList.contains('cancel-inventory')) {
      this.setState({ temp: this.state.inventory });
      this.setState({ tempSilver: this.state.silver });
      this.setState({ tempElectrum: this.state.electrum });
      this.setState({ tempCopper: this.state.copper });
      this.setState({ tempGold: this.state.gold });
    }
    if (event.target.classList.contains('change-inventory')) {
      const info = {
        inventory: this.state.inventoryText,
        gold: this.state.goldText,
        silver: this.state.silverText,
        electrum: this.state.electrumText,
        copper: this.state.copperText
      };
      const req = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
      };
      fetch(`/api/inventory/${this.props.characterId}`, req)
        .then(res => res.json())
        .then(data => {
          fetch(`/api/characters/${this.props.characterId}`)
            .then(res => res.json())
            .then(data => {
              this.setState({ inventory: data[0].inventory });
              this.setState({ temp: data[0].inventory });
              this.setState({ gold: data[0].gold });
              this.setState({ silver: data[0].silver });
              this.setState({ electrum: data[0].electrum });
              this.setState({ copper: data[0].copper });
              this.setState({ tempGold: data[0].gold });
              this.setState({ tempSilver: data[0].silver });
              this.setState({ tempElectrum: data[0].electrum });
              this.setState({ tempCopper: data[0].copper });
            }
            );
        }
        );
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ test: data[0].prof });
        this.setState({ level: data[0].level });
        this.setState({ character: data[0] });
        this.setState({ inventory: data[0].inventory });
        this.setState({ temp: data[0].inventory });
        this.setState({ tempGold: data[0].gold });
        this.setState({ tempSilver: data[0].silver });
        this.setState({ tempCopper: data[0].copper });
        this.setState({ tempElectrum: data[0].electrum });
        this.setState({ gold: data[0].gold });
        this.setState({ silver: data[0].silver });
        this.setState({ copper: data[0].copper });
        this.setState({ electrum: data[0].electrum });
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
            this.setState({ savingThrows: data[0].prof });
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

    fetch('/api/weapons')
      .then(res => res.json())
      .then(data => {
        this.setState({ weapons: data });
      }
      );

  }

  render() {
    const listWep = this.state.weapons.map(wep =>
      <option key={wep.name} value={wep.name}>{wep.name}</option>
    );
    const savingThrows = this.state.savingThrows;
    const example = this.state.test + ' ' + savingThrows;
    const temp = example.toString().split(' ');
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
            <a className='btn navbar-color' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</a>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox tempName='newStr' characterId={this.props.characterId} name="str" stat={strength} bonus={strengthBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox characterId={this.props.characterId} name="dex" stat={dexterity} bonus={dexBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox characterId={this.props.characterId} name="con" stat={constitution} bonus={conBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox characterId={this.props.characterId} name="wis" stat={wisdom} bonus={wisBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox characterId={this.props.characterId} name="int" stat={intelligence} bonus={intBonus} /></div>
            </div>
            <div className='row'>
              <div className='col d-flex justify-content-center'><StatBox characterId={this.props.characterId} name="cha" stat={charisma} bonus={chaBonus} /></div>
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
            <div className='row'>
              <div className='mt-4 col test'><b>Inventory</b> <a className='edit-inventory btn navbar-color' onClick={this.handleClick}>Edit</a></div>
            </div>
            <div className='row'>
              <div className='col test'>Gold:{this.state.tempGold} </div>
              <div className='col test'>Silver: {this.state.tempSilver}</div>
              <div className='col test'>Electrum: {this.state.tempElectrum}</div>
              <div className='col test'>Copper: {this.state.tempCopper}</div>
            </div>
            <div className='row'>
              <div className='col test'>{this.state.temp}</div>
            </div>
            <div className='row'>
              <div className='col test mt-4'>Weapons <a className='btn navbar-color' data-bs-toggle="modal" data-bs-target="#weaponModal">Edit</a></div>
            </div>
            <div className='row'>
                <div className='col test'>Name</div>
                <div className='col test'>Damage</div>
                <div className='col test'>Stat</div>
                <div className='col test'>Roll</div>
            </div>

          </div>

          <div className='col-4' onClick={this.handleClick}>
            <div className='test'>
              <div className='row'>
                <div className='col'><b><u>Saving Throws</u></b>  </div>
              </div>
              <div className='row'>
                <div className='col'> <StatCalc name="strength" prof={prof} character={temp} stat={strength} /> </div>
              </div>
              <div className='row'>
                <div className='col'> <StatCalc name="dexterity" prof={prof} character={temp} stat={dexterity} /> </div>
              </div>
              <div className='row'>
                <div className='col'> <StatCalc name="constitution" prof={prof} character={temp} stat={constitution} /> </div>
              </div>
              <div className='row'>
                <div className='col'> <StatCalc name="wisdom" prof={prof} character={temp} stat={wisdom} /> </div>
              </div>
              <div className='row'>
                <div className='col'> <StatCalc name="intelligence" prof={prof} character={temp} stat={intelligence} /> </div>
              </div>
              <div className='row'>
                <div className='col'> <StatCalc name="charisma" prof={prof} character={temp} stat={charisma} /> </div>
              </div>
            </div>
            <div className='test'>
              <div className='row'>
                <div className='col'><b><u>Skills</u></b> </div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="acrobatics" stat={dexterity} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="animal-handling" stat={wisdom} /> </div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="arcana" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="athletics" stat={strength} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="deception" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="history" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="insight" stat={wisdom} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="intimidation" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="investigation" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="medicine" stat={wisdom} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="nature" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="perception" stat={wisdom} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="performance" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="persuasion" stat={charisma} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="religion" stat={intelligence} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="sleight-of-hand" stat={dexterity} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="stealth" stat={dexterity} /></div>
              </div>
              <div className='row'>
                <div className='col'><StatCalc prof={prof} character={temp} name="survival" stat={wisdom} /></div>
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
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Enter New Stats</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <StatEdit race={this.state.character.race} characterId={this.props.characterId} />
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="weaponModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Select Weapon</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form onSubmit={this.handleSubmit}>
              <div className="modal-body">
                <select name='chosenWeapon' onChange={this.handleChange}>
                  <option value="" disabled selected hidden>Weapons</option>
                  {listWep}
                </select>
              </div>
                <button className="btn btn-primary mt-4" type="submit">Add</button>
              </form>
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
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roll = getRandomInt(1, 21);

  const final = roll + parseInt(props);

  return final;
}
