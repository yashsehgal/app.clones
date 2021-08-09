import './style.css';
import React, { useState } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import Tabs from './tabs.json'
import HeaderTabs from '../../components/HeaderTabs';
import Chats from './Chats';

export default function HomeView() {
  const homeViewTabs = ['Chats', 'Status', 'Calls'];
  // setting up the default state of the home-view
  const [homeViewTabState, setHomeViewTabState] = useState(homeViewTabs[0]);
  return (
    <div className="home-view">
      <HeaderTabs 
        viewTabState={homeViewTabState}
        stateHandlerMethod={setHomeViewTabState}
      />
      <div className="home-view-content-wrapper">
        {renderHomeViewContent(homeViewTabState)}
      </div>
    </div>
  )
}

function renderHomeViewContent(viewContentTitle) {
  if (viewContentTitle === 'Chats') {
    console.log('condition is working');
    return (
      <p>CHAT SECTION IS WORKING</p>
    )
  } else if (viewContentTitle === 'Status') {
    return (
      <p>STATUS SECTION IS RUNNING</p>
    )
  } else if (viewContentTitle === 'Calls') {
    return (
      <p>CALLS SECTION IS RUNNING</p>
    )
  } else {
    console.log('something is not working properly!!');
  }
}