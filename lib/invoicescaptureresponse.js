"use strict";
// The content of this file was automatically generated
var InvoicesCaptureResponse = /** @class */ (function () {
    /**
     * InvoicesCaptureResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoicesCaptureResponse(client, prefill) {
        this.client = null;
        /**
         * Transaction linked to the invoice
         * @type {p.Transaction}
         */
        this.transaction = null;
        /**
         * Customer action to be performed
         * @type {p.CustomerAction}
         */
        this.customerAction = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoicesCaptureResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoicesCaptureResponse()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoicesCaptureResponse.prototype.getProcessOutObjectClass = function () {
        return "InvoicesCaptureResponse";
    };
    /**
     * Get Transaction
     * Transaction linked to the invoice
     * @return {p.Transaction}
     */
    InvoicesCaptureResponse.prototype.getTransaction = function () {
        return this.transaction;
    };
    /**
     * Set Transaction
     * Transaction linked to the invoice
     * @param {p.Transaction} val
     * @return {InvoicesCaptureResponse}
     */
    InvoicesCaptureResponse.prototype.setTransaction = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    };
    /**
     * Get CustomerAction
     * Customer action to be performed
     * @return {p.CustomerAction}
     */
    InvoicesCaptureResponse.prototype.getCustomerAction = function () {
        return this.customerAction;
    };
    /**
     * Set CustomerAction
     * Customer action to be performed
     * @param {p.CustomerAction} val
     * @return {InvoicesCaptureResponse}
     */
    InvoicesCaptureResponse.prototype.setCustomerAction = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomerAction().getProcessOutObjectClass())
            this.customerAction = val;
        else {
            var obj = this.client.newCustomerAction();
            obj.fillWithData(val);
            this.customerAction = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesCaptureResponse}
     */
    InvoicesCaptureResponse.prototype.fillWithData = function (data) {
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["customer_action"])
            this.setCustomerAction(data["customer_action"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoicesCaptureResponse.prototype.toJSON = function () {
        return {
            "transaction": this.getTransaction(),
            "customer_action": this.getCustomerAction(),
        };
    };
    return InvoicesCaptureResponse;
}());
module.exports = InvoicesCaptureResponse;
//# sourceMappingURL=invoicescaptureresponse.js.map