'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var GatewayConfiguration = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the gateway configuration
     * @type string
     */
    _id: "",

    /**
     * Project to which the gateway configuration belongs
     * @type object
     */
    _project: null,

    /**
     * Gateway that the configuration configures
     * @type object
     */
    _gateway: null,

    /**
     * Define whether or not the gateway configuration is enabled
     * @type boolean
     */
    _enabled: false,

    /**
     * Public keys of the payment gateway configuration (key-value pair)
     * @type dictionary
     */
    _publicKeys: {},

    /**
     * GatewayConfiguration constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the gateway configuration
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the gateway configuration
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the gateway configuration belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the gateway configuration belongs
     * @param object val
     * @return this
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._instance);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Gateway
     * Gateway that the configuration configures
     * @return object
     */
    getGateway: function() {
        return this._gateway;
    },

    /**
     * Set Gateway
     * Gateway that the configuration configures
     * @param object val
     * @return this
     */
    setGateway: function(val) {
        if (typeof val === 'object')
            this._gateway = val;
        else {
            var obj = new Gateway(this._instance);
            obj.fillWithData(val);
            this._gateway = obj;
        }
        return this;
    },

    /**
     * Get Enabled
     * Define whether or not the gateway configuration is enabled
     * @return bool
     */
    getEnabled: function() {
        return this._enabled;
    },

    /**
     * Set Enabled
     * Define whether or not the gateway configuration is enabled
     * @param bool val
     * @return this
     */
    setEnabled: function(val) {
        this._enabled = val;
        return this;
    },

    /**
     * Get PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @return object
     */
    getPublicKeys: function() {
        return this._publicKeys;
    },

    /**
     * Set PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @param object val
     * @return this
     */
    setPublicKeys: function(val) {
        this._publicKeys = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return GatewayConfiguration
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["enabled"])
            this.setEnabled(data["enabled"]);
        if (data["public_keys"])
            this.setPublicKeys(data["public_keys"]);
        return this;
    },

    
}, {
    
});
