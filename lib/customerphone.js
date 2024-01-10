"use strict";
// The content of this file was automatically generated
var CustomerPhone = /** @class */ (function () {
    /**
     * CustomerPhone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CustomerPhone(client, prefill) {
        this.client = null;
        /**
         * Phone number of the customer
         * @type {string}
         */
        this.number = null;
        /**
         * Phone number dialing code of the customer
         * @type {string}
         */
        this.dialingCode = null;
        if (typeof client === 'undefined')
            throw new Error("The CustomerPhone object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomerPhone()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CustomerPhone.prototype.getProcessOutObjectClass = function () {
        return "CustomerPhone";
    };
    /**
     * Get Number
     * Phone number of the customer
     * @return {string}
     */
    CustomerPhone.prototype.getNumber = function () {
        return this.number;
    };
    /**
     * Set Number
     * Phone number of the customer
     * @param {string} val
     * @return {CustomerPhone}
     */
    CustomerPhone.prototype.setNumber = function (val) {
        this.number = val;
        return this;
    };
    /**
     * Get DialingCode
     * Phone number dialing code of the customer
     * @return {string}
     */
    CustomerPhone.prototype.getDialingCode = function () {
        return this.dialingCode;
    };
    /**
     * Set DialingCode
     * Phone number dialing code of the customer
     * @param {string} val
     * @return {CustomerPhone}
     */
    CustomerPhone.prototype.setDialingCode = function (val) {
        this.dialingCode = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CustomerPhone}
     */
    CustomerPhone.prototype.fillWithData = function (data) {
        if (data["number"])
            this.setNumber(data["number"]);
        if (data["dialing_code"])
            this.setDialingCode(data["dialing_code"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CustomerPhone.prototype.toJSON = function () {
        return {
            "number": this.getNumber(),
            "dialing_code": this.getDialingCode(),
        };
    };
    return CustomerPhone;
}());
module.exports = CustomerPhone;
//# sourceMappingURL=customerphone.js.map