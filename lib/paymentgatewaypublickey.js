'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var PaymentGatewayPublicKey = module.exports = Base.extend({
    _instance: null,

    /**
     * Key name of the public key
     * @type string
     */
    _key: "",

    /**
     * Key value of the public key
     * @type string
     */
    _value: "",

    /**
     * PaymentGatewayPublicKey constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Key
     * Key name of the public key
     * @return float
     */
    getKey: function() {
        return this._key;
    },

    /**
     * Set Key
     * Key name of the public key
     * @param float val
     * @return this
     */
    setKey: function(val) {
        this._key = val;
        return this;
    },

    /**
     * Get Value
     * Key value of the public key
     * @return float
     */
    getValue: function() {
        return this._value;
    },

    /**
     * Set Value
     * Key value of the public key
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
     * @return PaymentGatewayPublicKey
     */
    fillWithData: function(data) {
        if (data["key"])
            this.setKey(data["key"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    },

    
}, {
    
});
