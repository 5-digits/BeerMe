import React, { Component } from 'react'
import PropTypes from 'prop-types'
import beerAPI from '../utilsAPI'

import SearchForm from '../Components/SearchForm'
import Loader from '../Components/Loader'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isSearching : false
    }
    // bind functions
    this.searchRandomBeer = this.searchRandomBeer.bind(this)

  }

  componentDidMount() {
    // Reset query parameters to initial state when user returns to search page
    this.props.resetSearchQuery()
  }

  searchRandomBeer() {
    const beerStyleID = this.props.state.searchQuery.beerStyleID
    const srmColorID = this.props.state.searchQuery.srmColorID

    // Turn on searching state before redirecting to results page
    this.setState({
      isSearching: true
    })

    beerAPI.searchRandomBeer( beerStyleID , srmColorID )
        .then( (resp) => {
          this.props.updateSearchResults( resp )
          //redirect to results page /beer/:beerID
          this.props.history.push(`/beer/${this.props.state.searchResults.id}`)
        })

  }

  render() {
    return (
      this.state.isSearching ?
      <Loader loadingText="Searching..." /> :
      <section id="search-section">
        <div id="search">
          <div className="main-header">
            <h1>Find your next favorite beer!</h1>
          </div>
          <SearchForm
            state={ this.props.state }
            updateSearchQuery={ this.props.updateSearchQuery }
            searchRandomBeer={ this.searchRandomBeer }
            />
        </div>
      </section>
    );
  }

}

Search.propTypes = {
  state: PropTypes.object.isRequired,
  updateSearchQuery: PropTypes.func.isRequired,
  resetSearchQuery: PropTypes.func.isRequired,
  updateSearchResults: PropTypes.func.isRequired,
};

export default Search;
