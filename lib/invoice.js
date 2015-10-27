'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');

var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');

var RequestProcessoutPublic = require('./networking/requestprocessoutpublic');


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
    _meta: {},
    
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
     * Get Meta
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @return array
     */
    getMeta: function() {
        return this._meta;
    },

    /**
     * Set Meta
     * Contains a key value dictionary representing additional informations shown on the checkout page
     * @param array val
     * @return this
     */
    setMeta: function(val) {
        this._meta = val;

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
     * @return Invoice
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
        
        if (data["id"])
        {
            this.setId(data["id"]);
        }
        
        if (data["meta"])
        {
            this.setMeta(data["meta"]);
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
     * Create an invoice.
     * 
     * @return this
     */
    create: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/invoices";

        var data = {
			'request_email': this.getRequestEmail(), 
			'request_shipping': this.getRequestShipping(), 
			'meta': this.getMeta(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'notify_url': this.getNotifyUrl(), 
			'custom': this.getCustom(), 
			'name': this.getName(), 
			'price': this.getPrice(), 
			'currency': this.getCurrency(), 
			'taxes': this.getTaxes(), 
			'shipping': this.getShipping()
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
     * Get the invoice information.
	 * @param string id
     * @return Invoice
     */
    find: function(id) {
        var request = new RequestProcessoutPublic(this._instance);
        var path    = "/invoices/" + encodeURI(id) + "";

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

                
                var obj = new Invoice(cur._instance);
                return resolve(obj.fillWithData(response.body));
                
            });
        });
    },
    
}, {
    
    
    
    
    /**
     * Get the invoice information.
	 * @param string id
     * @return Invoice
     */
    find: function(id) {
        var obj = new Invoice();
        return obj.find(id);
    }
    
    
});
