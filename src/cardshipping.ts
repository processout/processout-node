// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CardShipping {
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
     * Shipping phone number
     * @type {p.Phone}
     */
    private phone: p.Phone = null;

    /**
     * First name of the card shipping
     * @type {string}
     */
    private firstName: string = null;

    /**
     * Last name of the card shipping
     * @type {string}
     */
    private lastName: string = null;

    /**
     * Email of the card shipping
     * @type {string}
     */
    private email: string = null;

    /**
     * CardShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardShipping) {
        if (typeof client === 'undefined')
            throw new Error("The CardShipping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardShipping()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CardShipping";
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
     * @return {CardShipping}
     */
    public setAddress1(val: string): CardShipping {
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
     * @return {CardShipping}
     */
    public setAddress2(val: string): CardShipping {
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
     * @return {CardShipping}
     */
    public setCity(val: string): CardShipping {
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
     * @return {CardShipping}
     */
    public setState(val: string): CardShipping {
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
     * @return {CardShipping}
     */
    public setCountryCode(val: string): CardShipping {
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
     * @return {CardShipping}
     */
    public setZip(val: string): CardShipping {
        this.zip = val;
        return this;
    }

    /**
     * Get Phone
     * Shipping phone number
     * @return {p.Phone}
     */
    public getPhone(): p.Phone {
        return this.phone;
    }

    /**
     * Set Phone
     * Shipping phone number
     * @param {p.Phone} val
     * @return {CardShipping}
     */
    public setPhone(val: p.Phone): CardShipping {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPhone().getProcessOutObjectClass())
            this.phone = val;
        else {
            var obj = this.client.newPhone();
            obj.fillWithData(val);
            this.phone = obj;
        }
        return this;
    }

    /**
     * Get FirstName
     * First name of the card shipping
     * @return {string}
     */
    public getFirstName(): string {
        return this.firstName;
    }

    /**
     * Set FirstName
     * First name of the card shipping
     * @param {string} val
     * @return {CardShipping}
     */
    public setFirstName(val: string): CardShipping {
        this.firstName = val;
        return this;
    }

    /**
     * Get LastName
     * Last name of the card shipping
     * @return {string}
     */
    public getLastName(): string {
        return this.lastName;
    }

    /**
     * Set LastName
     * Last name of the card shipping
     * @param {string} val
     * @return {CardShipping}
     */
    public setLastName(val: string): CardShipping {
        this.lastName = val;
        return this;
    }

    /**
     * Get Email
     * Email of the card shipping
     * @return {string}
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Set Email
     * Email of the card shipping
     * @param {string} val
     * @return {CardShipping}
     */
    public setEmail(val: string): CardShipping {
        this.email = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardShipping}
     */
    public fillWithData(data: any): CardShipping {
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
        if (data["phone"])
            this.setPhone(data["phone"]);
        if (data["first_name"])
            this.setFirstName(data["first_name"]);
        if (data["last_name"])
            this.setLastName(data["last_name"]);
        if (data["email"])
            this.setEmail(data["email"]);
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
            "phone": this.getPhone(),
            "first_name": this.getFirstName(),
            "last_name": this.getLastName(),
            "email": this.getEmail(),
        };
    }

    
}
export = CardShipping;
