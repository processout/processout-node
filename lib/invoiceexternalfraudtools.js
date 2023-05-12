"use strict";
// The content of this file was automatically generated
var InvoiceExternalFraudTools = /** @class */ (function () {
    /**
     * InvoiceExternalFraudTools constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoiceExternalFraudTools(client, prefill) {
        this.client = null;
        /**
         * Forter
         * @type {string}
         */
        this.forter = null;
        /**
         * Signifyd
         * @type {string}
         */
        this.signifyd = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoiceExternalFraudTools object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceExternalFraudTools()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoiceExternalFraudTools.prototype.getProcessOutObjectClass = function () {
        return "InvoiceExternalFraudTools";
    };
    /**
     * Get Forter
     * Forter
     * @return {string}
     */
    InvoiceExternalFraudTools.prototype.getForter = function () {
        return this.forter;
    };
    /**
     * Set Forter
     * Forter
     * @param {string} val
     * @return {InvoiceExternalFraudTools}
     */
    InvoiceExternalFraudTools.prototype.setForter = function (val) {
        this.forter = val;
        return this;
    };
    /**
     * Get Signifyd
     * Signifyd
     * @return {string}
     */
    InvoiceExternalFraudTools.prototype.getSignifyd = function () {
        return this.signifyd;
    };
    /**
     * Set Signifyd
     * Signifyd
     * @param {string} val
     * @return {InvoiceExternalFraudTools}
     */
    InvoiceExternalFraudTools.prototype.setSignifyd = function (val) {
        this.signifyd = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceExternalFraudTools}
     */
    InvoiceExternalFraudTools.prototype.fillWithData = function (data) {
        if (data["forter"])
            this.setForter(data["forter"]);
        if (data["signifyd"])
            this.setSignifyd(data["signifyd"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoiceExternalFraudTools.prototype.toJSON = function () {
        return {
            "forter": this.getForter(),
            "signifyd": this.getSignifyd(),
        };
    };
    return InvoiceExternalFraudTools;
}());
module.exports = InvoiceExternalFraudTools;
//# sourceMappingURL=invoiceexternalfraudtools.js.map