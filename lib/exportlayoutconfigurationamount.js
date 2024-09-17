"use strict";
// The content of this file was automatically generated
var ExportLayoutConfigurationAmount = /** @class */ (function () {
    /**
     * ExportLayoutConfigurationAmount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfigurationAmount(client, prefill) {
        this.client = null;
        /**
         * Chosen precision for the amount fields in the export.
         * @type {string}
         */
        this.precision = null;
        /**
         * Chosen separator for the amount fields in the export.
         * @type {string}
         */
        this.separator = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationAmount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationAmount()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfigurationAmount.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfigurationAmount";
    };
    /**
     * Get Precision
     * Chosen precision for the amount fields in the export.
     * @return {string}
     */
    ExportLayoutConfigurationAmount.prototype.getPrecision = function () {
        return this.precision;
    };
    /**
     * Set Precision
     * Chosen precision for the amount fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationAmount}
     */
    ExportLayoutConfigurationAmount.prototype.setPrecision = function (val) {
        this.precision = val;
        return this;
    };
    /**
     * Get Separator
     * Chosen separator for the amount fields in the export.
     * @return {string}
     */
    ExportLayoutConfigurationAmount.prototype.getSeparator = function () {
        return this.separator;
    };
    /**
     * Set Separator
     * Chosen separator for the amount fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationAmount}
     */
    ExportLayoutConfigurationAmount.prototype.setSeparator = function (val) {
        this.separator = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationAmount}
     */
    ExportLayoutConfigurationAmount.prototype.fillWithData = function (data) {
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
    ExportLayoutConfigurationAmount.prototype.toJSON = function () {
        return {
            "precision": this.getPrecision(),
            "separator": this.getSeparator(),
        };
    };
    return ExportLayoutConfigurationAmount;
}());
module.exports = ExportLayoutConfigurationAmount;
//# sourceMappingURL=exportlayoutconfigurationamount.js.map