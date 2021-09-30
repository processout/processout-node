"use strict";
// The content of this file was automatically generated
var ThreeDS = /** @class */ (function () {
    /**
     * ThreeDS constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ThreeDS(client, prefill) {
        this.client = null;
        /**
         * Version of the 3DS
         * @type {string}
         */
        this.version = null;
        /**
         * Current status of the authentication
         * @type {string}
         */
        this.status = null;
        /**
         * True if a fingerprint has occured
         * @type {boolean}
         */
        this.fingerprinted = null;
        /**
         * True if a challenge has occured
         * @type {boolean}
         */
        this.challenged = null;
        /**
         * Ares transaction status
         * @type {string}
         */
        this.aresTransStatus = null;
        /**
         * Cres transaction status
         * @type {string}
         */
        this.cresTransStatus = null;
        /**
         * Universally unique transaction identifier assigned by the DS to identify a single transaction
         * @type {string}
         */
        this.dsTransId = null;
        /**
         * Indicates whether the 3DS fingerprint successfully completed
         * @type {string}
         */
        this.fingerprintCompletionIndicator = null;
        /**
         * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
         * @type {string}
         */
        this.serverTransId = null;
        if (typeof client === 'undefined')
            throw new Error("The ThreeDS object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newThreeDS()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ThreeDS.prototype.getProcessOutObjectClass = function () {
        return "ThreeDS";
    };
    /**
     * Get Version
     * Version of the 3DS
     * @return {string}
     */
    ThreeDS.prototype.getVersion = function () {
        return this.version;
    };
    /**
     * Set Version
     * Version of the 3DS
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setVersion = function (val) {
        this.version = val;
        return this;
    };
    /**
     * Get Status
     * Current status of the authentication
     * @return {string}
     */
    ThreeDS.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * Set Status
     * Current status of the authentication
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setStatus = function (val) {
        this.status = val;
        return this;
    };
    /**
     * Get Fingerprinted
     * True if a fingerprint has occured
     * @return {boolean}
     */
    ThreeDS.prototype.getFingerprinted = function () {
        return this.fingerprinted;
    };
    /**
     * Set Fingerprinted
     * True if a fingerprint has occured
     * @param {boolean} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setFingerprinted = function (val) {
        this.fingerprinted = val;
        return this;
    };
    /**
     * Get Challenged
     * True if a challenge has occured
     * @return {boolean}
     */
    ThreeDS.prototype.getChallenged = function () {
        return this.challenged;
    };
    /**
     * Set Challenged
     * True if a challenge has occured
     * @param {boolean} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setChallenged = function (val) {
        this.challenged = val;
        return this;
    };
    /**
     * Get AresTransStatus
     * Ares transaction status
     * @return {string}
     */
    ThreeDS.prototype.getAresTransStatus = function () {
        return this.aresTransStatus;
    };
    /**
     * Set AresTransStatus
     * Ares transaction status
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setAresTransStatus = function (val) {
        this.aresTransStatus = val;
        return this;
    };
    /**
     * Get CresTransStatus
     * Cres transaction status
     * @return {string}
     */
    ThreeDS.prototype.getCresTransStatus = function () {
        return this.cresTransStatus;
    };
    /**
     * Set CresTransStatus
     * Cres transaction status
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setCresTransStatus = function (val) {
        this.cresTransStatus = val;
        return this;
    };
    /**
     * Get DsTransId
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @return {string}
     */
    ThreeDS.prototype.getDsTransId = function () {
        return this.dsTransId;
    };
    /**
     * Set DsTransId
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setDsTransId = function (val) {
        this.dsTransId = val;
        return this;
    };
    /**
     * Get FingerprintCompletionIndicator
     * Indicates whether the 3DS fingerprint successfully completed
     * @return {string}
     */
    ThreeDS.prototype.getFingerprintCompletionIndicator = function () {
        return this.fingerprintCompletionIndicator;
    };
    /**
     * Set FingerprintCompletionIndicator
     * Indicates whether the 3DS fingerprint successfully completed
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setFingerprintCompletionIndicator = function (val) {
        this.fingerprintCompletionIndicator = val;
        return this;
    };
    /**
     * Get ServerTransId
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @return {string}
     */
    ThreeDS.prototype.getServerTransId = function () {
        return this.serverTransId;
    };
    /**
     * Set ServerTransId
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @param {string} val
     * @return {ThreeDS}
     */
    ThreeDS.prototype.setServerTransId = function (val) {
        this.serverTransId = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ThreeDS}
     */
    ThreeDS.prototype.fillWithData = function (data) {
        if (data["version"])
            this.setVersion(data["version"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["fingerprinted"])
            this.setFingerprinted(data["fingerprinted"]);
        if (data["challenged"])
            this.setChallenged(data["challenged"]);
        if (data["ares_trans_status"])
            this.setAresTransStatus(data["ares_trans_status"]);
        if (data["cres_trans_status"])
            this.setCresTransStatus(data["cres_trans_status"]);
        if (data["ds_trans_id"])
            this.setDsTransId(data["ds_trans_id"]);
        if (data["fingerprint_completion_indicator"])
            this.setFingerprintCompletionIndicator(data["fingerprint_completion_indicator"]);
        if (data["server_trans_id"])
            this.setServerTransId(data["server_trans_id"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ThreeDS.prototype.toJSON = function () {
        return {
            "version": this.getVersion(),
            "status": this.getStatus(),
            "fingerprinted": this.getFingerprinted(),
            "challenged": this.getChallenged(),
            "ares_trans_status": this.getAresTransStatus(),
            "cres_trans_status": this.getCresTransStatus(),
            "ds_trans_id": this.getDsTransId(),
            "fingerprint_completion_indicator": this.getFingerprintCompletionIndicator(),
            "server_trans_id": this.getServerTransId(),
        };
    };
    return ThreeDS;
}());
module.exports = ThreeDS;
//# sourceMappingURL=threeds.js.map