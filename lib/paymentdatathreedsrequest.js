'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var PaymentDataThreeDSRequest = module.exports = Base.extend({
    _client: null,

    /**
     * URL of the ACS
     * @type {string}
     */
    _acsUrl: null,

    /**
     * PAReq used during the 3DS authentication
     * @type {string}
     */
    _pareq: null,

    /**
     * MD used during the 3DS authentication
     * @type {string}
     */
    _md: null,

    /**
     * URL of the 3DS term
     * @type {string}
     */
    _termUrl: null,

    /**
     * PaymentDataThreeDSRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataThreeDSRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataThreeDSRequest()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get AcsUrl
     * URL of the ACS
     * @return {string}
     */
    getAcsUrl: function() {
        return this._acsUrl;
    },

    /**
     * Set AcsUrl
     * URL of the ACS
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setAcsUrl: function(val) {
        this._acsUrl = val;
        return this;
    },

    /**
     * Get Pareq
     * PAReq used during the 3DS authentication
     * @return {string}
     */
    getPareq: function() {
        return this._pareq;
    },

    /**
     * Set Pareq
     * PAReq used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setPareq: function(val) {
        this._pareq = val;
        return this;
    },

    /**
     * Get Md
     * MD used during the 3DS authentication
     * @return {string}
     */
    getMd: function() {
        return this._md;
    },

    /**
     * Set Md
     * MD used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setMd: function(val) {
        this._md = val;
        return this;
    },

    /**
     * Get TermUrl
     * URL of the 3DS term
     * @return {string}
     */
    getTermUrl: function() {
        return this._termUrl;
    },

    /**
     * Set TermUrl
     * URL of the 3DS term
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setTermUrl: function(val) {
        this._termUrl = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSRequest}
     */
    fillWithData: function(data) {
        if (data["acs_url"])
            this.setAcsUrl(data["acs_url"]);
        if (data["pareq"])
            this.setPareq(data["pareq"]);
        if (data["md"])
            this.setMd(data["md"]);
        if (data["term_url"])
            this.setTermUrl(data["term_url"]);
        return this;
    },

    
}, {});
