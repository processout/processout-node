// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMParameterDefinition {
    private client: ProcessOut = null;

    /**
     * Native APM parameter value key
     * @type {string}
     */
    private key: string = null;

    /**
     * NativeAPM parameter value type
     * @type {string}
     */
    private type: string = null;

    /**
     * NativeAPM parameter value requirement
     * @type {boolean}
     */
    private required: boolean = null;

    /**
     * NativeAPM parameter value length
     * @type {number}
     */
    private length: number = null;

    /**
     * Native APM parameter display name
     * @type {string}
     */
    private displayName: string = null;

    /**
     * Native APM parameter available input values
     * @type {any}
     */
    private availableValues: any = null;

    /**
     * NativeAPMParameterDefinition constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMParameterDefinition) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMParameterDefinition object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMParameterDefinition()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMParameterDefinition";
    }

    /**
     * Get Key
     * Native APM parameter value key
     * @return {string}
     */
    public getKey(): string {
        return this.key;
    }

    /**
     * Set Key
     * Native APM parameter value key
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    public setKey(val: string): NativeAPMParameterDefinition {
        this.key = val;
        return this;
    }

    /**
     * Get Type
     * NativeAPM parameter value type
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * NativeAPM parameter value type
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    public setType(val: string): NativeAPMParameterDefinition {
        this.type = val;
        return this;
    }

    /**
     * Get Required
     * NativeAPM parameter value requirement
     * @return {boolean}
     */
    public getRequired(): boolean {
        return this.required;
    }

    /**
     * Set Required
     * NativeAPM parameter value requirement
     * @param {boolean} val
     * @return {NativeAPMParameterDefinition}
     */
    public setRequired(val: boolean): NativeAPMParameterDefinition {
        this.required = val;
        return this;
    }

    /**
     * Get Length
     * NativeAPM parameter value length
     * @return {number}
     */
    public getLength(): number {
        return this.length;
    }

    /**
     * Set Length
     * NativeAPM parameter value length
     * @param {number} val
     * @return {NativeAPMParameterDefinition}
     */
    public setLength(val: number): NativeAPMParameterDefinition {
        this.length = val;
        return this;
    }

    /**
     * Get DisplayName
     * Native APM parameter display name
     * @return {string}
     */
    public getDisplayName(): string {
        return this.displayName;
    }

    /**
     * Set DisplayName
     * Native APM parameter display name
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    public setDisplayName(val: string): NativeAPMParameterDefinition {
        this.displayName = val;
        return this;
    }

    /**
     * Get AvailableValues
     * Native APM parameter available input values
     * @return {any}
     */
    public getAvailableValues(): any {
        return this.availableValues;
    }

    /**
     * Set AvailableValues
     * Native APM parameter available input values
     * @param {any} val
     * @return {NativeAPMParameterDefinition}
     */
    public setAvailableValues(val: any): NativeAPMParameterDefinition {
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
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterDefinition}
     */
    public fillWithData(data: any): NativeAPMParameterDefinition {
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
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "key": this.getKey(),
            "type": this.getType(),
            "required": this.getRequired(),
            "length": this.getLength(),
            "display_name": this.getDisplayName(),
            "available_values": this.getAvailableValues(),
        };
    }

    
}
export = NativeAPMParameterDefinition;
