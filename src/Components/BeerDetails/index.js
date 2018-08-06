import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Category from './Category';
import Info from './Info';
import Locations from './Locations';


class BeerDetails extends Component {

  scrollToLearnMore = () => {
    // scroll down to learn more section.
    const learnMore = ReactDOM.findDOMNode(this.refs.beerinfo);
    if (learnMore) window.scrollTo(0, learnMore.offsetTop);
  }
  render() {
    const beerDetails = this.props.beerDetails;
    const beerBrewery = this.props.beerDetails.breweries ? this.props.beerDetails.breweries[0] : null;

    return (
      <div id="results">
        <div className="right-panel">
          <div className="container">

            { beerDetails.labels ? <img className="beer-label" src={ beerDetails.labels.medium } alt="Beer Label"/> : '' }


            <div className="beer-info">
              <h1 className="beer-name item bottom">{ beerDetails.nameDisplay }</h1>
              <h2 className="item bottom">
                <a target="_blank" href={ beerBrewery.website }>
                  { beerBrewery.name }
                  <i className="fa fa-external-link-square" aria-hidden="true"></i>
                </a>
              </h2>
              <span className="item bottom left inline">
                <Category category= { "ABV" } value={ beerDetails.abv } />
              </span>
              <span className="item bottom right inline">
                <Category category= { "IBU" } value={ beerDetails.ibu } />
              </span>
              <span className="item">{ beerDetails.style.shortName } </span>
            </div>
            <a onClick={ this.scrollToLearnMore } className="see-more">
              <span>Read More</span>
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div ref="beerinfo" className="left-panel">

          <Info parent={ this.props.beerDetails.description } header={ "DESCRIPTION:"} text={ this.props.beerDetails.description } />

          <Info parent={ beerBrewery } header={ "ABOUT BREWERER:"} >
            <div className="brewery">
              <div className="summary">
                <div>
                  <img src={ beerBrewery.images ? beerBrewery.images.icon : require('../../images/beer-placeholder.png') } alt="Brewery Logo" />
                </div>
                <div>
                  <span> { beerBrewery.name }</span>
                  <a target="_blank" href={ beerBrewery.website }>{ beerBrewery.website }</a>
                  <span>{ beerBrewery.established ? `Established in ${ beerBrewery.established }` : null}</span>
                </div>
              </div>

              <Locations locations= { beerBrewery.locations } />
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
