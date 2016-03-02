'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var Invoice = module.exports = Base.extend({
    _instance: null,

    /**
     * URL where to redirect the customer when the transaction has been canceled. Defaults to ProcessOut's landing page
     * @type string
     */
    _cancelUrl: "",

    /**
     * Currency of the item's price (ex: USD)
     * @type string
     */
    _currency: "",

    /**
     * Custom value, can be anything. The value is sent back to notify_url
     * @type string
     */
    _custom: "",

    /**
     * Id of the created invoice
     * @type string
     */
    _id: "",

    /**
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @type dictionary
     */
    _metas: {},

    /**
     * Name of the item
     * @type string
     */
    _name: "",

    /**
     * Price of the item
     * @type string
     */
    _price: "",

    /**
     * Determine if we want to ask the customer for his email
     * @type boolean
     */
    _requestEmail: false,

    /**
     * Determine if we want to ask the customer for its shipping address
     * @type boolean
     */
    _requestShipping: false,

    /**
     * URL where to redirect the customer once the payment has been placed. Defaults to ProcessOut's landing page
     * @type string
     */
    _returnUrl: "",

    /**
     * Shipping price added on top of the item price
     * @type string
     */
    _shipping: "0.00",

    /**
     * Taxes price added on top of the item price
     * @type string
     */
    _taxes: "0.00",

    /**
     * URL to which you can redirect your customer in order to pay
     * @type string
     */
    _url: "",

    /**
     * Invoice constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get CancelUrl
     * URL where to redirect the customer when the transaction has been canceled. Defaults to ProcessOut's landing page
     * @return float
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where to redirect the customer when the transaction has been canceled. Defaults to ProcessOut's landing page
     * @param float val
     * @return this
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the item's price (ex: USD)
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the item's price (ex: USD)
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Custom
     * Custom value, can be anything. The value is sent back to notify_url
     * @return float
     */
    getCustom: function() {
        return this._custom;
    },

    /**
     * Set Custom
     * Custom value, can be anything. The value is sent back to notify_url
     * @param float val
     * @return this
     */
    setCustom: function(val) {
        this._custom = val;
        return this;
    },

    /**
     * Get Id
     * Id of the created invoice
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the created invoice
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Metas
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @return object
     */
    getMetas: function() {
        return this._metas;
    },

    /**
     * Set Metas
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @param object val
     * @return this
     */
    setMetas: function(val) {
        this._metas = val;
        return this;
    },

    /**
     * Get Name
     * Name of the item
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the item
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Price
     * Price of the item
     * @return float
     */
    getPrice: function() {
        return this._price;
    },

    /**
     * Set Price
     * Price of the item
     * @param float val
     * @return this
     */
    setPrice: function(val) {
        this._price = val;
        return this;
    },

    /**
     * Get RequestEmail
     * Determine if we want to ask the customer for his email
     * @return bool
     */
    getRequestEmail: function() {
        return this._requestEmail;
    },

    /**
     * Set RequestEmail
     * Determine if we want to ask the customer for his email
     * @param bool val
     * @return this
     */
    setRequestEmail: function(val) {
        this._requestEmail = val;
        return this;
    },

    /**
     * Get RequestShipping
     * Determine if we want to ask the customer for its shipping address
     * @return bool
     */
    getRequestShipping: function() {
        return this._requestShipping;
    },

    /**
     * Set RequestShipping
     * Determine if we want to ask the customer for its shipping address
     * @param bool val
     * @return this
     */
    setRequestShipping: function(val) {
        this._requestShipping = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where to redirect the customer once the payment has been placed. Defaults to ProcessOut's landing page
     * @return float
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where to redirect the customer once the payment has been placed. Defaults to ProcessOut's landing page
     * @param float val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get Shipping
     * Shipping price added on top of the item price
     * @return float
     */
    getShipping: function() {
        return this._shipping;
    },

    /**
     * Set Shipping
     * Shipping price added on top of the item price
     * @param float val
     * @return this
     */
    setShipping: function(val) {
        this._shipping = val;
        return this;
    },

    /**
     * Get Taxes
     * Taxes price added on top of the item price
     * @return float
     */
    getTaxes: function() {
        return this._taxes;
    },

    /**
     * Set Taxes
     * Taxes price added on top of the item price
     * @param float val
     * @return this
     */
    setTaxes: function(val) {
        this._taxes = val;
        return this;
    },

    /**
     * Get Url
     * URL to which you can redirect your customer in order to pay
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you can redirect your customer in order to pay
     * @param float val
     * @return this
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Invoice
     */
    fillWithData: function(data) {
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["custom"])
            this.setCustom(data["custom"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["metas"])
            this.setMetas(data["metas"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["price"])
            this.setPrice(data["price"]);
        if (data["request_email"])
            this.setRequestEmail(data["request_email"]);
        if (data["request_shipping"])
            this.setRequestShipping(data["request_shipping"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["taxes"])
            this.setTaxes(data["taxes"]);
        if (data["url"])
            this.setUrl(data["url"]);
        return this;
    },

    /**
     * Charge using a manually generated payment gateway token.
	 * @param string token
     * @param object options
     * @return CustomerAction
     */
    charge: function(token, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices/" + encodeURI(this.getId()) + "/gateways/{gateway_name}/charges";

        var data = {
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
                body = body['customer_action'];
                var obj = new CustomerAction(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Charge using a customer token.
	 * @param string tokenId
     * @param object options
     * @return CustomerAction
     */
    chargeWithToken: function(tokenId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "/charges";

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

                var body = response.body;
                body = body['customer_action'];
                var obj = new CustomerAction(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Get the customer associated with the current invoice.

     * @param object options
     * @return Customer
     */
    customer: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices/" + encodeURI(this.getId()) + "/customers";

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
     * Link a customer to the invoice.
	 * @param string customerId
     * @param object options
     * @return Customer
     */
    setCustomer: function(customerId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices/" + encodeURI(this.getId()) + "/customers";

        var data = {
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
                body = body['customer'];
                var obj = new Customer(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Create an invoice.
     * 
     * @param object options
     * @return Invoice
     */
    create: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices";

        var data = {
			'name': this.getName(), 
			'price': this.getPrice(), 
			'taxes': this.getTaxes(), 
			'shipping': this.getShipping(), 
			'currency': this.getCurrency(), 
			'request_email': this.getRequestEmail(), 
			'request_shipping': this.getRequestShipping(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'metas': this.getMetas(), 
			'custom': this.getCustom()
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
                body = body['invoice'];
                var obj = new Invoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Get the invoice data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var request = new RequestProcessoutPublic(this._instance);
        var path    = "/invoices/" + encodeURI(id) + "";

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
                body = body['invoice'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    
}, {
    /**
     * Get the invoice data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var obj = new Invoice();
        return obj.find(id, );
    }
    
});
