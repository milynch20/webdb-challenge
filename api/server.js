const express = require('express');
const helmet = require('helmet');

//CHANGE THIS
const tracksRouter = require('../tracks/tracks-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

//CHANGE THIS
server.use('/api/', tracksRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
