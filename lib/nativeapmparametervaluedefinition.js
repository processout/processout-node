"use strict";
// The content of this file was automatically generated
var NativeAPMParameterValueDefinition = /** @class */ (function () {
    /**
     * NativeAPMParameterValueDefinition constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMParameterValueDefinition(client, prefill) {
        this.client = null;
        /**
         * Native APM parameter value
         * @type {string}
         */
        this.value = null;
        /**
         * Native APM parameter default value flag
         * @type {boolean}
         */
        this.default = null;
        /**
         * Native APM parameter value display name
         * @type {string}
         */
        this.displayName = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMParameterValueDefinition object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMParameterValueDefinition()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMParameterValueDefinition.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMParameterValueDefinition";
    };
    /**
     * Get Value
     * Native APM parameter value
     * @return {string}
     */
    NativeAPMParameterValueDefinition.prototype.getValue = function () {
        return this.value;
    };
    /**
     * Set Value
     * Native APM parameter value
     * @param {string} val
     * @return {NativeAPMParameterValueDefinition}
     */
    NativeAPMParameterValueDefinition.prototype.setValue = function (val) {
        this.value = val;
        return this;
    };
    /**
     * Get Default
     * Native APM parameter default value flag
     * @return {boolean}
     */
    NativeAPMParameterValueDefinition.prototype.getDefault = function () {
        return this.default;
    };
    /**
     * Set Default
     * Native APM parameter default value flag
     * @param {boolean} val
     * @return {NativeAPMParameterValueDefinition}
     */
    NativeAPMParameterValueDefinition.prototype.setDefault = function (val) {
        this.default = val;
        return this;
    };
    /**
     * Get DisplayName
     * Native APM parameter value display name
     * @return {string}
     */
    NativeAPMParameterValueDefinition.prototype.getDisplayName = function () {
        return this.displayName;
    };
    /**
     * Set DisplayName
     * Native APM parameter value display name
     * @param {string} val
     * @return {NativeAPMParameterValueDefinition}
     */
    NativeAPMParameterValueDefinition.prototype.setDisplayName = function (val) {
        this.displayName = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterValueDefinition}
     */
    NativeAPMParameterValueDefinition.prototype.fillWithData = function (data) {
        if (data["value"])
            this.setValue(data["value"]);
        if (data["default"])
            this.setDefault(data["default"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMParameterValueDefinition.prototype.toJSON = function () {
        return {
            "value": this.getValue(),
            "default": this.getDefault(),
            "display_name": this.getDisplayName(),
        };
    };
    return NativeAPMParameterValueDefinition;
}());
module.exports = NativeAPMParameterValueDefinition;
//# sourceMappingURL=nativeapmparametervaluedefinition.js.map