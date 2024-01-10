// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CustomerPhone {
    private client: ProcessOut = null;

    /**
     * Phone number of the customer
     * @type {string}
     */
    private number: string = null;

    /**
     * Phone number dialing code of the customer
     * @type {string}
     */
    private dialingCode: string = null;

    /**
     * CustomerPhone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CustomerPhone) {
        if (typeof client === 'undefined')
            throw new Error("The CustomerPhone object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomerPhone()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CustomerPhone";
    }

    /**
     * Get Number
     * Phone number of the customer
     * @return {string}
     */
    public getNumber(): string {
        return this.number;
    }

    /**
     * Set Number
     * Phone number of the customer
     * @param {string} val
     * @return {CustomerPhone}
     */
    public setNumber(val: string): CustomerPhone {
        this.number = val;
        return this;
    }

    /**
     * Get DialingCode
     * Phone number dialing code of the customer
     * @return {string}
     */
    public getDialingCode(): string {
        return this.dialingCode;
    }

    /**
     * Set DialingCode
     * Phone number dialing code of the customer
     * @param {string} val
     * @return {CustomerPhone}
     */
    public setDialingCode(val: string): CustomerPhone {
        this.dialingCode = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CustomerPhone}
     */
    public fillWithData(data: any): CustomerPhone {
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
export = CustomerPhone;
