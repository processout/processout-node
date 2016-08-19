'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var TailoredInvoice = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the tailored invoice
     * @type string
     */
    _id: "",

    /**
     * Name of the tailored invoice
     * @type string
     */
    _name: "",

    /**
     * Price of the tailored invoice
     * @type string
     */
    _price: "",

    /**
     * Currency of the tailored invoice
     * @type string
     */
    _currency: "",

    /**
     * Taxes applied on the tailored invoice (on top of the price)
     * @type string
     */
    _taxes: "0.00",

    /**
     * Shipping fees applied on the tailored invoice (on top of the price)
     * @type string
     */
    _shipping: "0.00",

    /**
     * Choose whether or not to request the email during the checkout process
     * @type boolean
     */
    _requestEmail: false,

    /**
     * Choose whether or not to request the shipping address during the checkout process
     * @type boolean
     */
    _requestShipping: false,

    /**
     * URL where the customer will be redirected upon payment
     * @type string
     */
    _returnUrl: "",

    /**
     * URL where the customer will be redirected if the paymen was canceled
     * @type string
     */
    _cancelUrl: "",

    /**
     * Custom variable passed along in the events/webhooks
     * @type string
     */
    _custom: "",

    /**
     * Date at which the tailored invoice was created
     * @type string
     */
    _createdAt: "",

    /**
     * TailoredInvoice constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the tailored invoice
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the tailored invoice
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Name
     * Name of the tailored invoice
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the tailored invoice
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Price
     * Price of the tailored invoice
     * @return float
     */
    getPrice: function() {
        return this._price;
    },

    /**
     * Set Price
     * Price of the tailored invoice
     * @param float val
     * @return this
     */
    setPrice: function(val) {
        this._price = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the tailored invoice
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the tailored invoice
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Taxes
     * Taxes applied on the tailored invoice (on top of the price)
     * @return float
     */
    getTaxes: function() {
        return this._taxes;
    },

    /**
     * Set Taxes
     * Taxes applied on the tailored invoice (on top of the price)
     * @param float val
     * @return this
     */
    setTaxes: function(val) {
        this._taxes = val;
        return this;
    },

    /**
     * Get Shipping
     * Shipping fees applied on the tailored invoice (on top of the price)
     * @return float
     */
    getShipping: function() {
        return this._shipping;
    },

    /**
     * Set Shipping
     * Shipping fees applied on the tailored invoice (on top of the price)
     * @param float val
     * @return this
     */
    setShipping: function(val) {
        this._shipping = val;
        return this;
    },

    /**
     * Get RequestEmail
     * Choose whether or not to request the email during the checkout process
     * @return bool
     */
    getRequestEmail: function() {
        return this._requestEmail;
    },

    /**
     * Set RequestEmail
     * Choose whether or not to request the email during the checkout process
     * @param bool val
     * @return this
     */
    setRequestEmail: function(val) {
        this._requestEmail = val;
        return this;
    },

    /**
     * Get RequestShipping
     * Choose whether or not to request the shipping address during the checkout process
     * @return bool
     */
    getRequestShipping: function() {
        return this._requestShipping;
    },

    /**
     * Set RequestShipping
     * Choose whether or not to request the shipping address during the checkout process
     * @param bool val
     * @return this
     */
    setRequestShipping: function(val) {
        this._requestShipping = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment
     * @return float
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment
     * @param float val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
     * @return float
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the paymen was canceled
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
     * Get CreatedAt
     * Date at which the tailored invoice was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the tailored invoice was created
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
     * @return TailoredInvoice
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["price"])
            this.setPrice(data["price"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["taxes"])
            this.setTaxes(data["taxes"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["request_email"])
            this.setRequestEmail(data["request_email"]);
        if (data["request_shipping"])
            this.setRequestShipping(data["request_shipping"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["custom"])
            this.setCustom(data["custom"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Create a new invoice from the tailored invoice.

     * @param object options
     * @return Invoice
     */
    invoice: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getTailoredInvoiceId()) + "/invoices";

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
                body = body['invoice'];
                var obj = new Invoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Get all the tailored invoices.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices";

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

                var a    = [];
                var body = response.body['tailored_invoices'];
                for (var i = body.length; i--;) {
                    var tmp = new TailoredInvoice(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Create a new tailored invoice.
     * 
     * @param object options
     * @return TailoredInvoice
     */
    create: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices";

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
                body = body['tailored_invoice'];
                var obj = new TailoredInvoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Find a tailored invoice by its ID.
	 * @param string tailoredInvoiceId
     * @param object options
     * @return TailoredInvoice
     */
    find: function(tailoredInvoiceId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(tailoredInvoiceId) + "";

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
                body = body['tailored_invoice'];
                var obj = new TailoredInvoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Save the updated tailored invoice attributes.

     * @param object options
     * @return this
     */
    save: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getTailoredInvoiceId()) + "";

        var data = {

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

                var body = response.body;
                body = body['tailored_invoice'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    /**
     * Delete the tailored invoice.

     * @param object options
     * @return bool
     */
    delete: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getTailoredInvoiceId()) + "";

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

                return resolve(response.isSuccess());
                
            });
        });
    },
    
}, {
    /**
     * Get all the tailored invoices.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new TailoredInvoice();
        return obj.all(options);
    },

    /**
     * Find a tailored invoice by its ID.
	 * @param string tailoredInvoiceId
     * @param object options
     * @return TailoredInvoice
     */
    find: function(tailoredInvoiceId, options) {
        var obj = new TailoredInvoice();
        return obj.find(tailoredInvoiceId, options);
    },

    
});
