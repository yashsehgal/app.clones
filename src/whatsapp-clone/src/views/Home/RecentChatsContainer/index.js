import './style.css';
import React from 'react';
import RecentChatsHeader from './RecentChatsHeader';
import MessageInput from './MessageInput';

export default class RecentChatsContainer extends React.Component {
  render() {
    return (
      <div className="recent-chats-container"
        style={{
          overflowBlock: 'scroll',
          overflow: 'hidden'
        }}
      >
        <RecentChatsHeader />
        <MessageInput />
      </div>
    )
  }
}