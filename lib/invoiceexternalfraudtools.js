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
         * @type {any}
         */
        this.forter = null;
        /**
         * Ravelin
         * @type {any}
         */
        this.ravelin = null;
        /**
         * Signifyd
         * @type {any}
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
     * @return {any}
     */
    InvoiceExternalFraudTools.prototype.getForter = function () {
        return this.forter;
    };
    /**
     * Set Forter
     * Forter
     * @param {any} val
     * @return {InvoiceExternalFraudTools}
     */
    InvoiceExternalFraudTools.prototype.setForter = function (val) {
        this.forter = val;
        return this;
    };
    /**
     * Get Ravelin
     * Ravelin
     * @return {any}
     */
    InvoiceExternalFraudTools.prototype.getRavelin = function () {
        return this.ravelin;
    };
    /**
     * Set Ravelin
     * Ravelin
     * @param {any} val
     * @return {InvoiceExternalFraudTools}
     */
    InvoiceExternalFraudTools.prototype.setRavelin = function (val) {
        this.ravelin = val;
        return this;
    };
    /**
     * Get Signifyd
     * Signifyd
     * @return {any}
     */
    InvoiceExternalFraudTools.prototype.getSignifyd = function () {
        return this.signifyd;
    };
    /**
     * Set Signifyd
     * Signifyd
     * @param {any} val
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
        if (data["ravelin"])
            this.setRavelin(data["ravelin"]);
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
            "ravelin": this.getRavelin(),
            "signifyd": this.getSignifyd(),
        };
    };
    return InvoiceExternalFraudTools;
}());
module.exports = InvoiceExternalFraudTools;
//# sourceMappingURL=invoiceexternalfraudtools.js.map