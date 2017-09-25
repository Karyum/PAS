import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactMapboxGl, { Marker, Popup, Layer, Feature } from 'react-mapbox-gl';
import Icon from '../../public/assets/circle.png';

const MapBox = ReactMapboxGl({
   accessToken: 'pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ',
   minZoom: 5
})

const MapView = ({ usersLocation, direction }) => {
  console.log(direction);
    if (usersLocation.usersLat && direction) {
    return (
      <div>
        <MapBox
          zoom={[16]}
          containerStyle={{
            height: "75vh",
            width: "100vw"
         }}
          center={[usersLocation.usersLong, usersLocation.usersLat]}
          style="mapbox://styles/mapbox/streets-v10">
        <Marker
         coordinates={[usersLocation.usersLong, usersLocation.usersLat]}>
          <img src={Icon} />
        </Marker>
        <Layer
          type="line">
           <Feature coordinates={direction}></Feature>
        </Layer>
      </MapBox>
      </div>
      )
  } else if(!direction && !usersLocation.usersLat) {
    return <Redirect to="/" />
  } else {
    return <h2>Loading...</h2>
  }
}

export default MapView;
