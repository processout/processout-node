"use strict";
// The content of this file was automatically generated
var NativeAPMParameterDefinition = /** @class */ (function () {
    /**
     * NativeAPMParameterDefinition constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function NativeAPMParameterDefinition(client, prefill) {
        this.client = null;
        /**
         * Native APM parameter value key
         * @type {string}
         */
        this.key = null;
        /**
         * NativeAPM parameter value type
         * @type {string}
         */
        this.type = null;
        /**
         * NativeAPM parameter value requirement
         * @type {boolean}
         */
        this.required = null;
        /**
         * NativeAPM parameter value length
         * @type {number}
         */
        this.length = null;
        /**
         * Native APM parameter display name
         * @type {string}
         */
        this.displayName = null;
        /**
         * Native APM parameter available input values
         * @type {any}
         */
        this.availableValues = null;
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMParameterDefinition object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMParameterDefinition()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    NativeAPMParameterDefinition.prototype.getProcessOutObjectClass = function () {
        return "NativeAPMParameterDefinition";
    };
    /**
     * Get Key
     * Native APM parameter value key
     * @return {string}
     */
    NativeAPMParameterDefinition.prototype.getKey = function () {
        return this.key;
    };
    /**
     * Set Key
     * Native APM parameter value key
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.setKey = function (val) {
        this.key = val;
        return this;
    };
    /**
     * Get Type
     * NativeAPM parameter value type
     * @return {string}
     */
    NativeAPMParameterDefinition.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * NativeAPM parameter value type
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get Required
     * NativeAPM parameter value requirement
     * @return {boolean}
     */
    NativeAPMParameterDefinition.prototype.getRequired = function () {
        return this.required;
    };
    /**
     * Set Required
     * NativeAPM parameter value requirement
     * @param {boolean} val
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.setRequired = function (val) {
        this.required = val;
        return this;
    };
    /**
     * Get Length
     * NativeAPM parameter value length
     * @return {number}
     */
    NativeAPMParameterDefinition.prototype.getLength = function () {
        return this.length;
    };
    /**
     * Set Length
     * NativeAPM parameter value length
     * @param {number} val
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.setLength = function (val) {
        this.length = val;
        return this;
    };
    /**
     * Get DisplayName
     * Native APM parameter display name
     * @return {string}
     */
    NativeAPMParameterDefinition.prototype.getDisplayName = function () {
        return this.displayName;
    };
    /**
     * Set DisplayName
     * Native APM parameter display name
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.setDisplayName = function (val) {
        this.displayName = val;
        return this;
    };
    /**
     * Get AvailableValues
     * Native APM parameter available input values
     * @return {any}
     */
    NativeAPMParameterDefinition.prototype.getAvailableValues = function () {
        return this.availableValues;
    };
    /**
     * Set AvailableValues
     * Native APM parameter available input values
     * @param {any} val
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.setAvailableValues = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.availableValues = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newNativeAPMParameterValueDefinition();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.availableValues = a;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterDefinition}
     */
    NativeAPMParameterDefinition.prototype.fillWithData = function (data) {
        if (data["key"])
            this.setKey(data["key"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["required"])
            this.setRequired(data["required"]);
        if (data["length"])
            this.setLength(data["length"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["available_values"])
            this.setAvailableValues(data["available_values"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    NativeAPMParameterDefinition.prototype.toJSON = function () {
        return {
            "key": this.getKey(),
            "type": this.getType(),
            "required": this.getRequired(),
            "length": this.getLength(),
            "display_name": this.getDisplayName(),
            "available_values": this.getAvailableValues(),
        };
    };
    return NativeAPMParameterDefinition;
}());
module.exports = NativeAPMParameterDefinition;
//# sourceMappingURL=nativeapmparameterdefinition.js.map