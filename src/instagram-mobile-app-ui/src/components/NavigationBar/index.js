import './style.css';
import React from 'react';

export default function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-icon-wrapper">
        <i className="fas fa-home"></i>
      </div>
      <div className="navigation-bar-icon-wrapper">
        <i className="fas fa-search"></i>
      </div>
      <div className="navigation-bar-icon-wrapper">
        <i className="fas fa-plus"></i>
      </div>
      <div className="navigation-bar-icon-wrapper">
        <i className="far fa-heart"></i>
      </div>
      <div className="navigation-bar-icon-wrapper">
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}