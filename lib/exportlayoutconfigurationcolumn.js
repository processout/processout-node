"use strict";
// The content of this file was automatically generated
var ExportLayoutConfigurationColumn = /** @class */ (function () {
    /**
     * ExportLayoutConfigurationColumn constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfigurationColumn(client, prefill) {
        this.client = null;
        /**
         * Name of the column. Must match with supported ones for chosen export type.
         * @type {string}
         */
        this.name = null;
        /**
         * Rename of the chosen column if needed.
         * @type {string}
         */
        this.rename = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfigurationColumn object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfigurationColumn()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfigurationColumn.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfigurationColumn";
    };
    /**
     * Get Name
     * Name of the column. Must match with supported ones for chosen export type.
     * @return {string}
     */
    ExportLayoutConfigurationColumn.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the column. Must match with supported ones for chosen export type.
     * @param {string} val
     * @return {ExportLayoutConfigurationColumn}
     */
    ExportLayoutConfigurationColumn.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Rename
     * Rename of the chosen column if needed.
     * @return {string}
     */
    ExportLayoutConfigurationColumn.prototype.getRename = function () {
        return this.rename;
    };
    /**
     * Set Rename
     * Rename of the chosen column if needed.
     * @param {string} val
     * @return {ExportLayoutConfigurationColumn}
     */
    ExportLayoutConfigurationColumn.prototype.setRename = function (val) {
        this.rename = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfigurationColumn}
     */
    ExportLayoutConfigurationColumn.prototype.fillWithData = function (data) {
        if (data["name"])
            this.setName(data["name"]);
        if (data["rename"])
            this.setRename(data["rename"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayoutConfigurationColumn.prototype.toJSON = function () {
        return {
            "name": this.getName(),
            "rename": this.getRename(),
        };
    };
    return ExportLayoutConfigurationColumn;
}());
module.exports = ExportLayoutConfigurationColumn;
//# sourceMappingURL=exportlayoutconfigurationcolumn.js.map