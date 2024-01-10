// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceShippingPhone {
    private client: ProcessOut = null;

    /**
     * Phone number for the shipment
     * @type {string}
     */
    private number: string = null;

    /**
     * Phone number dialing code for the shipment
     * @type {string}
     */
    private dialingCode: string = null;

    /**
     * InvoiceShippingPhone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceShippingPhone) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceShippingPhone object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceShippingPhone()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceShippingPhone";
    }

    /**
     * Get Number
     * Phone number for the shipment
     * @return {string}
     */
    public getNumber(): string {
        return this.number;
    }

    /**
     * Set Number
     * Phone number for the shipment
     * @param {string} val
     * @return {InvoiceShippingPhone}
     */
    public setNumber(val: string): InvoiceShippingPhone {
        this.number = val;
        return this;
    }

    /**
     * Get DialingCode
     * Phone number dialing code for the shipment
     * @return {string}
     */
    public getDialingCode(): string {
        return this.dialingCode;
    }

    /**
     * Set DialingCode
     * Phone number dialing code for the shipment
     * @param {string} val
     * @return {InvoiceShippingPhone}
     */
    public setDialingCode(val: string): InvoiceShippingPhone {
        this.dialingCode = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShippingPhone}
     */
    public fillWithData(data: any): InvoiceShippingPhone {
        if (data["number"])
            this.setNumber(data["number"]);
        if (data["dialing_code"])
            this.setDialingCode(data["dialing_code"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "number": this.getNumber(),
            "dialing_code": this.getDialingCode(),
        };
    }

    
}
export = InvoiceShippingPhone;
