import React from 'react';
import PropTypes from 'prop-types'

import Location from './Location';

const Locations = (props) => {
  const locationsList = props.locations;

  return (
    <div className="locations-container">
      {
        locationsList.map((location) => {
          return (
             <Location key={ location.id } location={ location } />
          )
        })
      }
    </div>
  )
}

Locations.propTypes = {
  locations: PropTypes.array.isRequired
};

export default Locations;
