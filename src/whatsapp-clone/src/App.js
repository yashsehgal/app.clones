import './styles/index.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import Status from './views/Status';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route
          path="/"
          exact component={Home}
        />
        <Route
          path="/status"
          exact component={Status}
        />
      </HashRouter>
    )
  }
}