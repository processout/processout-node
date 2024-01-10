"use strict";
// The content of this file was automatically generated
var NativeAPMRequest = /** @class */ (function () {
    /**
     * NativeAPMRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMRequest(client, prefill) {
        this.client = null;
        /**
         * Native APM parameter values
         * @type {any}
         */
        this.parameterValues = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMRequest()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMRequest.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMRequest";
    };
    /**
     * Get ParameterValues
     * Native APM parameter values
     * @return {any}
     */
    NativeAPMRequest.prototype.getParameterValues = function () {
        return this.parameterValues;
    };
    /**
     * Set ParameterValues
     * Native APM parameter values
     * @param {any} val
     * @return {NativeAPMRequest}
     */
    NativeAPMRequest.prototype.setParameterValues = function (val) {
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
     * @return {NativeAPMRequest}
     */
    NativeAPMRequest.prototype.fillWithData = function (data) {
        if (data["parameter_values"])
            this.setParameterValues(data["parameter_values"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMRequest.prototype.toJSON = function () {
        return {
            "parameter_values": this.getParameterValues(),
        };
    };
    return NativeAPMRequest;
}());
module.exports = NativeAPMRequest;
//# sourceMappingURL=nativeapmrequest.js.map