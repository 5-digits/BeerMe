import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Category from './Category';
import Info from './Info';

class BeerDetails extends Component {

  render() {
    const beerDetails = this.props.beerDetails;
    const beerBrewery = this.props.beerDetails.breweries ? this.props.beerDetails.breweries[0] : null;
    return (
      <div id="results">
        <div className="right-panel">
          <div className="container">

            { beerDetails.labels ? <img className="beer-label" src={ beerDetails.labels.medium } alt="Beer Label"/> : '' }

            <h1 className="beer-name">{ beerDetails.nameDisplay }</h1>
            <div className="beer-info">

              { beerDetails.abv ? <Category category= { "ABV" } value={ beerDetails.abv } /> : '' }

              { beerDetails.ibu ? <Category category= { "IBU" } value={ beerDetails.ibu } /> : '' }

              { beerDetails.glass ? <Category category= { "Glass" } value={ beerDetails.glass.name } /> : '' }

            </div>
            <a href="#beerinfo" className="see-more">
              <span>Read More</span>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div id="beerinfo" className="left-panel">

          <Info parent={ this.props.beerDetails.description } header={ "DESCRIPTION:"} text={ this.props.beerDetails.description } />
          <Info parent={ this.props.beerDetails.foodPairings } header={ "FOOD PAIRING:"} text={ `Pairs well with ${ this.props.beerDetails.description }` } />
          <Info parent={ beerBrewery } header={ "ABOUT BREWERER:"} >

            <div className="brewery">
              <span> { beerBrewery.name }</span>
              <a target="_blank" href={ beerBrewery.website }>{ beerBrewery.website }</a>
              <span>{ `Established in ${ beerBrewery.established }`}</span>
            </div>

          </Info>
        </div>

      </div>
    );
  }
}

BeerDetails.propTypes = {
  beerDetails: PropTypes.object.isRequired
};

export default BeerDetails;
