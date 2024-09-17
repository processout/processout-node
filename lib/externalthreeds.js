"use strict";
// The content of this file was automatically generated
var ExternalThreeDS = /** @class */ (function () {
    /**
     * ExternalThreeDS constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExternalThreeDS(client, prefill) {
        this.client = null;
        /**
         * ThreeDS v1 ID
         * @type {string}
         */
        this.xid = null;
        /**
         * Transaction status
         * @type {string}
         */
        this.transStatus = null;
        /**
         * ECI
         * @type {string}
         */
        this.eci = null;
        /**
         * Authentication value
         * @type {string}
         */
        this.cavv = null;
        /**
         * DS Transaction ID
         * @type {string}
         */
        this.dsTransId = null;
        /**
         * ThreeDS Message version
         * @type {string}
         */
        this.version = null;
        /**
         * Authentication flow: one of `frictionless` or 'challenge`
         * @type {string}
         */
        this.authenticationFlow = null;
        if (typeof client === 'undefined')
            throw new Error("The ExternalThreeDS object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExternalThreeDS()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExternalThreeDS.prototype.getProcessOutObjectClass = function () {
        return "ExternalThreeDS";
    };
    /**
     * Get Xid
     * ThreeDS v1 ID
     * @return {string}
     */
    ExternalThreeDS.prototype.getXid = function () {
        return this.xid;
    };
    /**
     * Set Xid
     * ThreeDS v1 ID
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setXid = function (val) {
        this.xid = val;
        return this;
    };
    /**
     * Get TransStatus
     * Transaction status
     * @return {string}
     */
    ExternalThreeDS.prototype.getTransStatus = function () {
        return this.transStatus;
    };
    /**
     * Set TransStatus
     * Transaction status
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setTransStatus = function (val) {
        this.transStatus = val;
        return this;
    };
    /**
     * Get Eci
     * ECI
     * @return {string}
     */
    ExternalThreeDS.prototype.getEci = function () {
        return this.eci;
    };
    /**
     * Set Eci
     * ECI
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setEci = function (val) {
        this.eci = val;
        return this;
    };
    /**
     * Get Cavv
     * Authentication value
     * @return {string}
     */
    ExternalThreeDS.prototype.getCavv = function () {
        return this.cavv;
    };
    /**
     * Set Cavv
     * Authentication value
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setCavv = function (val) {
        this.cavv = val;
        return this;
    };
    /**
     * Get DsTransId
     * DS Transaction ID
     * @return {string}
     */
    ExternalThreeDS.prototype.getDsTransId = function () {
        return this.dsTransId;
    };
    /**
     * Set DsTransId
     * DS Transaction ID
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setDsTransId = function (val) {
        this.dsTransId = val;
        return this;
    };
    /**
     * Get Version
     * ThreeDS Message version
     * @return {string}
     */
    ExternalThreeDS.prototype.getVersion = function () {
        return this.version;
    };
    /**
     * Set Version
     * ThreeDS Message version
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setVersion = function (val) {
        this.version = val;
        return this;
    };
    /**
     * Get AuthenticationFlow
     * Authentication flow: one of `frictionless` or 'challenge`
     * @return {string}
     */
    ExternalThreeDS.prototype.getAuthenticationFlow = function () {
        return this.authenticationFlow;
    };
    /**
     * Set AuthenticationFlow
     * Authentication flow: one of `frictionless` or 'challenge`
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.setAuthenticationFlow = function (val) {
        this.authenticationFlow = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExternalThreeDS}
     */
    ExternalThreeDS.prototype.fillWithData = function (data) {
        if (data["xid"])
            this.setXid(data["xid"]);
        if (data["trans_status"])
            this.setTransStatus(data["trans_status"]);
        if (data["eci"])
            this.setEci(data["eci"]);
        if (data["cavv"])
            this.setCavv(data["cavv"]);
        if (data["ds_trans_id"])
            this.setDsTransId(data["ds_trans_id"]);
        if (data["version"])
            this.setVersion(data["version"]);
        if (data["authentication_flow"])
            this.setAuthenticationFlow(data["authentication_flow"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExternalThreeDS.prototype.toJSON = function () {
        return {
            "xid": this.getXid(),
            "trans_status": this.getTransStatus(),
            "eci": this.getEci(),
            "cavv": this.getCavv(),
            "ds_trans_id": this.getDsTransId(),
            "version": this.getVersion(),
            "authentication_flow": this.getAuthenticationFlow(),
        };
    };
    return ExternalThreeDS;
}());
module.exports = ExternalThreeDS;
//# sourceMappingURL=externalthreeds.js.map