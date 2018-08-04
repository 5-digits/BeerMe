import React, { Component } from 'react';
import PropTypes from 'prop-types'

import MapContainer from '../Map';

class Location extends Component {
  render () {
    const location = this.props.location;
    const hoursListing = location.hoursOfOperation ? location.hoursOfOperation.split('\n')[0] : 'N/A';
    return (
      <div className="location">
        <div>
          <h4>{ location.name }</h4>
          <span><b>Location: </b> { `${location.locality}, ${location.region}, ${location.countryIsoCode}` } </span>
          <span><b>Hours:</b> { hoursListing }</span>
          <span><b>Phone:</b> { location.phone ? location.phone : 'N/A' }</span>
        </div>
        <div className="map-container">
          <MapContainer coordinates={ { lat: location.latitude, lng: location.longitude }} />
        </div>
      </div>
    )
  }
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
