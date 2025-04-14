// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class SubmerchantPhoneNumber {
    private client: ProcessOut = null;

    /**
     * Dialing code of the phone number
     * @type {string}
     */
    private dialingCode: string = null;

    /**
     * Phone number
     * @type {string}
     */
    private number: string = null;

    /**
     * SubmerchantPhoneNumber constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: SubmerchantPhoneNumber) {
        if (typeof client === 'undefined')
            throw new Error("The SubmerchantPhoneNumber object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchantPhoneNumber()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "SubmerchantPhoneNumber";
    }

    /**
     * Get DialingCode
     * Dialing code of the phone number
     * @return {string}
     */
    public getDialingCode(): string {
        return this.dialingCode;
    }

    /**
     * Set DialingCode
     * Dialing code of the phone number
     * @param {string} val
     * @return {SubmerchantPhoneNumber}
     */
    public setDialingCode(val: string): SubmerchantPhoneNumber {
        this.dialingCode = val;
        return this;
    }

    /**
     * Get Number
     * Phone number
     * @return {string}
     */
    public getNumber(): string {
        return this.number;
    }

    /**
     * Set Number
     * Phone number
     * @param {string} val
     * @return {SubmerchantPhoneNumber}
     */
    public setNumber(val: string): SubmerchantPhoneNumber {
        this.number = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantPhoneNumber}
     */
    public fillWithData(data: any): SubmerchantPhoneNumber {
        if (data["dialing_code"])
            this.setDialingCode(data["dialing_code"]);
        if (data["number"])
            this.setNumber(data["number"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "dialing_code": this.getDialingCode(),
            "number": this.getNumber(),
        };
    }

    
}
export = SubmerchantPhoneNumber;
