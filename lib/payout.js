"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
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
         * @type {any}
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
     * @return {any}
     */
    Payout.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the payout belongs
     * @param {any} val
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
     * Get all the items linked to the payout.

     * @param {any} options
     * @return {array}
     */
    Payout.prototype.fetchItems = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/payouts/" + encodeURI(this.getId()) + "/items";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['items'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newPayoutItem();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Get all the payouts.
     *
     * @param {any} options
     * @return {array}
     */
    Payout.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/payouts";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['payouts'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newPayout();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    /**
     * Find a payout by its ID.
     * @param string payoutId
     * @param {any} options
     * @return {this}
     */
    Payout.prototype.find = function (payoutId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/payouts/" + encodeURI(payoutId) + "";
        var data = {};
        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function (resolve, reject) {
            req.on('complete', function (result, r) {
                if (result instanceof Error)
                    return reject(result);
                var response = new Response(result, r);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['payout'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            }).on('timeout', function (ms) {
                reject("request timeout after " + ms + "ms");
            });
        });
    };
    return Payout;
}());
module.exports = Payout;
//# sourceMappingURL=payout.js.map