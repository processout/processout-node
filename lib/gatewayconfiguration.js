'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var GatewayConfiguration = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the gateway configuration
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the gateway configuration belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the gateway configuration belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Gateway that the configuration configures
     * @type {object}
     */
    _gateway: null,

    /**
     * ID of the gateway to which the gateway configuration belongs
     * @type {integer}
     */
    _gatewayId: null,

    /**
     * Name of the gateway configuration
     * @type {string}
     */
    _name: null,

    /**
     * Fixed fee of the gateway configuration, if specified
     * @type {float}
     */
    _feeFixed: null,

    /**
     * Percentage fee of the gateway configuration, if specified
     * @type {float}
     */
    _feePercentage: null,

    /**
     * Default currency of the gateway configuration
     * @type {string}
     */
    _defaultCurrency: null,

    /**
     * Define whether or not the gateway configuration is enabled
     * @type {boolean}
     */
    _enabled: null,

    /**
     * Public keys of the payment gateway configuration (key-value pair)
     * @type {dictionary}
     */
    _publicKeys: null,

    /**
     * Date at which the gateway configuration was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Date at which the gateway configuration was enabled
     * @type {string}
     */
    _enabledAt: null,

    /**
     * GatewayConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The GatewayConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGatewayConfiguration()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the gateway configuration
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the gateway configuration belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the gateway configuration belongs
     * @param {object} val
     * @return {GatewayConfiguration}
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
     * ID of the project to which the gateway configuration belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the gateway configuration belongs
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Gateway
     * Gateway that the configuration configures
     * @return {object}
     */
    getGateway: function() {
        return this._gateway;
    },

    /**
     * Set Gateway
     * Gateway that the configuration configures
     * @param {object} val
     * @return {GatewayConfiguration}
     */
    setGateway: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newGateway().getClass())
            this._gateway = val;
        else {
            var obj = this._client.newGateway();
            obj.fillWithData(val);
            this._gateway = obj;
        }
        return this;
    },

    /**
     * Get GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @return {int}
     */
    getGatewayId: function() {
        return this._gatewayId;
    },

    /**
     * Set GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @param {int} val
     * @return {GatewayConfiguration}
     */
    setGatewayId: function(val) {
        this._gatewayId = val;
        return this;
    },

    /**
     * Get Name
     * Name of the gateway configuration
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get FeeFixed
     * Fixed fee of the gateway configuration, if specified
     * @return {float}
     */
    getFeeFixed: function() {
        return this._feeFixed;
    },

    /**
     * Set FeeFixed
     * Fixed fee of the gateway configuration, if specified
     * @param {float} val
     * @return {GatewayConfiguration}
     */
    setFeeFixed: function(val) {
        this._feeFixed = val;
        return this;
    },

    /**
     * Get FeePercentage
     * Percentage fee of the gateway configuration, if specified
     * @return {float}
     */
    getFeePercentage: function() {
        return this._feePercentage;
    },

    /**
     * Set FeePercentage
     * Percentage fee of the gateway configuration, if specified
     * @param {float} val
     * @return {GatewayConfiguration}
     */
    setFeePercentage: function(val) {
        this._feePercentage = val;
        return this;
    },

    /**
     * Get DefaultCurrency
     * Default currency of the gateway configuration
     * @return {string}
     */
    getDefaultCurrency: function() {
        return this._defaultCurrency;
    },

    /**
     * Set DefaultCurrency
     * Default currency of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setDefaultCurrency: function(val) {
        this._defaultCurrency = val;
        return this;
    },

    /**
     * Get Enabled
     * Define whether or not the gateway configuration is enabled
     * @return {bool}
     */
    getEnabled: function() {
        return this._enabled;
    },

    /**
     * Set Enabled
     * Define whether or not the gateway configuration is enabled
     * @param {bool} val
     * @return {GatewayConfiguration}
     */
    setEnabled: function(val) {
        this._enabled = val;
        return this;
    },

    /**
     * Get PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @return {object}
     */
    getPublicKeys: function() {
        return this._publicKeys;
    },

    /**
     * Set PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @param {object} val
     * @return {GatewayConfiguration}
     */
    setPublicKeys: function(val) {
        this._publicKeys = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the gateway configuration was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the gateway configuration was created
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Get EnabledAt
     * Date at which the gateway configuration was enabled
     * @return {string}
     */
    getEnabledAt: function() {
        return this._enabledAt;
    },

    /**
     * Set EnabledAt
     * Date at which the gateway configuration was enabled
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setEnabledAt: function(val) {
        this._enabledAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {GatewayConfiguration}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["gateway_id"])
            this.setGatewayId(data["gateway_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["fee_fixed"])
            this.setFeeFixed(data["fee_fixed"]);
        if (data["fee_percentage"])
            this.setFeePercentage(data["fee_percentage"]);
        if (data["default_currency"])
            this.setDefaultCurrency(data["default_currency"]);
        if (data["enabled"])
            this.setEnabled(data["enabled"]);
        if (data["public_keys"])
            this.setPublicKeys(data["public_keys"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["enabled_at"])
            this.setEnabledAt(data["enabled_at"]);
        return this;
    },

    
}, {});
