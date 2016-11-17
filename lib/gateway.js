'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Gateway = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the gateway
     * @type {string}
     */
    _id: "",

    /**
     * Name of the payment gateway
     * @type {string}
     */
    _name: "",

    /**
     * Name of the payment gateway that can be displayed
     * @type {string}
     */
    _displayName: "",

    /**
     * Logo URL of the payment gateway
     * @type {string}
     */
    _logoUrl: "",

    /**
     * URL of the payment gateway
     * @type {string}
     */
    _url: "",

    /**
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @type {slice}
     */
    _flows: [],

    /**
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @type {slice}
     */
    _tags: [],

    /**
     * Description of the payment gateway
     * @type {string}
     */
    _description: "",

    /**
     * Gateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Gateway object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGateway()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the gateway
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the gateway
     * @param {float} val
     * @return {Gateway}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Name
     * Name of the payment gateway
     * @return {float}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the payment gateway
     * @param {float} val
     * @return {Gateway}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get DisplayName
     * Name of the payment gateway that can be displayed
     * @return {float}
     */
    getDisplayName: function() {
        return this._displayName;
    },

    /**
     * Set DisplayName
     * Name of the payment gateway that can be displayed
     * @param {float} val
     * @return {Gateway}
     */
    setDisplayName: function(val) {
        this._displayName = val;
        return this;
    },

    /**
     * Get LogoUrl
     * Logo URL of the payment gateway
     * @return {float}
     */
    getLogoUrl: function() {
        return this._logoUrl;
    },

    /**
     * Set LogoUrl
     * Logo URL of the payment gateway
     * @param {float} val
     * @return {Gateway}
     */
    setLogoUrl: function(val) {
        this._logoUrl = val;
        return this;
    },

    /**
     * Get Url
     * URL of the payment gateway
     * @return {float}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL of the payment gateway
     * @param {float} val
     * @return {Gateway}
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @return {array}
     */
    getFlows: function() {
        return this._flows;
    },

    /**
     * Set Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @param {array} val
     * @return {Gateway}
     */
    setFlows: function(val) {
        this._flows = val;
        return this;
    },

    /**
     * Get Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @return {array}
     */
    getTags: function() {
        return this._tags;
    },

    /**
     * Set Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @param {array} val
     * @return {Gateway}
     */
    setTags: function(val) {
        this._tags = val;
        return this;
    },

    /**
     * Get Description
     * Description of the payment gateway
     * @return {float}
     */
    getDescription: function() {
        return this._description;
    },

    /**
     * Set Description
     * Description of the payment gateway
     * @param {float} val
     * @return {Gateway}
     */
    setDescription: function(val) {
        this._description = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Gateway}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["flows"])
            this.setFlows(data["flows"]);
        if (data["tags"])
            this.setTags(data["tags"]);
        if (data["description"])
            this.setDescription(data["description"]);
        return this;
    },

    
}, {});
