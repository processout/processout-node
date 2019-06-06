'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var InvoiceDetail = module.exports = Base.extend({
    _client: null,

    /**
     * Name of the invoice detail
     * @type {string}
     */
    _name: null,

    /**
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @type {string}
     */
    _type: null,

    /**
     * Amount represented by the invoice detail
     * @type {decimal}
     */
    _amount: null,

    /**
     * Quantity of items represented by the invoice detail
     * @type {integer}
     */
    _quantity: null,

    /**
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Reference of the product
     * @type {string}
     */
    _reference: null,

    /**
     * Description of the invoice detail
     * @type {string}
     */
    _description: null,

    /**
     * Brand of the product
     * @type {string}
     */
    _brand: null,

    /**
     * Model of the product
     * @type {string}
     */
    _model: null,

    /**
     * Discount amount represented by the invoice detail
     * @type {decimal}
     */
    _discountAmount: null,

    /**
     * Condition of the product
     * @type {string}
     */
    _condition: null,

    /**
     * Marketplace merchant of the invoice detail
     * @type {string}
     */
    _marketplaceMerchant: null,

    /**
     * Define whether or not the marketplace merchant is a business
     * @type {boolean}
     */
    _marketplaceMerchantIsBusiness: null,

    /**
     * Date at which the merchant was created
     * @type {string}
     */
    _marketplaceMerchantCreatedAt: null,

    /**
     * Category of the product
     * @type {string}
     */
    _category: null,

    /**
     * InvoiceDetail constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDetail object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDetail()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Name
     * Name of the invoice detail
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @return {string}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Amount
     * Amount represented by the invoice detail
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Quantity
     * Quantity of items represented by the invoice detail
     * @return {int}
     */
    getQuantity: function() {
        return this._quantity;
    },

    /**
     * Set Quantity
     * Quantity of items represented by the invoice detail
     * @param {int} val
     * @return {InvoiceDetail}
     */
    setQuantity: function(val) {
        this._quantity = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {InvoiceDetail}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Reference
     * Reference of the product
     * @return {string}
     */
    getReference: function() {
        return this._reference;
    },

    /**
     * Set Reference
     * Reference of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setReference: function(val) {
        this._reference = val;
        return this;
    },

    /**
     * Get Description
     * Description of the invoice detail
     * @return {string}
     */
    getDescription: function() {
        return this._description;
    },

    /**
     * Set Description
     * Description of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setDescription: function(val) {
        this._description = val;
        return this;
    },

    /**
     * Get Brand
     * Brand of the product
     * @return {string}
     */
    getBrand: function() {
        return this._brand;
    },

    /**
     * Set Brand
     * Brand of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setBrand: function(val) {
        this._brand = val;
        return this;
    },

    /**
     * Get Model
     * Model of the product
     * @return {string}
     */
    getModel: function() {
        return this._model;
    },

    /**
     * Set Model
     * Model of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setModel: function(val) {
        this._model = val;
        return this;
    },

    /**
     * Get DiscountAmount
     * Discount amount represented by the invoice detail
     * @return {string}
     */
    getDiscountAmount: function() {
        return this._discountAmount;
    },

    /**
     * Set DiscountAmount
     * Discount amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setDiscountAmount: function(val) {
        this._discountAmount = val;
        return this;
    },

    /**
     * Get Condition
     * Condition of the product
     * @return {string}
     */
    getCondition: function() {
        return this._condition;
    },

    /**
     * Set Condition
     * Condition of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setCondition: function(val) {
        this._condition = val;
        return this;
    },

    /**
     * Get MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @return {string}
     */
    getMarketplaceMerchant: function() {
        return this._marketplaceMerchant;
    },

    /**
     * Set MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setMarketplaceMerchant: function(val) {
        this._marketplaceMerchant = val;
        return this;
    },

    /**
     * Get MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @return {bool}
     */
    getMarketplaceMerchantIsBusiness: function() {
        return this._marketplaceMerchantIsBusiness;
    },

    /**
     * Set MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @param {bool} val
     * @return {InvoiceDetail}
     */
    setMarketplaceMerchantIsBusiness: function(val) {
        this._marketplaceMerchantIsBusiness = val;
        return this;
    },

    /**
     * Get MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @return {string}
     */
    getMarketplaceMerchantCreatedAt: function() {
        return this._marketplaceMerchantCreatedAt;
    },

    /**
     * Set MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setMarketplaceMerchantCreatedAt: function(val) {
        this._marketplaceMerchantCreatedAt = val;
        return this;
    },

    /**
     * Get Category
     * Category of the product
     * @return {string}
     */
    getCategory: function() {
        return this._category;
    },

    /**
     * Set Category
     * Category of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    setCategory: function(val) {
        this._category = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDetail}
     */
    fillWithData: function(data) {
        if (data["name"])
            this.setName(data["name"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["quantity"])
            this.setQuantity(data["quantity"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["reference"])
            this.setReference(data["reference"]);
        if (data["description"])
            this.setDescription(data["description"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["model"])
            this.setModel(data["model"]);
        if (data["discount_amount"])
            this.setDiscountAmount(data["discount_amount"]);
        if (data["condition"])
            this.setCondition(data["condition"]);
        if (data["marketplace_merchant"])
            this.setMarketplaceMerchant(data["marketplace_merchant"]);
        if (data["marketplace_merchant_is_business"])
            this.setMarketplaceMerchantIsBusiness(data["marketplace_merchant_is_business"]);
        if (data["marketplace_merchant_created_at"])
            this.setMarketplaceMerchantCreatedAt(data["marketplace_merchant_created_at"]);
        if (data["category"])
            this.setCategory(data["category"]);
        return this;
    },

    
}, {});
