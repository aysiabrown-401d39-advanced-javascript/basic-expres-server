'use strict';

function validateName(req, res, next) {
    console.log("validateName");
    if(!req.query.name) {
       next('No name provided');
    }
    next();
}

module.exports = validateName;