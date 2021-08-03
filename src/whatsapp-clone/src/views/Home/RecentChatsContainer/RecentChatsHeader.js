import React from 'react';
import SearchIcon from '../../../assets/search-icon.svg';
import MoreOptionsIcon from '../../../assets/more-options-icon.svg';

export default class RecentChatsHeader extends React.Component {
  render() {
    return (
      <div className="recent-chat-header"
        style={{
          width: '100%',
          backgroundColor: '#E5E5E5',
          display: 'flex',
          alignItems: 'center',
          padding: '0.4em 1em',
          width: '100%'
        }}
      >
        <div className="profile-display-wrapper" 
          style={{
            width: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <img src="https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"
            alt="profile-display"
            className="profile-display-picture__user"
            style={{
              width: '55px',
              borderRadius: '100px'
            }}
          />
          <h3 className="username">John Doe</h3>
        </div>
        <div className="chat-header-icons-wrapper"
          style={{ 
            marginLeft: 'auto'
          }}
        >
          <ul className="icons-list"
            style={{ 
              listStyleType: 'none', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '30px', 
              justifyContent: 'space-evenly' 
            }}
          >
            <li className="chat-header-icon">
              <img src={SearchIcon}
                alt="search"
                className="chat-header-logo logo"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}