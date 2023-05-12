"use strict";
// The content of this file was automatically generated
var InvoiceBilling = /** @class */ (function () {
    /**
     * InvoiceBilling constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceBilling(client, prefill) {
        this.client = null;
        /**
         * Address of the cardholder
         * @type {string}
         */
        this.address1 = null;
        /**
         * Secondary address of the cardholder
         * @type {string}
         */
        this.address2 = null;
        /**
         * City of the cardholder
         * @type {string}
         */
        this.city = null;
        /**
         * State of the cardholder
         * @type {string}
         */
        this.state = null;
        /**
         * Country code of the cardholder
         * @type {string}
         */
        this.countryCode = null;
        /**
         * ZIP of the cardholder
         * @type {string}
         */
        this.zip = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceBilling object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceBilling()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceBilling.prototype.getProcessOutObjectClass = function () {
        return "InvoiceBilling";
    };
    /**
     * Get Address1
     * Address of the cardholder
     * @return {string}
     */
    InvoiceBilling.prototype.getAddress1 = function () {
        return this.address1;
    };
    /**
     * Set Address1
     * Address of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.setAddress1 = function (val) {
        this.address1 = val;
        return this;
    };
    /**
     * Get Address2
     * Secondary address of the cardholder
     * @return {string}
     */
    InvoiceBilling.prototype.getAddress2 = function () {
        return this.address2;
    };
    /**
     * Set Address2
     * Secondary address of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.setAddress2 = function (val) {
        this.address2 = val;
        return this;
    };
    /**
     * Get City
     * City of the cardholder
     * @return {string}
     */
    InvoiceBilling.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State of the cardholder
     * @return {string}
     */
    InvoiceBilling.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code of the cardholder
     * @return {string}
     */
    InvoiceBilling.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP of the cardholder
     * @return {string}
     */
    InvoiceBilling.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceBilling}
     */
    InvoiceBilling.prototype.fillWithData = function (data) {
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
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoiceBilling.prototype.toJSON = function () {
        return {
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
        };
    };
    return InvoiceBilling;
}());
module.exports = InvoiceBilling;
//# sourceMappingURL=invoicebilling.js.map