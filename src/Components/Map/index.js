import React from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const MapContainer = (props) => {
  const style = {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '300px'
  }
  
  return (
    <Map style={ style }
         google={ props.google }
         zoom={ 14 }
         initialCenter={ props.coordinates } >
         <Marker />
     </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWjAoV6ALsEqY6KeyhCGo9Ai-I8Hxfa4A"
})(MapContainer)
