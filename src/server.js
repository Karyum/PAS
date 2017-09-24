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

app.post('/get-steps', (req, res) => {
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
      res.send(results.routes[0])
    });
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})


module.exports = app
