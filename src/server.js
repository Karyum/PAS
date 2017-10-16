const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const MapboxClient = require('mapbox');
const compression = require('compression');
require('env2')('./.env');

const app = express();
const mapboxClient = new MapboxClient(process.env.MAPBOX_KEY);

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParse.json());
app.use(express.static('public'));
app.use(compression());

app.get('/get-places', (req, res) => {
  res.send([
    { title: 'Liwan', address: '6132 St 22-24, Nazareth', latitude: 32.704519, longtitude: 35.298089 },
    { title: 'Fauzi Azar', address: '6108 St, Nazareth, 16125', latitude: 32.704827, longtitude: 35.297459 },
    { title: 'AlReda', address: 'Al-Bishara St 21, Nazareth', latitude: 32.703154, longtitude: 35.297981 }
  ]);
});

app.post('/get-steps', (req, res) => {
  mapboxClient.getDirections([
    { latitude: req.body.user.usersLat, longitude: req.body.user.usersLong },
    { latitude: req.body.place.latitude, longitude: req.body.place.longtitude }
  ],
  {
    steps: true,
    alternatives: true,
    geometries: 'geojson',
    overview: 'full'
  },
  (err, results) => {
    res.send(results.routes[0].geometry.coordinates);
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});


module.exports = app;
