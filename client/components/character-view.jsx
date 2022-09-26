import React from 'react';
// import StatsPage from '../pages/stats-page';
import CharacterStats from './character-stats';

export default class CharacterViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      current: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/characters')
      .then(res => res.json())
      .then(data => {
        this.setState({ characters: data });
      }
      );
  }

  handleClick(event) {
    for (let x = 0; x < this.state.characters.length; x++) {
      if (event.target.id === this.state.characters[x].name) {
        return (
          <div>
            <CharacterStats />
          </div>
        );
      }
    }
  }

  render() {
    const listCharacters = this.state.characters.map(characters =>
      <div className='character-background m-auto' key={characters.name}>
      <div className='mt-4' key={characters.name} value={characters.name}>
        {characters.name}
          <a href='#stats-page' onClick={this.handleClick} id={characters.name} className='row justify-content-center'>View</a>
        </div>
      </div>
    );

    return (

      <div className='row align-items-center'>
          <div className='col'>
          {listCharacters}
          </div>
        </div >

    );
  }
}
