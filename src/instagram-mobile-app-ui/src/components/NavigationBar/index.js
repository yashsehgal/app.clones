import './style.css';
import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div className="navigation-bar">
      <HashRouter basename="/">
        <div className="navigation-bar-icon-wrapper">
        <Link to="/">
          <i className="fas fa-home navigation-icon"></i>
        </Link>
        </div>
        <div className="navigation-bar-icon-wrapper">
          <Link to="/explore">
            <i className="fas fa-search navigation-icon"></i>
          </Link>
        </div>
        <div className="navigation-bar-icon-wrapper">
          <i className="fas fa-plus navigation-icon"></i>
        </div>
        <div className="navigation-bar-icon-wrapper">
          <i className="far fa-heart navigation-icon"></i>
        </div>
        <div className="navigation-bar-icon-wrapper">
          <i className="far fa-user navigation-icon"></i>
        </div>
      </HashRouter>
    </div>
  )
}