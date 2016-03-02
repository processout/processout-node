'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var CustomerToken = module.exports = Base.extend({
    _instance: null,

    /**
     * Name of the payment gateway this token was created on
     * @type string
     */
    _gateway: "",

    /**
     * Id of the customer token
     * @type string
     */
    _id: "",

    /**
     * Name of the token to be displayed
     * @type string
     */
    _name: "",

    /**
     * CustomerToken constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Gateway
     * Name of the payment gateway this token was created on
     * @return float
     */
    getGateway: function() {
        return this._gateway;
    },

    /**
     * Set Gateway
     * Name of the payment gateway this token was created on
     * @param float val
     * @return this
     */
    setGateway: function(val) {
        this._gateway = val;
        return this;
    },

    /**
     * Get Id
     * Id of the customer token
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the customer token
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Name
     * Name of the token to be displayed
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the token to be displayed
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return CustomerToken
     */
    fillWithData: function(data) {
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        return this;
    },

    
}, {
    
});
