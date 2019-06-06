'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var InvoiceRisk = module.exports = Base.extend({
    _client: null,

    /**
     * Scoring of the invoice
     * @type {string}
     */
    _score: null,

    /**
     * Define whether or not the invoice is legit
     * @type {boolean}
     */
    _isLegit: null,

    /**
     * InvoiceRisk constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceRisk object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceRisk()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Score
     * Scoring of the invoice
     * @return {string}
     */
    getScore: function() {
        return this._score;
    },

    /**
     * Set Score
     * Scoring of the invoice
     * @param {string} val
     * @return {InvoiceRisk}
     */
    setScore: function(val) {
        this._score = val;
        return this;
    },

    /**
     * Get IsLegit
     * Define whether or not the invoice is legit
     * @return {bool}
     */
    getIsLegit: function() {
        return this._isLegit;
    },

    /**
     * Set IsLegit
     * Define whether or not the invoice is legit
     * @param {bool} val
     * @return {InvoiceRisk}
     */
    setIsLegit: function(val) {
        this._isLegit = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceRisk}
     */
    fillWithData: function(data) {
        if (data["score"])
            this.setScore(data["score"]);
        if (data["is_legit"])
            this.setIsLegit(data["is_legit"]);
        return this;
    },

    
}, {});
