import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';

// including globals styles
import './styles/index.css';
import NavigationBar from './components/NavigationBar';
import Explore from './views/Explore';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Route 
            path="/"
            exact component={Home}
          />
          <Route
            path="/explore"
            exact component={Explore}
          />
        </HashRouter>
        <NavigationBar />
      </div>
    )
  }
}