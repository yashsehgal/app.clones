import './style.css';
import React from 'react';

export default class RecentChat extends React.Component {
  render() {
    return (
      <div className="recent-chat"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          width: '100% auto',
          padding: '0.6em',
          borderBottom: '0.1px solid rgba(0, 0, 0, 0.225)'
        }}
      >
        <img src={this.props.profile_display} 
          alt="profile-display" 
          className="profile-display" 
          style={{
            width: '52px',
            borderRadius: '100px'
          }}
        />
        <div className="recent-chat-details-wrapper">
          <div className="recent-chat-top" 
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100% auto'
            }}
          >
            <h4>{this.props.chat_title}</h4>
            <p 
              style={{
                marginLeft: 'auto',
                color: 'gray',
                fontSize: '14px'
              }}
            >
              {this.props.time_tag}
            </p>
          </div>
          <p
            style={{
              color: 'gray',
              fontSize: "14px"
            }}
          >
            {this.props.recent_message}
          </p>
        </div>
      </div>
    )
  }
}