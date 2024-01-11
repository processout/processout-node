"use strict";
// The content of this file was automatically generated
var InvoicesProcessNativePaymentResponse = /** @class */ (function () {
    /**
     * InvoicesProcessNativePaymentResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function InvoicesProcessNativePaymentResponse(client, prefill) {
        this.client = null;
        /**
         * Transaction linked to this Native APM
         * @type {p.Transaction}
         */
        this.transaction = null;
        /**
         * Native APM response
         * @type {p.NativeAPMResponse}
         */
        this.nativeApm = null;
        if (typeof client === 'undefined')
            throw new Error("The InvoicesProcessNativePaymentResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoicesProcessNativePaymentResponse()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    InvoicesProcessNativePaymentResponse.prototype.getProcessOutObjectClass = function () {
        return "InvoicesProcessNativePaymentResponse";
    };
    /**
     * Get Transaction
     * Transaction linked to this Native APM
     * @return {p.Transaction}
     */
    InvoicesProcessNativePaymentResponse.prototype.getTransaction = function () {
        return this.transaction;
    };
    /**
     * Set Transaction
     * Transaction linked to this Native APM
     * @param {p.Transaction} val
     * @return {InvoicesProcessNativePaymentResponse}
     */
    InvoicesProcessNativePaymentResponse.prototype.setTransaction = function (val) {
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
     * Get NativeApm
     * Native APM response
     * @return {p.NativeAPMResponse}
     */
    InvoicesProcessNativePaymentResponse.prototype.getNativeApm = function () {
        return this.nativeApm;
    };
    /**
     * Set NativeApm
     * Native APM response
     * @param {p.NativeAPMResponse} val
     * @return {InvoicesProcessNativePaymentResponse}
     */
    InvoicesProcessNativePaymentResponse.prototype.setNativeApm = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMResponse().getProcessOutObjectClass())
            this.nativeApm = val;
        else {
            var obj = this.client.newNativeAPMResponse();
            obj.fillWithData(val);
            this.nativeApm = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesProcessNativePaymentResponse}
     */
    InvoicesProcessNativePaymentResponse.prototype.fillWithData = function (data) {
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["native_apm"])
            this.setNativeApm(data["native_apm"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    InvoicesProcessNativePaymentResponse.prototype.toJSON = function () {
        return {
            "transaction": this.getTransaction(),
            "native_apm": this.getNativeApm(),
        };
    };
    return InvoicesProcessNativePaymentResponse;
}());
module.exports = InvoicesProcessNativePaymentResponse;
//# sourceMappingURL=invoicesprocessnativepaymentresponse.js.map