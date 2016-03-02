'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var TailoredInvoice = module.exports = Base.extend({
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
     * Id of the tailored invoice
     * @type string
     */
    _id: "",

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
     * TailoredInvoice constructor
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
     * Get Id
     * Id of the tailored invoice
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the tailored invoice
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
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
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return TailoredInvoice
     */
    fillWithData: function(data) {
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["price"])
            this.setPrice(data["price"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["taxes"])
            this.setTaxes(data["taxes"]);
        return this;
    },

    /**
     * List all tailored invoices.
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

                var body = response.body;
                body = body['tailored_invoice'];
                var obj = new TailoredInvoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Get tailored invoice data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(id) + "";

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
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    /**
     * Update the tailored invoice data.

     * @param object options
     * @return this
     */
    save: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getId()) + "";

        var data = {
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'notify_url': this.getNotifyUrl(), 
			'name': this.getName(), 
			'price': this.getPrice(), 
			'currency': this.getCurrency(), 
			'taxes': this.getTaxes(), 
			'shipping': this.getShipping()
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
     * Delete a tailored invoice.

     * @param object options
     * @return bool
     */
    delete: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getId()) + "";

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
    /**
     * Create an invoice from a tailored invoice.

     * @param object options
     * @return Invoice
     */
    invoice: function(options) {
        var request = new RequestProcessoutPublic(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getId()) + "/invoices";

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
    
}, {
    /**
     * List all tailored invoices.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new TailoredInvoice();
        return obj.all();
    }
    /**
     * Get tailored invoice data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var obj = new TailoredInvoice();
        return obj.find(id, );
    }
    
});
