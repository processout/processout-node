'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var PaymentDataThreeDSAuthentication = module.exports = Base.extend({
    _client: null,

    /**
     * Authentication XID
     * @type {string}
     */
    _xID: null,

    /**
     * PaymentDataThreeDSAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataThreeDSAuthentication object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataThreeDSAuthentication()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get XID
     * Authentication XID
     * @return {string}
     */
    getXID: function() {
        return this._xID;
    },

    /**
     * Set XID
     * Authentication XID
     * @param {string} val
     * @return {PaymentDataThreeDSAuthentication}
     */
    setXID: function(val) {
        this._xID = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSAuthentication}
     */
    fillWithData: function(data) {
        if (data["XID"])
            this.setXID(data["XID"]);
        return this;
    },

    
}, {});
