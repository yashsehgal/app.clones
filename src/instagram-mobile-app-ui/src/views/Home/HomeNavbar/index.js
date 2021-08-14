import './style.css';
import React from 'react';

export default function HomeNavbar() {
  return (
    <div className="home-navbar">
      <i className="fas fa-plus add-story-icon"></i>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        alt="instagram"
        className="instagram-logo"
      />
      <i class="far fa-paper-plane"></i>
    </div>
  )
}