// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoicesProcessNativePaymentResponse {
    private client: ProcessOut = null;

    /**
     * Transaction linked to this Native APM
     * @type {p.Transaction}
     */
    private transaction: p.Transaction = null;

    /**
     * Native APM response
     * @type {p.NativeAPMResponse}
     */
    private nativeApm: p.NativeAPMResponse = null;

    /**
     * InvoicesProcessNativePaymentResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoicesProcessNativePaymentResponse) {
        if (typeof client === 'undefined')
            throw new Error("The InvoicesProcessNativePaymentResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoicesProcessNativePaymentResponse()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoicesProcessNativePaymentResponse";
    }

    /**
     * Get Transaction
     * Transaction linked to this Native APM
     * @return {p.Transaction}
     */
    public getTransaction(): p.Transaction {
        return this.transaction;
    }

    /**
     * Set Transaction
     * Transaction linked to this Native APM
     * @param {p.Transaction} val
     * @return {InvoicesProcessNativePaymentResponse}
     */
    public setTransaction(val: p.Transaction): InvoicesProcessNativePaymentResponse {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    }

    /**
     * Get NativeApm
     * Native APM response
     * @return {p.NativeAPMResponse}
     */
    public getNativeApm(): p.NativeAPMResponse {
        return this.nativeApm;
    }

    /**
     * Set NativeApm
     * Native APM response
     * @param {p.NativeAPMResponse} val
     * @return {InvoicesProcessNativePaymentResponse}
     */
    public setNativeApm(val: p.NativeAPMResponse): InvoicesProcessNativePaymentResponse {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMResponse().getProcessOutObjectClass())
            this.nativeApm = val;
        else {
            var obj = this.client.newNativeAPMResponse();
            obj.fillWithData(val);
            this.nativeApm = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesProcessNativePaymentResponse}
     */
    public fillWithData(data: any): InvoicesProcessNativePaymentResponse {
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["native_apm"])
            this.setNativeApm(data["native_apm"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "transaction": this.getTransaction(),
            "native_apm": this.getNativeApm(),
        };
    }

    
}
export = InvoicesProcessNativePaymentResponse;
