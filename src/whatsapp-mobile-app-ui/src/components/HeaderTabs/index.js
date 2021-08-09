import './style.css';
import React from 'react';
import SearchIcon from '../../assets/search-icon.svg';
import MoreOptions from '../../assets/more-options.svg';

export default function HeaderTabs(props) {
  return (
    <div className="header-tab">
      <div className="header-tab-top-section-wrapper">
        <h3>WhatsApp</h3>
        <div className="header-tab-action-icon-wrapper">
          <ul className="header-tab-action-icon-wrapper-list">
            <li 
              className="header-tab-action-icon search-icon"
              id="action__search-icon"
            >
              <img src={SearchIcon}
                className="icon-image action-icon"
                id="search-icon" 
                alt="search"  
              />
            </li>
            <li 
              className="header-tab-action-icon more-options-icon"
              id="action__more-options-icon"
            >
              <img src={MoreOptions} 
                className="icon-image action-icon"
                id="more-options-icon"
                alt="more-options"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="header-tab-bottom-section-wrapper">
        <div className="header-bottom-tabs-wrapper">
          <div className="header-tab tab__chats"
            onClick={props.stateHandlerMethod('Chats')}
          >
            <p className="tab-title">Chats</p>
          </div>
          <div className="header-tab tab__status"
            onClick={props.stateHandlerMethod('Status')}
          >
            <p className="tab-title">Status</p>
          </div>
          <div className="header-tab tab__calls"
            onClick={props.stateHandlerMethod('Calls')}
          >
            <p className="tab-title">Calls</p>
          </div>
        </div>
      </div>
    </div>
  )
}