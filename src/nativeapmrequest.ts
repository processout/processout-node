// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMRequest {
    private client: ProcessOut = null;

    /**
     * Native APM parameter values
     * @type {any}
     */
    private parameterValues: any = null;

    /**
     * NativeAPMRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMRequest) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMRequest()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMRequest";
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
     * @return {NativeAPMRequest}
     */
    public setParameterValues(val: any): NativeAPMRequest {
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
     * @return {NativeAPMRequest}
     */
    public fillWithData(data: any): NativeAPMRequest {
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
            "parameter_values": this.getParameterValues(),
        };
    }

    
}
export = NativeAPMRequest;
