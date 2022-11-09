import React from 'react';
import WeaponCreate from './weapon-create';

export default class WeaponsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: [],
      current: ''
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/weapons')
      .then(res => res.json())
      .then(data => {
        this.setState({ weapons: data });
      }
      );
  }

  render() {
    const listWeapons = this.state.weapons.map(weapons =>
      <div className='character-background m-auto mt-2' key={weapons.name}>
        {weapons.name}
      </div>
    );

    return (
      <React.Fragment>
        <a className='btn navbar-color' data-bs-toggle="modal" data-bs-target="#weaponModal">Create</a>
        <div>
          <div>{listWeapons}</div>
        </div>
        <div className="modal fade" id="weaponModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Enter New Weapon</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <WeaponCreate />
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
