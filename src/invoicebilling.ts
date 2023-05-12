// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceBilling {
    private client: ProcessOut = null;

    /**
     * Address of the cardholder
     * @type {string}
     */
    private address1: string = null;

    /**
     * Secondary address of the cardholder
     * @type {string}
     */
    private address2: string = null;

    /**
     * City of the cardholder
     * @type {string}
     */
    private city: string = null;

    /**
     * State of the cardholder
     * @type {string}
     */
    private state: string = null;

    /**
     * Country code of the cardholder
     * @type {string}
     */
    private countryCode: string = null;

    /**
     * ZIP of the cardholder
     * @type {string}
     */
    private zip: string = null;

    /**
     * InvoiceBilling constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceBilling) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceBilling object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceBilling()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceBilling";
    }

    /**
     * Get Address1
     * Address of the cardholder
     * @return {string}
     */
    public getAddress1(): string {
        return this.address1;
    }

    /**
     * Set Address1
     * Address of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    public setAddress1(val: string): InvoiceBilling {
        this.address1 = val;
        return this;
    }

    /**
     * Get Address2
     * Secondary address of the cardholder
     * @return {string}
     */
    public getAddress2(): string {
        return this.address2;
    }

    /**
     * Set Address2
     * Secondary address of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    public setAddress2(val: string): InvoiceBilling {
        this.address2 = val;
        return this;
    }

    /**
     * Get City
     * City of the cardholder
     * @return {string}
     */
    public getCity(): string {
        return this.city;
    }

    /**
     * Set City
     * City of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    public setCity(val: string): InvoiceBilling {
        this.city = val;
        return this;
    }

    /**
     * Get State
     * State of the cardholder
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * State of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    public setState(val: string): InvoiceBilling {
        this.state = val;
        return this;
    }

    /**
     * Get CountryCode
     * Country code of the cardholder
     * @return {string}
     */
    public getCountryCode(): string {
        return this.countryCode;
    }

    /**
     * Set CountryCode
     * Country code of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    public setCountryCode(val: string): InvoiceBilling {
        this.countryCode = val;
        return this;
    }

    /**
     * Get Zip
     * ZIP of the cardholder
     * @return {string}
     */
    public getZip(): string {
        return this.zip;
    }

    /**
     * Set Zip
     * ZIP of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    public setZip(val: string): InvoiceBilling {
        this.zip = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceBilling}
     */
    public fillWithData(data: any): InvoiceBilling {
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
        };
    }

    
}
export = InvoiceBilling;
