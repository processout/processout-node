"use strict";
// The content of this file was automatically generated
var NativeAPMTransactionDetails = /** @class */ (function () {
    /**
     * NativeAPMTransactionDetails constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMTransactionDetails(client, prefill) {
        this.client = null;
        /**
         * Native APM Gateway details
         * @type {p.NativeAPMTransactionDetailsGateway}
         */
        this.gateway = null;
        /**
         * Native APM Invoice details
         * @type {p.NativeAPMTransactionDetailsInvoice}
         */
        this.invoice = null;
        /**
         * Native APM Parameter details
         * @type {any}
         */
        this.parameters = null;
        /**
         * Native APM Transaction State
         * @type {string}
         */
        this.state = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMTransactionDetails object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMTransactionDetails()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMTransactionDetails.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMTransactionDetails";
    };
    /**
     * Get Gateway
     * Native APM Gateway details
     * @return {p.NativeAPMTransactionDetailsGateway}
     */
    NativeAPMTransactionDetails.prototype.getGateway = function () {
        return this.gateway;
    };
    /**
     * Set Gateway
     * Native APM Gateway details
     * @param {p.NativeAPMTransactionDetailsGateway} val
     * @return {NativeAPMTransactionDetails}
     */
    NativeAPMTransactionDetails.prototype.setGateway = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMTransactionDetailsGateway().getProcessOutObjectClass())
            this.gateway = val;
        else {
            var obj = this.client.newNativeAPMTransactionDetailsGateway();
            obj.fillWithData(val);
            this.gateway = obj;
        }
        return this;
    };
    /**
     * Get Invoice
     * Native APM Invoice details
     * @return {p.NativeAPMTransactionDetailsInvoice}
     */
    NativeAPMTransactionDetails.prototype.getInvoice = function () {
        return this.invoice;
    };
    /**
     * Set Invoice
     * Native APM Invoice details
     * @param {p.NativeAPMTransactionDetailsInvoice} val
     * @return {NativeAPMTransactionDetails}
     */
    NativeAPMTransactionDetails.prototype.setInvoice = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMTransactionDetailsInvoice().getProcessOutObjectClass())
            this.invoice = val;
        else {
            var obj = this.client.newNativeAPMTransactionDetailsInvoice();
            obj.fillWithData(val);
            this.invoice = obj;
        }
        return this;
    };
    /**
     * Get Parameters
     * Native APM Parameter details
     * @return {any}
     */
    NativeAPMTransactionDetails.prototype.getParameters = function () {
        return this.parameters;
    };
    /**
     * Set Parameters
     * Native APM Parameter details
     * @param {any} val
     * @return {NativeAPMTransactionDetails}
     */
    NativeAPMTransactionDetails.prototype.setParameters = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.parameters = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newNativeAPMParameterDefinition();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.parameters = a;
        }
        return this;
    };
    /**
     * Get State
     * Native APM Transaction State
     * @return {string}
     */
    NativeAPMTransactionDetails.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * Native APM Transaction State
     * @param {string} val
     * @return {NativeAPMTransactionDetails}
     */
    NativeAPMTransactionDetails.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetails}
     */
    NativeAPMTransactionDetails.prototype.fillWithData = function (data) {
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["invoice"])
            this.setInvoice(data["invoice"]);
        if (data["parameters"])
            this.setParameters(data["parameters"]);
        if (data["state"])
            this.setState(data["state"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMTransactionDetails.prototype.toJSON = function () {
        return {
            "gateway": this.getGateway(),
            "invoice": this.getInvoice(),
            "parameters": this.getParameters(),
            "state": this.getState(),
        };
    };
    return NativeAPMTransactionDetails;
}());
module.exports = NativeAPMTransactionDetails;
//# sourceMappingURL=nativeapmtransactiondetails.js.map