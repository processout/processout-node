// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMParameterValue {
    private client: ProcessOut = null;

    /**
     * Native APM parameter value key
     * @type {string}
     */
    private key: string = null;

    /**
     * Native APM parameter value value
     * @type {string}
     */
    private value: string = null;

    /**
     * NativeAPMParameterValue constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMParameterValue) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMParameterValue object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMParameterValue()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMParameterValue";
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
     * @return {NativeAPMParameterValue}
     */
    public setKey(val: string): NativeAPMParameterValue {
        this.key = val;
        return this;
    }

    /**
     * Get Value
     * Native APM parameter value value
     * @return {string}
     */
    public getValue(): string {
        return this.value;
    }

    /**
     * Set Value
     * Native APM parameter value value
     * @param {string} val
     * @return {NativeAPMParameterValue}
     */
    public setValue(val: string): NativeAPMParameterValue {
        this.value = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterValue}
     */
    public fillWithData(data: any): NativeAPMParameterValue {
        if (data["key"])
            this.setKey(data["key"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "key": this.getKey(),
            "value": this.getValue(),
        };
    }

    
}
export = NativeAPMParameterValue;
