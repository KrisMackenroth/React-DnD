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
      </div>
    );
  }
}
