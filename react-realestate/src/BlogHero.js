import React from 'react';
import SortByContent from './SortByContent';

function BlogHero() {
    return (
        <div>
            <div>
      <div className="blog_hero parallaxifyBg" data-speed-multiplier="-2.5">
        <div className="blog_hero_flex">
          <div className="blog_hero_content">
            <h1>Real Estate Blog</h1>
          </div>
        </div>
      </div>
      <SortByContent />
        </div>
        </div>
    )
}

export default BlogHero
