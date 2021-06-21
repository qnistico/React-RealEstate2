import React from 'react'
import CarouselExample from './CarouselExample'

function GiantTemplate(props) {
    return (
        <div className="huge_content_here">
            <div className="500_+_lines_of_code">
                <CarouselExample carouselImg1={somePropHere}/> (this prop works fine!)
            </div>
        </div>
    )
}

export default GiantTemplate
