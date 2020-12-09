'use strict';

function errorHandler(err, req, res, next) {
    console.log("505");
    res.status(500);
    res.statusMessage = 'Server Error';
    res.json({ error: err });
}

module.exports = errorHandler;
