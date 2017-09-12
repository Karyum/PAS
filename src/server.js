const express = require('express');
const path = require('path');
const nodeGeoCode = require('node-geocoder');
const bodyParse = require('body-parser');
const MapboxClient = require('mapbox');
require('env2')('./.env');

const app = express();
const geocoder = nodeGeoCode({ provider: 'google' });
const mapboxClient = new MapboxClient(process.env.MAPBOX_KEY);

let addressLatLng = {};

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParse.json());
app.use(express.static('public'));

// app.post('/geocode', (req, res) => {
//   geocoder.geocode(req.body.address, (err ,response) => {
//     if (err) {
//       console.log(err);
//       return
//     }
//     addressLatLng = { lat: response[0].latitude, lng: response[0].longitude }
//     res.json({ lat: response[0].latitude, lng: response[0].longitude })
//   })
// })

app.post('/get-steps', (req, res) => {
  console.log(req.body);
  mapboxClient.getDirections([
    { latitude: req.body.user.usersLat, longitude: req.body.user.usersLong },
    { latitude: req.body.place.latitude, longitude: req.body.place.longtitude }
  ],
    {
      steps: true,
      alternatives: true,
      geometries: 'geojson',
      overview: 'simplified',
    },
    (err, results) => {
      console.log(results.routes[0].geometry);
      res.send(results.routes[0])
    });
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})


module.exports = app
