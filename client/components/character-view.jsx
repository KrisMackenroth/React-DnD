
import React from 'react';
import CharacterEdit from './character-edit';
// import StatsPage from '../pages/stats-page';
// import CharacterStats from './character-stats';

export default class CharacterViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      current: '',
      currentId: ''
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
    if (event.target.classList.contains('edit')) {
      this.setState({ currentId: event.target.id });
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
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Are you sure?</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Edit your character Info
              </div>
              <div>
                <CharacterEdit characterId={this.state.currentId}/>
              </div>
            </div>
          </div>
        </div>
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
        <a id={characterId} className='row justify-content-center delete'>Delete</a>
        <a id={characterId} className='row justify-content-center edit' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</a>
        </div>
      </div>
  );
}
