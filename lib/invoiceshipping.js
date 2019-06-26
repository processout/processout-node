"use strict";
// The content of this file was automatically generated
var InvoiceShipping = /** @class */ (function () {
    /**
     * InvoiceShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceShipping(client, prefill) {
        this.client = null;
        /**
         * Amount of the shipping
         * @type {string}
         */
        this.amount = null;
        /**
         * Delivery method
         * @type {string}
         */
        this.method = null;
        /**
         * Delivery provider
         * @type {string}
         */
        this.provider = null;
        /**
         * Shipping delay
         * @type {string}
         */
        this.delay = null;
        /**
         * Address where the shipment will be delivered
         * @type {string}
         */
        this.address1 = null;
        /**
         * Secondary address where the shipment will be delivered
         * @type {string}
         */
        this.address2 = null;
        /**
         * City where the shipment will be delivered
         * @type {string}
         */
        this.city = null;
        /**
         * State where the shipment will be delivered
         * @type {string}
         */
        this.state = null;
        /**
         * Country code where the shipment will be delivered
         * @type {string}
         */
        this.countryCode = null;
        /**
         * ZIP where the shipment will be delivered
         * @type {string}
         */
        this.zip = null;
        /**
         * Phone number for the shipment
         * @type {string}
         */
        this.phoneNumber = null;
        /**
         * Date at which the shipment is expected to be sent
         * @type {string}
         */
        this.expectsShippingAt = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceShipping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceShipping()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceShipping.prototype.getProcessOutObjectClass = function () {
        return "InvoiceShipping";
    };
    /**
     * Get Amount
     * Amount of the shipping
     * @return {string}
     */
    InvoiceShipping.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the shipping
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Method
     * Delivery method
     * @return {string}
     */
    InvoiceShipping.prototype.getMethod = function () {
        return this.method;
    };
    /**
     * Set Method
     * Delivery method
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setMethod = function (val) {
        this.method = val;
        return this;
    };
    /**
     * Get Provider
     * Delivery provider
     * @return {string}
     */
    InvoiceShipping.prototype.getProvider = function () {
        return this.provider;
    };
    /**
     * Set Provider
     * Delivery provider
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setProvider = function (val) {
        this.provider = val;
        return this;
    };
    /**
     * Get Delay
     * Shipping delay
     * @return {string}
     */
    InvoiceShipping.prototype.getDelay = function () {
        return this.delay;
    };
    /**
     * Set Delay
     * Shipping delay
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setDelay = function (val) {
        this.delay = val;
        return this;
    };
    /**
     * Get Address1
     * Address where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getAddress1 = function () {
        return this.address1;
    };
    /**
     * Set Address1
     * Address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setAddress1 = function (val) {
        this.address1 = val;
        return this;
    };
    /**
     * Get Address2
     * Secondary address where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getAddress2 = function () {
        return this.address2;
    };
    /**
     * Set Address2
     * Secondary address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setAddress2 = function (val) {
        this.address2 = val;
        return this;
    };
    /**
     * Get City
     * City where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP where the shipment will be delivered
     * @return {string}
     */
    InvoiceShipping.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Get PhoneNumber
     * Phone number for the shipment
     * @return {string}
     */
    InvoiceShipping.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    /**
     * Set PhoneNumber
     * Phone number for the shipment
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setPhoneNumber = function (val) {
        this.phoneNumber = val;
        return this;
    };
    /**
     * Get ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @return {string}
     */
    InvoiceShipping.prototype.getExpectsShippingAt = function () {
        return this.expectsShippingAt;
    };
    /**
     * Set ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @param {string} val
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.setExpectsShippingAt = function (val) {
        this.expectsShippingAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShipping}
     */
    InvoiceShipping.prototype.fillWithData = function (data) {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["method"])
            this.setMethod(data["method"]);
        if (data["provider"])
            this.setProvider(data["provider"]);
        if (data["delay"])
            this.setDelay(data["delay"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["expects_shipping_at"])
            this.setExpectsShippingAt(data["expects_shipping_at"]);
        return this;
    };
    return InvoiceShipping;
}());
module.exports = InvoiceShipping;
