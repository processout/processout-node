'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var CardInformation = module.exports = Base.extend({
    _client: null,

    /**
     * First 6 digits of the card
     * @type {string}
     */
    _iin: null,

    /**
     * Scheme of the card, such as visa or mastercard
     * @type {string}
     */
    _scheme: null,

    /**
     * Type of the card (Credit, Debit, ...)
     * @type {string}
     */
    _type: null,

    /**
     * Name of the bank of the card
     * @type {string}
     */
    _bankName: null,

    /**
     * Level of the card (Electron, Classic, Gold, ...)
     * @type {string}
     */
    _brand: null,

    /**
     * Category of the card (consumer, commercial, ...)
     * @type {string}
     */
    _category: null,

    /**
     * Country that issued the card
     * @type {string}
     */
    _country: null,

    /**
     * CardInformation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The CardInformation object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardInformation()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Iin
     * First 6 digits of the card
     * @return {string}
     */
    getIin: function() {
        return this._iin;
    },

    /**
     * Set Iin
     * First 6 digits of the card
     * @param {string} val
     * @return {CardInformation}
     */
    setIin: function(val) {
        this._iin = val;
        return this;
    },

    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {string}
     */
    getScheme: function() {
        return this._scheme;
    },

    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {string} val
     * @return {CardInformation}
     */
    setScheme: function(val) {
        this._scheme = val;
        return this;
    },

    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {string}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get BankName
     * Name of the bank of the card
     * @return {string}
     */
    getBankName: function() {
        return this._bankName;
    },

    /**
     * Set BankName
     * Name of the bank of the card
     * @param {string} val
     * @return {CardInformation}
     */
    setBankName: function(val) {
        this._bankName = val;
        return this;
    },

    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {string}
     */
    getBrand: function() {
        return this._brand;
    },

    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    setBrand: function(val) {
        this._brand = val;
        return this;
    },

    /**
     * Get Category
     * Category of the card (consumer, commercial, ...)
     * @return {string}
     */
    getCategory: function() {
        return this._category;
    },

    /**
     * Set Category
     * Category of the card (consumer, commercial, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    setCategory: function(val) {
        this._category = val;
        return this;
    },

    /**
     * Get Country
     * Country that issued the card
     * @return {string}
     */
    getCountry: function() {
        return this._country;
    },

    /**
     * Set Country
     * Country that issued the card
     * @param {string} val
     * @return {CardInformation}
     */
    setCountry: function(val) {
        this._country = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardInformation}
     */
    fillWithData: function(data) {
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["category"])
            this.setCategory(data["category"]);
        if (data["country"])
            this.setCountry(data["country"]);
        return this;
    },

    /**
     * Fetch card information from the IIN.
	 * @param string iin
     * @param {object} options
     * @return {this}
     */
    fetch: function(iin, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/iins/" + encodeURI(iin) + "";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['card_information'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            }).on('timeout', function(ms){
                reject("request timeout after " + ms + "ms")
            });
        });
    },
    
}, {});
