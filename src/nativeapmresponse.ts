// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMResponse {
    private client: ProcessOut = null;

    /**
     * Native APM response state
     * @type {string}
     */
    private state: string = null;

    /**
     * Native APM parameter values description
     * @type {any}
     */
    private parameterDefinitions: any = null;

    /**
     * Native APM parameter values
     * @type {any}
     */
    private parameterValues: any = null;

    /**
     * NativeAPMResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMResponse) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMResponse()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMResponse";
    }

    /**
     * Get State
     * Native APM response state
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * Native APM response state
     * @param {string} val
     * @return {NativeAPMResponse}
     */
    public setState(val: string): NativeAPMResponse {
        this.state = val;
        return this;
    }

    /**
     * Get ParameterDefinitions
     * Native APM parameter values description
     * @return {any}
     */
    public getParameterDefinitions(): any {
        return this.parameterDefinitions;
    }

    /**
     * Set ParameterDefinitions
     * Native APM parameter values description
     * @param {any} val
     * @return {NativeAPMResponse}
     */
    public setParameterDefinitions(val: any): NativeAPMResponse {
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
    }

    /**
     * Get ParameterValues
     * Native APM parameter values
     * @return {any}
     */
    public getParameterValues(): any {
        return this.parameterValues;
    }

    /**
     * Set ParameterValues
     * Native APM parameter values
     * @param {any} val
     * @return {NativeAPMResponse}
     */
    public setParameterValues(val: any): NativeAPMResponse {
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
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMResponse}
     */
    public fillWithData(data: any): NativeAPMResponse {
        if (data["state"])
            this.setState(data["state"]);
        if (data["parameter_definitions"])
            this.setParameterDefinitions(data["parameter_definitions"]);
        if (data["parameter_values"])
            this.setParameterValues(data["parameter_values"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "state": this.getState(),
            "parameter_definitions": this.getParameterDefinitions(),
            "parameter_values": this.getParameterValues(),
        };
    }

    
}
export = NativeAPMResponse;
