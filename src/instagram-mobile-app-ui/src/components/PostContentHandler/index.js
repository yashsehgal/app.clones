import './style.css';
import React from 'react';

export default function PostContentHandler(PostDetails) {
  return (
    <div className="post-content-handler">
      <div className="post-content-handler-header">
        <div className="post-content-handler-header-user-details">
          <img src={PostDetails.ProfilePhoto} 
            alt="profile-display"
            className="post-user-profile-photo"
          />
          <p className="post-username">{PostDetails.Username}</p>
        </div>
        <i class="fas fa-ellipsis-v" id="more-options"></i>
      </div>
      <div className="post-content-wrapper">
        <img src={PostDetails.PostContent} 
          alt="post-content"
          className="post-content-media"
        />
      </div>
      <div className="post-content-handler-footer">
        <div className="post-content-handler-footer-action-button-wrapper">
          <div className="action-button-post">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
          </div>
          <i class="far fa-bookmark" id="save-icon"></i>
        </div>
        <div className="post-content-handler-footer-stats-comments-wrapper">
          <p className="likes-status"><b>{PostDetails.LikesCount}</b> Likes</p>
          <p className="post-caption">
            <b>{PostDetails.Username}</b>
            {PostDetails.PostCaption}
          </p>
          <p className="post-comments-stats">
            {PostDetails.CommentsCount} comments on this post
          </p>
        </div>
      </div>
    </div>
  )
}