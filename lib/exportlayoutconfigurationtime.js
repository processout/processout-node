"use strict";
// The content of this file was automatically generated
var ExportLayoutConfigurationTime = /** @class */ (function () {
    /**
     * ExportLayoutConfigurationTime constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfigurationTime(client, prefill) {
        this.client = null;
        /**
         * Format of the time fields in the export.
         * @type {string}
         */
        this.format = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationTime object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationTime()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfigurationTime.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfigurationTime";
    };
    /**
     * Get Format
     * Format of the time fields in the export.
     * @return {string}
     */
    ExportLayoutConfigurationTime.prototype.getFormat = function () {
        return this.format;
    };
    /**
     * Set Format
     * Format of the time fields in the export.
     * @param {string} val
     * @return {ExportLayoutConfigurationTime}
     */
    ExportLayoutConfigurationTime.prototype.setFormat = function (val) {
        this.format = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationTime}
     */
    ExportLayoutConfigurationTime.prototype.fillWithData = function (data) {
        if (data["format"])
            this.setFormat(data["format"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayoutConfigurationTime.prototype.toJSON = function () {
        return {
            "format": this.getFormat(),
        };
    };
    return ExportLayoutConfigurationTime;
}());
module.exports = ExportLayoutConfigurationTime;
//# sourceMappingURL=exportlayoutconfigurationtime.js.map