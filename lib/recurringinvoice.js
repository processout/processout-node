'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout.js');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate.js');
var RequestProcessoutPublic = require('./networking/requestprocessoutpublic.js');


var RecurringInvoice = module.exports = Base.extend({
    _instance: null,

    /**
     * Currency of the item's price (ex: USD)
     * @type string
     */
    _currency: "",

    /**
     * Whether or not the recurring invoice has ended. True if expired is true
     * @type boolean
     */
    _ended: false,

    /**
     * The reason why the recurring invoice ended
     * @type string
     */
    _endedReason: "",

    /**
     * Id of the recurring invoice
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
     * The recurring payment period, in days. ProcessOut will make sure to collect your payments at the end of each period.
     * @type integer
     */
    _recurringDays: 0,

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
     * The recurring trial period, in days.
     * @type integer
     */
    _trialDays: 0,

    /**
     * URL to which you can redirect your customer in order to activate the recurring invoice
     * @type string
     */
    _url: "",

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
     * Get Ended
     * Whether or not the recurring invoice has ended. True if expired is true
     * @return bool
     */
    getEnded: function() {
        return this._ended;
    },

    /**
     * Set Ended
     * Whether or not the recurring invoice has ended. True if expired is true
     * @param bool val
     * @return this
     */
    setEnded: function(val) {
        this._ended = val;
        return this;
    },

    /**
     * Get EndedReason
     * The reason why the recurring invoice ended
     * @return float
     */
    getEndedReason: function() {
        return this._endedReason;
    },

    /**
     * Set EndedReason
     * The reason why the recurring invoice ended
     * @param float val
     * @return this
     */
    setEndedReason: function(val) {
        this._endedReason = val;
        return this;
    },

    /**
     * Get Id
     * Id of the recurring invoice
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the recurring invoice
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
     * Get RecurringDays
     * The recurring payment period, in days. ProcessOut will make sure to collect your payments at the end of each period.
     * @return int
     */
    getRecurringDays: function() {
        return this._recurringDays;
    },

    /**
     * Set RecurringDays
     * The recurring payment period, in days. ProcessOut will make sure to collect your payments at the end of each period.
     * @param int val
     * @return this
     */
    setRecurringDays: function(val) {
        this._recurringDays = val;
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
     * Get TrialDays
     * The recurring trial period, in days.
     * @return int
     */
    getTrialDays: function() {
        return this._trialDays;
    },

    /**
     * Set TrialDays
     * The recurring trial period, in days.
     * @param int val
     * @return this
     */
    setTrialDays: function(val) {
        this._trialDays = val;
        return this;
    },

    /**
     * Get Url
     * URL to which you can redirect your customer in order to activate the recurring invoice
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you can redirect your customer in order to activate the recurring invoice
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
     * @return RecurringInvoice
     */
    fillWithData: function(data) {
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["ended"])
            this.setEnded(data["ended"]);
        if (data["ended_reason"])
            this.setEndedReason(data["ended_reason"]);
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["price"])
            this.setPrice(data["price"]);
        if (data["recurring_days"])
            this.setRecurringDays(data["recurring_days"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["taxes"])
            this.setTaxes(data["taxes"]);
        if (data["trial_days"])
            this.setTrialDays(data["trial_days"]);
        if (data["url"])
            this.setUrl(data["url"]);
        return this;
    },

    /**
     * Create a new recurring invoice.
	 * @param string customerId
     * @param object options
     * @return RecurringInvoice
     */
    create: function(customerId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(customerId) + "/recurring-invoices";

        var data = {
			'name': this.getName(), 
			'price': this.getPrice(), 
			'shipping': this.getShipping(), 
			'taxes': this.getTaxes(), 
			'currency': this.getCurrency(), 
			'recurring_days': this.getRecurringDays(), 
			'trial_days': this.getTrialDays(), 
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
                body = body['recurring_invoice'];
                var obj = new RecurringInvoice(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    /**
     * Get the invoice representing the new recurring invoice iteration.

     * @param object options
     * @return Invoice
     */
    invoice: function(options) {
        var request = new RequestProcessoutPublic(this._instance);
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
     * Get the recurring invoice data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(id) + "";

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
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    /**
     * End a recurring invoice.
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
    
}, {
    /**
     * Get the recurring invoice data.
	 * @param string id
     * @param object options
     * @return this
     */
    find: function(id, options) {
        var obj = new RecurringInvoice();
        return obj.find(id, options);
    },

    
});
