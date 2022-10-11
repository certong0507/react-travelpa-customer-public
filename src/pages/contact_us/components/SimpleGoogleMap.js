import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker/Marker';

const key = {
  key: process.env.REACT_APP_GEOCODING_APIS
};

export const SimpleGoogleMap = ({ map, height, width }) => {

  return (
    <div style={{ height: height, width: width }}>
      <GoogleMapReact
        bootstrapURLKeys={key}
        defaultCenter={map.center}
        defaultZoom={map.zoom}
      >
        <Marker
          lat={map.center.lat}
          lng={map.center.lng}
          name="My Marker"
          color="red"
        />
      </GoogleMapReact>
    </div>
  );

}

export default SimpleGoogleMap;