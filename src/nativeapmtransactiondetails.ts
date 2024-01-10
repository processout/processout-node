// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMTransactionDetails {
    private client: ProcessOut = null;

    /**
     * Native APM Gateway details
     * @type {p.NativeAPMTransactionDetailsGateway}
     */
    private gateway: p.NativeAPMTransactionDetailsGateway = null;

    /**
     * Native APM Invoice details
     * @type {p.NativeAPMTransactionDetailsInvoice}
     */
    private invoice: p.NativeAPMTransactionDetailsInvoice = null;

    /**
     * Native APM Parameter details
     * @type {any}
     */
    private parameters: any = null;

    /**
     * Native APM Transaction State
     * @type {string}
     */
    private state: string = null;

    /**
     * NativeAPMTransactionDetails constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMTransactionDetails) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMTransactionDetails object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMTransactionDetails()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMTransactionDetails";
    }

    /**
     * Get Gateway
     * Native APM Gateway details
     * @return {p.NativeAPMTransactionDetailsGateway}
     */
    public getGateway(): p.NativeAPMTransactionDetailsGateway {
        return this.gateway;
    }

    /**
     * Set Gateway
     * Native APM Gateway details
     * @param {p.NativeAPMTransactionDetailsGateway} val
     * @return {NativeAPMTransactionDetails}
     */
    public setGateway(val: p.NativeAPMTransactionDetailsGateway): NativeAPMTransactionDetails {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMTransactionDetailsGateway().getProcessOutObjectClass())
            this.gateway = val;
        else {
            var obj = this.client.newNativeAPMTransactionDetailsGateway();
            obj.fillWithData(val);
            this.gateway = obj;
        }
        return this;
    }

    /**
     * Get Invoice
     * Native APM Invoice details
     * @return {p.NativeAPMTransactionDetailsInvoice}
     */
    public getInvoice(): p.NativeAPMTransactionDetailsInvoice {
        return this.invoice;
    }

    /**
     * Set Invoice
     * Native APM Invoice details
     * @param {p.NativeAPMTransactionDetailsInvoice} val
     * @return {NativeAPMTransactionDetails}
     */
    public setInvoice(val: p.NativeAPMTransactionDetailsInvoice): NativeAPMTransactionDetails {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMTransactionDetailsInvoice().getProcessOutObjectClass())
            this.invoice = val;
        else {
            var obj = this.client.newNativeAPMTransactionDetailsInvoice();
            obj.fillWithData(val);
            this.invoice = obj;
        }
        return this;
    }

    /**
     * Get Parameters
     * Native APM Parameter details
     * @return {any}
     */
    public getParameters(): any {
        return this.parameters;
    }

    /**
     * Set Parameters
     * Native APM Parameter details
     * @param {any} val
     * @return {NativeAPMTransactionDetails}
     */
    public setParameters(val: any): NativeAPMTransactionDetails {
        if (val.length > 0 && typeof val[0] === 'object')
            this.parameters = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newNativeAPMParameterDefinition();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.parameters = a;
        }
        return this;
    }

    /**
     * Get State
     * Native APM Transaction State
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * Native APM Transaction State
     * @param {string} val
     * @return {NativeAPMTransactionDetails}
     */
    public setState(val: string): NativeAPMTransactionDetails {
        this.state = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetails}
     */
    public fillWithData(data: any): NativeAPMTransactionDetails {
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        if (data["invoice"])
            this.setInvoice(data["invoice"]);
        if (data["parameters"])
            this.setParameters(data["parameters"]);
        if (data["state"])
            this.setState(data["state"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "gateway": this.getGateway(),
            "invoice": this.getInvoice(),
            "parameters": this.getParameters(),
            "state": this.getState(),
        };
    }

    
}
export = NativeAPMTransactionDetails;
