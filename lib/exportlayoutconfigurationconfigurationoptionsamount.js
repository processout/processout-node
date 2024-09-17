"use strict";
// The content of this file was automatically generated
var ExportLayoutConfigurationConfigurationOptionsAmount = /** @class */ (function () {
    /**
     * ExportLayoutConfigurationConfigurationOptionsAmount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfigurationConfigurationOptionsAmount(client, prefill) {
        this.client = null;
        /**
         * Precision options for configuration.
         * @type {any}
         */
        this.precision = null;
        /**
         * Separator options for configuration.
         * @type {any}
         */
        this.separator = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationConfigurationOptionsAmount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationConfigurationOptionsAmount()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfigurationConfigurationOptionsAmount";
    };
    /**
     * Get Precision
     * Precision options for configuration.
     * @return {any}
     */
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.getPrecision = function () {
        return this.precision;
    };
    /**
     * Set Precision
     * Precision options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.setPrecision = function (val) {
        this.precision = val;
        return this;
    };
    /**
     * Get Separator
     * Separator options for configuration.
     * @return {any}
     */
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.getSeparator = function () {
        return this.separator;
    };
    /**
     * Set Separator
     * Separator options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.setSeparator = function (val) {
        this.separator = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationConfigurationOptionsAmount}
     */
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.fillWithData = function (data) {
        if (data["precision"])
            this.setPrecision(data["precision"]);
        if (data["separator"])
            this.setSeparator(data["separator"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayoutConfigurationConfigurationOptionsAmount.prototype.toJSON = function () {
        return {
            "precision": this.getPrecision(),
            "separator": this.getSeparator(),
        };
    };
    return ExportLayoutConfigurationConfigurationOptionsAmount;
}());
module.exports = ExportLayoutConfigurationConfigurationOptionsAmount;
//# sourceMappingURL=exportlayoutconfigurationconfigurationoptionsamount.js.map