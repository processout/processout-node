'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var RecurringInvoice = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the subscription
     * @type string
     */
    _id: "",

    /**
     * Project to which the subscription belongs
     * @type object
     */
    _project: null,

    /**
     * Customer linked to the subscription
     * @type object
     */
    _customer: null,

    /**
     * URL to which you may redirect your customer to authorize the subscription
     * @type string
     */
    _url: "",

    /**
     * Name of the subscription
     * @type string
     */
    _name: "",

    /**
     * Price of the subscription
     * @type string
     */
    _amount: "",

    /**
     * Currency of the subscription
     * @type string
     */
    _currency: "",

    /**
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @type dictionary
     */
    _metadata: {},

    /**
     * URL where the customer will be redirected when he activates the subscription
     * @type string
     */
    _returnUrl: "",

    /**
     * URL where the customer will be redirected when he canceles the subscription
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
     * ID of the subscription
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the subscription
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the subscription belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the subscription belongs
     * @param object val
     * @return this
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._instance);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the subscription
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the subscription
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
     * URL to which you may redirect your customer to authorize the subscription
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to authorize the subscription
     * @param float val
     * @return this
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Name
     * Name of the subscription
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the subscription
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Price of the subscription
     * @return float
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Price of the subscription
     * @param float val
     * @return this
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the subscription
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the subscription
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @return object
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @param object val
     * @return this
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected when he activates the subscription
     * @return float
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected when he activates the subscription
     * @param float val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected when he canceles the subscription
     * @return float
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected when he canceles the subscription
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
        if (data["project"])
            this.setProject(data["project"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
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
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["interval"])
            this.setInterval(data["interval"]);
        if (data["trial_period"])
            this.setTrialPeriod(data["trial_period"]);
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
        var path    = "/recurring-invoices/" + encodeURI(this.getId()) + "/customers";

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
        var path    = "/recurring-invoices/" + encodeURI(this.getId()) + "/invoices";

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
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'interval': this.getInterval(), 
			'trial_period': this.getTrialPeriod(), 
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
        var path    = "/recurring-invoices/" + encodeURI(this.getId()) + "";

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
