import React, { Component } from 'react';
import Plx from 'react-plx';
import ViewProperty from './ViewProperty';
function ParallaxTest(props) {
    const parallaxData = [
        {
          start: 0,
          end: 500,
          properties: [
            {
              startValue: 1,
              endValue: 2,
              property: 'scale',
            },
          ],
        },
      ];
      class Example extends Component {
        render() {
          return (
              <div>
            <Plx
              className='MyAwesomeParallax'
              parallaxData={ parallaxData }
            >
                <div className="norwin_mansion">
      <div className="property_hero house_15_bg">
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h2>Mansion In Norwin</h2>
          </div>
        </div>
      </div>
      </div>
      <ViewProperty />
      <SortByContent />
            </Plx>
            </div>
          );
        }
      }
    
    
}

export default ParallaxTest
