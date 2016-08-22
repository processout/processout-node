'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var AuthorizationRequest = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the authorization
     * @type string
     */
    _id: "",

    /**
     * Customer linked to the authorization
     * @type object
     */
    _customer: null,

    /**
     * URL to which you may redirect your customer to proceed with the authorization
     * @type string
     */
    _url: "",

    /**
     * Name of the authorization
     * @type string
     */
    _name: "",

    /**
     * Currency of the authorization
     * @type string
     */
    _currency: "",

    /**
     * URL where the customer will be redirected upon authorization
     * @type string
     */
    _returnUrl: "",

    /**
     * URL where the customer will be redirected if the authorization was canceled
     * @type string
     */
    _cancelUrl: "",

    /**
     * Custom variable passed along in the events/webhooks
     * @type string
     */
    _custom: "",

    /**
     * Define whether or not the authorization is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the authorization was created
     * @type string
     */
    _createdAt: "",

    /**
     * AuthorizationRequest constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the authorization
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the authorization
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the authorization
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the authorization
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
     * Get Url
     * URL to which you may redirect your customer to proceed with the authorization
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to proceed with the authorization
     * @param float val
     * @return this
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Name
     * Name of the authorization
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the authorization
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the authorization
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the authorization
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon authorization
     * @return float
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon authorization
     * @param float val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the authorization was canceled
     * @return float
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the authorization was canceled
     * @param float val
     * @return this
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get Custom
     * Custom variable passed along in the events/webhooks
     * @return float
     */
    getCustom: function() {
        return this._custom;
    },

    /**
     * Set Custom
     * Custom variable passed along in the events/webhooks
     * @param float val
     * @return this
     */
    setCustom: function(val) {
        this._custom = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the authorization is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the authorization is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the authorization was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the authorization was created
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
     * @return AuthorizationRequest
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["custom"])
            this.setCustom(data["custom"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the customer linked to the authorization request.

     * @param object options
     * @return Customer
     */
    customer: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/authorization-requests/" + encodeURI(this.getId()) + "/customers";

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

                var body = response.body;
                body = body['customer'];
                var obj = new Customer(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Authorize (create) a new customer token on the given gateway.
	 * @param string gatewayName
	 * @param string name
	 * @param string token
     * @param object options
     * @return Token
     */
    authorize: function(gatewayName, name, token, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/authorization-requests/" + encodeURI(this.getId()) + "/gateways/" + encodeURI(gatewayName) + "/tokens";

        var data = {
			'name': name, 
			'token': token
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

                var body = response.body;
                body = body['token'];
                var obj = new Token(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Create a new authorization request for the given customer ID.
	 * @param string customerId
     * @param object options
     * @return AuthorizationRequest
     */
    create: function(customerId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/authorization-requests";

        var data = {
			'name': this.getName(), 
			'currency': this.getCurrency(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'custom': this.getCustom(), 
			'customer_id': customerId
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

                var body = response.body;
                body = body['authorization_request'];
                var obj = new AuthorizationRequest(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Find an authorization request by its ID.
	 * @param string authorizationRequestId
     * @param object options
     * @return this
     */
    find: function(authorizationRequestId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/authorization-requests/" + encodeURI(authorizationRequestId) + "";

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

                var body = response.body;
                body = body['authorization_request'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    
}, {
    /**
     * Find an authorization request by its ID.
	 * @param string authorizationRequestId
     * @param object options
     * @return this
     */
    find: function(authorizationRequestId, options) {
        var obj = new AuthorizationRequest();
        return obj.find(authorizationRequestId, options);
    },

    
});
