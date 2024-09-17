"use strict";
// The content of this file was automatically generated
var ExportLayoutConfigurationConfigurationOptionsTime = /** @class */ (function () {
    /**
     * ExportLayoutConfigurationConfigurationOptionsTime constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfigurationConfigurationOptionsTime(client, prefill) {
        this.client = null;
        /**
         * Format options for configuration.
         * @type {any}
         */
        this.format = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationConfigurationOptionsTime object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationConfigurationOptionsTime()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfigurationConfigurationOptionsTime.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfigurationConfigurationOptionsTime";
    };
    /**
     * Get Format
     * Format options for configuration.
     * @return {any}
     */
    ExportLayoutConfigurationConfigurationOptionsTime.prototype.getFormat = function () {
        return this.format;
    };
    /**
     * Set Format
     * Format options for configuration.
     * @param {any} val
     * @return {ExportLayoutConfigurationConfigurationOptionsTime}
     */
    ExportLayoutConfigurationConfigurationOptionsTime.prototype.setFormat = function (val) {
        this.format = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationConfigurationOptionsTime}
     */
    ExportLayoutConfigurationConfigurationOptionsTime.prototype.fillWithData = function (data) {
        if (data["format"])
            this.setFormat(data["format"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayoutConfigurationConfigurationOptionsTime.prototype.toJSON = function () {
        return {
            "format": this.getFormat(),
        };
    };
    return ExportLayoutConfigurationConfigurationOptionsTime;
}());
module.exports = ExportLayoutConfigurationConfigurationOptionsTime;
//# sourceMappingURL=exportlayoutconfigurationconfigurationoptionstime.js.map