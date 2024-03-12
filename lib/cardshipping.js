"use strict";
// The content of this file was automatically generated
var CardShipping = /** @class */ (function () {
    /**
     * CardShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CardShipping(client, prefill) {
        this.client = null;
        /**
         * Address line of the card holder
         * @type {string}
         */
        this.address1 = null;
        /**
         * Secondary address line of the card holder
         * @type {string}
         */
        this.address2 = null;
        /**
         * City of the card holder
         * @type {string}
         */
        this.city = null;
        /**
         * State of the card holder
         * @type {string}
         */
        this.state = null;
        /**
         * Country code of the card holder (ISO-3166, 2 characters format)
         * @type {string}
         */
        this.countryCode = null;
        /**
         * ZIP code of the card holder
         * @type {string}
         */
        this.zip = null;
        /**
         * Shipping phone number
         * @type {p.Phone}
         */
        this.phone = null;
        if (typeof client === 'undefined')
            throw new Error("The CardShipping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardShipping()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CardShipping.prototype.getProcessOutObjectClass = function () {
        return "CardShipping";
    };
    /**
     * Get Address1
     * Address line of the card holder
     * @return {string}
     */
    CardShipping.prototype.getAddress1 = function () {
        return this.address1;
    };
    /**
     * Set Address1
     * Address line of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setAddress1 = function (val) {
        this.address1 = val;
        return this;
    };
    /**
     * Get Address2
     * Secondary address line of the card holder
     * @return {string}
     */
    CardShipping.prototype.getAddress2 = function () {
        return this.address2;
    };
    /**
     * Set Address2
     * Secondary address line of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setAddress2 = function (val) {
        this.address2 = val;
        return this;
    };
    /**
     * Get City
     * City of the card holder
     * @return {string}
     */
    CardShipping.prototype.getCity = function () {
        return this.city;
    };
    /**
     * Set City
     * City of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setCity = function (val) {
        this.city = val;
        return this;
    };
    /**
     * Get State
     * State of the card holder
     * @return {string}
     */
    CardShipping.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * State of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @return {string}
     */
    CardShipping.prototype.getCountryCode = function () {
        return this.countryCode;
    };
    /**
     * Set CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setCountryCode = function (val) {
        this.countryCode = val;
        return this;
    };
    /**
     * Get Zip
     * ZIP code of the card holder
     * @return {string}
     */
    CardShipping.prototype.getZip = function () {
        return this.zip;
    };
    /**
     * Set Zip
     * ZIP code of the card holder
     * @param {string} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setZip = function (val) {
        this.zip = val;
        return this;
    };
    /**
     * Get Phone
     * Shipping phone number
     * @return {p.Phone}
     */
    CardShipping.prototype.getPhone = function () {
        return this.phone;
    };
    /**
     * Set Phone
     * Shipping phone number
     * @param {p.Phone} val
     * @return {CardShipping}
     */
    CardShipping.prototype.setPhone = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPhone().getProcessOutObjectClass())
            this.phone = val;
        else {
            var obj = this.client.newPhone();
            obj.fillWithData(val);
            this.phone = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardShipping}
     */
    CardShipping.prototype.fillWithData = function (data) {
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
        if (data["phone"])
            this.setPhone(data["phone"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CardShipping.prototype.toJSON = function () {
        return {
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
            "phone": this.getPhone(),
        };
    };
    return CardShipping;
}());
module.exports = CardShipping;
//# sourceMappingURL=cardshipping.js.map