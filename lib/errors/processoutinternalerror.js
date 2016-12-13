'use strict';

var util = require('util');

function ProcessOutInternalError(code, message) {
    Error.captureStackTrace(this, ProcessOutInternalError);
    this.name = ProcessOutInternalError.name;
    this.message = message;
    this.code = code;
}

util.inherits(ProcessOutInternalError, Error);

module.exports = ProcessOutInternalError;