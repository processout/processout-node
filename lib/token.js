"use strict";
// The content of this file was automatically generated
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Token = /** @class */ (function () {
    /**
     * Token constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Token(client, prefill) {
        this.client = null;
        /**
         * ID of the customer token
         * @type {string}
         */
        this.id = null;
        /**
         * Customer owning the token
         * @type {p.Customer}
         */
        this.customer = null;
        /**
         * ID of the customer linked to the token
         * @type {string}
         */
        this.customerId = null;
        /**
         * Gateway configuration to which the token is linked, if any
         * @type {p.GatewayConfiguration}
         */
        this.gatewayConfiguration = null;
        /**
         * ID of the gateway configuration to which the token is linked, if any
         * @type {string}
         */
        this.gatewayConfigurationId = null;
        /**
         * Card used to create this token, if any
         * @type {p.Card}
         */
        this.card = null;
        /**
         * ID of the card used to create the token, if any
         * @type {string}
         */
        this.cardId = null;
        /**
         * Type of the token. Can be card or gateway_token
         * @type {string}
         */
        this.type = null;
        /**
         * Metadata related to the token, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Define whether or not the customer token is used on a recurring invoice
         * @type {boolean}
         */
        this.isSubscriptionOnly = null;
        /**
         * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
         * @type {string}
         */
        this.returnUrl = null;
        /**
         * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
         * @type {string}
         */
        this.cancelUrl = null;
        /**
         * True if the token it the default token of the customer, false otherwise
         * @type {boolean}
         */
        this.isDefault = null;
        /**
         * True if the token is chargeable, false otherwise
         * @type {boolean}
         */
        this.isChargeable = null;
        /**
         * Date at which the customer token was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Token object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newToken()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Token.prototype.getProcessOutObjectClass = function () {
        return "Token";
    };
    /**
     * Get Id
     * ID of the customer token
     * @return {string}
     */
    Token.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the customer token
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Customer
     * Customer owning the token
     * @return {p.Customer}
     */
    Token.prototype.getCustomer = function () {
        return this.customer;
    };
    /**
     * Set Customer
     * Customer owning the token
     * @param {p.Customer} val
     * @return {Token}
     */
    Token.prototype.setCustomer = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomer().getProcessOutObjectClass())
            this.customer = val;
        else {
            var obj = this.client.newCustomer();
            obj.fillWithData(val);
            this.customer = obj;
        }
        return this;
    };
    /**
     * Get CustomerId
     * ID of the customer linked to the token
     * @return {string}
     */
    Token.prototype.getCustomerId = function () {
        return this.customerId;
    };
    /**
     * Set CustomerId
     * ID of the customer linked to the token
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setCustomerId = function (val) {
        this.customerId = val;
        return this;
    };
    /**
     * Get GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @return {p.GatewayConfiguration}
     */
    Token.prototype.getGatewayConfiguration = function () {
        return this.gatewayConfiguration;
    };
    /**
     * Set GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @param {p.GatewayConfiguration} val
     * @return {Token}
     */
    Token.prototype.setGatewayConfiguration = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGatewayConfiguration().getProcessOutObjectClass())
            this.gatewayConfiguration = val;
        else {
            var obj = this.client.newGatewayConfiguration();
            obj.fillWithData(val);
            this.gatewayConfiguration = obj;
        }
        return this;
    };
    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @return {string}
     */
    Token.prototype.getGatewayConfigurationId = function () {
        return this.gatewayConfigurationId;
    };
    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setGatewayConfigurationId = function (val) {
        this.gatewayConfigurationId = val;
        return this;
    };
    /**
     * Get Card
     * Card used to create this token, if any
     * @return {p.Card}
     */
    Token.prototype.getCard = function () {
        return this.card;
    };
    /**
     * Set Card
     * Card used to create this token, if any
     * @param {p.Card} val
     * @return {Token}
     */
    Token.prototype.setCard = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCard().getProcessOutObjectClass())
            this.card = val;
        else {
            var obj = this.client.newCard();
            obj.fillWithData(val);
            this.card = obj;
        }
        return this;
    };
    /**
     * Get CardId
     * ID of the card used to create the token, if any
     * @return {string}
     */
    Token.prototype.getCardId = function () {
        return this.cardId;
    };
    /**
     * Set CardId
     * ID of the card used to create the token, if any
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setCardId = function (val) {
        this.cardId = val;
        return this;
    };
    /**
     * Get Type
     * Type of the token. Can be card or gateway_token
     * @return {string}
     */
    Token.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the token. Can be card or gateway_token
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Token.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Token}
     */
    Token.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @return {boolean}
     */
    Token.prototype.getIsSubscriptionOnly = function () {
        return this.isSubscriptionOnly;
    };
    /**
     * Set IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @param {boolean} val
     * @return {Token}
     */
    Token.prototype.setIsSubscriptionOnly = function (val) {
        this.isSubscriptionOnly = val;
        return this;
    };
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @return {string}
     */
    Token.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setReturnUrl = function (val) {
        this.returnUrl = val;
        return this;
    };
    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @return {string}
     */
    Token.prototype.getCancelUrl = function () {
        return this.cancelUrl;
    };
    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setCancelUrl = function (val) {
        this.cancelUrl = val;
        return this;
    };
    /**
     * Get IsDefault
     * True if the token it the default token of the customer, false otherwise
     * @return {boolean}
     */
    Token.prototype.getIsDefault = function () {
        return this.isDefault;
    };
    /**
     * Set IsDefault
     * True if the token it the default token of the customer, false otherwise
     * @param {boolean} val
     * @return {Token}
     */
    Token.prototype.setIsDefault = function (val) {
        this.isDefault = val;
        return this;
    };
    /**
     * Get IsChargeable
     * True if the token is chargeable, false otherwise
     * @return {boolean}
     */
    Token.prototype.getIsChargeable = function () {
        return this.isChargeable;
    };
    /**
     * Set IsChargeable
     * True if the token is chargeable, false otherwise
     * @param {boolean} val
     * @return {Token}
     */
    Token.prototype.setIsChargeable = function (val) {
        this.isChargeable = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the customer token was created
     * @return {string}
     */
    Token.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the customer token was created
     * @param {string} val
     * @return {Token}
     */
    Token.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Token}
     */
    Token.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["customer_id"])
            this.setCustomerId(data["customer_id"]);
        if (data["gateway_configuration"])
            this.setGatewayConfiguration(data["gateway_configuration"]);
        if (data["gateway_configuration_id"])
            this.setGatewayConfigurationId(data["gateway_configuration_id"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["card_id"])
            this.setCardId(data["card_id"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["is_subscription_only"])
            this.setIsSubscriptionOnly(data["is_subscription_only"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["is_default"])
            this.setIsDefault(data["is_default"]);
        if (data["is_chargeable"])
            this.setIsChargeable(data["is_chargeable"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Verify a customer token's card is valid.

     * @param {any} options
     * @return {bool}
     */
    Token.prototype.verify = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "/verify";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    /**
     * Get the customer's tokens.
     * @param string customerId
     * @param {any} options
     * @return {array}
     */
    Token.prototype.fetchCustomerTokens = function (customerId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(customerId) + "/tokens";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newToken();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Find a customer's token by its ID.
     * @param string customerId
     * @param string tokenId
     * @param {any} options
     * @return {this}
     */
    Token.prototype.find = function (customerId, tokenId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(customerId) + "/tokens/" + encodeURI(tokenId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['token'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Create a new token for the given customer ID.

     * @param {any} options
     * @return {this}
     */
    Token.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens";
        var data = {
            'metadata': this.getMetadata(),
            'return_url': this.getReturnUrl(),
            'cancel_url': this.getCancelUrl(),
            'source': (options['source']) ? options['source'] : null,
            'settings': (options['settings']) ? options['settings'] : null,
            'target': (options['target']) ? options['target'] : null,
            'verify': (options['verify']) ? options['verify'] : null,
            'verify_metadata': (options['verify_metadata']) ? options['verify_metadata'] : null,
            'set_default': (options['set_default']) ? options['set_default'] : null
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['token'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    /**
     * Save the updated customer attributes.

     * @param {any} options
     * @return {bool}
     */
    Token.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            request.put(path, data, options, callback);
        });
    };
    /**
     * Delete a customer token

     * @param {any} options
     * @return {bool}
     */
    Token.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            request.delete(path, data, options, callback);
        });
    };
    return Token;
}());
module.exports = Token;
//# sourceMappingURL=token.js.map