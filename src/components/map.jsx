import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Popup, Layer, Feature } from 'react-mapbox-gl';
import mapbox from 'mapbox-gl';
import GeoLocation from 'geolocation';

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ',
  maxZoom: 25
})

class Map extends Component {
  constructor() {
    super()

    this.state = { coords: {latitude: 32.7043734, longitude: 35.2979486} }
  }
  componentWillMount() {
    GeoLocation.getCurrentPosition((err, position) => {
      if (err) {
        console.log(err);
        return err
      }
      this.setState({ coords: position.coords })
    })
  }

  render() {
    return (
      <div>
        <MapBox
          maxBounds={[[35.278158, 32.683154], [35.341721, 32.723174]]}
          containerStyle={{
            height: "75vh",
            width: "100vw"
          }}
          center={[this.state.coords.longitude, this.state.coords.latitude]}
          style="mapbox://styles/mapbox/streets-v10">

          <Marker coordinates={[this.state.coords.longitude, this.state.coords.latitude]}>GASAFADFASF</Marker>
        </MapBox>
      </div>
    )
  }
}

export default Map;
