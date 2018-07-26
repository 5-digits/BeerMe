import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

class BeerDetails extends Component {

  getBeerDescription = () => {
    const description = this.props.beerDetails.description;
    if ( description ) {
      return (
        <div className="description">
          <h2>DESCRIPTION:</h2>
          <p>{ description }</p>
        </div>
      );
    }
  }

  render() {
    const beerDetails = this.props.beerDetails;
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

          { this.getBeerDescription() }

        </div>

      </div>
    );
  }
}

BeerDetails.propTypes = {
  beerDetails: PropTypes.object.isRequired
};

export default BeerDetails;
