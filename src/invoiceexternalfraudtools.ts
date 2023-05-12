// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceExternalFraudTools {
    private client: ProcessOut = null;

    /**
     * Forter
     * @type {string}
     */
    private forter: string = null;

    /**
     * Signifyd
     * @type {string}
     */
    private signifyd: string = null;

    /**
     * InvoiceExternalFraudTools constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceExternalFraudTools) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceExternalFraudTools object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceExternalFraudTools()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceExternalFraudTools";
    }

    /**
     * Get Forter
     * Forter
     * @return {string}
     */
    public getForter(): string {
        return this.forter;
    }

    /**
     * Set Forter
     * Forter
     * @param {string} val
     * @return {InvoiceExternalFraudTools}
     */
    public setForter(val: string): InvoiceExternalFraudTools {
        this.forter = val;
        return this;
    }

    /**
     * Get Signifyd
     * Signifyd
     * @return {string}
     */
    public getSignifyd(): string {
        return this.signifyd;
    }

    /**
     * Set Signifyd
     * Signifyd
     * @param {string} val
     * @return {InvoiceExternalFraudTools}
     */
    public setSignifyd(val: string): InvoiceExternalFraudTools {
        this.signifyd = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceExternalFraudTools}
     */
    public fillWithData(data: any): InvoiceExternalFraudTools {
        if (data["forter"])
            this.setForter(data["forter"]);
        if (data["signifyd"])
            this.setSignifyd(data["signifyd"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "forter": this.getForter(),
            "signifyd": this.getSignifyd(),
        };
    }

    
}
export = InvoiceExternalFraudTools;
