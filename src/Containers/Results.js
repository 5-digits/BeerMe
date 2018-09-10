import React, { Component } from 'react';
import PropTypes from 'prop-types';
import beerAPI from '../utilsAPI'

import BeerDetails from '../Components/BeerDetails';

class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      resultsExist: true,
    }

    // Bind functions
    this.checkThatResultsExist = this.checkThatResultsExist.bind(this)
    this.searchBeerById = this.searchBeerById.bind(this)

  }


  componentWillMount() {
    // Verify that results exist before loading app
    if ( !this.checkThatResultsExist() )  this.searchBeerById()
  }

  //Verify that results do exist in app state, otherwise update local state
  checkThatResultsExist() {
    const searchResults = this.props.state.searchResults;

    if ( Object.keys(searchResults).length === 0 && searchResults.constructor === Object ) {
      this.setState({
        resultsExist: false
      });
      return false;
    }
    return true;
  }


  //TODO Redirect to search page when beer is not found (404 error)
  searchBeerById() {
    const beerID = this.props.match.params.id;

    beerAPI.searchBeerById( beerID )
      .then( ( resp ) => {
        this.props.updateSearchResults( resp )
        this.setState({
          resultsExist: true
        });
      })

  }

  render() {
    return (
      <section id="results-section">
        { this.state.resultsExist ?
          <BeerDetails beerDetails={ this.props.state.searchResults } /> :
          null
        }
      </section>
    );
  }
}

Results.propTypes = {
  state: PropTypes.object.isRequired,
  updateSearchResults : PropTypes.func.isRequired
};

export default Results;
