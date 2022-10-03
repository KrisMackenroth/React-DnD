
import React from 'react';
// import StatsPage from '../pages/stats-page';
// import CharacterStats from './character-stats';

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
    if (event.target.classList.contains('delete')) {
      const characterId = event.target.id;
      const req = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      fetch(`/api/characters/${characterId}`, req)
        .then(
          fetch('/api/characters')
            .then(res => res.json())
            .then(data => {
              this.setState({ characters: data });
            }
            )
        );
    }
  }

  render() {
    const listCharacters = this.state.characters.map(characters =>
      <div className='character-background m-auto' key={characters.name}>
        <Character characters={characters} />
      </div>
    );
    return (
      <React.Fragment>
      <div className='row align-items-center'>
          <div className='col' onClick={this.handleClick}>
          {listCharacters}
        </div>
      </div >
      </React.Fragment>
    );
  }
}

function Character(props) {
  const { characterId, name } = props.characters;
  const temp = `#characters?characterId=${characterId}`;
  return (
    <div className='character-background m-auto' key={characterId }>
      <div className='mt-4' key={characterId} value={characterId }>
        {name}
        <a href={temp} id={characterId} className='row justify-content-center'>View</a>
        <a id={characterId} className='row justify-content-center delete'>delete</a>
        </div>
      </div>
  );
}
