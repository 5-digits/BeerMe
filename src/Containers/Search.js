import React, { Component } from 'react';

import SearchForm from '../Components/SearchForm';

class Search extends Component {

  render() {
    return (
      <section id="search-section">
        <div id="search">
          <div className="main-header">
            <h1>Find your next favorite beer!</h1>
          </div>
          <SearchForm  state={ this.props.state } updateSearchQuery={ this.props.updateSearchQuery } />
        </div>
      </section>
    );
  }
}

export default Search;
