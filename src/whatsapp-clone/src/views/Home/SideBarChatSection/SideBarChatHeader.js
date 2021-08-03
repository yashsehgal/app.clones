import React from 'react';
import StoryNotificationIcon from '../../../assets/story-notification-icon.svg';
import AddIcon from '../../../assets/add-icon.svg';
import MoreOptions from '../../../assets/more-options-icon.svg';

export default class SideBarChatHeader extends React.Component {
  render() {
    return (
      <div className="side-bar-chat-header" 
        style={{
          width: '',
          backgroundColor: '#E5E5E5',
          display: 'flex',
          alignItems: 'center',
          padding: '0.4em 1em',
          position: 'fixed',
          width: '33%'
        }}>
        <div className="profile-display-wrapper" style={{
          width: 'fit-content'
        }}>
          <img src="https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694" 
            alt="profile-display"
            className="profile-display-picture__user" 
            style={{ 
              width: '52px',
              borderRadius: '100px'
            }}
          />
        </div>
        <div className="side-bar-chat-header-icons-wrapper" 
          style={{ marginLeft: 'auto' }}
        >
          <ul className="icons-list"
            style={{ listStyleType: 'none', display: 'flex', alignItems: 'center', gap: '30px', justifyContent: 'space-evenly' }}
          >
            <li className="side-bar-chat-header-icon">
              <img src={StoryNotificationIcon} 
                alt="story-notification"
                className="side-bar-chat-header-logo logo"
              />
            </li>
            <li className="side-bar-chat-header-icon">
              <img src={AddIcon}
                alt="add-status"
                className="side-bar-chat-header-logo logo"
              />
            </li>
            <li className="side-bar-chat-header-icon">
              <img src={MoreOptions}
                alt="more-options"
                className="side-bar-chat-header-logo logo"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}