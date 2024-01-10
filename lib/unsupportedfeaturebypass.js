"use strict";
// The content of this file was automatically generated
var UnsupportedFeatureBypass = /** @class */ (function () {
    /**
     * UnsupportedFeatureBypass constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function UnsupportedFeatureBypass(client, prefill) {
        this.client = null;
        /**
         * Indicates whether to fallback to normal authorization if incremental is not supported
         * @type {boolean}
         */
        this.incrementalAuthorization = null;
        if (typeof client === 'undefined')
            throw new Error("The UnsupportedFeatureBypass object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newUnsupportedFeatureBypass()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    UnsupportedFeatureBypass.prototype.getProcessOutObjectClass = function () {
        return "UnsupportedFeatureBypass";
    };
    /**
     * Get IncrementalAuthorization
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @return {boolean}
     */
    UnsupportedFeatureBypass.prototype.getIncrementalAuthorization = function () {
        return this.incrementalAuthorization;
    };
    /**
     * Set IncrementalAuthorization
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @param {boolean} val
     * @return {UnsupportedFeatureBypass}
     */
    UnsupportedFeatureBypass.prototype.setIncrementalAuthorization = function (val) {
        this.incrementalAuthorization = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {UnsupportedFeatureBypass}
     */
    UnsupportedFeatureBypass.prototype.fillWithData = function (data) {
        if (data["incremental_authorization"])
            this.setIncrementalAuthorization(data["incremental_authorization"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    UnsupportedFeatureBypass.prototype.toJSON = function () {
        return {
            "incremental_authorization": this.getIncrementalAuthorization(),
        };
    };
    return UnsupportedFeatureBypass;
}());
module.exports = UnsupportedFeatureBypass;
//# sourceMappingURL=unsupportedfeaturebypass.js.map