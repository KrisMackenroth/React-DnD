import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import AppContext from './lib/app-context';
import CreatePage from './pages/create-page';
import NavBar from './components/navbar';
import NotFound from './pages/not-found';
import StatsPage from './pages/stats-page';
import SpellsPage from './pages/spells-page';
import CharacterDetails from './pages/character-details';
import WeaponsPage from './pages/weapons-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { path } = this.state.route;
    const { route } = this.state;
    if (path === '') {
      return <Home />;
    }
    if (path === 'character-page') {
      return <CreatePage />;
    }
    if (path === 'stats-page') {
      return <StatsPage />;
    }
    if (path === 'spell-page') {
      return <SpellsPage />;
    }
    if (path === 'weapons-page') {
      return <WeaponsPage />;
    }
    if (path === 'characters') {
      const characterId = route.params.get('characterId');
      return <CharacterDetails characterId={characterId} />;
    }
    return <NotFound />;
  }

  render() {
    const { route } = this.state;

    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
       <NavBar />
        <div className='container-fluid background-light-grey'>
          <div className='row text-center'>
            {this.renderPage()}
        </div>
      </div>
      </AppContext.Provider>
    );
  }
}
