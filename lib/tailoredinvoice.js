'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');

var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');

var RequestProcessoutPublic = require('./networking/requestprocessoutpublic');


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
     * The recurring payment period, in days. ProcessOut will make sure to collect your payments at the end of each period. If set to `0`, the recurring period is disabled.
     * @type integer
     */
    _recurringDays: 0,
    
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
     * Get Id
     * Id of the tailored invoice
     * @return string
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * Id of the tailored invoice
     * @param string val
     * @return this
     */
    setId: function(val) {
        this._id = val;

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
     * The recurring payment period, in days. ProcessOut will make sure to collect your payments at the end of each period. If set to `0`, the recurring period is disabled.
     * @return int
     */
    getRecurringDays: function() {
        return this._recurringDays;
    },

    /**
     * Set RecurringDays
     * The recurring payment period, in days. ProcessOut will make sure to collect your payments at the end of each period. If set to `0`, the recurring period is disabled.
     * @param int val
     * @return this
     */
    setRecurringDays: function(val) {
        this._recurringDays = val;

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
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return TailoredInvoice
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
        
        if (data["id"])
        {
            this.setId(data["id"]);
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
        

        return this;
    },

    
    /**
     * Create an invoice from a tailored invoice.
	 * @param string tailoredInvoiceId
     * @return Invoice
     */
    invoice: function(tailoredInvoiceId) {
        var request = new RequestProcessoutPublic(this._instance);
        var path    = "/invoices/from-tailored/" + encodeURI(tailoredInvoiceId) + "";

        var data = {

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

                
                var obj = new Invoice(cur._instance);
                return resolve(obj.fillWithData(response.body));
                
            });
        });
    },
    
    /**
     * Get all available tailored invoices information.
     * 
     * @return array
     */
    all: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices";

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

                
                var a    = [];
                var body = response.body;
                for(var index in body)
                {
                    var tmp = new TailoredInvoice(cur._instance);
                    tmp.fillWithData(body[index]);
                    a.push(tmp);
                }

                return resolve(a);
                
            });
        });
    },
    
    /**
     * Create a new tailored invoice.
     * 
     * @return this
     */
    create: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices";

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
     * Get tailored invoice information.
	 * @param string id
     * @return this
     */
    find: function(id) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(id) + "";

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
     * Update the tailored invoice information.

     * @return this
     */
    save: function() {
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

        
        var req = request.put(path, data);
        

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
     * Delete a tailored invoice.

     * @return bool
     */
    delete: function() {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/tailored-invoices/" + encodeURI(this.getId()) + "";

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
     * Create an invoice from a tailored invoice.
	 * @param string tailoredInvoiceId
     * @return Invoice
     */
    invoice: function(tailoredInvoiceId) {
        var obj = new TailoredInvoice();
        return obj.invoice(tailoredInvoiceId);
    }
    
    
    
    /**
     * Get all available tailored invoices information.
     * 
     * @return array
     */
    all: function() {
        var obj = new TailoredInvoice();
        return obj.all();
    }
    
    
    
    
    
    /**
     * Get tailored invoice information.
	 * @param string id
     * @return this
     */
    find: function(id) {
        var obj = new TailoredInvoice();
        return obj.find(id);
    }
    
    
    
    
    
    
});
