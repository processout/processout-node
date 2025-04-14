"use strict";
// The content of this file was automatically generated
var SubmerchantPhoneNumber = /** @class */ (function () {
    /**
     * SubmerchantPhoneNumber constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function SubmerchantPhoneNumber(client, prefill) {
        this.client = null;
        /**
         * Dialing code of the phone number
         * @type {string}
         */
        this.dialingCode = null;
        /**
         * Phone number
         * @type {string}
         */
        this.number = null;
        if (typeof client === 'undefined')
            throw new Error("The SubmerchantPhoneNumber object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchantPhoneNumber()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    SubmerchantPhoneNumber.prototype.getProcessOutObjectClass = function () {
        return "SubmerchantPhoneNumber";
    };
    /**
     * Get DialingCode
     * Dialing code of the phone number
     * @return {string}
     */
    SubmerchantPhoneNumber.prototype.getDialingCode = function () {
        return this.dialingCode;
    };
    /**
     * Set DialingCode
     * Dialing code of the phone number
     * @param {string} val
     * @return {SubmerchantPhoneNumber}
     */
    SubmerchantPhoneNumber.prototype.setDialingCode = function (val) {
        this.dialingCode = val;
        return this;
    };
    /**
     * Get Number
     * Phone number
     * @return {string}
     */
    SubmerchantPhoneNumber.prototype.getNumber = function () {
        return this.number;
    };
    /**
     * Set Number
     * Phone number
     * @param {string} val
     * @return {SubmerchantPhoneNumber}
     */
    SubmerchantPhoneNumber.prototype.setNumber = function (val) {
        this.number = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantPhoneNumber}
     */
    SubmerchantPhoneNumber.prototype.fillWithData = function (data) {
        if (data["dialing_code"])
            this.setDialingCode(data["dialing_code"]);
        if (data["number"])
            this.setNumber(data["number"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    SubmerchantPhoneNumber.prototype.toJSON = function () {
        return {
            "dialing_code": this.getDialingCode(),
            "number": this.getNumber(),
        };
    };
    return SubmerchantPhoneNumber;
}());
module.exports = SubmerchantPhoneNumber;
//# sourceMappingURL=submerchantphonenumber.js.map