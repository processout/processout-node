'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Token = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the customer token
     * @type {string}
     */
    _id: null,

    /**
     * Customer owning the token
     * @type {object}
     */
    _customer: null,

    /**
     * ID of the customer linked to the token
     * @type {string}
     */
    _customerId: null,

    /**
     * Gateway configuration to which the token is linked, if any
     * @type {object}
     */
    _gatewayConfiguration: null,

    /**
     * ID of the gateway configuration to which the token is linked, if any
     * @type {string}
     */
    _gatewayConfigurationId: null,

    /**
     * Card used to create this token, if any
     * @type {object}
     */
    _card: null,

    /**
     * ID of the card used to create the token, if any
     * @type {string}
     */
    _cardId: null,

    /**
     * Type of the token. Can be card or gateway_token
     * @type {string}
     */
    _type: null,

    /**
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the customer token is used on a recurring invoice
     * @type {boolean}
     */
    _isSubscriptionOnly: null,

    /**
     * True if the card it the default card of the customer, false otherwise
     * @type {boolean}
     */
    _isDefault: null,

    /**
     * Date at which the customer token was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Token constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Token object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newToken()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the customer token
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the customer token
     * @param {string} val
     * @return {Token}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Customer
     * Customer owning the token
     * @return {object}
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer owning the token
     * @param {object} val
     * @return {Token}
     */
    setCustomer: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCustomer().getClass())
            this._customer = val;
        else {
            var obj = this._client.newCustomer();
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get CustomerId
     * ID of the customer linked to the token
     * @return {string}
     */
    getCustomerId: function() {
        return this._customerId;
    },

    /**
     * Set CustomerId
     * ID of the customer linked to the token
     * @param {string} val
     * @return {Token}
     */
    setCustomerId: function(val) {
        this._customerId = val;
        return this;
    },

    /**
     * Get GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @return {object}
     */
    getGatewayConfiguration: function() {
        return this._gatewayConfiguration;
    },

    /**
     * Set GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @param {object} val
     * @return {Token}
     */
    setGatewayConfiguration: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newGatewayConfiguration().getClass())
            this._gatewayConfiguration = val;
        else {
            var obj = this._client.newGatewayConfiguration();
            obj.fillWithData(val);
            this._gatewayConfiguration = obj;
        }
        return this;
    },

    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @return {string}
     */
    getGatewayConfigurationId: function() {
        return this._gatewayConfigurationId;
    },

    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @param {string} val
     * @return {Token}
     */
    setGatewayConfigurationId: function(val) {
        this._gatewayConfigurationId = val;
        return this;
    },

    /**
     * Get Card
     * Card used to create this token, if any
     * @return {object}
     */
    getCard: function() {
        return this._card;
    },

    /**
     * Set Card
     * Card used to create this token, if any
     * @param {object} val
     * @return {Token}
     */
    setCard: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCard().getClass())
            this._card = val;
        else {
            var obj = this._client.newCard();
            obj.fillWithData(val);
            this._card = obj;
        }
        return this;
    },

    /**
     * Get CardId
     * ID of the card used to create the token, if any
     * @return {string}
     */
    getCardId: function() {
        return this._cardId;
    },

    /**
     * Set CardId
     * ID of the card used to create the token, if any
     * @param {string} val
     * @return {Token}
     */
    setCardId: function(val) {
        this._cardId = val;
        return this;
    },

    /**
     * Get Type
     * Type of the token. Can be card or gateway_token
     * @return {string}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the token. Can be card or gateway_token
     * @param {string} val
     * @return {Token}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Token}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @return {bool}
     */
    getIsSubscriptionOnly: function() {
        return this._isSubscriptionOnly;
    },

    /**
     * Set IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @param {bool} val
     * @return {Token}
     */
    setIsSubscriptionOnly: function(val) {
        this._isSubscriptionOnly = val;
        return this;
    },

    /**
     * Get IsDefault
     * True if the card it the default card of the customer, false otherwise
     * @return {bool}
     */
    getIsDefault: function() {
        return this._isDefault;
    },

    /**
     * Set IsDefault
     * True if the card it the default card of the customer, false otherwise
     * @param {bool} val
     * @return {Token}
     */
    setIsDefault: function(val) {
        this._isDefault = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the customer token was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the customer token was created
     * @param {string} val
     * @return {Token}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Token}
     */
    fillWithData: function(data) {
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
        if (data["is_default"])
            this.setIsDefault(data["is_default"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Verify a customer token's card is valid.

     * @param {object} options
     * @return {bool}
     */
    verify: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "/verify";

        var data = {

        };

        var req = request.post(path, data, options);
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

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get the customer's tokens.
	 * @param string customerId
     * @param {object} options
     * @return {array}
     */
    fetchCustomerTokens: function(customerId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens";

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
                var body = response.body['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newToken();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a customer's token by its ID.
	 * @param string customerId
	 * @param string tokenId
     * @param {object} options
     * @return {this}
     */
    find: function(customerId, tokenId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens/" + encodeURI(tokenId) + "";

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

                
                var body = response.body;
                body = body['token'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new token for the given customer ID.

     * @param {object} options
     * @return {this}
     */
    create: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens";

        var data = {
			'metadata': this.getMetadata(), 
			'source': (options['source']) ? options['source'] : null, 
			'settings': (options['settings']) ? options['settings'] : null, 
			'target': (options['target']) ? options['target'] : null, 
			'verify': (options['verify']) ? options['verify'] : null, 
			'verify_metadata': (options['verify_metadata']) ? options['verify_metadata'] : null, 
			'set_default': (options['set_default']) ? options['set_default'] : null
        };

        var req = request.post(path, data, options);
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

                
                var body = response.body;
                body = body['token'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete a customer token

     * @param {object} options
     * @return {bool}
     */
    delete: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var req = request.delete(path, data, options);
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

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
