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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var Payout = /** @class */ (function () {
    /**
     * Payout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Payout(client, prefill) {
        this.client = null;
        /**
         * ID of the payout
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the payout belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the payout belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Status of the payout
         * @type {string}
         */
        this.status = null;
        /**
         * Amount of the payout
         * @type {string}
         */
        this.amount = null;
        /**
         * Currency of the payout
         * @type {string}
         */
        this.currency = null;
        /**
         * Metadata related to the payout, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Name of the bank to which the payout was issued, if available
         * @type {string}
         */
        this.bankName = null;
        /**
         * Summary of the bank to which the payout was issued, if available
         * @type {string}
         */
        this.bankSummary = null;
        /**
         * Number of completed transactions linked to the payout, if available
         * @type {number}
         */
        this.salesTransactions = null;
        /**
         * Volume of completed transactions linked to the payout, if available
         * @type {string}
         */
        this.salesVolume = null;
        /**
         * Number of refunded transactions linked to the payout, if available
         * @type {number}
         */
        this.refundsTransactions = null;
        /**
         * Volume of refunded transactions linked to the payout, if available
         * @type {string}
         */
        this.refundsVolume = null;
        /**
         * Number of chargebacked transactions linked to the payout, if available
         * @type {number}
         */
        this.chargebacksTransactions = null;
        /**
         * Volume of chargebacked transactions linked to the payout, if available
         * @type {string}
         */
        this.chargebacksVolume = null;
        /**
         * Fees linked to the payout, if available
         * @type {string}
         */
        this.fees = null;
        /**
         * Adjustments linked to the payout, if available
         * @type {string}
         */
        this.adjustments = null;
        /**
         * Reserve kept on the payout, if available
         * @type {string}
         */
        this.reserve = null;
        /**
         * Date at which the payout was settled
         * @type {string}
         */
        this.settledAt = null;
        /**
         * Date at which the payout was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Payout object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayout()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Payout.prototype.getProcessOutObjectClass = function () {
        return "Payout";
    };
    /**
     * Get Id
     * ID of the payout
     * @return {string}
     */
    Payout.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the payout
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the payout belongs
     * @return {p.Project}
     */
    Payout.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the payout belongs
     * @param {p.Project} val
     * @return {Payout}
     */
    Payout.prototype.setProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    };
    /**
     * Get ProjectId
     * ID of the project to which the payout belongs
     * @return {string}
     */
    Payout.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the payout belongs
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Status
     * Status of the payout
     * @return {string}
     */
    Payout.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * Set Status
     * Status of the payout
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setStatus = function (val) {
        this.status = val;
        return this;
    };
    /**
     * Get Amount
     * Amount of the payout
     * @return {string}
     */
    Payout.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the payout
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the payout
     * @return {string}
     */
    Payout.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the payout
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Payout.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Payout}
     */
    Payout.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get BankName
     * Name of the bank to which the payout was issued, if available
     * @return {string}
     */
    Payout.prototype.getBankName = function () {
        return this.bankName;
    };
    /**
     * Set BankName
     * Name of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setBankName = function (val) {
        this.bankName = val;
        return this;
    };
    /**
     * Get BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @return {string}
     */
    Payout.prototype.getBankSummary = function () {
        return this.bankSummary;
    };
    /**
     * Set BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setBankSummary = function (val) {
        this.bankSummary = val;
        return this;
    };
    /**
     * Get SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @return {number}
     */
    Payout.prototype.getSalesTransactions = function () {
        return this.salesTransactions;
    };
    /**
     * Set SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    Payout.prototype.setSalesTransactions = function (val) {
        this.salesTransactions = val;
        return this;
    };
    /**
     * Get SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @return {string}
     */
    Payout.prototype.getSalesVolume = function () {
        return this.salesVolume;
    };
    /**
     * Set SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setSalesVolume = function (val) {
        this.salesVolume = val;
        return this;
    };
    /**
     * Get RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @return {number}
     */
    Payout.prototype.getRefundsTransactions = function () {
        return this.refundsTransactions;
    };
    /**
     * Set RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    Payout.prototype.setRefundsTransactions = function (val) {
        this.refundsTransactions = val;
        return this;
    };
    /**
     * Get RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @return {string}
     */
    Payout.prototype.getRefundsVolume = function () {
        return this.refundsVolume;
    };
    /**
     * Set RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setRefundsVolume = function (val) {
        this.refundsVolume = val;
        return this;
    };
    /**
     * Get ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @return {number}
     */
    Payout.prototype.getChargebacksTransactions = function () {
        return this.chargebacksTransactions;
    };
    /**
     * Set ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @param {number} val
     * @return {Payout}
     */
    Payout.prototype.setChargebacksTransactions = function (val) {
        this.chargebacksTransactions = val;
        return this;
    };
    /**
     * Get ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @return {string}
     */
    Payout.prototype.getChargebacksVolume = function () {
        return this.chargebacksVolume;
    };
    /**
     * Set ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setChargebacksVolume = function (val) {
        this.chargebacksVolume = val;
        return this;
    };
    /**
     * Get Fees
     * Fees linked to the payout, if available
     * @return {string}
     */
    Payout.prototype.getFees = function () {
        return this.fees;
    };
    /**
     * Set Fees
     * Fees linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setFees = function (val) {
        this.fees = val;
        return this;
    };
    /**
     * Get Adjustments
     * Adjustments linked to the payout, if available
     * @return {string}
     */
    Payout.prototype.getAdjustments = function () {
        return this.adjustments;
    };
    /**
     * Set Adjustments
     * Adjustments linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setAdjustments = function (val) {
        this.adjustments = val;
        return this;
    };
    /**
     * Get Reserve
     * Reserve kept on the payout, if available
     * @return {string}
     */
    Payout.prototype.getReserve = function () {
        return this.reserve;
    };
    /**
     * Set Reserve
     * Reserve kept on the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setReserve = function (val) {
        this.reserve = val;
        return this;
    };
    /**
     * Get SettledAt
     * Date at which the payout was settled
     * @return {string}
     */
    Payout.prototype.getSettledAt = function () {
        return this.settledAt;
    };
    /**
     * Set SettledAt
     * Date at which the payout was settled
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setSettledAt = function (val) {
        this.settledAt = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the payout was created
     * @return {string}
     */
    Payout.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the payout was created
     * @param {string} val
     * @return {Payout}
     */
    Payout.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Payout}
     */
    Payout.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["bank_summary"])
            this.setBankSummary(data["bank_summary"]);
        if (data["sales_transactions"])
            this.setSalesTransactions(data["sales_transactions"]);
        if (data["sales_volume"])
            this.setSalesVolume(data["sales_volume"]);
        if (data["refunds_transactions"])
            this.setRefundsTransactions(data["refunds_transactions"]);
        if (data["refunds_volume"])
            this.setRefundsVolume(data["refunds_volume"]);
        if (data["chargebacks_transactions"])
            this.setChargebacksTransactions(data["chargebacks_transactions"]);
        if (data["chargebacks_volume"])
            this.setChargebacksVolume(data["chargebacks_volume"]);
        if (data["fees"])
            this.setFees(data["fees"]);
        if (data["adjustments"])
            this.setAdjustments(data["adjustments"]);
        if (data["reserve"])
            this.setReserve(data["reserve"]);
        if (data["settled_at"])
            this.setSettledAt(data["settled_at"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Payout.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "status": this.getStatus(),
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "metadata": this.getMetadata(),
            "bank_name": this.getBankName(),
            "bank_summary": this.getBankSummary(),
            "sales_transactions": this.getSalesTransactions(),
            "sales_volume": this.getSalesVolume(),
            "refunds_transactions": this.getRefundsTransactions(),
            "refunds_volume": this.getRefundsVolume(),
            "chargebacks_transactions": this.getChargebacksTransactions(),
            "chargebacks_volume": this.getChargebacksVolume(),
            "fees": this.getFees(),
            "adjustments": this.getAdjustments(),
            "reserve": this.getReserve(),
            "settled_at": this.getSettledAt(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get all the items linked to the payout.

     * @param {any} options
     * @return {Promise<any>}
     */
    Payout.prototype.fetchItems = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/payouts/" + encodeURI(this.getId()) + "/items";
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
                                body = respBody['items'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newPayoutItem();
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
     * Get all the payouts.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Payout.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/payouts";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, a, body, i, tmp;
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
                                a = [];
                                body = respBody['payouts'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newPayout();
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
     * Find a payout by its ID.
     * @param string payoutId
     * @param {any} options
     * @return {Promise<any>}
     */
    Payout.prototype.find = function (payoutId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/payouts/" + encodeURI(payoutId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues, body;
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
                                body = respBody;
                                body = body['payout'];
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
    return Payout;
}());
module.exports = Payout;
//# sourceMappingURL=payout.js.map