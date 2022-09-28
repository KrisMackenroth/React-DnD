
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
  }

  componentDidMount() {
    fetch('/api/characters')
      .then(res => res.json())
      .then(data => {
        this.setState({ characters: data });
      }
      );
  }

  render() {
    const listCharacters = this.state.characters.map(characters =>
      <div className='character-background m-auto' key={characters.name}>
        <Character characters={characters} />
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

function Character(props) {
  const { characterId, name } = props.characters;
  const temp = `#characters?characterId=${characterId}`;
  return (
    <div className='character-background m-auto' key={characterId }>
      <div className='mt-4' key={characterId} value={characterId }>
        {name}
        <a href={temp} id={characterId} className='row justify-content-center'>View</a>
        </div>
      </div>
  );
}
