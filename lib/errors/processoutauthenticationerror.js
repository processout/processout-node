'use strict';

var util = require('util');

function ProcessOutAuthenticationError(code, message) {
    Error.captureStackTrace(this, ProcessOutAuthenticationError);
    this.name = ProcessOutAuthenticationError.name;
    this.message = message;
    this.code = code;
}

util.inherits(ProcessOutAuthenticationError, Error);

module.exports = ProcessOutAuthenticationError;