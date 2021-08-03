import './style.css';
import React from 'react';
import SideBarChatSection from './SideBarChatSection';
import RecentChatsContainer from './RecentChatsContainer';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-view">
          <SideBarChatSection />
          <RecentChatsContainer />
      </div>
    )
  }
}