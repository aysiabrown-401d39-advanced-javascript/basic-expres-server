'use strict';

// dependencies 
require('dotenv').config();
const express = require('express');
const app = express();

// modularity 
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

// body parser 
app.use(express.json());

//middleware
app.use(logger);
app.use(validator);

// person route
app.get('/person', validator, getPerson);


// person handler 
function getPerson(req, res, next) {
    let { name } = req.query;
    res.status(200).json({ name: name })
}

// error & not found handling for all routes
app.use('*', notFoundHandler);
app.use(errorHandler);


// server is running & listening 
function start(port) {
    app.listen(port, () => console.log('Server is listening on: ', port));
}

// export to use in index file 
module.exports = {
    server: app,
    start: start
}