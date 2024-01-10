"use strict";
// The content of this file was automatically generated
var NativeAPMResponse = /** @class */ (function () {
    /**
     * NativeAPMResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMResponse(client, prefill) {
        this.client = null;
        /**
         * Native APM response state
         * @type {string}
         */
        this.state = null;
        /**
         * Native APM parameter values description
         * @type {any}
         */
        this.parameterDefinitions = null;
        /**
         * Native APM parameter values
         * @type {any}
         */
        this.parameterValues = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMResponse()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMResponse.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMResponse";
    };
    /**
     * Get State
     * Native APM response state
     * @return {string}
     */
    NativeAPMResponse.prototype.getState = function () {
        return this.state;
    };
    /**
     * Set State
     * Native APM response state
     * @param {string} val
     * @return {NativeAPMResponse}
     */
    NativeAPMResponse.prototype.setState = function (val) {
        this.state = val;
        return this;
    };
    /**
     * Get ParameterDefinitions
     * Native APM parameter values description
     * @return {any}
     */
    NativeAPMResponse.prototype.getParameterDefinitions = function () {
        return this.parameterDefinitions;
    };
    /**
     * Set ParameterDefinitions
     * Native APM parameter values description
     * @param {any} val
     * @return {NativeAPMResponse}
     */
    NativeAPMResponse.prototype.setParameterDefinitions = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.parameterDefinitions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newNativeAPMParameterDefinition();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.parameterDefinitions = a;
        }
        return this;
    };
    /**
     * Get ParameterValues
     * Native APM parameter values
     * @return {any}
     */
    NativeAPMResponse.prototype.getParameterValues = function () {
        return this.parameterValues;
    };
    /**
     * Set ParameterValues
     * Native APM parameter values
     * @param {any} val
     * @return {NativeAPMResponse}
     */
    NativeAPMResponse.prototype.setParameterValues = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.parameterValues = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newNativeAPMParameterValue();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.parameterValues = a;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMResponse}
     */
    NativeAPMResponse.prototype.fillWithData = function (data) {
        if (data["state"])
            this.setState(data["state"]);
        if (data["parameter_definitions"])
            this.setParameterDefinitions(data["parameter_definitions"]);
        if (data["parameter_values"])
            this.setParameterValues(data["parameter_values"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMResponse.prototype.toJSON = function () {
        return {
            "state": this.getState(),
            "parameter_definitions": this.getParameterDefinitions(),
            "parameter_values": this.getParameterValues(),
        };
    };
    return NativeAPMResponse;
}());
module.exports = NativeAPMResponse;
//# sourceMappingURL=nativeapmresponse.js.map