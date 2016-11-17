'use strict';

var util = require('util');

function ProcessOutAuthenticationError(message) {
    Error.captureStackTrace(this, ProcessOutAuthenticationError);
    this.name = ProcessOutAuthenticationError.name;
    this.message = this.message;
}

util.inherits(ProcessOutAuthenticationError, Error);

module.exports = ProcessOutAuthenticationError;