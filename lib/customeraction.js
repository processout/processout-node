'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var CustomerAction = module.exports = Base.extend({
    _instance: null,

    /**
     * Customer action type (such as url)
     * @type string
     */
    _type: "",

    /**
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @type string
     */
    _value: "",

    /**
     * CustomerAction constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Type
     * Customer action type (such as url)
     * @return float
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Customer action type (such as url)
     * @param float val
     * @return this
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @return float
     */
    getValue: function() {
        return this._value;
    },

    /**
     * Set Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @param float val
     * @return this
     */
    setValue: function(val) {
        this._value = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return CustomerAction
     */
    fillWithData: function(data) {
        if (data["type"])
            this.setType(data["type"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    },

    
}, {
    
});
