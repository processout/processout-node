"use strict";
// The content of this file was automatically generated
var APMPaymentProcessingConfiguration = /** @class */ (function () {
    /**
     * APMPaymentProcessingConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function APMPaymentProcessingConfiguration(client, prefill) {
        this.client = null;
        /**
         * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
         * @type {string}
         */
        this.returnRedirectType = null;
        /**
         * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
         * @type {string}
         */
        this.preferredFinalizationMode = null;
        if (typeof client === 'undefined')
            throw new Error("The APMPaymentProcessingConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPMPaymentProcessingConfiguration()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    APMPaymentProcessingConfiguration.prototype.getProcessOutObjectClass = function () {
        return "APMPaymentProcessingConfiguration";
    };
    /**
     * Get ReturnRedirectType
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @return {string}
     */
    APMPaymentProcessingConfiguration.prototype.getReturnRedirectType = function () {
        return this.returnRedirectType;
    };
    /**
     * Set ReturnRedirectType
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @param {string} val
     * @return {APMPaymentProcessingConfiguration}
     */
    APMPaymentProcessingConfiguration.prototype.setReturnRedirectType = function (val) {
        this.returnRedirectType = val;
        return this;
    };
    /**
     * Get PreferredFinalizationMode
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @return {string}
     */
    APMPaymentProcessingConfiguration.prototype.getPreferredFinalizationMode = function () {
        return this.preferredFinalizationMode;
    };
    /**
     * Set PreferredFinalizationMode
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @param {string} val
     * @return {APMPaymentProcessingConfiguration}
     */
    APMPaymentProcessingConfiguration.prototype.setPreferredFinalizationMode = function (val) {
        this.preferredFinalizationMode = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APMPaymentProcessingConfiguration}
     */
    APMPaymentProcessingConfiguration.prototype.fillWithData = function (data) {
        if (data["return_redirect_type"])
            this.setReturnRedirectType(data["return_redirect_type"]);
        if (data["preferred_finalization_mode"])
            this.setPreferredFinalizationMode(data["preferred_finalization_mode"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    APMPaymentProcessingConfiguration.prototype.toJSON = function () {
        return {
            "return_redirect_type": this.getReturnRedirectType(),
            "preferred_finalization_mode": this.getPreferredFinalizationMode(),
        };
    };
    return APMPaymentProcessingConfiguration;
}());
module.exports = APMPaymentProcessingConfiguration;
//# sourceMappingURL=apmpaymentprocessingconfiguration.js.map