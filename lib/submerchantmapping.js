"use strict";
// The content of this file was automatically generated
var SubmerchantMapping = /** @class */ (function () {
    /**
     * SubmerchantMapping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function SubmerchantMapping(client, prefill) {
        this.client = null;
        /**
         * ID of the ProcessOut submerchant this mapping belongs to
         * @type {string}
         */
        this.submerchantId = null;
        /**
         * ID of the gateway configuration this mapping applies to
         * @type {string}
         */
        this.gatewayConfigurationId = null;
        /**
         * Submerchant ID at the PSP the gateway configuration connects to
         * @type {string}
         */
        this.pspSubmerchantId = null;
        /**
         * Time at which the mapping was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The SubmerchantMapping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchantMapping()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    SubmerchantMapping.prototype.getProcessOutObjectClass = function () {
        return "SubmerchantMapping";
    };
    /**
     * Get SubmerchantId
     * ID of the ProcessOut submerchant this mapping belongs to
     * @return {string}
     */
    SubmerchantMapping.prototype.getSubmerchantId = function () {
        return this.submerchantId;
    };
    /**
     * Set SubmerchantId
     * ID of the ProcessOut submerchant this mapping belongs to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    SubmerchantMapping.prototype.setSubmerchantId = function (val) {
        this.submerchantId = val;
        return this;
    };
    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration this mapping applies to
     * @return {string}
     */
    SubmerchantMapping.prototype.getGatewayConfigurationId = function () {
        return this.gatewayConfigurationId;
    };
    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration this mapping applies to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    SubmerchantMapping.prototype.setGatewayConfigurationId = function (val) {
        this.gatewayConfigurationId = val;
        return this;
    };
    /**
     * Get PspSubmerchantId
     * Submerchant ID at the PSP the gateway configuration connects to
     * @return {string}
     */
    SubmerchantMapping.prototype.getPspSubmerchantId = function () {
        return this.pspSubmerchantId;
    };
    /**
     * Set PspSubmerchantId
     * Submerchant ID at the PSP the gateway configuration connects to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    SubmerchantMapping.prototype.setPspSubmerchantId = function (val) {
        this.pspSubmerchantId = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Time at which the mapping was created
     * @return {string}
     */
    SubmerchantMapping.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Time at which the mapping was created
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    SubmerchantMapping.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantMapping}
     */
    SubmerchantMapping.prototype.fillWithData = function (data) {
        if (data["submerchant_id"])
            this.setSubmerchantId(data["submerchant_id"]);
        if (data["gateway_configuration_id"])
            this.setGatewayConfigurationId(data["gateway_configuration_id"]);
        if (data["psp_submerchant_id"])
            this.setPspSubmerchantId(data["psp_submerchant_id"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    SubmerchantMapping.prototype.toJSON = function () {
        return {
            "submerchant_id": this.getSubmerchantId(),
            "gateway_configuration_id": this.getGatewayConfigurationId(),
            "psp_submerchant_id": this.getPspSubmerchantId(),
            "created_at": this.getCreatedAt(),
        };
    };
    return SubmerchantMapping;
}());
module.exports = SubmerchantMapping;
//# sourceMappingURL=submerchantmapping.js.map