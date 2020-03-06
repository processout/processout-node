"use strict";
// The content of this file was automatically generated
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, a, body, i, tmp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['refunds'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newRefund();
                                    tmp.fillWithData(body[i]);
                                    a.push(tmp);
                                }
                                returnValues.push(a);
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Find a transaction's refund by its ID.
     * @param string transactionId
     * @param string refundId
     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_2 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['refund'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Create a refund for a transaction.

     * @param {any} options
     * @return {Promise<boolean>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_3 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                returnValues.push(response.isSuccess());
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.post(path, data, options).then(callback, callbackError);
        });
    };
    return Refund;
}());
module.exports = Refund;
//# sourceMappingURL=refund.js.map