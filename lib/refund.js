"use strict";
// The content of this file was automatically generated
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Refund = /** @class */ (function () {
    /**
     * Refund constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Refund(client, prefill) {
        this.client = null;
        /**
         * ID of the refund
         * @type {string}
         */
        this.id = null;
        /**
         * Transaction to which the refund is applied
         * @type {p.Transaction}
         */
        this.transaction = null;
        /**
         * ID of the transaction to which the refund is applied
         * @type {string}
         */
        this.transactionId = null;
        /**
         * Amount to be refunded. Must not be greater than the amount still available on the transaction
         * @type {string}
         */
        this.amount = null;
        /**
         * Reason for the refund. Either customer_request, duplicate or fraud
         * @type {string}
         */
        this.reason = null;
        /**
         * Custom details regarding the refund
         * @type {string}
         */
        this.information = null;
        /**
         * True if the refund was asynchronously failed, false otherwise
         * @type {boolean}
         */
        this.hasFailed = null;
        /**
         * Metadata related to the refund, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Define whether or not the refund is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the refund was done
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Refund object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newRefund()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Refund.prototype.getProcessOutObjectClass = function () {
        return "Refund";
    };
    /**
     * Get Id
     * ID of the refund
     * @return {string}
     */
    Refund.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the refund
     * @param {string} val
     * @return {Refund}
     */
    Refund.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Transaction
     * Transaction to which the refund is applied
     * @return {p.Transaction}
     */
    Refund.prototype.getTransaction = function () {
        return this.transaction;
    };
    /**
     * Set Transaction
     * Transaction to which the refund is applied
     * @param {p.Transaction} val
     * @return {Refund}
     */
    Refund.prototype.setTransaction = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    };
    /**
     * Get TransactionId
     * ID of the transaction to which the refund is applied
     * @return {string}
     */
    Refund.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    /**
     * Set TransactionId
     * ID of the transaction to which the refund is applied
     * @param {string} val
     * @return {Refund}
     */
    Refund.prototype.setTransactionId = function (val) {
        this.transactionId = val;
        return this;
    };
    /**
     * Get Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @return {string}
     */
    Refund.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @param {string} val
     * @return {Refund}
     */
    Refund.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @return {string}
     */
    Refund.prototype.getReason = function () {
        return this.reason;
    };
    /**
     * Set Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @param {string} val
     * @return {Refund}
     */
    Refund.prototype.setReason = function (val) {
        this.reason = val;
        return this;
    };
    /**
     * Get Information
     * Custom details regarding the refund
     * @return {string}
     */
    Refund.prototype.getInformation = function () {
        return this.information;
    };
    /**
     * Set Information
     * Custom details regarding the refund
     * @param {string} val
     * @return {Refund}
     */
    Refund.prototype.setInformation = function (val) {
        this.information = val;
        return this;
    };
    /**
     * Get HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @return {boolean}
     */
    Refund.prototype.getHasFailed = function () {
        return this.hasFailed;
    };
    /**
     * Set HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @param {boolean} val
     * @return {Refund}
     */
    Refund.prototype.setHasFailed = function (val) {
        this.hasFailed = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Refund.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Refund}
     */
    Refund.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the refund is in sandbox environment
     * @return {boolean}
     */
    Refund.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the refund is in sandbox environment
     * @param {boolean} val
     * @return {Refund}
     */
    Refund.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the refund was done
     * @return {string}
     */
    Refund.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the refund was done
     * @param {string} val
     * @return {Refund}
     */
    Refund.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Refund}
     */
    Refund.prototype.fillWithData = function (data) {
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
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Refund.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "transaction": this.getTransaction(),
            "transaction_id": this.getTransactionId(),
            "amount": this.getAmount(),
            "reason": this.getReason(),
            "information": this.getInformation(),
            "has_failed": this.getHasFailed(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get the transaction's refunds.
     * @param string transactionId
     * @param {any} options
     * @return {array}
     */
    Refund.prototype.fetchTransactionRefunds = function (transactionId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions/" + encodeURI(transactionId) + "/refunds";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['refunds'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newRefund();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Find a transaction's refund by its ID.
     * @param string transactionId
     * @param string refundId
     * @param {any} options
     * @return {this}
     */
    Refund.prototype.find = function (transactionId, refundId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions/" + encodeURI(transactionId) + "/refunds/" + encodeURI(refundId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['refund'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Create a refund for a transaction.

     * @param {any} options
     * @return {bool}
     */
    Refund.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions/" + encodeURI(this.getTransactionId()) + "/refunds";
        var data = {
            'amount': this.getAmount(),
            'metadata': this.getMetadata(),
            'reason': this.getReason(),
            'information': this.getInformation()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    return Refund;
}());
module.exports = Refund;
//# sourceMappingURL=refund.js.map