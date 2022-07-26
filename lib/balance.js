"use strict";
// The content of this file was automatically generated
var Balance = /** @class */ (function () {
    /**
     * Balance constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Balance(client, prefill) {
        this.client = null;
        /**
         * Amount available
         * @type {string}
         */
        this.amount = null;
        /**
         * Currency the balance is in
         * @type {string}
         */
        this.currency = null;
        /**
         * Expiry time of the voucher
         * @type {string}
         */
        this.expiry = null;
        if (typeof client === 'undefined')
            throw new Error("The Balance object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newBalance()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Balance.prototype.getProcessOutObjectClass = function () {
        return "Balance";
    };
    /**
     * Get Amount
     * Amount available
     * @return {string}
     */
    Balance.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount available
     * @param {string} val
     * @return {Balance}
     */
    Balance.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Currency
     * Currency the balance is in
     * @return {string}
     */
    Balance.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency the balance is in
     * @param {string} val
     * @return {Balance}
     */
    Balance.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get Expiry
     * Expiry time of the voucher
     * @return {string}
     */
    Balance.prototype.getExpiry = function () {
        return this.expiry;
    };
    /**
     * Set Expiry
     * Expiry time of the voucher
     * @param {string} val
     * @return {Balance}
     */
    Balance.prototype.setExpiry = function (val) {
        this.expiry = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Balance}
     */
    Balance.prototype.fillWithData = function (data) {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["expiry"])
            this.setExpiry(data["expiry"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Balance.prototype.toJSON = function () {
        return {
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "expiry": this.getExpiry(),
        };
    };
    return Balance;
}());
module.exports = Balance;
//# sourceMappingURL=balance.js.map