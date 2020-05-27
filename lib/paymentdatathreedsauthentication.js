"use strict";
// The content of this file was automatically generated
var PaymentDataThreeDSAuthentication = /** @class */ (function () {
    /**
     * PaymentDataThreeDSAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function PaymentDataThreeDSAuthentication(client, prefill) {
        this.client = null;
        /**
         * Authentication XID
         * @type {string}
         */
        this.xID = null;
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataThreeDSAuthentication object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataThreeDSAuthentication()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    PaymentDataThreeDSAuthentication.prototype.getProcessOutObjectClass = function () {
        return "PaymentDataThreeDSAuthentication";
    };
    /**
     * Get XID
     * Authentication XID
     * @return {string}
     */
    PaymentDataThreeDSAuthentication.prototype.getXID = function () {
        return this.xID;
    };
    /**
     * Set XID
     * Authentication XID
     * @param {string} val
     * @return {PaymentDataThreeDSAuthentication}
     */
    PaymentDataThreeDSAuthentication.prototype.setXID = function (val) {
        this.xID = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSAuthentication}
     */
    PaymentDataThreeDSAuthentication.prototype.fillWithData = function (data) {
        if (data["XID"])
            this.setXID(data["XID"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    PaymentDataThreeDSAuthentication.prototype.toJSON = function () {
        return {
            "XID": this.getXID(),
        };
    };
    return PaymentDataThreeDSAuthentication;
}());
module.exports = PaymentDataThreeDSAuthentication;
//# sourceMappingURL=paymentdatathreedsauthentication.js.map