'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Refund = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the refund
     * @type {string}
     */
    _id: null,

    /**
     * Transaction to which the refund is applied
     * @type {object}
     */
    _transaction: null,

    /**
     * ID of the transaction to which the refund is applied
     * @type {string}
     */
    _transactionId: null,

    /**
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @type {decimal}
     */
    _amount: null,

    /**
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @type {string}
     */
    _reason: null,

    /**
     * Custom details regarding the refund
     * @type {string}
     */
    _information: null,

    /**
     * True if the refund was asynchronously failed, false otherwise
     * @type {boolean}
     */
    _hasFailed: null,

    /**
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the refund is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the refund was done
     * @type {string}
     */
    _createdAt: null,

    /**
     * Refund constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Refund object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newRefund()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the refund
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the refund
     * @param {string} val
     * @return {Refund}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Transaction
     * Transaction to which the refund is applied
     * @return {object}
     */
    getTransaction: function() {
        return this._transaction;
    },

    /**
     * Set Transaction
     * Transaction to which the refund is applied
     * @param {object} val
     * @return {Refund}
     */
    setTransaction: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newTransaction().getClass())
            this._transaction = val;
        else {
            var obj = this._client.newTransaction();
            obj.fillWithData(val);
            this._transaction = obj;
        }
        return this;
    },

    /**
     * Get TransactionId
     * ID of the transaction to which the refund is applied
     * @return {string}
     */
    getTransactionId: function() {
        return this._transactionId;
    },

    /**
     * Set TransactionId
     * ID of the transaction to which the refund is applied
     * @param {string} val
     * @return {Refund}
     */
    setTransactionId: function(val) {
        this._transactionId = val;
        return this;
    },

    /**
     * Get Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @param {string} val
     * @return {Refund}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @return {string}
     */
    getReason: function() {
        return this._reason;
    },

    /**
     * Set Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @param {string} val
     * @return {Refund}
     */
    setReason: function(val) {
        this._reason = val;
        return this;
    },

    /**
     * Get Information
     * Custom details regarding the refund
     * @return {string}
     */
    getInformation: function() {
        return this._information;
    },

    /**
     * Set Information
     * Custom details regarding the refund
     * @param {string} val
     * @return {Refund}
     */
    setInformation: function(val) {
        this._information = val;
        return this;
    },

    /**
     * Get HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @return {bool}
     */
    getHasFailed: function() {
        return this._hasFailed;
    },

    /**
     * Set HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @param {bool} val
     * @return {Refund}
     */
    setHasFailed: function(val) {
        this._hasFailed = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Refund}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the refund is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the refund is in sandbox environment
     * @param {bool} val
     * @return {Refund}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the refund was done
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the refund was done
     * @param {string} val
     * @return {Refund}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Refund}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["reason"])
            this.setReason(data["reason"]);
        if (data["information"])
            this.setInformation(data["information"]);
        if (data["has_failed"])
            this.setHasFailed(data["has_failed"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the transaction's refunds.
	 * @param string transactionId
     * @param {object} options
     * @return {array}
     */
    fetchTransactionRefunds: function(transactionId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/transactions/" + encodeURI(transactionId) + "/refunds";

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
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['refunds'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newRefund();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a transaction's refund by its ID.
	 * @param string transactionId
	 * @param string refundId
     * @param {object} options
     * @return {this}
     */
    find: function(transactionId, refundId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                
                var returnValues = [];

                
                var body = response.body;
                body = body['refund'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a refund for a transaction.

     * @param {object} options
     * @return {bool}
     */
    create: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/transactions/" + encodeURI(this.getTransactionId()) + "/refunds";

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
                
                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
