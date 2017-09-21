'use strict';
const express = require('express');
const serverConf = require('server.config');
const app = express();


app.get('/', ( req, res ) => {
  res.send('Bazinga');
});

app.listen(serverConf.host, serverConf.port);
console.log(`App running on http://${serverConf.host}:${serverConf.port}`);
