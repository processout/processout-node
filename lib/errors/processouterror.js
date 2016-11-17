'use strict';

var util = require('util');

function ProcessOutError(message) {
    Error.captureStackTrace(this, ProcessOutError);
    this.name = ProcessOutError.name;
    this.message = this.message;
}

util.inherits(ProcessOutError, Error);

module.exports = ProcessOutError;