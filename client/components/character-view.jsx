import React from 'react';

export default class CharacterViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
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
      <div className='mt-4' key={characters.name} value={characters.name}>{characters.name}</div>
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
