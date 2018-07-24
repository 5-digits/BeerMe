import React, { Component } from 'react';

import SearchForm from '../Components/SearchForm';

class Search extends Component {

  componentDidMount() {
      console.log(this.props.history);
  }

  searchRandomBeer = () => {
    const apiKey = "2ac80c8189c3741bc212ff55d424eee0";
    const CORSBridge = "https://cors-anywhere.herokuapp.com";
    const breweryDB = "http://api.brewerydb.com/v2";
    const defaultParams = "beer/random?hasLabels=Y";
    const searchParams = this.props.state.searchQuery;

    fetch( `${CORSBridge}/${breweryDB}/${defaultParams}&styleId=${searchParams.beerStyleID}&smrId=${searchParams.srmColorID}&key=${apiKey}`)
      .then( blob => blob.json() )
      .then( resp => {
        this.props.updateSearchResults( resp.data );
        //redirect to results page /beer/:beerID
        this.props.history.push(`beer/${resp.data.id}`);
      })
      .catch( error => {
        console.error(error);
      });

  }

  render() {
    return (
      <section id="search-section">
        <div id="search">
          <div className="main-header">
            <h1>Find your next favorite beer!</h1>
          </div>
          <SearchForm  state={ this.props.state }
                       updateSearchQuery={ this.props.updateSearchQuery }
                       searchRandomBeer={ this.searchRandomBeer }
                       />
        </div>
      </section>
    );
  }
}

export default Search;
