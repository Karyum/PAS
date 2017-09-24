import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Icon from '../../public/assets/circle.png';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const MapView = ({ usersLocation }) => {
    if (usersLocation.usersLat) {
    return (
      <Map style={{
          height: "75vh",
          width: "100vw"
        }}
        center={[usersLocation.usersLat, usersLocation.usersLong]} zoom={15}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      <Marker
        position={[usersLocation.usersLat, usersLocation.usersLong]}
        >
      </Marker>
      </Map>
    )
  } else {
    return <Redirect to="/" />
  }
}

export default MapView;
