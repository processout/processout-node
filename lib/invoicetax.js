"use strict";
// The content of this file was automatically generated
var InvoiceTax = /** @class */ (function () {
    /**
     * InvoiceTax constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceTax(client, prefill) {
        this.client = null;
        /**
         * Amount of the tax for an invoice
         * @type {string}
         */
        this.amount = null;
        /**
         * Rate of the tax for an invoice
         * @type {string}
         */
        this.rate = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceTax object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceTax()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceTax.prototype.getProcessOutObjectClass = function () {
        return "InvoiceTax";
    };
    /**
     * Get Amount
     * Amount of the tax for an invoice
     * @return {string}
     */
    InvoiceTax.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the tax for an invoice
     * @param {string} val
     * @return {InvoiceTax}
     */
    InvoiceTax.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Rate
     * Rate of the tax for an invoice
     * @return {string}
     */
    InvoiceTax.prototype.getRate = function () {
        return this.rate;
    };
    /**
     * Set Rate
     * Rate of the tax for an invoice
     * @param {string} val
     * @return {InvoiceTax}
     */
    InvoiceTax.prototype.setRate = function (val) {
        this.rate = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceTax}
     */
    InvoiceTax.prototype.fillWithData = function (data) {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["rate"])
            this.setRate(data["rate"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoiceTax.prototype.toJSON = function () {
        return {
            "amount": this.getAmount(),
            "rate": this.getRate(),
        };
    };
    return InvoiceTax;
}());
module.exports = InvoiceTax;
//# sourceMappingURL=invoicetax.js.map