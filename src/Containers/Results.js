import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BeerDetails from '../Components/BeerDetails';

class Results extends Component {

  state = {
    resultsExist: true,
  }

  componentWillMount() {
    // When app is loaded directly to results route, make sure to disable loading animation
    if ( !this.props.state.isAppInitiated ) this.props.appInitiator(0);
    // Verify that results exist before loading app
    if ( !this.checkThatResultsExist() ) {
      this.searchBeerById();
    }
  }

  //Verify that results do exist in app state, otherwise update local state
  checkThatResultsExist = () => {
    const searchResults = this.props.state.searchResults;
    if ( Object.keys(searchResults).length === 0 && searchResults.constructor === Object ) {
      this.setState({
        resultsExist: false
      });
      return false;
    }
    return true;
  }

  redirectToSearch = () => {
    this.props.history.push("/");
  }

  searchBeerById = () => {
    const beerID = this.props.match.params.id;
    const searchParams = `beer/${beerID}?&withBreweries=Y`;
    this.props.searchFromBreweryDB(searchParams)
      .then( () => {
        this.setState({
          resultsExist: true
        });
      });
  }

  render() {
    return (
      <section id="results-section">
        { this.state.resultsExist ?
          <BeerDetails beerDetails={ this.props.state.searchResults } /> :
          <div className="results-empty">
            <p>Sorry, no results found!</p>
            <i>Redirecting...</i>
          </div>
        }
      </section>
    );
  }
}

Results.propTypes = {
  state: PropTypes.object.isRequired,
  appInitiator: PropTypes.func.isRequired,
  searchFromBreweryDB: PropTypes.func.isRequired
};

export default Results;
