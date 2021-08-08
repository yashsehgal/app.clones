import React from 'react';
import AddEmoji from '../../../assets/add-emoji.svg';

export default class MessageInput extends React.Component {
  render() {
    return (
      <div className="message-input"
        style={{
          padding: '1em',
          display: 'grid',
          gridTemplateColumns: 'auto auto auto',
        }}
      >
        <div className="action-buttons">
          {/* emoji button */}
          <img src={AddEmoji}
            alt="emoji-addOn"
            className="add-emoji"
          />
        </div>
      </div>
    )
  }
}