// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class SubmerchantMapping {
    private client: ProcessOut = null;

    /**
     * ID of the ProcessOut submerchant this mapping belongs to
     * @type {string}
     */
    private submerchantId: string = null;

    /**
     * ID of the gateway configuration this mapping applies to
     * @type {string}
     */
    private gatewayConfigurationId: string = null;

    /**
     * Submerchant ID at the PSP the gateway configuration connects to
     * @type {string}
     */
    private pspSubmerchantId: string = null;

    /**
     * Time at which the mapping was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * SubmerchantMapping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: SubmerchantMapping) {
        if (typeof client === 'undefined')
            throw new Error("The SubmerchantMapping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchantMapping()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "SubmerchantMapping";
    }

    /**
     * Get SubmerchantId
     * ID of the ProcessOut submerchant this mapping belongs to
     * @return {string}
     */
    public getSubmerchantId(): string {
        return this.submerchantId;
    }

    /**
     * Set SubmerchantId
     * ID of the ProcessOut submerchant this mapping belongs to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    public setSubmerchantId(val: string): SubmerchantMapping {
        this.submerchantId = val;
        return this;
    }

    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration this mapping applies to
     * @return {string}
     */
    public getGatewayConfigurationId(): string {
        return this.gatewayConfigurationId;
    }

    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration this mapping applies to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    public setGatewayConfigurationId(val: string): SubmerchantMapping {
        this.gatewayConfigurationId = val;
        return this;
    }

    /**
     * Get PspSubmerchantId
     * Submerchant ID at the PSP the gateway configuration connects to
     * @return {string}
     */
    public getPspSubmerchantId(): string {
        return this.pspSubmerchantId;
    }

    /**
     * Set PspSubmerchantId
     * Submerchant ID at the PSP the gateway configuration connects to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    public setPspSubmerchantId(val: string): SubmerchantMapping {
        this.pspSubmerchantId = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Time at which the mapping was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Time at which the mapping was created
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    public setCreatedAt(val: string): SubmerchantMapping {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantMapping}
     */
    public fillWithData(data: any): SubmerchantMapping {
        if (data["submerchant_id"])
            this.setSubmerchantId(data["submerchant_id"]);
        if (data["gateway_configuration_id"])
            this.setGatewayConfigurationId(data["gateway_configuration_id"]);
        if (data["psp_submerchant_id"])
            this.setPspSubmerchantId(data["psp_submerchant_id"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "submerchant_id": this.getSubmerchantId(),
            "gateway_configuration_id": this.getGatewayConfigurationId(),
            "psp_submerchant_id": this.getPspSubmerchantId(),
            "created_at": this.getCreatedAt(),
        };
    }

    
}
export = SubmerchantMapping;
