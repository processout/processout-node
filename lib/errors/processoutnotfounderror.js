'use strict';

var util = require('util');

function ProcessOutNotFoundError(message) {
    Error.captureStackTrace(this, ProcessOutNotFoundError);
    this.name = ProcessOutNotFoundError.name;
    this.message = this.message;
}

util.inherits(ProcessOutNotFoundError, Error);

module.exports = ProcessOutNotFoundError;