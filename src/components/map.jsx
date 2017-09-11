import React, { Component } from 'react';
import ReactMapboxGl, { Marker, Popup, Layer, Feature } from 'react-mapbox-gl';
import mapbox from 'mapbox-gl';
import Icon from '../../public/assets/circle.png';

const MapBox = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ',
  maxZoom: 50
})
const Map = (props) => {
  return (
    <div>
      <MapBox
        containerStyle={{
          height: "75vh",
          width: "100vw"
        }}
        center={[props.coords.usersLong, props.coords.usersLat]}
        style="mapbox://styles/mapbox/streets-v10">

        <Marker
          coordinates={[props.coords.usersLong, props.coords.usersLat]}>
          <img src={Icon} />
        </Marker>

        <Layer
          type="line">
          <Feature coordinates={[[35.297201799999996, 32.7017354], [35.2979486, 32.7043734]]}></Feature>
        </Layer>
      </MapBox>
    </div>
  )
}

export default Map;
