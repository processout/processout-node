'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var PayoutItem = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the payout item
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the payout item belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the payout item belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Payout to which the item belongs
     * @type {object}
     */
    _payout: null,

    /**
     * ID of the payout to which the item belongs
     * @type {string}
     */
    _payoutId: null,

    /**
     * Transaction linked to this payout item. Can be null
     * @type {object}
     */
    _transaction: null,

    /**
     * ID of the transaction linked to this payout item. Can be null
     * @type {string}
     */
    _transactionId: null,

    /**
     * Type of the payout item
     * @type {string}
     */
    _type: null,

    /**
     * ID of the payout item from the payment gateway
     * @type {string}
     */
    _gatewayResourceId: null,

    /**
     * Amount related to this specific payout item. Can be null or 0.
     * @type {decimal}
     */
    _amount: null,

    /**
     * Fee linked to this specific payout item. Can be null or 0.
     * @type {decimal}
     */
    _fees: null,

    /**
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Date at which the payout item was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * PayoutItem constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The PayoutItem object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayoutItem()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the payout item
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the payout item belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the payout item belongs
     * @param {object} val
     * @return {PayoutItem}
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
     * ID of the project to which the payout item belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the payout item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Payout
     * Payout to which the item belongs
     * @return {object}
     */
    getPayout: function() {
        return this._payout;
    },

    /**
     * Set Payout
     * Payout to which the item belongs
     * @param {object} val
     * @return {PayoutItem}
     */
    setPayout: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newPayout().getClass())
            this._payout = val;
        else {
            var obj = this._client.newPayout();
            obj.fillWithData(val);
            this._payout = obj;
        }
        return this;
    },

    /**
     * Get PayoutId
     * ID of the payout to which the item belongs
     * @return {string}
     */
    getPayoutId: function() {
        return this._payoutId;
    },

    /**
     * Set PayoutId
     * ID of the payout to which the item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    setPayoutId: function(val) {
        this._payoutId = val;
        return this;
    },

    /**
     * Get Transaction
     * Transaction linked to this payout item. Can be null
     * @return {object}
     */
    getTransaction: function() {
        return this._transaction;
    },

    /**
     * Set Transaction
     * Transaction linked to this payout item. Can be null
     * @param {object} val
     * @return {PayoutItem}
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
     * ID of the transaction linked to this payout item. Can be null
     * @return {string}
     */
    getTransactionId: function() {
        return this._transactionId;
    },

    /**
     * Set TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @param {string} val
     * @return {PayoutItem}
     */
    setTransactionId: function(val) {
        this._transactionId = val;
        return this;
    },

    /**
     * Get Type
     * Type of the payout item
     * @return {string}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get GatewayResourceId
     * ID of the payout item from the payment gateway
     * @return {string}
     */
    getGatewayResourceId: function() {
        return this._gatewayResourceId;
    },

    /**
     * Set GatewayResourceId
     * ID of the payout item from the payment gateway
     * @param {string} val
     * @return {PayoutItem}
     */
    setGatewayResourceId: function(val) {
        this._gatewayResourceId = val;
        return this;
    },

    /**
     * Get Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @return {string}
     */
    getFees: function() {
        return this._fees;
    },

    /**
     * Set Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    setFees: function(val) {
        this._fees = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {PayoutItem}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the payout item was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the payout item was created
     * @param {string} val
     * @return {PayoutItem}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItem}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["payout"])
            this.setPayout(data["payout"]);
        if (data["payout_id"])
            this.setPayoutId(data["payout_id"]);
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["gateway_resource_id"])
            this.setGatewayResourceId(data["gateway_resource_id"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["fees"])
            this.setFees(data["fees"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    
}, {});
