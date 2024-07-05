"use strict";
// The content of this file was automatically generated
var InvoicesAuthorizeResponse = /** @class */ (function () {
    /**
     * InvoicesAuthorizeResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoicesAuthorizeResponse(client, prefill) {
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
            throw new Error("The InvoicesAuthorizeResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoicesAuthorizeResponse()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoicesAuthorizeResponse.prototype.getProcessOutObjectClass = function () {
        return "InvoicesAuthorizeResponse";
    };
    /**
     * Get Transaction
     * Transaction linked to the invoice
     * @return {p.Transaction}
     */
    InvoicesAuthorizeResponse.prototype.getTransaction = function () {
        return this.transaction;
    };
    /**
     * Set Transaction
     * Transaction linked to the invoice
     * @param {p.Transaction} val
     * @return {InvoicesAuthorizeResponse}
     */
    InvoicesAuthorizeResponse.prototype.setTransaction = function (val) {
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
    InvoicesAuthorizeResponse.prototype.getCustomerAction = function () {
        return this.customerAction;
    };
    /**
     * Set CustomerAction
     * Customer action to be performed
     * @param {p.CustomerAction} val
     * @return {InvoicesAuthorizeResponse}
     */
    InvoicesAuthorizeResponse.prototype.setCustomerAction = function (val) {
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
     * @return {InvoicesAuthorizeResponse}
     */
    InvoicesAuthorizeResponse.prototype.fillWithData = function (data) {
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
    InvoicesAuthorizeResponse.prototype.toJSON = function () {
        return {
            "transaction": this.getTransaction(),
            "customer_action": this.getCustomerAction(),
        };
    };
    return InvoicesAuthorizeResponse;
}());
module.exports = InvoicesAuthorizeResponse;
//# sourceMappingURL=invoicesauthorizeresponse.js.map