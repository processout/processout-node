'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var InvoiceDetail = module.exports = Base.extend({
    _client: null,

    /**
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @type {string}
     */
    _type: null,

    /**
     * Amount represented by the invoice detail
     * @type {string}
     */
    _amount: null,

    /**
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * InvoiceDetail constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDetail object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDetail()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @return {float}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @param {float} val
     * @return {InvoiceDetail}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Amount
     * Amount represented by the invoice detail
     * @return {float}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount represented by the invoice detail
     * @param {float} val
     * @return {InvoiceDetail}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {InvoiceDetail}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDetail}
     */
    fillWithData: function(data) {
        if (data["type"])
            this.setType(data["type"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        return this;
    },

    
}, {});
