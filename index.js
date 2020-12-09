'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const server = require('./src/server');

server.start(PORT);