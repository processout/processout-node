'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var RecurringInvoice = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the recurring invoice
     * @type string
     */
    _id: "",

    /**
     * Customer linked to the recurring invoice
     * @type object
     */
    _customer: null,

    /**
     * URL to which you may redirect your customer to authorize the recurring invoice
     * @type string
     */
    _url: "",

    /**
     * Name of the recurring invoice
     * @type string
     */
    _name: "",

    /**
     * Price of the recurring invoice
     * @type string
     */
    _price: "",

    /**
     * Currency of the recurring invoice
     * @type string
     */
    _currency: "",

    /**
     * Taxes applied on the recurring invoice (on top of the price)
     * @type string
     */
    _taxes: "0.00",

    /**
     * Shipping fees applied on the recurring invoice (on top of the price)
     * @type string
     */
    _shipping: "0.00",

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
     * The recurring payment period, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type string
     */
    _interval: "",

    /**
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type string
     */
    _trialPeriod: "0d",

    /**
     * Custom variable passed along in the events/webhooks
     * @type string
     */
    _custom: "",

    /**
     * Weither or not the recurring invoice has ended (programmatically or canceled)
     * @type boolean
     */
    _ended: false,

    /**
     * Reason as to why the recurring invoice ended
     * @type string
     */
    _endedReason: "",

    /**
     * Define whether or not the authorization is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the invoice was created
     * @type string
     */
    _createdAt: "",

    /**
     * RecurringInvoice constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the recurring invoice
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the recurring invoice
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the recurring invoice
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the recurring invoice
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
     * URL to which you may redirect your customer to authorize the recurring invoice
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to authorize the recurring invoice
     * @param float val
     * @return this
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Name
     * Name of the recurring invoice
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the recurring invoice
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Price
     * Price of the recurring invoice
     * @return float
     */
    getPrice: function() {
        return this._price;
    },

    /**
     * Set Price
     * Price of the recurring invoice
     * @param float val
     * @return this
     */
    setPrice: function(val) {
        this._price = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the recurring invoice
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the recurring invoice
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Taxes
     * Taxes applied on the recurring invoice (on top of the price)
     * @return float
     */
    getTaxes: function() {
        return this._taxes;
    },

    /**
     * Set Taxes
     * Taxes applied on the recurring invoice (on top of the price)
     * @param float val
     * @return this
     */
    setTaxes: function(val) {
        this._taxes = val;
        return this;
    },

    /**
     * Get Shipping
     * Shipping fees applied on the recurring invoice (on top of the price)
     * @return float
     */
    getShipping: function() {
        return this._shipping;
    },

    /**
     * Set Shipping
     * Shipping fees applied on the recurring invoice (on top of the price)
     * @param float val
     * @return this
     */
    setShipping: function(val) {
        this._shipping = val;
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
     * Get Interval
     * The recurring payment period, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return float
     */
    getInterval: function() {
        return this._interval;
    },

    /**
     * Set Interval
     * The recurring payment period, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param float val
     * @return this
     */
    setInterval: function(val) {
        this._interval = val;
        return this;
    },

    /**
     * Get TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return float
     */
    getTrialPeriod: function() {
        return this._trialPeriod;
    },

    /**
     * Set TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param float val
     * @return this
     */
    setTrialPeriod: function(val) {
        this._trialPeriod = val;
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
     * Get Ended
     * Weither or not the recurring invoice has ended (programmatically or canceled)
     * @return bool
     */
    getEnded: function() {
        return this._ended;
    },

    /**
     * Set Ended
     * Weither or not the recurring invoice has ended (programmatically or canceled)
     * @param bool val
     * @return this
     */
    setEnded: function(val) {
        this._ended = val;
        return this;
    },

    /**
     * Get EndedReason
     * Reason as to why the recurring invoice ended
     * @return float
     */
    getEndedReason: function() {
        return this._endedReason;
    },

    /**
     * Set EndedReason
     * Reason as to why the recurring invoice ended
     * @param float val
     * @return this
     */
    setEndedReason: function(val) {
        this._endedReason = val;
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
     * Date at which the invoice was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the invoice was created
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
     * @return RecurringInvoice
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
        if (data["price"])
            this.setPrice(data["price"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["taxes"])
            this.setTaxes(data["taxes"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["interval"])
            this.setInterval(data["interval"]);
        if (data["trial_period"])
            this.setTrialPeriod(data["trial_period"]);
        if (data["custom"])
            this.setCustom(data["custom"]);
        if (data["ended"])
            this.setEnded(data["ended"]);
        if (data["ended_reason"])
            this.setEndedReason(data["ended_reason"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the customer linked to the recurring invoice.

     * @param object options
     * @return Customer
     */
    customer: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(this.getRecurringInvoiceId()) + "/customers";

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
     * Get the invoice corresponding to the last iteration of the recurring invoice.

     * @param object options
     * @return Invoice
     */
    invoice: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(this.getRecurringInvoiceId()) + "/invoices";

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
                var obj = new Invoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Create a new recurring invoice for the given customer.
	 * @param string customerId
     * @param object options
     * @return RecurringInvoice
     */
    create: function(customerId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices";

        var data = {
			'name': this.getName(), 
			'price': this.getPrice(), 
			'taxes': this.getTaxes(), 
			'shipping': this.getShipping(), 
			'currency': this.getCurrency(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'custom': this.getCustom(), 
			'interval': this.getInterval(), 
			'interval_days': this.getIntervalDays(), 
			'trial_period': this.getTrialPeriod(), 
			'trial_period_days': this.getTrialPeriodDays(), 
			'ended_reason': this.getEndedReason(), 
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
                body = body['recurring_invoice'];
                var obj = new RecurringInvoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Find a recurring invoice by its ID.
	 * @param string recurringInvoiceId
     * @param object options
     * @return RecurringInvoice
     */
    find: function(recurringInvoiceId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(recurringInvoiceId) + "";

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
                body = body['recurring_invoice'];
                var obj = new RecurringInvoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * End a recurring invoice. The reason may be provided as well.
	 * @param string reason
     * @param object options
     * @return bool
     */
    end: function(reason, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(this.getRecurringInvoiceId()) + "";

        var data = {
			'reason': reason
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
     * Find a recurring invoice by its ID.
	 * @param string recurringInvoiceId
     * @param object options
     * @return RecurringInvoice
     */
    find: function(recurringInvoiceId, options) {
        var obj = new RecurringInvoice();
        return obj.find(recurringInvoiceId, options);
    },

    
});
