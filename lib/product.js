'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Product = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the product
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the product belongs
     * @type {object}
     */
    _project: null,

    /**
     * URL to which you may redirect your customer to proceed with the payment
     * @type {string}
     */
    _url: null,

    /**
     * Name of the product
     * @type {string}
     */
    _name: null,

    /**
     * Amount of the product
     * @type {string}
     */
    _amount: null,

    /**
     * Currency of the product
     * @type {string}
     */
    _currency: null,

    /**
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Choose whether or not to request the email during the checkout process
     * @type {boolean}
     */
    _requestEmail: null,

    /**
     * Choose whether or not to request the shipping address during the checkout process
     * @type {boolean}
     */
    _requestShipping: null,

    /**
     * URL where the customer will be redirected upon payment
     * @type {string}
     */
    _returnUrl: null,

    /**
     * URL where the customer will be redirected if the paymen was canceled
     * @type {string}
     */
    _cancelUrl: null,

    /**
     * Define whether or not the product is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the product was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Product constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Product object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newProduct()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the product
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the product
     * @param {float} val
     * @return {Product}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the product belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the product belongs
     * @param {object} val
     * @return {Product}
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
     * Get Url
     * URL to which you may redirect your customer to proceed with the payment
     * @return {float}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to proceed with the payment
     * @param {float} val
     * @return {Product}
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Name
     * Name of the product
     * @return {float}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the product
     * @param {float} val
     * @return {Product}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Amount of the product
     * @return {float}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount of the product
     * @param {float} val
     * @return {Product}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the product
     * @return {float}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the product
     * @param {float} val
     * @return {Product}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the product, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Product}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get RequestEmail
     * Choose whether or not to request the email during the checkout process
     * @return {bool}
     */
    getRequestEmail: function() {
        return this._requestEmail;
    },

    /**
     * Set RequestEmail
     * Choose whether or not to request the email during the checkout process
     * @param {bool} val
     * @return {Product}
     */
    setRequestEmail: function(val) {
        this._requestEmail = val;
        return this;
    },

    /**
     * Get RequestShipping
     * Choose whether or not to request the shipping address during the checkout process
     * @return {bool}
     */
    getRequestShipping: function() {
        return this._requestShipping;
    },

    /**
     * Set RequestShipping
     * Choose whether or not to request the shipping address during the checkout process
     * @param {bool} val
     * @return {Product}
     */
    setRequestShipping: function(val) {
        this._requestShipping = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment
     * @return {float}
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment
     * @param {float} val
     * @return {Product}
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @return {float}
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @param {float} val
     * @return {Product}
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the product is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the product is in sandbox environment
     * @param {bool} val
     * @return {Product}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the product was created
     * @return {float}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the product was created
     * @param {float} val
     * @return {Product}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Product}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["request_email"])
            this.setRequestEmail(data["request_email"]);
        if (data["request_shipping"])
            this.setRequestShipping(data["request_shipping"]);
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
     * Create a new invoice from the product.

     * @param {object} options
     * @return {Invoice}
     */
    createInvoice: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/products/" + encodeURI(this.getId()) + "/invoices";

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

                
                var body = response.body;
                body = body['invoice'];
                var obj = new Invoice(cur._client);
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the products.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/products";

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
                var body = response.body['products'];
                for (var i = body.length; i--;) {
                    var tmp = new Product(cur._client);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new product.
     * 
     * @param {object} options
     * @return {this}
     */
    create: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/products";

        var data = {
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'request_email': this.getRequestEmail(), 
			'request_shipping': this.getRequestShipping(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
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
                body = body['product'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a product by its ID.
	 * @param string productId
     * @param {object} options
     * @return {this}
     */
    find: function(productId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/products/" + encodeURI(productId) + "";

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
                body = body['product'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Save the updated product attributes.

     * @param {object} options
     * @return {this}
     */
    save: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/products/" + encodeURI(this.getId()) + "";

        var data = {
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'request_email': this.getRequestEmail(), 
			'request_shipping': this.getRequestShipping(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
        };

        var req = request.put(path, data, options);
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
                body = body['product'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete the product.

     * @param {object} options
     * @return {bool}
     */
    delete: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/products/" + encodeURI(this.getId()) + "";

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
