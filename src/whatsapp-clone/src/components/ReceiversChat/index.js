import './style.css';
import React from 'react';

export default class ReceiversChat extends React.Component {
  render() {
    return (
      <span className="receivers-chat">
        {this.props.message}
        <span className="time-tag">{this.props.time_tag}</span>
      </span>
    )
  }
}