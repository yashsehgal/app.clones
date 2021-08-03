import React from 'react';
import SideBarSearchBar from './SideBarSearchBar';
import SideBarChatHeader from './SideBarChatHeader';
import RecentChat from '../../../components/RecentChat';

export default class SideBarChatSection extends React.Component {
  render() {
    return (
      <div className="side-bar-chat-section" 
        style={{ 
          width: '100% auto',
          borderBottom: '0.1px solid rgba(0, 0, 0, 0.225)',
          borderRight: '0.1px solid rgba(0, 0, 0, 0.225)'
        }}
        >
        <SideBarChatHeader />
        <SideBarSearchBar />
        <div className="recent-wrapper"
          style={{
            marginTop: '7.2em'
          }}
        >
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
          <RecentChat
            profile_display={"https://ik.imagekit.io/eawrckp8wfi/ProfilePhotos/profilePhotoTeal_c8YH8xn7m3q.png?updatedAt=1627850243694"}
            chat_title={"John Doe"}
            recent_message={"Lorem ipsum dolor emit le this is a test message, lorem again"}
            time_tag={"12:54 PM"}
          />
        </div>
      </div>
    )
  }
}