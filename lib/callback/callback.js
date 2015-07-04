'use strict';

var Crypto     = require('crypto');
var Base       = require('basejs');
var ProcessOut = require('../processout');

var Callback = module.exports = Base.extend({
    _processOut: null,

    /**
     * Callback constructor
     * @param  {ProcessOut} processOut ProcessOut instance
     */
    constructor: function(processOut) {
        if(typeof processOut === 'undefined')
            processOut = ProcessOut.getDefault();

        this._processOut = processOut;
    },

    /**
     * Perform an equal test which is time contant
     * @param  {string} a
     * @param  {string} b
     * @return {Boolean}
     */
    constantTimeEqual: function(a, b) {
        var key = Crypto.randomBytes(32);
        for (var c = 0, i = 0, n = a.length; i < n; i += 1) {
            c |= a[i] ^ b[i];
        }
        c |= (a.length ^ b.length);
        return c === 0;
    },

    /**
     * Perform basic checks on the callback to check if it is coming from
     * ProcessOut, and is therefore authentic
     * @param  {string} transactionId Id of the transaction
     * @param  {string} hmacInput     Hash passed in the request data
     * @return {Boolean}
     */
    validate: function(transactionId, hmacInput) {
        var hash = Crypto
            .createHmac('sha256', this._processOut.getProjectKey())
            .update(transactionId)
            .digest('hex');
        var original = new Buffer(hmacInput, 'base64');

        return this.constantTimeEqual(original.toString(), hash);
    }
});