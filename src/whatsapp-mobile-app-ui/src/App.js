import React from 'react';
import './styles/style.css';
import { HashRouter, Route } from 'react-router-dom';
import HomeView from './views/HomeView';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-view">
        <HashRouter basename="/">
          {/* routes for all the page, views and components */}
          {/* HomeView tab-views */}
          <Route
            path="/home"
            exact component={HomeView}
          />
        </HashRouter>
      </div>
    )
  }
}