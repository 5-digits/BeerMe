import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Loadable from 'react-loadable'

const MapLoader = () => {
  return (
    <span className="loading">Loading...</span>
  )
}
// Lazy load map containter
const MapContainer = Loadable({
  loader: () => import('../Map'),
  loading: MapLoader,
  delay: 0
})

class Location extends Component {

  constructor(props) {
    super(props)
    this.state = {
      readyForLoad: false,
    }

    this.mapContainer = React.createRef()

    //bind functions
    this.isInViewport = this.isInViewport.bind(this)
  }

  componentDidMount() {

    // Need to check when component is on view to load the Map Components
    window.addEventListener('scroll', () => {
      if ( this.isInViewport() ) {
        this.setState({
          readyForLoad: true,
        })
      }
    });
  }

  /**
   * Check if an element is in viewport
   */
  isInViewport(offset = 0) {
    if (!this.mapContainer.current) return false;
    const top = this.mapContainer.current.getBoundingClientRect().top;
    return (top + offset) >= 0 && (top - offset) <= window.innerHeight;
  }

  render() {
    const location = this.props.location;
    const hoursListing = location.hoursOfOperation ? location.hoursOfOperation.split('\n')[0] : 'N/A';
    return (
      <div className="location" ref={ this.mapContainer }>
        <div>
          <h4>{ location.name }</h4>
          <span><b>Location: </b> { `${location.locality}, ${location.region}, ${location.countryIsoCode}` } </span>
          <span><b>Hours:</b> { hoursListing }</span>
          <span><b>Phone:</b> { location.phone ? location.phone : 'N/A' }</span>
        </div>
        <div className="map-container" >
          {
            this.state.readyForLoad ?
            <MapContainer coordinates={ { lat: location.latitude, lng: location.longitude }} /> :
            <span className="loading"><i className="fa fa-map" aria-hidden="true"></i></span>
          }
        </div>
      </div>
    )
  }
}

Location.propTypes = {
  location: PropTypes.object.isRequired
};

export default Location;
