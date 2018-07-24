import React, { Component } from 'react';

import BeerDetails from '../Components/BeerDetails';

class Results extends Component {

  componentWillMount() {
    // When app is loaded directly to results route, make sure to disable loading animation
    if ( !this.props.state.isAppInitiated ) this.props.appInitiator(0);
  }

  render() {
    return (
      <section id="results-section">
        <BeerDetails state={ this.props.state } beerDetails={ this.props.state.searchResults } />
      </section>
    );

  }
}

export default Results;
