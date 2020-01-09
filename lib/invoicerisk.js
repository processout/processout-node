"use strict";
// The content of this file was automatically generated
var InvoiceRisk = /** @class */ (function () {
    /**
     * InvoiceRisk constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceRisk(client, prefill) {
        this.client = null;
        /**
         * Scoring of the invoice
         * @type {string}
         */
        this.score = null;
        /**
         * Define whether or not the invoice is legit
         * @type {boolean}
         */
        this.isLegit = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceRisk object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceRisk()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceRisk.prototype.getProcessOutObjectClass = function () {
        return "InvoiceRisk";
    };
    /**
     * Get Score
     * Scoring of the invoice
     * @return {string}
     */
    InvoiceRisk.prototype.getScore = function () {
        return this.score;
    };
    /**
     * Set Score
     * Scoring of the invoice
     * @param {string} val
     * @return {InvoiceRisk}
     */
    InvoiceRisk.prototype.setScore = function (val) {
        this.score = val;
        return this;
    };
    /**
     * Get IsLegit
     * Define whether or not the invoice is legit
     * @return {boolean}
     */
    InvoiceRisk.prototype.getIsLegit = function () {
        return this.isLegit;
    };
    /**
     * Set IsLegit
     * Define whether or not the invoice is legit
     * @param {boolean} val
     * @return {InvoiceRisk}
     */
    InvoiceRisk.prototype.setIsLegit = function (val) {
        this.isLegit = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceRisk}
     */
    InvoiceRisk.prototype.fillWithData = function (data) {
        if (data["score"])
            this.setScore(data["score"]);
        if (data["is_legit"])
            this.setIsLegit(data["is_legit"]);
        return this;
    };
    return InvoiceRisk;
}());
module.exports = InvoiceRisk;
//# sourceMappingURL=invoicerisk.js.map