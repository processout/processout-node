// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMParameterValueDefinition {
    private client: ProcessOut = null;

    /**
     * Native APM parameter value
     * @type {string}
     */
    private value: string = null;

    /**
     * Native APM parameter default value flag
     * @type {boolean}
     */
    private default: boolean = null;

    /**
     * Native APM parameter value display name
     * @type {string}
     */
    private displayName: string = null;

    /**
     * NativeAPMParameterValueDefinition constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMParameterValueDefinition) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMParameterValueDefinition object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMParameterValueDefinition()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMParameterValueDefinition";
    }

    /**
     * Get Value
     * Native APM parameter value
     * @return {string}
     */
    public getValue(): string {
        return this.value;
    }

    /**
     * Set Value
     * Native APM parameter value
     * @param {string} val
     * @return {NativeAPMParameterValueDefinition}
     */
    public setValue(val: string): NativeAPMParameterValueDefinition {
        this.value = val;
        return this;
    }

    /**
     * Get Default
     * Native APM parameter default value flag
     * @return {boolean}
     */
    public getDefault(): boolean {
        return this.default;
    }

    /**
     * Set Default
     * Native APM parameter default value flag
     * @param {boolean} val
     * @return {NativeAPMParameterValueDefinition}
     */
    public setDefault(val: boolean): NativeAPMParameterValueDefinition {
        this.default = val;
        return this;
    }

    /**
     * Get DisplayName
     * Native APM parameter value display name
     * @return {string}
     */
    public getDisplayName(): string {
        return this.displayName;
    }

    /**
     * Set DisplayName
     * Native APM parameter value display name
     * @param {string} val
     * @return {NativeAPMParameterValueDefinition}
     */
    public setDisplayName(val: string): NativeAPMParameterValueDefinition {
        this.displayName = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterValueDefinition}
     */
    public fillWithData(data: any): NativeAPMParameterValueDefinition {
        if (data["value"])
            this.setValue(data["value"]);
        if (data["default"])
            this.setDefault(data["default"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "value": this.getValue(),
            "default": this.getDefault(),
            "display_name": this.getDisplayName(),
        };
    }

    
}
export = NativeAPMParameterValueDefinition;
