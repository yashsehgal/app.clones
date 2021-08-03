import './style.css';
import React from 'react';
import SideBarChatSection from './SideBarChatSection';
import RecentChatsContainer from './RecentChatsContainer';
import DesktopBG from '../../assets/desktop-bg.svg';
export default class Home extends React.Component {
  render() {
    return (
      <div className="home-view"
        style={{
          backgroundImage: `url(${DesktopBG})`,
          width: '100%',
          height: '100%',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}
      >
          <SideBarChatSection />
          <RecentChatsContainer />
      </div>
    )
  }
}