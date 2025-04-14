// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoiceSubmerchant {
    private client: ProcessOut = null;

    /**
     * ID of the invoice submerchant
     * @type {string}
     */
    private id: string = null;

    /**
     * Name of the submerchant
     * @type {string}
     */
    private name: string = null;

    /**
     * Submerchant's reference ID
     * @type {string}
     */
    private reference: string = null;

    /**
     * Submerchant's MCC (Merchant Category Code).
     * @type {string}
     */
    private mcc: string = null;

    /**
     * Submerchant's phone number
     * @type {p.SubmerchantPhoneNumber}
     */
    private phoneNumber: p.SubmerchantPhoneNumber = null;

    /**
     * Email address
     * @type {string}
     */
    private email: string = null;

    /**
     * Submerchant's address
     * @type {p.SubmerchantAddress}
     */
    private address: p.SubmerchantAddress = null;

    /**
     * Tax reference
     * @type {string}
     */
    private taxReference: string = null;

    /**
     * Service establishment number
     * @type {string}
     */
    private serviceEstablishmentNumber: string = null;

    /**
     * InvoiceSubmerchant constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceSubmerchant) {
        if (typeof client === 'undefined')
            throw new Error("The InvoiceSubmerchant object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoiceSubmerchant()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoiceSubmerchant";
    }

    /**
     * Get Id
     * ID of the invoice submerchant
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the invoice submerchant
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setId(val: string): InvoiceSubmerchant {
        this.id = val;
        return this;
    }

    /**
     * Get Name
     * Name of the submerchant
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the submerchant
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setName(val: string): InvoiceSubmerchant {
        this.name = val;
        return this;
    }

    /**
     * Get Reference
     * Submerchant's reference ID
     * @return {string}
     */
    public getReference(): string {
        return this.reference;
    }

    /**
     * Set Reference
     * Submerchant's reference ID
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setReference(val: string): InvoiceSubmerchant {
        this.reference = val;
        return this;
    }

    /**
     * Get Mcc
     * Submerchant's MCC (Merchant Category Code).
     * @return {string}
     */
    public getMcc(): string {
        return this.mcc;
    }

    /**
     * Set Mcc
     * Submerchant's MCC (Merchant Category Code).
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setMcc(val: string): InvoiceSubmerchant {
        this.mcc = val;
        return this;
    }

    /**
     * Get PhoneNumber
     * Submerchant's phone number
     * @return {p.SubmerchantPhoneNumber}
     */
    public getPhoneNumber(): p.SubmerchantPhoneNumber {
        return this.phoneNumber;
    }

    /**
     * Set PhoneNumber
     * Submerchant's phone number
     * @param {p.SubmerchantPhoneNumber} val
     * @return {InvoiceSubmerchant}
     */
    public setPhoneNumber(val: p.SubmerchantPhoneNumber): InvoiceSubmerchant {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubmerchantPhoneNumber().getProcessOutObjectClass())
            this.phoneNumber = val;
        else {
            var obj = this.client.newSubmerchantPhoneNumber();
            obj.fillWithData(val);
            this.phoneNumber = obj;
        }
        return this;
    }

    /**
     * Get Email
     * Email address
     * @return {string}
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Set Email
     * Email address
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setEmail(val: string): InvoiceSubmerchant {
        this.email = val;
        return this;
    }

    /**
     * Get Address
     * Submerchant's address
     * @return {p.SubmerchantAddress}
     */
    public getAddress(): p.SubmerchantAddress {
        return this.address;
    }

    /**
     * Set Address
     * Submerchant's address
     * @param {p.SubmerchantAddress} val
     * @return {InvoiceSubmerchant}
     */
    public setAddress(val: p.SubmerchantAddress): InvoiceSubmerchant {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubmerchantAddress().getProcessOutObjectClass())
            this.address = val;
        else {
            var obj = this.client.newSubmerchantAddress();
            obj.fillWithData(val);
            this.address = obj;
        }
        return this;
    }

    /**
     * Get TaxReference
     * Tax reference
     * @return {string}
     */
    public getTaxReference(): string {
        return this.taxReference;
    }

    /**
     * Set TaxReference
     * Tax reference
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setTaxReference(val: string): InvoiceSubmerchant {
        this.taxReference = val;
        return this;
    }

    /**
     * Get ServiceEstablishmentNumber
     * Service establishment number
     * @return {string}
     */
    public getServiceEstablishmentNumber(): string {
        return this.serviceEstablishmentNumber;
    }

    /**
     * Set ServiceEstablishmentNumber
     * Service establishment number
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    public setServiceEstablishmentNumber(val: string): InvoiceSubmerchant {
        this.serviceEstablishmentNumber = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceSubmerchant}
     */
    public fillWithData(data: any): InvoiceSubmerchant {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["reference"])
            this.setReference(data["reference"]);
        if (data["mcc"])
            this.setMcc(data["mcc"]);
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["address"])
            this.setAddress(data["address"]);
        if (data["tax_reference"])
            this.setTaxReference(data["tax_reference"]);
        if (data["service_establishment_number"])
            this.setServiceEstablishmentNumber(data["service_establishment_number"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
            "name": this.getName(),
            "reference": this.getReference(),
            "mcc": this.getMcc(),
            "phone_number": this.getPhoneNumber(),
            "email": this.getEmail(),
            "address": this.getAddress(),
            "tax_reference": this.getTaxReference(),
            "service_establishment_number": this.getServiceEstablishmentNumber(),
        };
    }

    
}
export = InvoiceSubmerchant;
