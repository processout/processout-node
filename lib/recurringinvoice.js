'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');

var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');

var RequestProcessoutPublic = require('./networking/requestprocessoutpublic');


var RecurringInvoice = module.exports = Base.extend({
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
     * Whether or not the recurring invoice has expired
     * @type boolean
     */
    _expired: false,

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
     * URL called by processout to notify your application when an event is fired. Most commonly known as webhooks
     * @type string
     */
    _notifyUrl: "",

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


    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },


    /**
     * Get CancelUrl
     * URL where to redirect the customer when the transaction has been canceled. Defaults to ProcessOut's landing page
     * @return string
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where to redirect the customer when the transaction has been canceled. Defaults to ProcessOut's landing page
     * @param string val
     * @return this
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;

        return this;
    },

    /**
     * Get Currency
     * Currency of the item's price (ex: USD)
     * @return string
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the item's price (ex: USD)
     * @param string val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;

        return this;
    },

    /**
     * Get Custom
     * Custom value, can be anything. The value is sent back to notify_url
     * @return string
     */
    getCustom: function() {
        return this._custom;
    },

    /**
     * Set Custom
     * Custom value, can be anything. The value is sent back to notify_url
     * @param string val
     * @return this
     */
    setCustom: function(val) {
        this._custom = val;

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
     * @return string
     */
    getEndedReason: function() {
        return this._endedReason;
    },

    /**
     * Set EndedReason
     * The reason why the recurring invoice ended
     * @param string val
     * @return this
     */
    setEndedReason: function(val) {
        this._endedReason = val;

        return this;
    },

    /**
     * Get Expired
     * Whether or not the recurring invoice has expired
     * @return bool
     */
    getExpired: function() {
        return this._expired;
    },

    /**
     * Set Expired
     * Whether or not the recurring invoice has expired
     * @param bool val
     * @return this
     */
    setExpired: function(val) {
        this._expired = val;

        return this;
    },

    /**
     * Get Id
     * Id of the created invoice
     * @return string
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the created invoice
     * @param string val
     * @return this
     */
    setId: function(val) {
        this._id = val;

        return this;
    },

    /**
     * Get Metas
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @return array
     */
    getMetas: function() {
        return this._metas;
    },

    /**
     * Set Metas
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @param array val
     * @return this
     */
    setMetas: function(val) {
        this._metas = val;

        return this;
    },

    /**
     * Get Name
     * Name of the item
     * @return string
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the item
     * @param string val
     * @return this
     */
    setName: function(val) {
        this._name = val;

        return this;
    },

    /**
     * Get NotifyUrl
     * URL called by processout to notify your application when an event is fired. Most commonly known as webhooks
     * @return string
     */
    getNotifyUrl: function() {
        return this._notifyUrl;
    },

    /**
     * Set NotifyUrl
     * URL called by processout to notify your application when an event is fired. Most commonly known as webhooks
     * @param string val
     * @return this
     */
    setNotifyUrl: function(val) {
        this._notifyUrl = val;

        return this;
    },

    /**
     * Get Price
     * Price of the item
     * @return string
     */
    getPrice: function() {
        return this._price;
    },

    /**
     * Set Price
     * Price of the item
     * @param string val
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
     * @return string
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where to redirect the customer once the payment has been placed. Defaults to ProcessOut's landing page
     * @param string val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;

        return this;
    },

    /**
     * Get Shipping
     * Shipping price added on top of the item price
     * @return string
     */
    getShipping: function() {
        return this._shipping;
    },

    /**
     * Set Shipping
     * Shipping price added on top of the item price
     * @param string val
     * @return this
     */
    setShipping: function(val) {
        this._shipping = val;

        return this;
    },

    /**
     * Get Taxes
     * Taxes price added on top of the item price
     * @return string
     */
    getTaxes: function() {
        return this._taxes;
    },

    /**
     * Set Taxes
     * Taxes price added on top of the item price
     * @param string val
     * @return this
     */
    setTaxes: function(val) {
        this._taxes = val;

        return this;
    },

    /**
     * Get Url
     * URL to which you can redirect your customer in order to pay
     * @return string
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you can redirect your customer in order to pay
     * @param string val
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

        if (data["cancel_url"])
        {
            this.setCancelUrl(data["cancel_url"]);
        }

        if (data["currency"])
        {
            this.setCurrency(data["currency"]);
        }

        if (data["custom"])
        {
            this.setCustom(data["custom"]);
        }

        if (data["ended"])
        {
            this.setEnded(data["ended"]);
        }

        if (data["ended_reason"])
        {
            this.setEndedReason(data["ended_reason"]);
        }

        if (data["expired"])
        {
            this.setExpired(data["expired"]);
        }

        if (data["id"])
        {
            this.setId(data["id"]);
        }

        if (data["metas"])
        {
            this.setMetas(data["metas"]);
        }

        if (data["name"])
        {
            this.setName(data["name"]);
        }

        if (data["notify_url"])
        {
            this.setNotifyUrl(data["notify_url"]);
        }

        if (data["price"])
        {
            this.setPrice(data["price"]);
        }

        if (data["recurring_days"])
        {
            this.setRecurringDays(data["recurring_days"]);
        }

        if (data["request_email"])
        {
            this.setRequestEmail(data["request_email"]);
        }

        if (data["request_shipping"])
        {
            this.setRequestShipping(data["request_shipping"]);
        }

        if (data["return_url"])
        {
            this.setReturnUrl(data["return_url"]);
        }

        if (data["shipping"])
        {
            this.setShipping(data["shipping"]);
        }

        if (data["taxes"])
        {
            this.setTaxes(data["taxes"]);
        }

        if (data["url"])
        {
            this.setUrl(data["url"]);
        }


        return this;
    },


    /**
     * Create a recurring invoice.
     *
     * @return this
     */
    create: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices";

        var data = {
			'request_email': this.getRequestEmail(),
			'request_shipping': this.getRequestShipping(),
			'metas': this.getMetas(),
			'return_url': this.getReturnUrl(),
			'cancel_url': this.getCancelUrl(),
			'notify_url': this.getNotifyUrl(),
			'custom': this.getCustom(),
			'name': this.getName(),
			'price': this.getPrice(),
			'currency': this.getCurrency(),
			'taxes': this.getTaxes(),
			'shipping': this.getShipping(),
			'recurring_days': this.getRecurringDays()
        };


        var req = request.post(path, data);


        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);


                return resolve(cur.fillWithData(response.body));

            });
        });
    },

    /**
     * Get the information related to a recurring invoice.
	 * @param string id
     * @return this
     */
    find: function(id) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(id) + "";

        var data = {

        };


        var req = request.get(path, data);


        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);


                return resolve(cur.fillWithData(response.body));

            });
        });
    },

    /**
     * Stop a recurring invoice.

     * @return bool
     */
    delete: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/recurring-invoices/" + encodeURI(this.getId()) + "";

        var data = {

        };


        var req = request.delete(path, data);


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
     * Get the information related to a recurring invoice.
	 * @param string id
     * @return this
     */
    find: function(id) {
        var obj = new RecurringInvoice();
        return obj.find(id);
    }




});
