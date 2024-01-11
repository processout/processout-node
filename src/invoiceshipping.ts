// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceShipping {
    private client: ProcessOut = null;

    /**
     * Amount of the shipping
     * @type {string}
     */
    private amount: string = null;

    /**
     * Delivery method
     * @type {string}
     */
    private method: string = null;

    /**
     * Delivery provider
     * @type {string}
     */
    private provider: string = null;

    /**
     * Shipping delay
     * @type {string}
     */
    private delay: string = null;

    /**
     * Address where the shipment will be delivered
     * @type {string}
     */
    private address1: string = null;

    /**
     * Secondary address where the shipment will be delivered
     * @type {string}
     */
    private address2: string = null;

    /**
     * City where the shipment will be delivered
     * @type {string}
     */
    private city: string = null;

    /**
     * State where the shipment will be delivered
     * @type {string}
     */
    private state: string = null;

    /**
     * Country code where the shipment will be delivered
     * @type {string}
     */
    private countryCode: string = null;

    /**
     * ZIP where the shipment will be delivered
     * @type {string}
     */
    private zip: string = null;

    /**
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @type {string}
     */
    private phoneNumber: string = null;

    /**
     * Phone number for the shipment
     * @type {p.InvoiceShippingPhone}
     */
    private phone: p.InvoiceShippingPhone = null;

    /**
     * Date at which the shipment is expected to be sent
     * @type {string}
     */
    private expectsShippingAt: string = null;

    /**
     * Relay store name
     * @type {string}
     */
    private relayStoreName: string = null;

    /**
     * InvoiceShipping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceShipping) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceShipping object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceShipping()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceShipping";
    }

    /**
     * Get Amount
     * Amount of the shipping
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount of the shipping
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setAmount(val: string): InvoiceShipping {
        this.amount = val;
        return this;
    }

    /**
     * Get Method
     * Delivery method
     * @return {string}
     */
    public getMethod(): string {
        return this.method;
    }

    /**
     * Set Method
     * Delivery method
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setMethod(val: string): InvoiceShipping {
        this.method = val;
        return this;
    }

    /**
     * Get Provider
     * Delivery provider
     * @return {string}
     */
    public getProvider(): string {
        return this.provider;
    }

    /**
     * Set Provider
     * Delivery provider
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setProvider(val: string): InvoiceShipping {
        this.provider = val;
        return this;
    }

    /**
     * Get Delay
     * Shipping delay
     * @return {string}
     */
    public getDelay(): string {
        return this.delay;
    }

    /**
     * Set Delay
     * Shipping delay
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setDelay(val: string): InvoiceShipping {
        this.delay = val;
        return this;
    }

    /**
     * Get Address1
     * Address where the shipment will be delivered
     * @return {string}
     */
    public getAddress1(): string {
        return this.address1;
    }

    /**
     * Set Address1
     * Address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setAddress1(val: string): InvoiceShipping {
        this.address1 = val;
        return this;
    }

    /**
     * Get Address2
     * Secondary address where the shipment will be delivered
     * @return {string}
     */
    public getAddress2(): string {
        return this.address2;
    }

    /**
     * Set Address2
     * Secondary address where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setAddress2(val: string): InvoiceShipping {
        this.address2 = val;
        return this;
    }

    /**
     * Get City
     * City where the shipment will be delivered
     * @return {string}
     */
    public getCity(): string {
        return this.city;
    }

    /**
     * Set City
     * City where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setCity(val: string): InvoiceShipping {
        this.city = val;
        return this;
    }

    /**
     * Get State
     * State where the shipment will be delivered
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * State where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setState(val: string): InvoiceShipping {
        this.state = val;
        return this;
    }

    /**
     * Get CountryCode
     * Country code where the shipment will be delivered
     * @return {string}
     */
    public getCountryCode(): string {
        return this.countryCode;
    }

    /**
     * Set CountryCode
     * Country code where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setCountryCode(val: string): InvoiceShipping {
        this.countryCode = val;
        return this;
    }

    /**
     * Get Zip
     * ZIP where the shipment will be delivered
     * @return {string}
     */
    public getZip(): string {
        return this.zip;
    }

    /**
     * Set Zip
     * ZIP where the shipment will be delivered
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setZip(val: string): InvoiceShipping {
        this.zip = val;
        return this;
    }

    /**
     * Get PhoneNumber
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @return {string}
     */
    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    /**
     * Set PhoneNumber
     * Shipment full phone number, consisting of a combined dialing code and phone number
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setPhoneNumber(val: string): InvoiceShipping {
        this.phoneNumber = val;
        return this;
    }

    /**
     * Get Phone
     * Phone number for the shipment
     * @return {p.InvoiceShippingPhone}
     */
    public getPhone(): p.InvoiceShippingPhone {
        return this.phone;
    }

    /**
     * Set Phone
     * Phone number for the shipment
     * @param {p.InvoiceShippingPhone} val
     * @return {InvoiceShipping}
     */
    public setPhone(val: p.InvoiceShippingPhone): InvoiceShipping {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newInvoiceShippingPhone().getProcessOutObjectClass())
            this.phone = val;
        else {
            var obj = this.client.newInvoiceShippingPhone();
            obj.fillWithData(val);
            this.phone = obj;
        }
        return this;
    }

    /**
     * Get ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @return {string}
     */
    public getExpectsShippingAt(): string {
        return this.expectsShippingAt;
    }

    /**
     * Set ExpectsShippingAt
     * Date at which the shipment is expected to be sent
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setExpectsShippingAt(val: string): InvoiceShipping {
        this.expectsShippingAt = val;
        return this;
    }

    /**
     * Get RelayStoreName
     * Relay store name
     * @return {string}
     */
    public getRelayStoreName(): string {
        return this.relayStoreName;
    }

    /**
     * Set RelayStoreName
     * Relay store name
     * @param {string} val
     * @return {InvoiceShipping}
     */
    public setRelayStoreName(val: string): InvoiceShipping {
        this.relayStoreName = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShipping}
     */
    public fillWithData(data: any): InvoiceShipping {
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["method"])
            this.setMethod(data["method"]);
        if (data["provider"])
            this.setProvider(data["provider"]);
        if (data["delay"])
            this.setDelay(data["delay"]);
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
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["phone"])
            this.setPhone(data["phone"]);
        if (data["expects_shipping_at"])
            this.setExpectsShippingAt(data["expects_shipping_at"]);
        if (data["relay_store_name"])
            this.setRelayStoreName(data["relay_store_name"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "amount": this.getAmount(),
            "method": this.getMethod(),
            "provider": this.getProvider(),
            "delay": this.getDelay(),
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "country_code": this.getCountryCode(),
            "zip": this.getZip(),
            "phone_number": this.getPhoneNumber(),
            "phone": this.getPhone(),
            "expects_shipping_at": this.getExpectsShippingAt(),
            "relay_store_name": this.getRelayStoreName(),
        };
    }

    
}
export = InvoiceShipping;
