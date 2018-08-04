import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Location from './Location';

class Locations extends Component {
  render () {
    const locationsList = this.props.locations;
    const Locations = locationsList.map((location, index) => {
      return (
         <Location key={ index } location={ location } />
      );
    });

    return (
      <div className="locations-container">
        { Locations }
      </div>
    )
  }
}

Locations.propTypes = {
  locations: PropTypes.array.isRequired
};

export default Locations;
