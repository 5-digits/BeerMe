import React from 'react';

import Tooltip from '../Tooltip';

const BeerDetails = ( props ) => {
  const beerDetails = props.beerDetails;
  return (
    <div id="results">
      <div className="right-panel">
        <div className="container">
          <img className="beer-label" src={ beerDetails.labels.medium } alt="Beer Label"/>
          <h1 className="beer-name">{ beerDetails.nameDisplay }</h1>
          <div className="beer-info">
            <div className="label">
              <span className="title">ABV:</span>
              <span className="data">{ beerDetails.abv }</span>
              <Tooltip
                header={ "Standard Reference Method " }
                description={ "Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color." }
                />
            </div>
            <div className="label">
              <span className="title">IBU:</span>
              <span className="data">{ beerDetails.ibu }</span>
                <Tooltip
                  header={ "Standard Reference Method " }
                  description={ "Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color." }
                  />
            </div>
            <div className="label">
              <span className="title">GLASS:</span>
              <span className="data">{ beerDetails.glass.name }</span>
              <Tooltip
                header={ "Standard Reference Method " }
                description={ "Standard Reference Method (SRM) is used to measure a beer's color. It goes from 1 to 40+, with 1 being the lightest and 40+ being almost black in color." }
                />
            </div>
          </div>
          <a href="#beerinfo" className="see-more">
            <span>Read More</span>
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div id="beerinfo" className="left-panel">
        <div className="description">
          <h2>DESCRIPTION:</h2>
          <p>{ beerDetails.description }</p>
        </div>
      </div>
    </div>
  );
}

export default BeerDetails;
