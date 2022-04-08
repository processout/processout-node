"use strict";
// The content of this file was automatically generated
var InvoiceDetail = /** @class */ (function () {
    /**
     * InvoiceDetail constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceDetail(client, prefill) {
        this.client = null;
        /**
         * ID of the invoice detail
         * @type {string}
         */
        this.id = null;
        /**
         * Name of the invoice detail
         * @type {string}
         */
        this.name = null;
        /**
         * Type of the invoice detail. Can be a string containing anything, up to 30 characters
         * @type {string}
         */
        this.type = null;
        /**
         * Amount represented by the invoice detail
         * @type {string}
         */
        this.amount = null;
        /**
         * Quantity of items represented by the invoice detail
         * @type {number}
         */
        this.quantity = null;
        /**
         * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Reference of the product
         * @type {string}
         */
        this.reference = null;
        /**
         * Description of the invoice detail
         * @type {string}
         */
        this.description = null;
        /**
         * Brand of the product
         * @type {string}
         */
        this.brand = null;
        /**
         * Model of the product
         * @type {string}
         */
        this.model = null;
        /**
         * Discount amount represented by the invoice detail
         * @type {string}
         */
        this.discountAmount = null;
        /**
         * Condition of the product
         * @type {string}
         */
        this.condition = null;
        /**
         * Marketplace merchant of the invoice detail
         * @type {string}
         */
        this.marketplaceMerchant = null;
        /**
         * Define whether or not the marketplace merchant is a business
         * @type {boolean}
         */
        this.marketplaceMerchantIsBusiness = null;
        /**
         * Date at which the merchant was created
         * @type {string}
         */
        this.marketplaceMerchantCreatedAt = null;
        /**
         * Category of the product
         * @type {string}
         */
        this.category = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceDetail object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceDetail()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceDetail.prototype.getProcessOutObjectClass = function () {
        return "InvoiceDetail";
    };
    /**
     * Get Id
     * ID of the invoice detail
     * @return {string}
     */
    InvoiceDetail.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Name
     * Name of the invoice detail
     * @return {string}
     */
    InvoiceDetail.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @return {string}
     */
    InvoiceDetail.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the invoice detail. Can be a string containing anything, up to 30 characters
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get Amount
     * Amount represented by the invoice detail
     * @return {string}
     */
    InvoiceDetail.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Quantity
     * Quantity of items represented by the invoice detail
     * @return {number}
     */
    InvoiceDetail.prototype.getQuantity = function () {
        return this.quantity;
    };
    /**
     * Set Quantity
     * Quantity of items represented by the invoice detail
     * @param {number} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setQuantity = function (val) {
        this.quantity = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    InvoiceDetail.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the invoice detail, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Reference
     * Reference of the product
     * @return {string}
     */
    InvoiceDetail.prototype.getReference = function () {
        return this.reference;
    };
    /**
     * Set Reference
     * Reference of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setReference = function (val) {
        this.reference = val;
        return this;
    };
    /**
     * Get Description
     * Description of the invoice detail
     * @return {string}
     */
    InvoiceDetail.prototype.getDescription = function () {
        return this.description;
    };
    /**
     * Set Description
     * Description of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setDescription = function (val) {
        this.description = val;
        return this;
    };
    /**
     * Get Brand
     * Brand of the product
     * @return {string}
     */
    InvoiceDetail.prototype.getBrand = function () {
        return this.brand;
    };
    /**
     * Set Brand
     * Brand of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setBrand = function (val) {
        this.brand = val;
        return this;
    };
    /**
     * Get Model
     * Model of the product
     * @return {string}
     */
    InvoiceDetail.prototype.getModel = function () {
        return this.model;
    };
    /**
     * Set Model
     * Model of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setModel = function (val) {
        this.model = val;
        return this;
    };
    /**
     * Get DiscountAmount
     * Discount amount represented by the invoice detail
     * @return {string}
     */
    InvoiceDetail.prototype.getDiscountAmount = function () {
        return this.discountAmount;
    };
    /**
     * Set DiscountAmount
     * Discount amount represented by the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setDiscountAmount = function (val) {
        this.discountAmount = val;
        return this;
    };
    /**
     * Get Condition
     * Condition of the product
     * @return {string}
     */
    InvoiceDetail.prototype.getCondition = function () {
        return this.condition;
    };
    /**
     * Set Condition
     * Condition of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setCondition = function (val) {
        this.condition = val;
        return this;
    };
    /**
     * Get MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @return {string}
     */
    InvoiceDetail.prototype.getMarketplaceMerchant = function () {
        return this.marketplaceMerchant;
    };
    /**
     * Set MarketplaceMerchant
     * Marketplace merchant of the invoice detail
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setMarketplaceMerchant = function (val) {
        this.marketplaceMerchant = val;
        return this;
    };
    /**
     * Get MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @return {boolean}
     */
    InvoiceDetail.prototype.getMarketplaceMerchantIsBusiness = function () {
        return this.marketplaceMerchantIsBusiness;
    };
    /**
     * Set MarketplaceMerchantIsBusiness
     * Define whether or not the marketplace merchant is a business
     * @param {boolean} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setMarketplaceMerchantIsBusiness = function (val) {
        this.marketplaceMerchantIsBusiness = val;
        return this;
    };
    /**
     * Get MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @return {string}
     */
    InvoiceDetail.prototype.getMarketplaceMerchantCreatedAt = function () {
        return this.marketplaceMerchantCreatedAt;
    };
    /**
     * Set MarketplaceMerchantCreatedAt
     * Date at which the merchant was created
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setMarketplaceMerchantCreatedAt = function (val) {
        this.marketplaceMerchantCreatedAt = val;
        return this;
    };
    /**
     * Get Category
     * Category of the product
     * @return {string}
     */
    InvoiceDetail.prototype.getCategory = function () {
        return this.category;
    };
    /**
     * Set Category
     * Category of the product
     * @param {string} val
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.setCategory = function (val) {
        this.category = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceDetail}
     */
    InvoiceDetail.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
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
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoiceDetail.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "name": this.getName(),
            "type": this.getType(),
            "amount": this.getAmount(),
            "quantity": this.getQuantity(),
            "metadata": this.getMetadata(),
            "reference": this.getReference(),
            "description": this.getDescription(),
            "brand": this.getBrand(),
            "model": this.getModel(),
            "discount_amount": this.getDiscountAmount(),
            "condition": this.getCondition(),
            "marketplace_merchant": this.getMarketplaceMerchant(),
            "marketplace_merchant_is_business": this.getMarketplaceMerchantIsBusiness(),
            "marketplace_merchant_created_at": this.getMarketplaceMerchantCreatedAt(),
            "category": this.getCategory(),
        };
    };
    return InvoiceDetail;
}());
module.exports = InvoiceDetail;
//# sourceMappingURL=invoicedetail.js.map