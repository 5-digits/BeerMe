import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchForm from '../Components/SearchForm';

// import tempData from '../data/staticData';

class Search extends Component {

  componentDidMount() {
    if ( this.props.state.isAppInitiated ) this.props.resetSearchQuery();
  }

  searchRandomBeer = () => {
    const defaultParams = "beer/random?hasLabels=Y&withBreweries=Y";
    const searchParams = `${defaultParams}&styleId=${this.props.state.searchQuery.beerStyleID}&smrId=${this.props.state.searchQuery.srmColorID}`;

    this.props.searchFromBreweryDB(searchParams)
      .then(  (resp) => {
        //redirect to results page /beer/:beerID
        this.props.history.push(`/beer/${this.props.state.searchResults.id}`);
      });

  }

  render() {

    return (
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
  updateSearchResults: PropTypes.func.isRequired,
  resetSearchQuery: PropTypes.func.isRequired,
  searchFromBreweryDB: PropTypes.func.isRequired,
};

export default Search;
