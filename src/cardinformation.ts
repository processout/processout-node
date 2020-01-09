// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CardInformation {
    private client: ProcessOut = null;

    /**
     * First 6 digits of the card
     * @type {string}
     */
    private iin: string = null;

    /**
     * Scheme of the card, such as visa or mastercard
     * @type {string}
     */
    private scheme: string = null;

    /**
     * Type of the card (Credit, Debit, ...)
     * @type {string}
     */
    private type: string = null;

    /**
     * Name of the bank of the card
     * @type {string}
     */
    private bankName: string = null;

    /**
     * Level of the card (Electron, Classic, Gold, ...)
     * @type {string}
     */
    private brand: string = null;

    /**
     * Category of the card (consumer, commercial, ...)
     * @type {string}
     */
    private category: string = null;

    /**
     * Country that issued the card
     * @type {string}
     */
    private country: string = null;

    /**
     * CardInformation constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardInformation) {
        if (typeof client === 'undefined')
            throw new Error("The CardInformation object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardInformation()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CardInformation";
    }

    /**
     * Get Iin
     * First 6 digits of the card
     * @return {string}
     */
    public getIin(): string {
        return this.iin;
    }

    /**
     * Set Iin
     * First 6 digits of the card
     * @param {string} val
     * @return {CardInformation}
     */
    public setIin(val: string): CardInformation {
        this.iin = val;
        return this;
    }

    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {string}
     */
    public getScheme(): string {
        return this.scheme;
    }

    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {string} val
     * @return {CardInformation}
     */
    public setScheme(val: string): CardInformation {
        this.scheme = val;
        return this;
    }

    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    public setType(val: string): CardInformation {
        this.type = val;
        return this;
    }

    /**
     * Get BankName
     * Name of the bank of the card
     * @return {string}
     */
    public getBankName(): string {
        return this.bankName;
    }

    /**
     * Set BankName
     * Name of the bank of the card
     * @param {string} val
     * @return {CardInformation}
     */
    public setBankName(val: string): CardInformation {
        this.bankName = val;
        return this;
    }

    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {string}
     */
    public getBrand(): string {
        return this.brand;
    }

    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    public setBrand(val: string): CardInformation {
        this.brand = val;
        return this;
    }

    /**
     * Get Category
     * Category of the card (consumer, commercial, ...)
     * @return {string}
     */
    public getCategory(): string {
        return this.category;
    }

    /**
     * Set Category
     * Category of the card (consumer, commercial, ...)
     * @param {string} val
     * @return {CardInformation}
     */
    public setCategory(val: string): CardInformation {
        this.category = val;
        return this;
    }

    /**
     * Get Country
     * Country that issued the card
     * @return {string}
     */
    public getCountry(): string {
        return this.country;
    }

    /**
     * Set Country
     * Country that issued the card
     * @param {string} val
     * @return {CardInformation}
     */
    public setCountry(val: string): CardInformation {
        this.country = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardInformation}
     */
    public fillWithData(data: any): CardInformation {
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["category"])
            this.setCategory(data["category"]);
        if (data["country"])
            this.setCountry(data["country"]);
        return this;
    }

    /**
     * Fetch card information from the IIN.
	 * @param string iin
     * @param {any} options
     * @return {this}
     */
    public fetch(iin, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/iins/" + encodeURI(iin) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['card_information'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    
}
export = CardInformation;
