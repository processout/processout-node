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
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ThreeDS}
     */
    ThreeDS.prototype.fillWithData = function (data) {
        if (data["Version"])
            this.setVersion(data["Version"]);
        if (data["Status"])
            this.setStatus(data["Status"]);
        if (data["fingerprinted"])
            this.setFingerprinted(data["fingerprinted"]);
        if (data["challenged"])
            this.setChallenged(data["challenged"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ThreeDS.prototype.toJSON = function () {
        return {
            "Version": this.getVersion(),
            "Status": this.getStatus(),
            "fingerprinted": this.getFingerprinted(),
            "challenged": this.getChallenged(),
        };
    };
    return ThreeDS;
}());
module.exports = ThreeDS;
//# sourceMappingURL=threeds.js.map