import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BeerDetails from '../Components/BeerDetails';

class Results extends Component {

  state = {
    resultsExist: true
  }

  componentWillMount() {
    // When app is loaded directly to results route, make sure to disable loading animation
    if ( !this.props.state.isAppInitiated ) this.props.appInitiator(0);
    // Verify that results exist before loading app
    this.checkThatResultsExist();

  }

  componentDidMount() {
    // When results are empty, redirect to search page
      // TODO: add logic to get beer by id passed in URL
    if ( !this.state.resultsExist ) this.redirectToSearch();
  }

  //Verify that results do exist in app state, otherwise update local state
  checkThatResultsExist = () => {
    const searchResults = this.props.state.searchResults;
    if ( Object.keys(searchResults).length === 0 && searchResults.constructor === Object ) {
      this.setState({
        resultsExist: false
      });
    }
  }

  redirectToSearch = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <section id="results-section">
        { this.state.resultsExist ?
          <BeerDetails beerDetails={ this.props.state.searchResults } /> :
          <div className="ressults-empty">
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
  appInitiator: PropTypes.func.isRequired
};

export default Results;
