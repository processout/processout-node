"use strict";
// The content of this file was automatically generated
var NativeAPMTransactionDetailsGateway = /** @class */ (function () {
    /**
     * NativeAPMTransactionDetailsGateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMTransactionDetailsGateway(client, prefill) {
        this.client = null;
        /**
         * Native APM Gateway display name
         * @type {string}
         */
        this.displayName = null;
        /**
         * Native APM Gateway logo url
         * @type {string}
         */
        this.logoUrl = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMTransactionDetailsGateway object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMTransactionDetailsGateway()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMTransactionDetailsGateway.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMTransactionDetailsGateway";
    };
    /**
     * Get DisplayName
     * Native APM Gateway display name
     * @return {string}
     */
    NativeAPMTransactionDetailsGateway.prototype.getDisplayName = function () {
        return this.displayName;
    };
    /**
     * Set DisplayName
     * Native APM Gateway display name
     * @param {string} val
     * @return {NativeAPMTransactionDetailsGateway}
     */
    NativeAPMTransactionDetailsGateway.prototype.setDisplayName = function (val) {
        this.displayName = val;
        return this;
    };
    /**
     * Get LogoUrl
     * Native APM Gateway logo url
     * @return {string}
     */
    NativeAPMTransactionDetailsGateway.prototype.getLogoUrl = function () {
        return this.logoUrl;
    };
    /**
     * Set LogoUrl
     * Native APM Gateway logo url
     * @param {string} val
     * @return {NativeAPMTransactionDetailsGateway}
     */
    NativeAPMTransactionDetailsGateway.prototype.setLogoUrl = function (val) {
        this.logoUrl = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetailsGateway}
     */
    NativeAPMTransactionDetailsGateway.prototype.fillWithData = function (data) {
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMTransactionDetailsGateway.prototype.toJSON = function () {
        return {
            "display_name": this.getDisplayName(),
            "logo_url": this.getLogoUrl(),
        };
    };
    return NativeAPMTransactionDetailsGateway;
}());
module.exports = NativeAPMTransactionDetailsGateway;
//# sourceMappingURL=nativeapmtransactiondetailsgateway.js.map