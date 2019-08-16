import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap((props) =>
    // render google map component with marker
    <GoogleMap
        defaultZoom={8}
        defaultCenter={props.location}
    >
        <Marker position={props.location}/>
    </GoogleMap>
));

export default Map;