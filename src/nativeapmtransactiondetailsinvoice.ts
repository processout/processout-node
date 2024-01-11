// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMTransactionDetailsInvoice {
    private client: ProcessOut = null;

    /**
     * Native APM Invoice amount
     * @type {string}
     */
    private amount: string = null;

    /**
     * Native APM Invoice currency code
     * @type {string}
     */
    private currencyCode: string = null;

    /**
     * NativeAPMTransactionDetailsInvoice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMTransactionDetailsInvoice) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMTransactionDetailsInvoice object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMTransactionDetailsInvoice()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMTransactionDetailsInvoice";
    }

    /**
     * Get Amount
     * Native APM Invoice amount
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Native APM Invoice amount
     * @param {string} val
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    public setAmount(val: string): NativeAPMTransactionDetailsInvoice {
        this.amount = val;
        return this;
    }

    /**
     * Get CurrencyCode
     * Native APM Invoice currency code
     * @return {string}
     */
    public getCurrencyCode(): string {
        return this.currencyCode;
    }

    /**
     * Set CurrencyCode
     * Native APM Invoice currency code
     * @param {string} val
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    public setCurrencyCode(val: string): NativeAPMTransactionDetailsInvoice {
        this.currencyCode = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    public fillWithData(data: any): NativeAPMTransactionDetailsInvoice {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency_code"])
            this.setCurrencyCode(data["currency_code"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "amount": this.getAmount(),
            "currency_code": this.getCurrencyCode(),
        };
    }

    
}
export = NativeAPMTransactionDetailsInvoice;
