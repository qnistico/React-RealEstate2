import React from 'react';
import SortByContent from './SortByContent';

function PagesHero(props) {
    return (
            <div className="view_property">
      <div className="property_hero">
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h2>{props.pagesheroTitle}</h2>
          </div>
        </div>
      </div>
      <SortByContent />
        </div>
    )
}

export default PagesHero
