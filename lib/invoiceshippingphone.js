"use strict";
// The content of this file was automatically generated
var InvoiceShippingPhone = /** @class */ (function () {
    /**
     * InvoiceShippingPhone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceShippingPhone(client, prefill) {
        this.client = null;
        /**
         * Phone number for the shipment
         * @type {string}
         */
        this.number = null;
        /**
         * Phone number dialing code for the shipment
         * @type {string}
         */
        this.dialingCode = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceShippingPhone object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceShippingPhone()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceShippingPhone.prototype.getProcessOutObjectClass = function () {
        return "InvoiceShippingPhone";
    };
    /**
     * Get Number
     * Phone number for the shipment
     * @return {string}
     */
    InvoiceShippingPhone.prototype.getNumber = function () {
        return this.number;
    };
    /**
     * Set Number
     * Phone number for the shipment
     * @param {string} val
     * @return {InvoiceShippingPhone}
     */
    InvoiceShippingPhone.prototype.setNumber = function (val) {
        this.number = val;
        return this;
    };
    /**
     * Get DialingCode
     * Phone number dialing code for the shipment
     * @return {string}
     */
    InvoiceShippingPhone.prototype.getDialingCode = function () {
        return this.dialingCode;
    };
    /**
     * Set DialingCode
     * Phone number dialing code for the shipment
     * @param {string} val
     * @return {InvoiceShippingPhone}
     */
    InvoiceShippingPhone.prototype.setDialingCode = function (val) {
        this.dialingCode = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShippingPhone}
     */
    InvoiceShippingPhone.prototype.fillWithData = function (data) {
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
    InvoiceShippingPhone.prototype.toJSON = function () {
        return {
            "number": this.getNumber(),
            "dialing_code": this.getDialingCode(),
        };
    };
    return InvoiceShippingPhone;
}());
module.exports = InvoiceShippingPhone;
//# sourceMappingURL=invoiceshippingphone.js.map