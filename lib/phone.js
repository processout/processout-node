"use strict";
// The content of this file was automatically generated
var Phone = /** @class */ (function () {
    /**
     * Phone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Phone(client, prefill) {
        this.client = null;
        /**
         * Phone number (without dialing code)
         * @type {string}
         */
        this.number = null;
        /**
         * Phone number dialing code
         * @type {string}
         */
        this.dialingCode = null;
        if (typeof client === 'undefined')
            throw new Error("The Phone object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPhone()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Phone.prototype.getProcessOutObjectClass = function () {
        return "Phone";
    };
    /**
     * Get Number
     * Phone number (without dialing code)
     * @return {string}
     */
    Phone.prototype.getNumber = function () {
        return this.number;
    };
    /**
     * Set Number
     * Phone number (without dialing code)
     * @param {string} val
     * @return {Phone}
     */
    Phone.prototype.setNumber = function (val) {
        this.number = val;
        return this;
    };
    /**
     * Get DialingCode
     * Phone number dialing code
     * @return {string}
     */
    Phone.prototype.getDialingCode = function () {
        return this.dialingCode;
    };
    /**
     * Set DialingCode
     * Phone number dialing code
     * @param {string} val
     * @return {Phone}
     */
    Phone.prototype.setDialingCode = function (val) {
        this.dialingCode = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Phone}
     */
    Phone.prototype.fillWithData = function (data) {
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
    Phone.prototype.toJSON = function () {
        return {
            "number": this.getNumber(),
            "dialing_code": this.getDialingCode(),
        };
    };
    return Phone;
}());
module.exports = Phone;
//# sourceMappingURL=phone.js.map