import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  render() {
    const style = {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '300px'
    }

    return (
      <Map style={ style }
           google={this.props.google}
           zoom={14}
           initialCenter={ this.props.coordinates } >
           <Marker />
       </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWjAoV6ALsEqY6KeyhCGo9Ai-I8Hxfa4A"
})(MapContainer)
