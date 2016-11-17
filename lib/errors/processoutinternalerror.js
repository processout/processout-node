'use strict';

var util = require('util');

function ProcessOutInternalError(message) {
    Error.captureStackTrace(this, ProcessOutInternalError);
    this.name = ProcessOutInternalError.name;
    this.message = this.message;
}

util.inherits(ProcessOutInternalError, Error);

module.exports = ProcessOutInternalError;