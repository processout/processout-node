'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var CustomerAction = module.exports = Base.extend({
    _client: null,

    /**
     * Customer action type (such as url)
     * @type {string}
     */
    _type: null,

    /**
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @type {string}
     */
    _value: null,

    /**
     * CustomerAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The CustomerAction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomerAction()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Type
     * Customer action type (such as url)
     * @return {float}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Customer action type (such as url)
     * @param {float} val
     * @return {CustomerAction}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @return {float}
     */
    getValue: function() {
        return this._value;
    },

    /**
     * Set Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @param {float} val
     * @return {CustomerAction}
     */
    setValue: function(val) {
        this._value = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CustomerAction}
     */
    fillWithData: function(data) {
        if (data["type"])
            this.setType(data["type"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    },

    
}, {});
