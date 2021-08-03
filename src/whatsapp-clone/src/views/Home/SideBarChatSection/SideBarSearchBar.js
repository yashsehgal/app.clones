import React from 'react';
import SearchIcon from '../../../assets/search-icon.svg';

export default class SideBarSearchBar extends React.Component {
  render() {
    return (
      <div className="side-bar-search-bar"
        style={{ 
          backgroundColor: '#F5F5F5', 
          padding: '0.4em',
          position: 'fixed',
          width: '33%',
          marginTop: '4.2em'
        }}
      >
        <div className="search-input-wrapper"
          style={{
            display: 'flex',
            alignItems: 'stretch',
            gap: '16px',
            width: '96%',
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundColor: 'white',
            padding: '0.4em',
            borderRadius: '100px',
            justifyContent: 'space-around'
          }}
        >
          <img src={SearchIcon}
            alt="search-input"
            className="icon search-icon"
          />
          <input type="text"
            placeholder="Search or start new chat"
            className="search-input-box"
            id="search-input"
            style={{
              width: '100%',
              fontFamily: 'inherit',
              color: 'inherit',
              border: 'none'
            }}
          />
        </div>
      </div>
    )
  }
}