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
     * Name of the invoice detail
     * @type {string}
     */
    _name: null,

    /**
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @type {string}
     */
    _type: null,

    /**
     * Amount represented by the invoice detail
     * @type {decimal}
     */
    _amount: null,

    /**
     * Quantity of items represented by the invoice detail
     * @type {integer}
     */
    _quantity: null,

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
     * Get Name
     * Name of the invoice detail
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @return {string}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Amount
     * Amount represented by the invoice detail
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Quantity
     * Quantity of items represented by the invoice detail
     * @return {int}
     */
    getQuantity: function() {
        return this._quantity;
    },

    /**
     * Set Quantity
     * Quantity of items represented by the invoice detail
     * @param {int} val
     * @return {InvoiceDetail}
     */
    setQuantity: function(val) {
        this._quantity = val;
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
        if (data["name"])
            this.setName(data["name"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["quantity"])
            this.setQuantity(data["quantity"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        return this;
    },

    
}, {});
