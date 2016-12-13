'use strict';

var util = require('util');

function ProcessOutError(code, message) {
    Error.captureStackTrace(this, ProcessOutError);
    this.name = ProcessOutError.name;
    this.message = message;
    this.code = code;
}

util.inherits(ProcessOutError, Error);

module.exports = ProcessOutError;