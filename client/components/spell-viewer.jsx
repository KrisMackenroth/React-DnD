import React from 'react';

export default class SpellViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      current: ''
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/spells')
      .then(res => res.json())
      .then(data => {
        this.setState({ spells: data });
      }
      );
  }

  render() {
    const listSpells = this.state.spells.map(spells =>
      <div className='character-background m-auto' key={spells.spell}>
          {spells.spell}
      </div>
    );

    return (
      <React.Fragment>
      <a>Create</a>
      <div>
      <div>{listSpells}</div>
      </div>
      </React.Fragment>
    );
  }
}
