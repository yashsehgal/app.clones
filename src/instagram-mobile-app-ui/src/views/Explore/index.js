import './style.css';
import React, { useState } from 'react';
import ExploreHeader from './ExploreHeader';
import ExploreViewData from '../../data/ExploreViewData';

export default function Explore() {
  const [relevantTagsData] = useState(ExploreViewData('explore-tags'));
  const [explorePostsData] = useState(ExploreViewData('explore-posts'));
  return (
    <div className="explore-view">
      <ExploreHeader />
      <div className="explore-view-header__relevant-tags-wrapper">
        {relevantTagsData.map((relevant_tag, index) => {
          return (
            <span className="explore-header__relevant-tag"
              key={index}
            >
              {relevant_tag.tagName}
            </span>
          )
        })}
      </div>
      <div className="explore-view__posts-content-wrapper">
        {explorePostsData.map((explore_post, index) => {
          return (
            <div className="explore-post-view-content-wrapper">
              <img src={explore_post.postContent} 
                alt="post-content"
                className="explore-post-content-image"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}