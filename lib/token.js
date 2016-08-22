'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Token = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the customer token
     * @type string
     */
    _id: "",

    /**
     * Customer linked to the token
     * @type object
     */
    _customer: null,

    /**
     * ID of the customer token
     * @type string
     */
    _customerId: "",

    /**
     * Name of the customer token
     * @type string
     */
    _name: "",

    /**
     * Define whether or not the customer token is used on a recurring invoice
     * @type string
     */
    _isRecurringInvoice: "",

    /**
     * Date at which the customer token was created
     * @type string
     */
    _createdAt: "",

    /**
     * Token constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the customer token
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the customer token
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the token
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the token
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
     * Get CustomerId
     * ID of the customer token
     * @return float
     */
    getCustomerId: function() {
        return this._customerId;
    },

    /**
     * Set CustomerId
     * ID of the customer token
     * @param float val
     * @return this
     */
    setCustomerId: function(val) {
        this._customerId = val;
        return this;
    },

    /**
     * Get Name
     * Name of the customer token
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the customer token
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get IsRecurringInvoice
     * Define whether or not the customer token is used on a recurring invoice
     * @return float
     */
    getIsRecurringInvoice: function() {
        return this._isRecurringInvoice;
    },

    /**
     * Set IsRecurringInvoice
     * Define whether or not the customer token is used on a recurring invoice
     * @param float val
     * @return this
     */
    setIsRecurringInvoice: function(val) {
        this._isRecurringInvoice = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the customer token was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the customer token was created
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
     * @return Token
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["customer_id"])
            this.setCustomerId(data["customer_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["is_recurring_invoice"])
            this.setIsRecurringInvoice(data["is_recurring_invoice"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Delete a specific customer's token by its ID.

     * @param object options
     * @return Token
     */
    delete: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";

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

                var body = response.body;
                body = body['token'];
                var obj = new Token(cur._instance);
                return resolve(obj.fillWithData(body));
                
            });
        });
    },
    
}, {
    
});
