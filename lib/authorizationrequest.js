'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var AuthorizationRequest = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the authorization
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the authorization request belongs
     * @type {object}
     */
    _project: null,

    /**
     * Customer linked to the authorization request
     * @type {object}
     */
    _customer: null,

    /**
     * Token linked to the authorization request, once authorized
     * @type {object}
     */
    _token: null,

    /**
     * URL to which you may redirect your customer to proceed with the authorization
     * @type {string}
     */
    _url: null,

    /**
     * Whether or not the authorization request was authorized
     * @type {boolean}
     */
    _authorized: null,

    /**
     * Name of the authorization
     * @type {string}
     */
    _name: null,

    /**
     * Currency of the authorization
     * @type {string}
     */
    _currency: null,

    /**
     * URL where the customer will be redirected upon authorization
     * @type {string}
     */
    _returnUrl: null,

    /**
     * URL where the customer will be redirected if the authorization was canceled
     * @type {string}
     */
    _cancelUrl: null,

    /**
     * Define whether or not the authorization is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the authorization was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * AuthorizationRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The AuthorizationRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAuthorizationRequest()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the authorization
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the authorization
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the authorization request belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the authorization request belongs
     * @param {object} val
     * @return {AuthorizationRequest}
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._client);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the authorization request
     * @return {object}
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the authorization request
     * @param {object} val
     * @return {AuthorizationRequest}
     */
    setCustomer: function(val) {
        if (typeof val === 'object')
            this._customer = val;
        else {
            var obj = new Customer(this._client);
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get Token
     * Token linked to the authorization request, once authorized
     * @return {object}
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token linked to the authorization request, once authorized
     * @param {object} val
     * @return {AuthorizationRequest}
     */
    setToken: function(val) {
        if (typeof val === 'object')
            this._token = val;
        else {
            var obj = new Token(this._client);
            obj.fillWithData(val);
            this._token = obj;
        }
        return this;
    },

    /**
     * Get Url
     * URL to which you may redirect your customer to proceed with the authorization
     * @return {float}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to proceed with the authorization
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Authorized
     * Whether or not the authorization request was authorized
     * @return {bool}
     */
    getAuthorized: function() {
        return this._authorized;
    },

    /**
     * Set Authorized
     * Whether or not the authorization request was authorized
     * @param {bool} val
     * @return {AuthorizationRequest}
     */
    setAuthorized: function(val) {
        this._authorized = val;
        return this;
    },

    /**
     * Get Name
     * Name of the authorization
     * @return {float}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the authorization
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the authorization
     * @return {float}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the authorization
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon authorization
     * @return {float}
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon authorization
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the authorization was canceled
     * @return {float}
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the authorization was canceled
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the authorization is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the authorization is in sandbox environment
     * @param {bool} val
     * @return {AuthorizationRequest}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the authorization was created
     * @return {float}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the authorization was created
     * @param {float} val
     * @return {AuthorizationRequest}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {AuthorizationRequest}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["authorized"])
            this.setAuthorized(data["authorized"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the customer linked to the authorization request.

     * @param {object} options
     * @return {Customer}
     */
    fetchCustomer: function(options) {
        var request = new Request(this._client);
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
                
                var returnValues = [];

                
                var body = response.body;
                body = body['customer'];
                var obj = new Customer(cur._client);
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new authorization request for the given customer ID.
	 * @param string customerId
     * @param {object} options
     * @return {this}
     */
    create: function(customerId, options) {
        var request = new Request(this._client);
        var path    = "/authorization-requests";

        var data = {
			'name': this.getName(), 
			'currency': this.getCurrency(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
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
                
                var returnValues = [];

                
                var body = response.body;
                body = body['authorization_request'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find an authorization request by its ID.
	 * @param string authorizationRequestId
     * @param {object} options
     * @return {this}
     */
    find: function(authorizationRequestId, options) {
        var request = new Request(this._client);
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
                
                var returnValues = [];

                
                var body = response.body;
                body = body['authorization_request'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
