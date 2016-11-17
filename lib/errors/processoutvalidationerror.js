'use strict';

var util = require('util');

function ProcessOutValidationError(message) {
    Error.captureStackTrace(this, ProcessOutValidationError);
    this.name = ProcessOutValidationError.name;
    this.message = this.message;
}

util.inherits(ProcessOutValidationError, Error);

module.exports = ProcessOutValidationError;