import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Icon from '../../public/assets/circle.png';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class MapView extends Component  {
  constructor(props) {
    super();

    this.state = {}
  }
  render() {
    if (!this.props.coords.usersLat) {
      render() {
        return (

        )
      }
    }
  return (
    <Map style={{
        height: "75vh",
        width: "100vw"
      }} center={[this.props.coords.usersLat, this.props.coords.usersLong]} zoom={10}>
      <TileLayer
        url='https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FyeXVtIiwiYSI6ImNqMjAzNGU4ZjAxa3EycW4xazFxcHZ6a2QifQ.m_dNO1l1sMkM7r4d5nlRRQ'
      />
    </Map>
  )
}
}

export default MapView;
