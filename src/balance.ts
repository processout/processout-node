// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Balance {
    private client: ProcessOut = null;

    /**
     * Amount available
     * @type {string}
     */
    private amount: string = null;

    /**
     * Currency the balance is in
     * @type {string}
     */
    private currency: string = null;

    /**
     * Expiry time of the voucher
     * @type {string}
     */
    private expiry: string = null;

    /**
     * Balance constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Balance) {
        if (typeof client === 'undefined')
            throw new Error("The Balance object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newBalance()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Balance";
    }

    /**
     * Get Amount
     * Amount available
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount available
     * @param {string} val
     * @return {Balance}
     */
    public setAmount(val: string): Balance {
        this.amount = val;
        return this;
    }

    /**
     * Get Currency
     * Currency the balance is in
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency the balance is in
     * @param {string} val
     * @return {Balance}
     */
    public setCurrency(val: string): Balance {
        this.currency = val;
        return this;
    }

    /**
     * Get Expiry
     * Expiry time of the voucher
     * @return {string}
     */
    public getExpiry(): string {
        return this.expiry;
    }

    /**
     * Set Expiry
     * Expiry time of the voucher
     * @param {string} val
     * @return {Balance}
     */
    public setExpiry(val: string): Balance {
        this.expiry = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Balance}
     */
    public fillWithData(data: any): Balance {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["expiry"])
            this.setExpiry(data["expiry"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "expiry": this.getExpiry(),
        };
    }

    
}
export = Balance;
