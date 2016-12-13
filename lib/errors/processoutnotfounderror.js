'use strict';

var util = require('util');

function ProcessOutNotFoundError(code, message) {
    Error.captureStackTrace(this, ProcessOutNotFoundError);
    this.name = ProcessOutNotFoundError.name;
    this.message = message;
    this.code = code;
}

util.inherits(ProcessOutNotFoundError, Error);

module.exports = ProcessOutNotFoundError;