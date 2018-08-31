'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Payout = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the payout
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the payout belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the payout belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Status of the payout
     * @type {string}
     */
    _status: null,

    /**
     * Amount of the payout
     * @type {decimal}
     */
    _amount: null,

    /**
     * Currency of the payout
     * @type {string}
     */
    _currency: null,

    /**
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Name of the bank to which the payout was issued, if available
     * @type {string}
     */
    _bankName: null,

    /**
     * Summary of the bank to which the payout was issued, if available
     * @type {string}
     */
    _bankSummary: null,

    /**
     * Number of completed transactions linked to the payout, if available
     * @type {integer}
     */
    _salesTransactions: null,

    /**
     * Volume of completed transactions linked to the payout, if available
     * @type {decimal}
     */
    _salesVolume: null,

    /**
     * Number of refunded transactions linked to the payout, if available
     * @type {integer}
     */
    _refundsTransactions: null,

    /**
     * Volume of refunded transactions linked to the payout, if available
     * @type {decimal}
     */
    _refundsVolume: null,

    /**
     * Number of chargebacked transactions linked to the payout, if available
     * @type {integer}
     */
    _chargebacksTransactions: null,

    /**
     * Volume of chargebacked transactions linked to the payout, if available
     * @type {decimal}
     */
    _chargebacksVolume: null,

    /**
     * Fees linked to the payout, if available
     * @type {decimal}
     */
    _fees: null,

    /**
     * Adjustments linked to the payout, if available
     * @type {decimal}
     */
    _adjustments: null,

    /**
     * Reserve kept on the payout, if available
     * @type {decimal}
     */
    _reserve: null,

    /**
     * Date at which the payout was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Payout constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Payout object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayout()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the payout
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the payout
     * @param {string} val
     * @return {Payout}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the payout belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the payout belongs
     * @param {object} val
     * @return {Payout}
     */
    setProject: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newProject().getClass())
            this._project = val;
        else {
            var obj = this._client.newProject();
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get ProjectId
     * ID of the project to which the payout belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the payout belongs
     * @param {string} val
     * @return {Payout}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Status
     * Status of the payout
     * @return {string}
     */
    getStatus: function() {
        return this._status;
    },

    /**
     * Set Status
     * Status of the payout
     * @param {string} val
     * @return {Payout}
     */
    setStatus: function(val) {
        this._status = val;
        return this;
    },

    /**
     * Get Amount
     * Amount of the payout
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount of the payout
     * @param {string} val
     * @return {Payout}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the payout
     * @return {string}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the payout
     * @param {string} val
     * @return {Payout}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the payout, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Payout}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get BankName
     * Name of the bank to which the payout was issued, if available
     * @return {string}
     */
    getBankName: function() {
        return this._bankName;
    },

    /**
     * Set BankName
     * Name of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    setBankName: function(val) {
        this._bankName = val;
        return this;
    },

    /**
     * Get BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @return {string}
     */
    getBankSummary: function() {
        return this._bankSummary;
    },

    /**
     * Set BankSummary
     * Summary of the bank to which the payout was issued, if available
     * @param {string} val
     * @return {Payout}
     */
    setBankSummary: function(val) {
        this._bankSummary = val;
        return this;
    },

    /**
     * Get SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @return {int}
     */
    getSalesTransactions: function() {
        return this._salesTransactions;
    },

    /**
     * Set SalesTransactions
     * Number of completed transactions linked to the payout, if available
     * @param {int} val
     * @return {Payout}
     */
    setSalesTransactions: function(val) {
        this._salesTransactions = val;
        return this;
    },

    /**
     * Get SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @return {string}
     */
    getSalesVolume: function() {
        return this._salesVolume;
    },

    /**
     * Set SalesVolume
     * Volume of completed transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setSalesVolume: function(val) {
        this._salesVolume = val;
        return this;
    },

    /**
     * Get RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @return {int}
     */
    getRefundsTransactions: function() {
        return this._refundsTransactions;
    },

    /**
     * Set RefundsTransactions
     * Number of refunded transactions linked to the payout, if available
     * @param {int} val
     * @return {Payout}
     */
    setRefundsTransactions: function(val) {
        this._refundsTransactions = val;
        return this;
    },

    /**
     * Get RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @return {string}
     */
    getRefundsVolume: function() {
        return this._refundsVolume;
    },

    /**
     * Set RefundsVolume
     * Volume of refunded transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setRefundsVolume: function(val) {
        this._refundsVolume = val;
        return this;
    },

    /**
     * Get ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @return {int}
     */
    getChargebacksTransactions: function() {
        return this._chargebacksTransactions;
    },

    /**
     * Set ChargebacksTransactions
     * Number of chargebacked transactions linked to the payout, if available
     * @param {int} val
     * @return {Payout}
     */
    setChargebacksTransactions: function(val) {
        this._chargebacksTransactions = val;
        return this;
    },

    /**
     * Get ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @return {string}
     */
    getChargebacksVolume: function() {
        return this._chargebacksVolume;
    },

    /**
     * Set ChargebacksVolume
     * Volume of chargebacked transactions linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setChargebacksVolume: function(val) {
        this._chargebacksVolume = val;
        return this;
    },

    /**
     * Get Fees
     * Fees linked to the payout, if available
     * @return {string}
     */
    getFees: function() {
        return this._fees;
    },

    /**
     * Set Fees
     * Fees linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setFees: function(val) {
        this._fees = val;
        return this;
    },

    /**
     * Get Adjustments
     * Adjustments linked to the payout, if available
     * @return {string}
     */
    getAdjustments: function() {
        return this._adjustments;
    },

    /**
     * Set Adjustments
     * Adjustments linked to the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setAdjustments: function(val) {
        this._adjustments = val;
        return this;
    },

    /**
     * Get Reserve
     * Reserve kept on the payout, if available
     * @return {string}
     */
    getReserve: function() {
        return this._reserve;
    },

    /**
     * Set Reserve
     * Reserve kept on the payout, if available
     * @param {string} val
     * @return {Payout}
     */
    setReserve: function(val) {
        this._reserve = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the payout was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the payout was created
     * @param {string} val
     * @return {Payout}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Payout}
     */
    fillWithData: function(data) {
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
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get all the items linked to the payout.

     * @param {object} options
     * @return {array}
     */
    fetchItems: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/payouts/" + encodeURI(this.getId()) + "/items";

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
                var body = response.body['items'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newPayoutItem();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the payouts.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/payouts";

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
                var body = response.body['payouts'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newPayout();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a payout by its ID.
	 * @param string payoutId
     * @param {object} options
     * @return {this}
     */
    find: function(payoutId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/payouts/" + encodeURI(payoutId) + "";

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
                body = body['payout'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
