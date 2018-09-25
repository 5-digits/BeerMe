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
    if ( !this.checkThatResultsExist() )  {
      this.searchBeerById()
    } else if ( this.props.state.searchResults.id !== this.props.match.params.id ) {
      //When beer id does not match the id user is looking for, reset state and search again
      this.props.resetSearchResults()
      this.searchBeerById()
    }
  }

  componentDidMount() {
    // fixes issue where result page maintains scroll position from the current screen
    window.scrollTo(0 , 0)
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

  searchBeerById() {
    const beerID = this.props.match.params.id;

    beerAPI.searchBeerById( beerID )
      .then( ( resp ) => {
        // When data is undefined, it means that an error was returned form request
        if ( typeof resp.error === 'undefined' ) {
          // When request does not fail, update results and local state
          this.props.updateSearchResults( resp )
          this.setState({
              resultsExist: true
          })
        } else {
          //When a failure is registered, update local state to note that no results are available
          if ( this.state.resultsExist ) {
            this.setState({
              resultsExist: false
            })
          }
          //Redirect to search page when beer is not found (404 error)
          if ( resp.status === 404 ) {
            // TODO Redirect to Beer Not Found page when created
            this.props.history.push('/')
          }
        }
      })
  }

  render() {
    return (
      <section id="results-section">
        <BeerDetails beerDetails={ this.props.state.searchResults } />
      </section>
    );
  }
}

Results.propTypes = {
  state: PropTypes.object.isRequired,
  updateSearchResults : PropTypes.func.isRequired,
  resetSearchResults: PropTypes.func.isRequired
};

export default Results;
