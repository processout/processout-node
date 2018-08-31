'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var PaymentDataNetworkAuthentication = module.exports = Base.extend({
    _client: null,

    /**
     * Authentication CAVV
     * @type {string}
     */
    _cavv: null,

    /**
     * PaymentDataNetworkAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataNetworkAuthentication object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataNetworkAuthentication()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Cavv
     * Authentication CAVV
     * @return {string}
     */
    getCavv: function() {
        return this._cavv;
    },

    /**
     * Set Cavv
     * Authentication CAVV
     * @param {string} val
     * @return {PaymentDataNetworkAuthentication}
     */
    setCavv: function(val) {
        this._cavv = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataNetworkAuthentication}
     */
    fillWithData: function(data) {
        if (data["cavv"])
            this.setCavv(data["cavv"]);
        return this;
    },

    
}, {});
