"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Gateway = /** @class */ (function () {
    /**
     * Gateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Gateway(client, prefill) {
        this.client = null;
        /**
         * ID of the gateway
         * @type {string}
         */
        this.id = null;
        /**
         * Name of the payment gateway
         * @type {string}
         */
        this.name = null;
        /**
         * Name of the payment gateway that can be displayed
         * @type {string}
         */
        this.displayName = null;
        /**
         * Logo URL of the payment gateway
         * @type {string}
         */
        this.logoUrl = null;
        /**
         * URL of the payment gateway
         * @type {string}
         */
        this.url = null;
        /**
         * Supported flow by the gateway (one-off, subscription or tokenization)
         * @type {any}
         */
        this.flows = null;
        /**
         * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
         * @type {any}
         */
        this.tags = null;
        /**
         * True if the gateway can pull old transactions into ProcessOut, false otherwise
         * @type {boolean}
         */
        this.canPullTransactions = null;
        /**
         * True if the gateway supports refunds, false otherwise
         * @type {boolean}
         */
        this.canRefund = null;
        /**
         * True if the gateway supports oauth authentication, false otherwise
         * @type {boolean}
         */
        this.isOauthAuthentication = null;
        /**
         * Description of the payment gateway
         * @type {string}
         */
        this.description = null;
        if (typeof client === 'undefined')
            throw new Error("The Gateway object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGateway()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Gateway.prototype.getProcessOutObjectClass = function () {
        return "Gateway";
    };
    /**
     * Get Id
     * ID of the gateway
     * @return {string}
     */
    Gateway.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Name
     * Name of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get DisplayName
     * Name of the payment gateway that can be displayed
     * @return {string}
     */
    Gateway.prototype.getDisplayName = function () {
        return this.displayName;
    };
    /**
     * Set DisplayName
     * Name of the payment gateway that can be displayed
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setDisplayName = function (val) {
        this.displayName = val;
        return this;
    };
    /**
     * Get LogoUrl
     * Logo URL of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getLogoUrl = function () {
        return this.logoUrl;
    };
    /**
     * Set LogoUrl
     * Logo URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setLogoUrl = function (val) {
        this.logoUrl = val;
        return this;
    };
    /**
     * Get Url
     * URL of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @return {any}
     */
    Gateway.prototype.getFlows = function () {
        return this.flows;
    };
    /**
     * Set Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @param {any} val
     * @return {Gateway}
     */
    Gateway.prototype.setFlows = function (val) {
        this.flows = val;
        return this;
    };
    /**
     * Get Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @return {any}
     */
    Gateway.prototype.getTags = function () {
        return this.tags;
    };
    /**
     * Set Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @param {any} val
     * @return {Gateway}
     */
    Gateway.prototype.setTags = function (val) {
        this.tags = val;
        return this;
    };
    /**
     * Get CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @return {boolean}
     */
    Gateway.prototype.getCanPullTransactions = function () {
        return this.canPullTransactions;
    };
    /**
     * Set CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    Gateway.prototype.setCanPullTransactions = function (val) {
        this.canPullTransactions = val;
        return this;
    };
    /**
     * Get CanRefund
     * True if the gateway supports refunds, false otherwise
     * @return {boolean}
     */
    Gateway.prototype.getCanRefund = function () {
        return this.canRefund;
    };
    /**
     * Set CanRefund
     * True if the gateway supports refunds, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    Gateway.prototype.setCanRefund = function (val) {
        this.canRefund = val;
        return this;
    };
    /**
     * Get IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @return {boolean}
     */
    Gateway.prototype.getIsOauthAuthentication = function () {
        return this.isOauthAuthentication;
    };
    /**
     * Set IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    Gateway.prototype.setIsOauthAuthentication = function (val) {
        this.isOauthAuthentication = val;
        return this;
    };
    /**
     * Get Description
     * Description of the payment gateway
     * @return {string}
     */
    Gateway.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Set Description
     * Description of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    Gateway.prototype.setDescription = function (val) {
        this.description = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Gateway}
     */
    Gateway.prototype.fillWithData = function (data) {
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
    };
    /**
     * Get all the gateway configurations of the gateway

     * @param {any} options
     * @return {array}
     */
    Gateway.prototype.fetchGatewayConfigurations = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/gateways/" + encodeURI(this.getName()) + "/gateway-configurations";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['gateway_configurations'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newGatewayConfiguration();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    return Gateway;
}());
module.exports = Gateway;
//# sourceMappingURL=gateway.js.map