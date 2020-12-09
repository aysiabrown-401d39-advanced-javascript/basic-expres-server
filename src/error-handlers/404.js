'use strict';

function notFoundHandler(err, req, res, next) {
    console.log("404");
    res.status(404);
    res.statusMessage = 'Resource Not Found';
    res.json({error: 'not found'});
}

module.exports = notFoundHandler;

