import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import AppContext from './lib/app-context';
import CreatePage from './pages/create-page';
import NavBar from './components/navbar';
import NotFound from './pages/not-found';
import StatsPage from './pages/stats-page';
import SpellsPage from './pages/spells-page';

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
    return <NotFound />;
  }

  render() {
    const { route } = this.state;

    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
       <NavBar />
        <div className='container-fluid background-light-grey'>
          <div className='col text-center'>
            {this.renderPage()}
        </div>
      </div>
      </AppContext.Provider>
    );
  }
}
