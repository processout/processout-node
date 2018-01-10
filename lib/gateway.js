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
    _id: null,

    /**
     * Name of the payment gateway
     * @type {string}
     */
    _name: null,

    /**
     * Name of the payment gateway that can be displayed
     * @type {string}
     */
    _displayName: null,

    /**
     * Logo URL of the payment gateway
     * @type {string}
     */
    _logoUrl: null,

    /**
     * URL of the payment gateway
     * @type {string}
     */
    _url: null,

    /**
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @type {slice}
     */
    _flows: null,

    /**
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @type {slice}
     */
    _tags: null,

    /**
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @type {boolean}
     */
    _canPullTransactions: null,

    /**
     * True if the gateway supports refunds, false otherwise
     * @type {boolean}
     */
    _canRefund: null,

    /**
     * True if the gateway supports oauth authentication, false otherwise
     * @type {boolean}
     */
    _isOauthAuthentication: null,

    /**
     * Description of the payment gateway
     * @type {string}
     */
    _description: null,

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
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the gateway
     * @param {string} val
     * @return {Gateway}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Name
     * Name of the payment gateway
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get DisplayName
     * Name of the payment gateway that can be displayed
     * @return {string}
     */
    getDisplayName: function() {
        return this._displayName;
    },

    /**
     * Set DisplayName
     * Name of the payment gateway that can be displayed
     * @param {string} val
     * @return {Gateway}
     */
    setDisplayName: function(val) {
        this._displayName = val;
        return this;
    },

    /**
     * Get LogoUrl
     * Logo URL of the payment gateway
     * @return {string}
     */
    getLogoUrl: function() {
        return this._logoUrl;
    },

    /**
     * Set LogoUrl
     * Logo URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    setLogoUrl: function(val) {
        this._logoUrl = val;
        return this;
    },

    /**
     * Get Url
     * URL of the payment gateway
     * @return {string}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL of the payment gateway
     * @param {string} val
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
     * Get CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @return {bool}
     */
    getCanPullTransactions: function() {
        return this._canPullTransactions;
    },

    /**
     * Set CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @param {bool} val
     * @return {Gateway}
     */
    setCanPullTransactions: function(val) {
        this._canPullTransactions = val;
        return this;
    },

    /**
     * Get CanRefund
     * True if the gateway supports refunds, false otherwise
     * @return {bool}
     */
    getCanRefund: function() {
        return this._canRefund;
    },

    /**
     * Set CanRefund
     * True if the gateway supports refunds, false otherwise
     * @param {bool} val
     * @return {Gateway}
     */
    setCanRefund: function(val) {
        this._canRefund = val;
        return this;
    },

    /**
     * Get IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @return {bool}
     */
    getIsOauthAuthentication: function() {
        return this._isOauthAuthentication;
    },

    /**
     * Set IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @param {bool} val
     * @return {Gateway}
     */
    setIsOauthAuthentication: function(val) {
        this._isOauthAuthentication = val;
        return this;
    },

    /**
     * Get Description
     * Description of the payment gateway
     * @return {string}
     */
    getDescription: function() {
        return this._description;
    },

    /**
     * Set Description
     * Description of the payment gateway
     * @param {string} val
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
        if (data["can_pull_transactions"])
            this.setCanPullTransactions(data["can_pull_transactions"]);
        if (data["can_refund"])
            this.setCanRefund(data["can_refund"]);
        if (data["is_oauth_authentication"])
            this.setIsOauthAuthentication(data["is_oauth_authentication"]);
        if (data["description"])
            this.setDescription(data["description"]);
        return this;
    },

    /**
     * Get all the gateway configurations of the gateway

     * @param {object} options
     * @return {array}
     */
    fetchGatewayConfigurations: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/gateways/" + encodeURI(this.getName()) + "/gateway-configurations";

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
                var body = response.body['gateway_configurations'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newGatewayConfiguration();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
