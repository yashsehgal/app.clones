import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';

// including globals styles
import './styles/index.css';
import NavigationBar from './components/NavigationBar';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <Route 
            path="/"
            exact component={Home}
          />
        </HashRouter>
        <NavigationBar />
      </div>
    )
  }
}