"use strict";
// The content of this file was automatically generated
var PaymentDataThreeDSRequest = /** @class */ (function () {
    /**
     * PaymentDataThreeDSRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function PaymentDataThreeDSRequest(client, prefill) {
        this.client = null;
        /**
         * URL of the ACS
         * @type {string}
         */
        this.acsUrl = null;
        /**
         * PAReq used during the 3DS authentication
         * @type {string}
         */
        this.pareq = null;
        /**
         * MD used during the 3DS authentication
         * @type {string}
         */
        this.md = null;
        /**
         * URL of the 3DS term
         * @type {string}
         */
        this.termUrl = null;
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataThreeDSRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataThreeDSRequest()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    PaymentDataThreeDSRequest.prototype.getProcessOutObjectClass = function () {
        return "PaymentDataThreeDSRequest";
    };
    /**
     * Get AcsUrl
     * URL of the ACS
     * @return {string}
     */
    PaymentDataThreeDSRequest.prototype.getAcsUrl = function () {
        return this.acsUrl;
    };
    /**
     * Set AcsUrl
     * URL of the ACS
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    PaymentDataThreeDSRequest.prototype.setAcsUrl = function (val) {
        this.acsUrl = val;
        return this;
    };
    /**
     * Get Pareq
     * PAReq used during the 3DS authentication
     * @return {string}
     */
    PaymentDataThreeDSRequest.prototype.getPareq = function () {
        return this.pareq;
    };
    /**
     * Set Pareq
     * PAReq used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    PaymentDataThreeDSRequest.prototype.setPareq = function (val) {
        this.pareq = val;
        return this;
    };
    /**
     * Get Md
     * MD used during the 3DS authentication
     * @return {string}
     */
    PaymentDataThreeDSRequest.prototype.getMd = function () {
        return this.md;
    };
    /**
     * Set Md
     * MD used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    PaymentDataThreeDSRequest.prototype.setMd = function (val) {
        this.md = val;
        return this;
    };
    /**
     * Get TermUrl
     * URL of the 3DS term
     * @return {string}
     */
    PaymentDataThreeDSRequest.prototype.getTermUrl = function () {
        return this.termUrl;
    };
    /**
     * Set TermUrl
     * URL of the 3DS term
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    PaymentDataThreeDSRequest.prototype.setTermUrl = function (val) {
        this.termUrl = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSRequest}
     */
    PaymentDataThreeDSRequest.prototype.fillWithData = function (data) {
        if (data["acs_url"])
            this.setAcsUrl(data["acs_url"]);
        if (data["pareq"])
            this.setPareq(data["pareq"]);
        if (data["md"])
            this.setMd(data["md"]);
        if (data["term_url"])
            this.setTermUrl(data["term_url"]);
        return this;
    };
    return PaymentDataThreeDSRequest;
}());
module.exports = PaymentDataThreeDSRequest;
