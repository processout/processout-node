"use strict";
// The content of this file was automatically generated
var NativeAPMTransactionDetailsInvoice = /** @class */ (function () {
    /**
     * NativeAPMTransactionDetailsInvoice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMTransactionDetailsInvoice(client, prefill) {
        this.client = null;
        /**
         * Native APM Invoice amount
         * @type {string}
         */
        this.amount = null;
        /**
         * Native APM Invoice currency code
         * @type {string}
         */
        this.currencyCode = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMTransactionDetailsInvoice object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMTransactionDetailsInvoice()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMTransactionDetailsInvoice.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMTransactionDetailsInvoice";
    };
    /**
     * Get Amount
     * Native APM Invoice amount
     * @return {string}
     */
    NativeAPMTransactionDetailsInvoice.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Native APM Invoice amount
     * @param {string} val
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    NativeAPMTransactionDetailsInvoice.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get CurrencyCode
     * Native APM Invoice currency code
     * @return {string}
     */
    NativeAPMTransactionDetailsInvoice.prototype.getCurrencyCode = function () {
        return this.currencyCode;
    };
    /**
     * Set CurrencyCode
     * Native APM Invoice currency code
     * @param {string} val
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    NativeAPMTransactionDetailsInvoice.prototype.setCurrencyCode = function (val) {
        this.currencyCode = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    NativeAPMTransactionDetailsInvoice.prototype.fillWithData = function (data) {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency_code"])
            this.setCurrencyCode(data["currency_code"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMTransactionDetailsInvoice.prototype.toJSON = function () {
        return {
            "amount": this.getAmount(),
            "currency_code": this.getCurrencyCode(),
        };
    };
    return NativeAPMTransactionDetailsInvoice;
}());
module.exports = NativeAPMTransactionDetailsInvoice;
//# sourceMappingURL=nativeapmtransactiondetailsinvoice.js.map