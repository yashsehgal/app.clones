import './style.css';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

export default function StoryHandler(StoryDetails) {
  
  const [storyViewerState, setStoryViewerState] = useState(false);

  return (
    <div className="story-handler-wrapper"
      onClick={() => setStoryViewerState(true)}
    >
      <div className="story-profile-photo-wrapper instagram-gradient-bg">
        <img src={StoryDetails.ProfilePhoto}
          alt="profile-display"
          className="user-profile-photo"
        />
      </div>
      <p className="story-username">{StoryDetails.Username}</p>

      {/* Story-view modal */}
      <ReactModal 
        isOpen={storyViewerState}
        onRequestClose={() => setStoryViewerState(false)}
        style={{
          overlay: {
            backgroundColor: '#121212'
          },
          content: {
            padding: '1em',
            border: 'none',
            backgroundColor: 'transparent',
            borderRadius: '12px',
            margin: 'auto'
          }
        }}
      >
        <div className="story-content-wrapper">
          <div className="story-user-details-wrapper">
            <img src={StoryDetails.ProfilePhoto}
              alt="profile-display"
              className="user-profile-photo"
            />
            <p className="story-username">
              {StoryDetails.Username}
            </p>
          </div>
          <img 
            src={StoryDetails.Story} 
            alt="story-content-display"
            className="story-content"
          />
        </div>
      </ReactModal>
    </div>
  )
}