import React from 'react';

export default class NavBar extends React.Component {
  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-color">
        <div className="container-fluid">
          <a className="navbar-brand navbar-color" href="#">DnD</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active navbar-color" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-color" href="#character-page">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-color" href="#spell-page">Spells</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}
