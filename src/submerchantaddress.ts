// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class SubmerchantAddress {
    private client: ProcessOut = null;

    /**
     * Address line 1
     * @type {string}
     */
    private line1: string = null;

    /**
     * Address line 2
     * @type {string}
     */
    private line2: string = null;

    /**
     * City
     * @type {string}
     */
    private city: string = null;

    /**
     * State
     * @type {string}
     */
    private state: string = null;

    /**
     * Country code
     * @type {string}
     */
    private countryCode: string = null;

    /**
     * ZIP code
     * @type {string}
     */
    private zip: string = null;

    /**
     * County (US specific)
     * @type {string}
     */
    private county: string = null;

    /**
     * SubmerchantAddress constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: SubmerchantAddress) {
        if (typeof client === 'undefined')
            throw new Error("The SubmerchantAddress object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubmerchantAddress()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "SubmerchantAddress";
    }

    /**
     * Get Line1
     * Address line 1
     * @return {string}
     */
    public getLine1(): string {
        return this.line1;
    }

    /**
     * Set Line1
     * Address line 1
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setLine1(val: string): SubmerchantAddress {
        this.line1 = val;
        return this;
    }

    /**
     * Get Line2
     * Address line 2
     * @return {string}
     */
    public getLine2(): string {
        return this.line2;
    }

    /**
     * Set Line2
     * Address line 2
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setLine2(val: string): SubmerchantAddress {
        this.line2 = val;
        return this;
    }

    /**
     * Get City
     * City
     * @return {string}
     */
    public getCity(): string {
        return this.city;
    }

    /**
     * Set City
     * City
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setCity(val: string): SubmerchantAddress {
        this.city = val;
        return this;
    }

    /**
     * Get State
     * State
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * State
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setState(val: string): SubmerchantAddress {
        this.state = val;
        return this;
    }

    /**
     * Get CountryCode
     * Country code
     * @return {string}
     */
    public getCountryCode(): string {
        return this.countryCode;
    }

    /**
     * Set CountryCode
     * Country code
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setCountryCode(val: string): SubmerchantAddress {
        this.countryCode = val;
        return this;
    }

    /**
     * Get Zip
     * ZIP code
     * @return {string}
     */
    public getZip(): string {
        return this.zip;
    }

    /**
     * Set Zip
     * ZIP code
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setZip(val: string): SubmerchantAddress {
        this.zip = val;
        return this;
    }

    /**
     * Get County
     * County (US specific)
     * @return {string}
     */
    public getCounty(): string {
        return this.county;
    }

    /**
     * Set County
     * County (US specific)
     * @param {string} val
     * @return {SubmerchantAddress}
     */
    public setCounty(val: string): SubmerchantAddress {
        this.county = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantAddress}
     */
    public fillWithData(data: any): SubmerchantAddress {
        if (data["line1"])
            this.setLine1(data["line1"]);
        if (data["line2"])
            this.setLine2(data["line2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["county"])
            this.setCounty(data["county"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "line1": this.getLine1(),
            "line2": this.getLine2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
            "county": this.getCounty(),
        };
    }

    
}
export = SubmerchantAddress;
