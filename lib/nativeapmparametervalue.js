"use strict";
// The content of this file was automatically generated
var NativeAPMParameterValue = /** @class */ (function () {
    /**
     * NativeAPMParameterValue constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMParameterValue(client, prefill) {
        this.client = null;
        /**
         * Native APM parameter value key
         * @type {string}
         */
        this.key = null;
        /**
         * Native APM parameter value value
         * @type {string}
         */
        this.value = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMParameterValue object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMParameterValue()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMParameterValue.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMParameterValue";
    };
    /**
     * Get Key
     * Native APM parameter value key
     * @return {string}
     */
    NativeAPMParameterValue.prototype.getKey = function () {
        return this.key;
    };
    /**
     * Set Key
     * Native APM parameter value key
     * @param {string} val
     * @return {NativeAPMParameterValue}
     */
    NativeAPMParameterValue.prototype.setKey = function (val) {
        this.key = val;
        return this;
    };
    /**
     * Get Value
     * Native APM parameter value value
     * @return {string}
     */
    NativeAPMParameterValue.prototype.getValue = function () {
        return this.value;
    };
    /**
     * Set Value
     * Native APM parameter value value
     * @param {string} val
     * @return {NativeAPMParameterValue}
     */
    NativeAPMParameterValue.prototype.setValue = function (val) {
        this.value = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterValue}
     */
    NativeAPMParameterValue.prototype.fillWithData = function (data) {
        if (data["key"])
            this.setKey(data["key"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMParameterValue.prototype.toJSON = function () {
        return {
            "key": this.getKey(),
            "value": this.getValue(),
        };
    };
    return NativeAPMParameterValue;
}());
module.exports = NativeAPMParameterValue;
//# sourceMappingURL=nativeapmparametervalue.js.map