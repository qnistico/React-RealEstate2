import React from 'react';
import GiantTemplate from './GiantTemplate';

function FinalTemplate(props) {
    return (
        <div className="all_the_content">
            <GiantTemplate carouselImg1={somePropHere} /> (this prop does NOT work!)
        </div>
    )
}

export default FinalTemplate
