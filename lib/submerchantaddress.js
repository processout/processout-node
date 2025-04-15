"use strict";
// The content of this file was automatically generated
var SubmerchantAddress = /** @class */ (function () {
    /**
     * SubmerchantAddress constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function SubmerchantAddress(client, prefill) {
        this.client = null;
        /**
         * Address line 1
         * @type {string}
         */
        this.line1 = null;
        /**
         * Address line 2
         * @type {string}
         */
        this.line2 = null;
        /**
         * City
         * @type {string}
         */
        this.city = null;
        /**
         * State
         * @type {string}
         */
        this.state = null;
        /**
         * Country code
         * @type {string}
         */
        this.countryCode = null;
        /**
         * ZIP code
         * @type {string}
         */
        this.zip = null;
        /**
         * County (US specific)
         * @type {string}
         */
        this.county = null;
        if (typeof client === 'undefined')
            throw new Error("The SubmerchantAddress object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchantAddress()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    SubmerchantAddress.prototype.getProcessOutObjectClass = function () {
        return "SubmerchantAddress";
    };
    /**
     * Get Line1
     * Address line 1
     * @return {string}
     */
    SubmerchantAddress.prototype.getLine1 = function () {
        return this.line1;
    };
    /**
     * Set Line1
     * Address line 1
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setLine1 = function (val) {
        this.line1 = val;
        return this;
    };
    /**
     * Get Line2
     * Address line 2
     * @return {string}
     */
    SubmerchantAddress.prototype.getLine2 = function () {
        return this.line2;
    };
    /**
     * Set Line2
     * Address line 2
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setLine2 = function (val) {
        this.line2 = val;
        return this;
    };
    /**
     * Get City
     * City
     * @return {string}
     */
    SubmerchantAddress.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State
     * @return {string}
     */
    SubmerchantAddress.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code
     * @return {string}
     */
    SubmerchantAddress.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP code
     * @return {string}
     */
    SubmerchantAddress.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP code
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Get County
     * County (US specific)
     * @return {string}
     */
    SubmerchantAddress.prototype.getCounty = function () {
        return this.county;
    };
    /**
     * Set County
     * County (US specific)
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.setCounty = function (val) {
        this.county = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantAddress}
     */
    SubmerchantAddress.prototype.fillWithData = function (data) {
        if (data["line1"])
            this.setLine1(data["line1"]);
        if (data["line2"])
            this.setLine2(data["line2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["county"])
            this.setCounty(data["county"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    SubmerchantAddress.prototype.toJSON = function () {
        return {
            "line1": this.getLine1(),
            "line2": this.getLine2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
            "county": this.getCounty(),
        };
    };
    return SubmerchantAddress;
}());
module.exports = SubmerchantAddress;
//# sourceMappingURL=submerchantaddress.js.map