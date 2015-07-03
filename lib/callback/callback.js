'use strict';

var Crypto     = require('crypto');
var Base       = require('basejs');
var ProcessOut = require('../processout');

var Callback = module.exports = Base.extend({
    _processOut: null,

    constructor: function(processOut) {
        if(typeof processOut === 'undefined')
            processOut = ProcessOut.getDefault();

        this._processOut = processOut;
    },

    constantTimeEqual: function(a, b) {
        var key = Crypto.randomBytes(32);
        for (var c = 0, i = 0, n = a.length; i < n; i += 1) {
            c |= a[i] ^ b[i];
        }
        c |= (a.length ^ b.length);
        return c === 0;
    },

    validate: function(transactionId, hmacInput) {
        var hash = Crypto
            .createHmac('sha256', this._processOut.getProjectKey())
            .update(transactionId)
            .digest('hex');
        var original = new Buffer(hmacInput, 'base64');

        return this.constantTimeEqual(original.toString(), hash);
    }
});