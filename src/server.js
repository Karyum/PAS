const express = require('express');
const path = require('path');

const app = express();
console.log(path.resolve(__dirname, '..', 'dist'));
app.use(express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

module.exports = app
