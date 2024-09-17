"use strict";
// The content of this file was automatically generated
var ExportLayoutConfiguration = /** @class */ (function () {
    /**
     * ExportLayoutConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function ExportLayoutConfiguration(client, prefill) {
        this.client = null;
        /**
         * Columns that will be exported.
         * @type {any}
         */
        this.columns = null;
        /**
         * Time related configurations.
         * @type {p.ExportLayoutConfigurationTime}
         */
        this.time = null;
        /**
         * Amount related configurations.
         * @type {p.ExportLayoutConfigurationAmount}
         */
        this.amount = null;
        if (typeof client === 'undefined')
            throw new Error("The ExportLayoutConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newExportLayoutConfiguration()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    ExportLayoutConfiguration.prototype.getProcessOutObjectClass = function () {
        return "ExportLayoutConfiguration";
    };
    /**
     * Get Columns
     * Columns that will be exported.
     * @return {any}
     */
    ExportLayoutConfiguration.prototype.getColumns = function () {
        return this.columns;
    };
    /**
     * Set Columns
     * Columns that will be exported.
     * @param {any} val
     * @return {ExportLayoutConfiguration}
     */
    ExportLayoutConfiguration.prototype.setColumns = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.columns = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newExportLayoutConfigurationColumn();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.columns = a;
        }
        return this;
    };
    /**
     * Get Time
     * Time related configurations.
     * @return {p.ExportLayoutConfigurationTime}
     */
    ExportLayoutConfiguration.prototype.getTime = function () {
        return this.time;
    };
    /**
     * Set Time
     * Time related configurations.
     * @param {p.ExportLayoutConfigurationTime} val
     * @return {ExportLayoutConfiguration}
     */
    ExportLayoutConfiguration.prototype.setTime = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationTime().getProcessOutObjectClass())
            this.time = val;
        else {
            var obj = this.client.newExportLayoutConfigurationTime();
            obj.fillWithData(val);
            this.time = obj;
        }
        return this;
    };
    /**
     * Get Amount
     * Amount related configurations.
     * @return {p.ExportLayoutConfigurationAmount}
     */
    ExportLayoutConfiguration.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount related configurations.
     * @param {p.ExportLayoutConfigurationAmount} val
     * @return {ExportLayoutConfiguration}
     */
    ExportLayoutConfiguration.prototype.setAmount = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newExportLayoutConfigurationAmount().getProcessOutObjectClass())
            this.amount = val;
        else {
            var obj = this.client.newExportLayoutConfigurationAmount();
            obj.fillWithData(val);
            this.amount = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExportLayoutConfiguration}
     */
    ExportLayoutConfiguration.prototype.fillWithData = function (data) {
        if (data["columns"])
            this.setColumns(data["columns"]);
        if (data["time"])
            this.setTime(data["time"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    ExportLayoutConfiguration.prototype.toJSON = function () {
        return {
            "columns": this.getColumns(),
            "time": this.getTime(),
            "amount": this.getAmount(),
        };
    };
    return ExportLayoutConfiguration;
}());
module.exports = ExportLayoutConfiguration;
//# sourceMappingURL=exportlayoutconfiguration.js.map