import './style.css';
import React from 'react';

export default class SendersChat extends React.Component {
  render() {
    return (
      <span className="senders-chat">
        {this.props.message}
        <span className="time-tag">{this.props.time_tag}</span>
      </span>
    )
  }
}