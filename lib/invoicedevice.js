'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var InvoiceDevice = module.exports = Base.extend({
    _client: null,

    /**
     * Channel of the device
     * @type {string}
     */
    _channel: null,

    /**
     * IP address of the device
     * @type {string}
     */
    _ipAddress: null,

    /**
     * InvoiceDevice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDevice object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDevice()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Channel
     * Channel of the device
     * @return {string}
     */
    getChannel: function() {
        return this._channel;
    },

    /**
     * Set Channel
     * Channel of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    setChannel: function(val) {
        this._channel = val;
        return this;
    },

    /**
     * Get IpAddress
     * IP address of the device
     * @return {string}
     */
    getIpAddress: function() {
        return this._ipAddress;
    },

    /**
     * Set IpAddress
     * IP address of the device
     * @param {string} val
     * @return {InvoiceDevice}
     */
    setIpAddress: function(val) {
        this._ipAddress = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDevice}
     */
    fillWithData: function(data) {
        if (data["channel"])
            this.setChannel(data["channel"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        return this;
    },

    
}, {});
