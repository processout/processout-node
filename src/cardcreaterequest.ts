// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CardCreateRequest {
    private client: ProcessOut = null;

    /**
     * Device used to create the card
     * @type {p.Device}
     */
    private device: p.Device = null;

    /**
     * Cardholder name
     * @type {string}
     */
    private name: string = null;

    /**
     * Card PAN (raw)
     * @type {string}
     */
    private number: string = null;

    /**
     * Card expiration day. Used for Apple Pay
     * @type {string}
     */
    private expDay: string = null;

    /**
     * Card expiration month
     * @type {string}
     */
    private expMonth: string = null;

    /**
     * Card expiration year
     * @type {string}
     */
    private expYear: string = null;

    /**
     * CVC2
     * @type {string}
     */
    private cvc2: string = null;

    /**
     * Preferred card scheme
     * @type {string}
     */
    private preferredScheme: string = null;

    /**
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @type {string}
     */
    private tokenType: string = null;

    /**
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private eci: string = null;

    /**
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private cryptogram: string = null;

    /**
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private applepayResponse: string = null;

    /**
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private applepayMid: string = null;

    /**
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @type {string}
     */
    private paymentToken: string = null;

    /**
     * Cardholder contact information
     * @type {p.CardContact}
     */
    private contact: p.CardContact = null;

    /**
     * Cardholder shipping information
     * @type {p.CardShipping}
     */
    private shipping: p.CardShipping = null;

    /**
     * CardCreateRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardCreateRequest) {
        if (typeof client === 'undefined')
            throw new Error("The CardCreateRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardCreateRequest()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CardCreateRequest";
    }

    /**
     * Get Device
     * Device used to create the card
     * @return {p.Device}
     */
    public getDevice(): p.Device {
        return this.device;
    }

    /**
     * Set Device
     * Device used to create the card
     * @param {p.Device} val
     * @return {CardCreateRequest}
     */
    public setDevice(val: p.Device): CardCreateRequest {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newDevice().getProcessOutObjectClass())
            this.device = val;
        else {
            var obj = this.client.newDevice();
            obj.fillWithData(val);
            this.device = obj;
        }
        return this;
    }

    /**
     * Get Name
     * Cardholder name
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Cardholder name
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setName(val: string): CardCreateRequest {
        this.name = val;
        return this;
    }

    /**
     * Get Number
     * Card PAN (raw)
     * @return {string}
     */
    public getNumber(): string {
        return this.number;
    }

    /**
     * Set Number
     * Card PAN (raw)
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setNumber(val: string): CardCreateRequest {
        this.number = val;
        return this;
    }

    /**
     * Get ExpDay
     * Card expiration day. Used for Apple Pay
     * @return {string}
     */
    public getExpDay(): string {
        return this.expDay;
    }

    /**
     * Set ExpDay
     * Card expiration day. Used for Apple Pay
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setExpDay(val: string): CardCreateRequest {
        this.expDay = val;
        return this;
    }

    /**
     * Get ExpMonth
     * Card expiration month
     * @return {string}
     */
    public getExpMonth(): string {
        return this.expMonth;
    }

    /**
     * Set ExpMonth
     * Card expiration month
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setExpMonth(val: string): CardCreateRequest {
        this.expMonth = val;
        return this;
    }

    /**
     * Get ExpYear
     * Card expiration year
     * @return {string}
     */
    public getExpYear(): string {
        return this.expYear;
    }

    /**
     * Set ExpYear
     * Card expiration year
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setExpYear(val: string): CardCreateRequest {
        this.expYear = val;
        return this;
    }

    /**
     * Get Cvc2
     * CVC2
     * @return {string}
     */
    public getCvc2(): string {
        return this.cvc2;
    }

    /**
     * Set Cvc2
     * CVC2
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setCvc2(val: string): CardCreateRequest {
        this.cvc2 = val;
        return this;
    }

    /**
     * Get PreferredScheme
     * Preferred card scheme
     * @return {string}
     */
    public getPreferredScheme(): string {
        return this.preferredScheme;
    }

    /**
     * Set PreferredScheme
     * Preferred card scheme
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setPreferredScheme(val: string): CardCreateRequest {
        this.preferredScheme = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {CardCreateRequest}
     */
    public setMetadata(val: any): CardCreateRequest {
        this.metadata = val;
        return this;
    }

    /**
     * Get TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @return {string}
     */
    public getTokenType(): string {
        return this.tokenType;
    }

    /**
     * Set TokenType
     * This field defines if the card was tokenized with a 3rd party tokenization method: applepay, googlepay
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setTokenType(val: string): CardCreateRequest {
        this.tokenType = val;
        return this;
    }

    /**
     * Get Eci
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    public getEci(): string {
        return this.eci;
    }

    /**
     * Set Eci
     * ECI indicator. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setEci(val: string): CardCreateRequest {
        this.eci = val;
        return this;
    }

    /**
     * Get Cryptogram
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    public getCryptogram(): string {
        return this.cryptogram;
    }

    /**
     * Set Cryptogram
     * Cryptogram (Base64-encoded). Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setCryptogram(val: string): CardCreateRequest {
        this.cryptogram = val;
        return this;
    }

    /**
     * Get ApplepayResponse
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    public getApplepayResponse(): string {
        return this.applepayResponse;
    }

    /**
     * Set ApplepayResponse
     * Raw ApplePay card tokenization response. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setApplepayResponse(val: string): CardCreateRequest {
        this.applepayResponse = val;
        return this;
    }

    /**
     * Get ApplepayMid
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    public getApplepayMid(): string {
        return this.applepayMid;
    }

    /**
     * Set ApplepayMid
     * ApplePay MID. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setApplepayMid(val: string): CardCreateRequest {
        this.applepayMid = val;
        return this;
    }

    /**
     * Get PaymentToken
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @return {string}
     */
    public getPaymentToken(): string {
        return this.paymentToken;
    }

    /**
     * Set PaymentToken
     * Google payment token. Used if the card was tokenized with a 3rd party tokenization method
     * @param {string} val
     * @return {CardCreateRequest}
     */
    public setPaymentToken(val: string): CardCreateRequest {
        this.paymentToken = val;
        return this;
    }

    /**
     * Get Contact
     * Cardholder contact information
     * @return {p.CardContact}
     */
    public getContact(): p.CardContact {
        return this.contact;
    }

    /**
     * Set Contact
     * Cardholder contact information
     * @param {p.CardContact} val
     * @return {CardCreateRequest}
     */
    public setContact(val: p.CardContact): CardCreateRequest {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCardContact().getProcessOutObjectClass())
            this.contact = val;
        else {
            var obj = this.client.newCardContact();
            obj.fillWithData(val);
            this.contact = obj;
        }
        return this;
    }

    /**
     * Get Shipping
     * Cardholder shipping information
     * @return {p.CardShipping}
     */
    public getShipping(): p.CardShipping {
        return this.shipping;
    }

    /**
     * Set Shipping
     * Cardholder shipping information
     * @param {p.CardShipping} val
     * @return {CardCreateRequest}
     */
    public setShipping(val: p.CardShipping): CardCreateRequest {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCardShipping().getProcessOutObjectClass())
            this.shipping = val;
        else {
            var obj = this.client.newCardShipping();
            obj.fillWithData(val);
            this.shipping = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardCreateRequest}
     */
    public fillWithData(data: any): CardCreateRequest {
        if (data["device"])
            this.setDevice(data["device"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["number"])
            this.setNumber(data["number"]);
        if (data["exp_day"])
            this.setExpDay(data["exp_day"]);
        if (data["exp_month"])
            this.setExpMonth(data["exp_month"]);
        if (data["exp_year"])
            this.setExpYear(data["exp_year"]);
        if (data["cvc2"])
            this.setCvc2(data["cvc2"]);
        if (data["preferred_scheme"])
            this.setPreferredScheme(data["preferred_scheme"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["token_type"])
            this.setTokenType(data["token_type"]);
        if (data["eci"])
            this.setEci(data["eci"]);
        if (data["cryptogram"])
            this.setCryptogram(data["cryptogram"]);
        if (data["applepay_response"])
            this.setApplepayResponse(data["applepay_response"]);
        if (data["applepay_mid"])
            this.setApplepayMid(data["applepay_mid"]);
        if (data["payment_token"])
            this.setPaymentToken(data["payment_token"]);
        if (data["contact"])
            this.setContact(data["contact"]);
        if (data["shipping"])
            this.setShipping(data["shipping"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "device": this.getDevice(),
            "name": this.getName(),
            "number": this.getNumber(),
            "exp_day": this.getExpDay(),
            "exp_month": this.getExpMonth(),
            "exp_year": this.getExpYear(),
            "cvc2": this.getCvc2(),
            "preferred_scheme": this.getPreferredScheme(),
            "metadata": this.getMetadata(),
            "token_type": this.getTokenType(),
            "eci": this.getEci(),
            "cryptogram": this.getCryptogram(),
            "applepay_response": this.getApplepayResponse(),
            "applepay_mid": this.getApplepayMid(),
            "payment_token": this.getPaymentToken(),
            "contact": this.getContact(),
            "shipping": this.getShipping(),
        };
    }

    /**
     * Create a new card.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/cards";

        var data = {
			'device': this.getDevice(), 
			'name': this.getName(), 
			'number': this.getNumber(), 
			'exp_day': this.getExpDay(), 
			'exp_month': this.getExpMonth(), 
			'exp_year': this.getExpYear(), 
			'cvc2': this.getCvc2(), 
			'preferred_scheme': this.getPreferredScheme(), 
			'metadata': this.getMetadata(), 
			'token_type': this.getTokenType(), 
			'eci': this.getEci(), 
			'cryptogram': this.getCryptogram(), 
			'applepay_response': this.getApplepayResponse(), 
			'applepay_mid': this.getApplepayMid(), 
			'payment_token': this.getPaymentToken(), 
			'contact': this.getContact(), 
			'shipping': this.getShipping()
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['card'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = CardCreateRequest;
