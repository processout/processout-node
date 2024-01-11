"use strict";
// The content of this file was automatically generated
var CategoryErrorCodes = /** @class */ (function () {
    /**
     * CategoryErrorCodes constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CategoryErrorCodes(client, prefill) {
        this.client = null;
        /**
         * Generic error codes.
         * @type {any}
         */
        this.generic = null;
        /**
         * Service related error codes.
         * @type {any}
         */
        this.service = null;
        /**
         * Gateway related error codes.
         * @type {any}
         */
        this.gateway = null;
        /**
         * Card related error codes.
         * @type {any}
         */
        this.card = null;
        /**
         * Check related error codes.
         * @type {any}
         */
        this.check = null;
        /**
         * Shipping related error codes.
         * @type {any}
         */
        this.shipping = null;
        /**
         * Customer related error codes.
         * @type {any}
         */
        this.customer = null;
        /**
         * Payment related error codes.
         * @type {any}
         */
        this.payment = null;
        /**
         * Refund related error codes.
         * @type {any}
         */
        this.refund = null;
        /**
         * Wallet related error codes.
         * @type {any}
         */
        this.wallet = null;
        /**
         * Request related error codes.
         * @type {any}
         */
        this.request = null;
        if (typeof client === 'undefined')
            throw new Error("The CategoryErrorCodes object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCategoryErrorCodes()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CategoryErrorCodes.prototype.getProcessOutObjectClass = function () {
        return "CategoryErrorCodes";
    };
    /**
     * Get Generic
     * Generic error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getGeneric = function () {
        return this.generic;
    };
    /**
     * Set Generic
     * Generic error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setGeneric = function (val) {
        this.generic = val;
        return this;
    };
    /**
     * Get Service
     * Service related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getService = function () {
        return this.service;
    };
    /**
     * Set Service
     * Service related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setService = function (val) {
        this.service = val;
        return this;
    };
    /**
     * Get Gateway
     * Gateway related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getGateway = function () {
        return this.gateway;
    };
    /**
     * Set Gateway
     * Gateway related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setGateway = function (val) {
        this.gateway = val;
        return this;
    };
    /**
     * Get Card
     * Card related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getCard = function () {
        return this.card;
    };
    /**
     * Set Card
     * Card related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setCard = function (val) {
        this.card = val;
        return this;
    };
    /**
     * Get Check
     * Check related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getCheck = function () {
        return this.check;
    };
    /**
     * Set Check
     * Check related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setCheck = function (val) {
        this.check = val;
        return this;
    };
    /**
     * Get Shipping
     * Shipping related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getShipping = function () {
        return this.shipping;
    };
    /**
     * Set Shipping
     * Shipping related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setShipping = function (val) {
        this.shipping = val;
        return this;
    };
    /**
     * Get Customer
     * Customer related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getCustomer = function () {
        return this.customer;
    };
    /**
     * Set Customer
     * Customer related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setCustomer = function (val) {
        this.customer = val;
        return this;
    };
    /**
     * Get Payment
     * Payment related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getPayment = function () {
        return this.payment;
    };
    /**
     * Set Payment
     * Payment related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setPayment = function (val) {
        this.payment = val;
        return this;
    };
    /**
     * Get Refund
     * Refund related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getRefund = function () {
        return this.refund;
    };
    /**
     * Set Refund
     * Refund related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setRefund = function (val) {
        this.refund = val;
        return this;
    };
    /**
     * Get Wallet
     * Wallet related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getWallet = function () {
        return this.wallet;
    };
    /**
     * Set Wallet
     * Wallet related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setWallet = function (val) {
        this.wallet = val;
        return this;
    };
    /**
     * Get Request
     * Request related error codes.
     * @return {any}
     */
    CategoryErrorCodes.prototype.getRequest = function () {
        return this.request;
    };
    /**
     * Set Request
     * Request related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.setRequest = function (val) {
        this.request = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CategoryErrorCodes}
     */
    CategoryErrorCodes.prototype.fillWithData = function (data) {
        if (data["generic"])
            this.setGeneric(data["generic"]);
        if (data["service"])
            this.setService(data["service"]);
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["check"])
            this.setCheck(data["check"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["payment"])
            this.setPayment(data["payment"]);
        if (data["refund"])
            this.setRefund(data["refund"]);
        if (data["wallet"])
            this.setWallet(data["wallet"]);
        if (data["request"])
            this.setRequest(data["request"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CategoryErrorCodes.prototype.toJSON = function () {
        return {
            "generic": this.getGeneric(),
            "service": this.getService(),
            "gateway": this.getGateway(),
            "card": this.getCard(),
            "check": this.getCheck(),
            "shipping": this.getShipping(),
            "customer": this.getCustomer(),
            "payment": this.getPayment(),
            "refund": this.getRefund(),
            "wallet": this.getWallet(),
            "request": this.getRequest(),
        };
    };
    return CategoryErrorCodes;
}());
module.exports = CategoryErrorCodes;
//# sourceMappingURL=categoryerrorcodes.js.map