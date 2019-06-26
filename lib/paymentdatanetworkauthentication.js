"use strict";
// The content of this file was automatically generated
var PaymentDataNetworkAuthentication = /** @class */ (function () {
    /**
     * PaymentDataNetworkAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function PaymentDataNetworkAuthentication(client, prefill) {
        this.client = null;
        /**
         * Authentication CAVV
         * @type {string}
         */
        this.cavv = null;
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataNetworkAuthentication object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataNetworkAuthentication()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    PaymentDataNetworkAuthentication.prototype.getProcessOutObjectClass = function () {
        return "PaymentDataNetworkAuthentication";
    };
    /**
     * Get Cavv
     * Authentication CAVV
     * @return {string}
     */
    PaymentDataNetworkAuthentication.prototype.getCavv = function () {
        return this.cavv;
    };
    /**
     * Set Cavv
     * Authentication CAVV
     * @param {string} val
     * @return {PaymentDataNetworkAuthentication}
     */
    PaymentDataNetworkAuthentication.prototype.setCavv = function (val) {
        this.cavv = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataNetworkAuthentication}
     */
    PaymentDataNetworkAuthentication.prototype.fillWithData = function (data) {
        if (data["cavv"])
            this.setCavv(data["cavv"]);
        return this;
    };
    return PaymentDataNetworkAuthentication;
}());
module.exports = PaymentDataNetworkAuthentication;
//# sourceMappingURL=paymentdatanetworkauthentication.js.map