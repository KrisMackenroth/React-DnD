import React from 'react';

export default class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: []
    };
  }

  componentDidMount() {
    fetch(`/api/characters/${this.props.characterId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ character: data[0] });
      }
      );
  }

  render() {
    return (
      <React.Fragment>
      <div className='row'>
      <div className='col'>
          <a href="#" className='btn btn-primary mt-4'>Back</a>
      </div>
        </div>
      <div>
        <p>
        {this.state.character.name}
        </p>
        <p>
          {this.state.character.class}
        </p>
        <p>
          {this.state.character.background}
        </p>
        <p>
          {this.state.character.race}
        </p>
          <p>
            {this.state.character.str}
          </p>
          <p>
            {this.state.character.dex}
          </p>
          <p>
            {this.state.character.con}
          </p>
          <p>
            {this.state.character.wis}
          </p>
          <p>
            {this.state.character.cha}
          </p>
          <p>
            {this.state.character.int}
          </p>
      </div>
      </React.Fragment>
    );
  }
}
