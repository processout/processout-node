'use strict';

var Crypto     = require('crypto');
var Base       = require('basejs');
var ProcessOut = require('./processout.js');

var Webhook = module.exports = Base.extend({
    _instance: null,

    /**
     * Webhook constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if(typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Compare two strings with a constant time
     * @param string a
     * @param string b
     * @return boolean
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
     * Make sure a given webhook is valid (coming from ProcessOut)
     * @param string reqBody
     * @param string b
     * @return boolean
     */
    validate: function(reqBody, hmacInput) {
        var hash = Crypto
            .createHmac('sha256', this._instance.getProjectSecret())
            .update(reqBody)
            .digest();
        var original = new Buffer(hmacInput, 'base64');

        return this.constantTimeEqual(original.toString(), hash.toString());
    }
});
