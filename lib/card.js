'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Card = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the card
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the card belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the card belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Token linked to the card, which can be used to process payments
     * @type {object}
     */
    _token: null,

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
     * First 6 digits of the card
     * @type {string}
     */
    _iin: null,

    /**
     * Last 4 digits of the card
     * @type {string}
     */
    _last4Digits: null,

    /**
     * Expiry month
     * @type {integer}
     */
    _expMonth: null,

    /**
     * Expiry year, in a 4 digits format
     * @type {integer}
     */
    _expYear: null,

    /**
     * Status of the CVC check initially made on the card when the CVC was provided
     * @type {string}
     */
    _cvcCheck: null,

    /**
     * Status of the AVS check initially made on the card when the AVS was provided
     * @type {string}
     */
    _avsCheck: null,

    /**
     * Name of the card holder
     * @type {string}
     */
    _name: null,

    /**
     * Address line of the card holder
     * @type {string}
     */
    _address1: null,

    /**
     * Secondary address line of the card holder
     * @type {string}
     */
    _address2: null,

    /**
     * City of the card holder
     * @type {string}
     */
    _city: null,

    /**
     * State of the card holder
     * @type {string}
     */
    _state: null,

    /**
     * ZIP code of the card holder
     * @type {string}
     */
    _zip: null,

    /**
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @type {string}
     */
    _countryCode: null,

    /**
     * IP address of the card (IPv4 or IPv6)
     * @type {string}
     */
    _ipAddress: null,

    /**
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Contains true if the card will expire soon, false otherwise
     * @type {boolean}
     */
    _expiresSoon: null,

    /**
     * Define whether or not the card is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the card was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Card constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Card object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCard()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the card
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the card
     * @param {string} val
     * @return {Card}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the card belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the card belongs
     * @param {object} val
     * @return {Card}
     */
    setProject: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newProject().getClass())
            this._project = val;
        else {
            var obj = this._client.newProject();
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get ProjectId
     * ID of the project to which the card belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the card belongs
     * @param {string} val
     * @return {Card}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Token
     * Token linked to the card, which can be used to process payments
     * @return {object}
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token linked to the card, which can be used to process payments
     * @param {object} val
     * @return {Card}
     */
    setToken: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newToken().getClass())
            this._token = val;
        else {
            var obj = this._client.newToken();
            obj.fillWithData(val);
            this._token = obj;
        }
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
     * @return {Card}
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
     * @return {Card}
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
     * @return {Card}
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
     * @return {Card}
     */
    setBrand: function(val) {
        this._brand = val;
        return this;
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
     * @return {Card}
     */
    setIin: function(val) {
        this._iin = val;
        return this;
    },

    /**
     * Get Last4Digits
     * Last 4 digits of the card
     * @return {string}
     */
    getLast4Digits: function() {
        return this._last4Digits;
    },

    /**
     * Set Last4Digits
     * Last 4 digits of the card
     * @param {string} val
     * @return {Card}
     */
    setLast4Digits: function(val) {
        this._last4Digits = val;
        return this;
    },

    /**
     * Get ExpMonth
     * Expiry month
     * @return {int}
     */
    getExpMonth: function() {
        return this._expMonth;
    },

    /**
     * Set ExpMonth
     * Expiry month
     * @param {int} val
     * @return {Card}
     */
    setExpMonth: function(val) {
        this._expMonth = val;
        return this;
    },

    /**
     * Get ExpYear
     * Expiry year, in a 4 digits format
     * @return {int}
     */
    getExpYear: function() {
        return this._expYear;
    },

    /**
     * Set ExpYear
     * Expiry year, in a 4 digits format
     * @param {int} val
     * @return {Card}
     */
    setExpYear: function(val) {
        this._expYear = val;
        return this;
    },

    /**
     * Get CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @return {string}
     */
    getCvcCheck: function() {
        return this._cvcCheck;
    },

    /**
     * Set CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @param {string} val
     * @return {Card}
     */
    setCvcCheck: function(val) {
        this._cvcCheck = val;
        return this;
    },

    /**
     * Get AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @return {string}
     */
    getAvsCheck: function() {
        return this._avsCheck;
    },

    /**
     * Set AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @param {string} val
     * @return {Card}
     */
    setAvsCheck: function(val) {
        this._avsCheck = val;
        return this;
    },

    /**
     * Get Name
     * Name of the card holder
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the card holder
     * @param {string} val
     * @return {Card}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Address1
     * Address line of the card holder
     * @return {string}
     */
    getAddress1: function() {
        return this._address1;
    },

    /**
     * Set Address1
     * Address line of the card holder
     * @param {string} val
     * @return {Card}
     */
    setAddress1: function(val) {
        this._address1 = val;
        return this;
    },

    /**
     * Get Address2
     * Secondary address line of the card holder
     * @return {string}
     */
    getAddress2: function() {
        return this._address2;
    },

    /**
     * Set Address2
     * Secondary address line of the card holder
     * @param {string} val
     * @return {Card}
     */
    setAddress2: function(val) {
        this._address2 = val;
        return this;
    },

    /**
     * Get City
     * City of the card holder
     * @return {string}
     */
    getCity: function() {
        return this._city;
    },

    /**
     * Set City
     * City of the card holder
     * @param {string} val
     * @return {Card}
     */
    setCity: function(val) {
        this._city = val;
        return this;
    },

    /**
     * Get State
     * State of the card holder
     * @return {string}
     */
    getState: function() {
        return this._state;
    },

    /**
     * Set State
     * State of the card holder
     * @param {string} val
     * @return {Card}
     */
    setState: function(val) {
        this._state = val;
        return this;
    },

    /**
     * Get Zip
     * ZIP code of the card holder
     * @return {string}
     */
    getZip: function() {
        return this._zip;
    },

    /**
     * Set Zip
     * ZIP code of the card holder
     * @param {string} val
     * @return {Card}
     */
    setZip: function(val) {
        this._zip = val;
        return this;
    },

    /**
     * Get CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @return {string}
     */
    getCountryCode: function() {
        return this._countryCode;
    },

    /**
     * Set CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {Card}
     */
    setCountryCode: function(val) {
        this._countryCode = val;
        return this;
    },

    /**
     * Get IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @return {string}
     */
    getIpAddress: function() {
        return this._ipAddress;
    },

    /**
     * Set IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @param {string} val
     * @return {Card}
     */
    setIpAddress: function(val) {
        this._ipAddress = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Card}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @return {bool}
     */
    getExpiresSoon: function() {
        return this._expiresSoon;
    },

    /**
     * Set ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @param {bool} val
     * @return {Card}
     */
    setExpiresSoon: function(val) {
        this._expiresSoon = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the card is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the card is in sandbox environment
     * @param {bool} val
     * @return {Card}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the card was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the card was created
     * @param {string} val
     * @return {Card}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Card}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["last_4_digits"])
            this.setLast4Digits(data["last_4_digits"]);
        if (data["exp_month"])
            this.setExpMonth(data["exp_month"]);
        if (data["exp_year"])
            this.setExpYear(data["exp_year"]);
        if (data["cvc_check"])
            this.setCvcCheck(data["cvc_check"]);
        if (data["avs_check"])
            this.setAvsCheck(data["avs_check"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["expires_soon"])
            this.setExpiresSoon(data["expires_soon"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get all the cards.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/cards";

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

                
                var a    = [];
                var body = response.body['cards'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newCard();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a card by its ID.
	 * @param string cardId
     * @param {object} options
     * @return {this}
     */
    find: function(cardId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/cards/" + encodeURI(cardId) + "";

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
                body = body['card'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
