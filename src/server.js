const express = require('express');
const path = require('path');
const nodeGeoCode = require('node-geocoder');
const bodyParse = require('body-parser');

const app = express();
const geocoder = nodeGeoCode({ provider: 'google' })

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(bodyParse.json())

app.post('/geocode', (req, res) => {
  geocoder.geocode(req.body.address, (err ,response) => {
    if (err) {
      console.log(err);
      return
    }
    res.json({ lat: response[0].latitude, lng: response[0].longitude })
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})


module.exports = app
