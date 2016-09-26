'use strict';

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Refund = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the refund
     * @type string
     */
    _id: "",

    /**
     * Transaction to which the refund is applied
     * @type object
     */
    _transaction: null,

    /**
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @type string
     */
    _reason: "",

    /**
     * Custom details regarding the refund
     * @type string
     */
    _information: "",

    /**
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @type string
     */
    _amount: "",

    /**
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @type dictionary
     */
    _metadata: {},

    /**
     * Define whether or not the refund is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the refund was done
     * @type string
     */
    _createdAt: "",

    /**
     * Refund constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the refund
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the refund
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Transaction
     * Transaction to which the refund is applied
     * @return object
     */
    getTransaction: function() {
        return this._transaction;
    },

    /**
     * Set Transaction
     * Transaction to which the refund is applied
     * @param object val
     * @return this
     */
    setTransaction: function(val) {
        if (typeof val === 'object')
            this._transaction = val;
        else {
            var obj = new Transaction(this._instance);
            obj.fillWithData(val);
            this._transaction = obj;
        }
        return this;
    },

    /**
     * Get Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @return float
     */
    getReason: function() {
        return this._reason;
    },

    /**
     * Set Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @param float val
     * @return this
     */
    setReason: function(val) {
        this._reason = val;
        return this;
    },

    /**
     * Get Information
     * Custom details regarding the refund
     * @return float
     */
    getInformation: function() {
        return this._information;
    },

    /**
     * Set Information
     * Custom details regarding the refund
     * @param float val
     * @return this
     */
    setInformation: function(val) {
        this._information = val;
        return this;
    },

    /**
     * Get Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @return float
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @param float val
     * @return this
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @return object
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @param object val
     * @return this
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the refund is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the refund is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the refund was done
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the refund was done
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
     * @return Refund
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["reason"])
            this.setReason(data["reason"]);
        if (data["information"])
            this.setInformation(data["information"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Find a transaction's refund by its ID.
	 * @param string transactionId
	 * @param string refundId
     * @param object options
     * @return this
     */
    find: function(transactionId, refundId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/transactions/" + encodeURI(transactionId) + "/refunds/" + encodeURI(refundId) + "";

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
                body = body['refund'];
                return resolve(cur.fillWithData(body));
                
            });
        });
    },
    /**
     * Apply a refund to a transaction.
	 * @param string transactionId
     * @param object options
     * @return bool
     */
    apply: function(transactionId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/transactions/" + encodeURI(transactionId) + "/refunds";

        var data = {
			'amount': this.getAmount(), 
			'metadata': this.getMetadata(), 
			'reason': this.getReason(), 
			'information': this.getInformation()
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

                return resolve(response.isSuccess());
                
            });
        });
    },
    
}, {
    /**
     * Find a transaction's refund by its ID.
	 * @param string transactionId
	 * @param string refundId
     * @param object options
     * @return this
     */
    find: function(transactionId, refundId, options) {
        var obj = new Refund();
        return obj.find(transactionId, refundId, options);
    },

    
});
