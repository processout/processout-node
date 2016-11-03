'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Token = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the customer token
     * @type string
     */
    _id: "",

    /**
     * Customer owning the token
     * @type object
     */
    _customer: null,

    /**
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @type dictionary
     */
    _metadata: {},

    /**
     * Define whether or not the customer token is used on a recurring invoice
     * @type boolean
     */
    _isSubscriptionOnly: false,

    /**
     * Date at which the customer token was created
     * @type string
     */
    _createdAt: "",

    /**
     * Token constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the customer token
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the customer token
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Customer
     * Customer owning the token
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer owning the token
     * @param object val
     * @return this
     */
    setCustomer: function(val) {
        if (typeof val === 'object')
            this._customer = val;
        else {
            var obj = new Customer(this._instance);
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @return object
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @param object val
     * @return this
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @return bool
     */
    getIsSubscriptionOnly: function() {
        return this._isSubscriptionOnly;
    },

    /**
     * Set IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @param bool val
     * @return this
     */
    setIsSubscriptionOnly: function(val) {
        this._isSubscriptionOnly = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the customer token was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the customer token was created
     * @param float val
     * @return this
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Token
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["is_subscription_only"])
            this.setIsSubscriptionOnly(data["is_subscription_only"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Find a customer's token by its ID.
	 * @param string customerId
	 * @param string tokenId
     * @param object options
     * @return this
     */
    find: function(customerId, tokenId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
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
	 * @param string customerId
	 * @param string source
     * @param object options
     * @return this
     */
    create: function(customerId, source, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens";

        var data = {
			'metadata': this.getMetadata(), 
			'source': source
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
     * Create a new token for the given customer ID from an authorization request
	 * @param string customerId
	 * @param string source
	 * @param string target
     * @param object options
     * @return this
     */
    createFromRequest: function(customerId, source, target, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens";

        var data = {
			'metadata': this.getMetadata(), 
			'source': source, 
			'target': target
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
    
}, {
    /**
     * Find a customer's token by its ID.
	 * @param string customerId
	 * @param string tokenId
     * @param object options
     * @return this
     */
    find: function(customerId, tokenId, options) {
        var obj = new Token();
        return obj.find(customerId, tokenId, options);
    },

    
});
