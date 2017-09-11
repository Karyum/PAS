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
  console.log(isNaN(req.body.user.latitude));
  console.log(isNaN(req.body.user.longitude));
  console.log(isNaN(req.body.place.lat));
  console.log(isNaN(req.body.place.lng));
  mapboxClient.getDirections([
    { latitude: req.body.user.latitude, longitude: req.body.user.longitude },
    { latitude: req.body.place.lat, longitude: req.body.place.lng }
  ], (err, result) => {
    if (err) {
      console.log(err);
      return
    }
    res.send(result)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})


module.exports = app
