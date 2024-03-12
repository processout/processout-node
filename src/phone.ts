// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Phone {
    private client: ProcessOut = null;

    /**
     * Phone number (without dialing code)
     * @type {string}
     */
    private number: string = null;

    /**
     * Phone number dialing code
     * @type {string}
     */
    private dialingCode: string = null;

    /**
     * Phone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Phone) {
        if (typeof client === 'undefined')
            throw new Error("The Phone object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPhone()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Phone";
    }

    /**
     * Get Number
     * Phone number (without dialing code)
     * @return {string}
     */
    public getNumber(): string {
        return this.number;
    }

    /**
     * Set Number
     * Phone number (without dialing code)
     * @param {string} val
     * @return {Phone}
     */
    public setNumber(val: string): Phone {
        this.number = val;
        return this;
    }

    /**
     * Get DialingCode
     * Phone number dialing code
     * @return {string}
     */
    public getDialingCode(): string {
        return this.dialingCode;
    }

    /**
     * Set DialingCode
     * Phone number dialing code
     * @param {string} val
     * @return {Phone}
     */
    public setDialingCode(val: string): Phone {
        this.dialingCode = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Phone}
     */
    public fillWithData(data: any): Phone {
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
export = Phone;
