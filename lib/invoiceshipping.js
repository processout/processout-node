'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var InvoiceShipping = module.exports = Base.extend({
    _client: null,

    /**
     * Amount of the shipping
     * @type {decimal}
     */
    _amount: null,

    /**
     * Delivery method
     * @type {string}
     */
    _method: null,

    /**
     * Delivery provider
     * @type {string}
     */
    _provider: null,

    /**
     * Shipping delay
     * @type {string}
     */
    _delay: null,

    /**
     * Address where the shipment will be delivered
     * @type {string}
     */
    _address1: null,

    /**
     * Secondary address where the shipment will be delivered
     * @type {string}
     */
    _address2: null,

    /**
     * City where the shipment will be delivered
     * @type {string}
     */
    _city: null,

    /**
     * State where the shipment will be delivered
     * @type {string}
     */
    _state: null,

    /**
     * Country code where the shipment will be delivered
     * @type {string}
     */
    _countryCode: null,

    /**
     * ZIP where the shipment will be delivered
     * @type {string}
     */
    _zip: null,

    /**
     * Phone number for the shipment
     * @type {string}
     */
    _phoneNumber: null,

    /**
     * Date at which the shipment is expected to be sent
     * @type {string}
     */
    _expectsShippingAt: null,

    /**
     * InvoiceShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceShipping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceShipping()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Amount
     * Amount of the shipping
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount of the shipping
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Method
     * Delivery method
     * @return {string}
     */
    getMethod: function() {
        return this._method;
    },

    /**
     * Set Method
     * Delivery method
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setMethod: function(val) {
        this._method = val;
        return this;
    },

    /**
     * Get Provider
     * Delivery provider
     * @return {string}
     */
    getProvider: function() {
        return this._provider;
    },

    /**
     * Set Provider
     * Delivery provider
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setProvider: function(val) {
        this._provider = val;
        return this;
    },

    /**
     * Get Delay
     * Shipping delay
     * @return {string}
     */
    getDelay: function() {
        return this._delay;
    },

    /**
     * Set Delay
     * Shipping delay
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setDelay: function(val) {
        this._delay = val;
        return this;
    },

    /**
     * Get Address1
     * Address where the shipment will be delivered
     * @return {string}
     */
    getAddress1: function() {
        return this._address1;
    },

    /**
     * Set Address1
     * Address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setAddress1: function(val) {
        this._address1 = val;
        return this;
    },

    /**
     * Get Address2
     * Secondary address where the shipment will be delivered
     * @return {string}
     */
    getAddress2: function() {
        return this._address2;
    },

    /**
     * Set Address2
     * Secondary address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setAddress2: function(val) {
        this._address2 = val;
        return this;
    },

    /**
     * Get City
     * City where the shipment will be delivered
     * @return {string}
     */
    getCity: function() {
        return this._city;
    },

    /**
     * Set City
     * City where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setCity: function(val) {
        this._city = val;
        return this;
    },

    /**
     * Get State
     * State where the shipment will be delivered
     * @return {string}
     */
    getState: function() {
        return this._state;
    },

    /**
     * Set State
     * State where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setState: function(val) {
        this._state = val;
        return this;
    },

    /**
     * Get CountryCode
     * Country code where the shipment will be delivered
     * @return {string}
     */
    getCountryCode: function() {
        return this._countryCode;
    },

    /**
     * Set CountryCode
     * Country code where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setCountryCode: function(val) {
        this._countryCode = val;
        return this;
    },

    /**
     * Get Zip
     * ZIP where the shipment will be delivered
     * @return {string}
     */
    getZip: function() {
        return this._zip;
    },

    /**
     * Set Zip
     * ZIP where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setZip: function(val) {
        this._zip = val;
        return this;
    },

    /**
     * Get PhoneNumber
     * Phone number for the shipment
     * @return {string}
     */
    getPhoneNumber: function() {
        return this._phoneNumber;
    },

    /**
     * Set PhoneNumber
     * Phone number for the shipment
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setPhoneNumber: function(val) {
        this._phoneNumber = val;
        return this;
    },

    /**
     * Get ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @return {string}
     */
    getExpectsShippingAt: function() {
        return this._expectsShippingAt;
    },

    /**
     * Set ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @param {string} val
     * @return {InvoiceShipping}
     */
    setExpectsShippingAt: function(val) {
        this._expectsShippingAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShipping}
     */
    fillWithData: function(data) {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["method"])
            this.setMethod(data["method"]);
        if (data["provider"])
            this.setProvider(data["provider"]);
        if (data["delay"])
            this.setDelay(data["delay"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["expects_shipping_at"])
            this.setExpectsShippingAt(data["expects_shipping_at"]);
        return this;
    },

    
}, {});
