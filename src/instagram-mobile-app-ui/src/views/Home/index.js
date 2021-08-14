import './style.css';
import React, { useState } from 'react';
import HomeViewData from '../../data/HomeViewData';
import StoryHandler from '../../components/StoryHandler';
import HomeNavbar from './HomeNavbar';
import PostContentHandler from '../../components/PostContentHandler';

export default function Home() {
  
  const [storyData] = useState(HomeViewData('stories'));
  const [postData] = useState(HomeViewData('posts'));

  console.log(storyData);
  return (
    <div className="home-view">
      <HomeNavbar />
      <div className="home-view-story-container">
        {storyData.map((story_data, index) => (
          <StoryHandler
            ProfilePhoto={story_data.profilePhoto}
            Username={story_data.username}
            Story={story_data.story}
            key={index}
          />
        ))}   
      </div>
      <div className="home-view-posts-container">
        {postData.map((post_data, index) => (
          <PostContentHandler
            ProfilePhoto={post_data.profilePhoto}
            Username={post_data.username} 
            PostContent={post_data.postContent}
            PostCaption={post_data.postCaption}
            LikesCount={post_data.likesCount}
            CommentsCount={post_data.commentsCount}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}