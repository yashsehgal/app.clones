import './style.css';
import React from 'react';

export default function ExploreHeader() {
  return (
    <div className="explore-header">
      <div className="search-input-wrapper">
        <i className="fas fa-search"></i>
        <input type="text" 
          placeholder="Search for profiles, tags, locations"
          className="input-textBox search__input-textBox"
        />
      </div>
    </div>
  )
}