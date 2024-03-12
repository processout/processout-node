// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CardContact {
    private client: ProcessOut = null;

    /**
     * Address line of the card holder
     * @type {string}
     */
    private address1: string = null;

    /**
     * Secondary address line of the card holder
     * @type {string}
     */
    private address2: string = null;

    /**
     * City of the card holder
     * @type {string}
     */
    private city: string = null;

    /**
     * State of the card holder
     * @type {string}
     */
    private state: string = null;

    /**
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @type {string}
     */
    private countryCode: string = null;

    /**
     * ZIP code of the card holder
     * @type {string}
     */
    private zip: string = null;

    /**
     * CardContact constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardContact) {
        if (typeof client === 'undefined')
            throw new Error("The CardContact object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardContact()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CardContact";
    }

    /**
     * Get Address1
     * Address line of the card holder
     * @return {string}
     */
    public getAddress1(): string {
        return this.address1;
    }

    /**
     * Set Address1
     * Address line of the card holder
     * @param {string} val
     * @return {CardContact}
     */
    public setAddress1(val: string): CardContact {
        this.address1 = val;
        return this;
    }

    /**
     * Get Address2
     * Secondary address line of the card holder
     * @return {string}
     */
    public getAddress2(): string {
        return this.address2;
    }

    /**
     * Set Address2
     * Secondary address line of the card holder
     * @param {string} val
     * @return {CardContact}
     */
    public setAddress2(val: string): CardContact {
        this.address2 = val;
        return this;
    }

    /**
     * Get City
     * City of the card holder
     * @return {string}
     */
    public getCity(): string {
        return this.city;
    }

    /**
     * Set City
     * City of the card holder
     * @param {string} val
     * @return {CardContact}
     */
    public setCity(val: string): CardContact {
        this.city = val;
        return this;
    }

    /**
     * Get State
     * State of the card holder
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * State of the card holder
     * @param {string} val
     * @return {CardContact}
     */
    public setState(val: string): CardContact {
        this.state = val;
        return this;
    }

    /**
     * Get CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @return {string}
     */
    public getCountryCode(): string {
        return this.countryCode;
    }

    /**
     * Set CountryCode
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {CardContact}
     */
    public setCountryCode(val: string): CardContact {
        this.countryCode = val;
        return this;
    }

    /**
     * Get Zip
     * ZIP code of the card holder
     * @return {string}
     */
    public getZip(): string {
        return this.zip;
    }

    /**
     * Set Zip
     * ZIP code of the card holder
     * @param {string} val
     * @return {CardContact}
     */
    public setZip(val: string): CardContact {
        this.zip = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardContact}
     */
    public fillWithData(data: any): CardContact {
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
export = CardContact;
