'use strict';

var util = require('util');

function ProcessOutValidationError(code, message) {
    Error.captureStackTrace(this, ProcessOutValidationError);
    this.name = ProcessOutValidationError.name;
    this.message = message;
    this.code = code;
}

util.inherits(ProcessOutValidationError, Error);

module.exports = ProcessOutValidationError;