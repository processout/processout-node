// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceTax {
    private client: ProcessOut = null;

    /**
     * Amount of the tax for an invoice
     * @type {string}
     */
    private amount: string = null;

    /**
     * Rate of the tax for an invoice
     * @type {string}
     */
    private rate: string = null;

    /**
     * InvoiceTax constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceTax) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceTax object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceTax()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceTax";
    }

    /**
     * Get Amount
     * Amount of the tax for an invoice
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the tax for an invoice
     * @param {string} val
     * @return {InvoiceTax}
     */
    public setAmount(val: string): InvoiceTax {
        this.amount = val;
        return this;
    }

    /**
     * Get Rate
     * Rate of the tax for an invoice
     * @return {string}
     */
    public getRate(): string {
        return this.rate;
    }

    /**
     * Set Rate
     * Rate of the tax for an invoice
     * @param {string} val
     * @return {InvoiceTax}
     */
    public setRate(val: string): InvoiceTax {
        this.rate = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceTax}
     */
    public fillWithData(data: any): InvoiceTax {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["rate"])
            this.setRate(data["rate"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "amount": this.getAmount(),
            "rate": this.getRate(),
        };
    }

    
}
export = InvoiceTax;
