// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Card {
    private client: ProcessOut = null;

    /**
     * ID of the card
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the card belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the card belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Token linked to the card, which can be used to process payments
     * @type {p.Token}
     */
    private token: p.Token = null;

    /**
     * Scheme of the card, such as visa or mastercard
     * @type {string}
     */
    private scheme: string = null;

    /**
     * Co-scheme of the card, such as carte bancaire
     * @type {string}
     */
    private coScheme: string = null;

    /**
     * Customer preferred scheme, such as carte bancaire vs visa
     * @type {string}
     */
    private preferredScheme: string = null;

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
     * First 6 digits of the card
     * @type {string}
     */
    private iin: string = null;

    /**
     * Last 4 digits of the card
     * @type {string}
     */
    private last4Digits: string = null;

    /**
     * Expiry month
     * @type {number}
     */
    private expMonth: number = null;

    /**
     * Expiry year, in a 4 digits format
     * @type {number}
     */
    private expYear: number = null;

    /**
     * Status of the CVC check initially made on the card when the CVC was provided
     * @type {string}
     */
    private cvcCheck: string = null;

    /**
     * Status of the AVS check initially made on the card when the AVS was provided
     * @type {string}
     */
    private avsCheck: string = null;

    /**
     * Name of the card holder
     * @type {string}
     */
    private name: string = null;

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
     * ZIP code of the card holder
     * @type {string}
     */
    private zip: string = null;

    /**
     * Country code of the card holder (ISO-3166, 2 characters format)
     * @type {string}
     */
    private countryCode: string = null;

    /**
     * IP address of the card (IPv4 or IPv6)
     * @type {string}
     */
    private ipAddress: string = null;

    /**
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @type {string}
     */
    private fingerprint: string = null;

    /**
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Contains true if the card will expire soon, false otherwise
     * @type {boolean}
     */
    private expiresSoon: boolean = null;

    /**
     * Define whether or not the card is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the card was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Card constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Card) {
        if (typeof client === 'undefined')
            throw new Error("The Card object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCard()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Card";
    }

    /**
     * Get Id
     * ID of the card
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the card
     * @param {string} val
     * @return {Card}
     */
    public setId(val: string): Card {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the card belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the card belongs
     * @param {p.Project} val
     * @return {Card}
     */
    public setProject(val: p.Project): Card {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ProjectId
     * ID of the project to which the card belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the card belongs
     * @param {string} val
     * @return {Card}
     */
    public setProjectId(val: string): Card {
        this.projectId = val;
        return this;
    }

    /**
     * Get Token
     * Token linked to the card, which can be used to process payments
     * @return {p.Token}
     */
    public getToken(): p.Token {
        return this.token;
    }

    /**
     * Set Token
     * Token linked to the card, which can be used to process payments
     * @param {p.Token} val
     * @return {Card}
     */
    public setToken(val: p.Token): Card {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
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
     * @return {Card}
     */
    public setScheme(val: string): Card {
        this.scheme = val;
        return this;
    }

    /**
     * Get CoScheme
     * Co-scheme of the card, such as carte bancaire
     * @return {string}
     */
    public getCoScheme(): string {
        return this.coScheme;
    }

    /**
     * Set CoScheme
     * Co-scheme of the card, such as carte bancaire
     * @param {string} val
     * @return {Card}
     */
    public setCoScheme(val: string): Card {
        this.coScheme = val;
        return this;
    }

    /**
     * Get PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa
     * @return {string}
     */
    public getPreferredScheme(): string {
        return this.preferredScheme;
    }

    /**
     * Set PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa
     * @param {string} val
     * @return {Card}
     */
    public setPreferredScheme(val: string): Card {
        this.preferredScheme = val;
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
     * @return {Card}
     */
    public setType(val: string): Card {
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
     * @return {Card}
     */
    public setBankName(val: string): Card {
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
     * @return {Card}
     */
    public setBrand(val: string): Card {
        this.brand = val;
        return this;
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
     * @return {Card}
     */
    public setIin(val: string): Card {
        this.iin = val;
        return this;
    }

    /**
     * Get Last4Digits
     * Last 4 digits of the card
     * @return {string}
     */
    public getLast4Digits(): string {
        return this.last4Digits;
    }

    /**
     * Set Last4Digits
     * Last 4 digits of the card
     * @param {string} val
     * @return {Card}
     */
    public setLast4Digits(val: string): Card {
        this.last4Digits = val;
        return this;
    }

    /**
     * Get ExpMonth
     * Expiry month
     * @return {number}
     */
    public getExpMonth(): number {
        return this.expMonth;
    }

    /**
     * Set ExpMonth
     * Expiry month
     * @param {number} val
     * @return {Card}
     */
    public setExpMonth(val: number): Card {
        this.expMonth = val;
        return this;
    }

    /**
     * Get ExpYear
     * Expiry year, in a 4 digits format
     * @return {number}
     */
    public getExpYear(): number {
        return this.expYear;
    }

    /**
     * Set ExpYear
     * Expiry year, in a 4 digits format
     * @param {number} val
     * @return {Card}
     */
    public setExpYear(val: number): Card {
        this.expYear = val;
        return this;
    }

    /**
     * Get CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @return {string}
     */
    public getCvcCheck(): string {
        return this.cvcCheck;
    }

    /**
     * Set CvcCheck
     * Status of the CVC check initially made on the card when the CVC was provided
     * @param {string} val
     * @return {Card}
     */
    public setCvcCheck(val: string): Card {
        this.cvcCheck = val;
        return this;
    }

    /**
     * Get AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @return {string}
     */
    public getAvsCheck(): string {
        return this.avsCheck;
    }

    /**
     * Set AvsCheck
     * Status of the AVS check initially made on the card when the AVS was provided
     * @param {string} val
     * @return {Card}
     */
    public setAvsCheck(val: string): Card {
        this.avsCheck = val;
        return this;
    }

    /**
     * Get Name
     * Name of the card holder
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the card holder
     * @param {string} val
     * @return {Card}
     */
    public setName(val: string): Card {
        this.name = val;
        return this;
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
     * @return {Card}
     */
    public setAddress1(val: string): Card {
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
     * @return {Card}
     */
    public setAddress2(val: string): Card {
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
     * @return {Card}
     */
    public setCity(val: string): Card {
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
     * @return {Card}
     */
    public setState(val: string): Card {
        this.state = val;
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
     * @return {Card}
     */
    public setZip(val: string): Card {
        this.zip = val;
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
     * @return {Card}
     */
    public setCountryCode(val: string): Card {
        this.countryCode = val;
        return this;
    }

    /**
     * Get IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @return {string}
     */
    public getIpAddress(): string {
        return this.ipAddress;
    }

    /**
     * Set IpAddress
     * IP address of the card (IPv4 or IPv6)
     * @param {string} val
     * @return {Card}
     */
    public setIpAddress(val: string): Card {
        this.ipAddress = val;
        return this;
    }

    /**
     * Get Fingerprint
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @return {string}
     */
    public getFingerprint(): string {
        return this.fingerprint;
    }

    /**
     * Set Fingerprint
     * Fingerprint of the card (stays the same if the same card gets tokenized multiple times). Scoped per ProcessOut project
     * @param {string} val
     * @return {Card}
     */
    public setFingerprint(val: string): Card {
        this.fingerprint = val;
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
     * @return {Card}
     */
    public setMetadata(val: any): Card {
        this.metadata = val;
        return this;
    }

    /**
     * Get ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @return {boolean}
     */
    public getExpiresSoon(): boolean {
        return this.expiresSoon;
    }

    /**
     * Set ExpiresSoon
     * Contains true if the card will expire soon, false otherwise
     * @param {boolean} val
     * @return {Card}
     */
    public setExpiresSoon(val: boolean): Card {
        this.expiresSoon = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the card is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the card is in sandbox environment
     * @param {boolean} val
     * @return {Card}
     */
    public setSandbox(val: boolean): Card {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the card was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the card was created
     * @param {string} val
     * @return {Card}
     */
    public setCreatedAt(val: string): Card {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Card}
     */
    public fillWithData(data: any): Card {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["co_scheme"])
            this.setCoScheme(data["co_scheme"]);
        if (data["preferred_scheme"])
            this.setPreferredScheme(data["preferred_scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["last_4_digits"])
            this.setLast4Digits(data["last_4_digits"]);
        if (data["exp_month"])
            this.setExpMonth(data["exp_month"]);
        if (data["exp_year"])
            this.setExpYear(data["exp_year"]);
        if (data["cvc_check"])
            this.setCvcCheck(data["cvc_check"]);
        if (data["avs_check"])
            this.setAvsCheck(data["avs_check"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["address1"])
            this.setAddress1(data["address1"]);
        if (data["address2"])
            this.setAddress2(data["address2"]);
        if (data["city"])
            this.setCity(data["city"]);
        if (data["state"])
            this.setState(data["state"]);
        if (data["zip"])
            this.setZip(data["zip"]);
        if (data["country_code"])
            this.setCountryCode(data["country_code"]);
        if (data["ip_address"])
            this.setIpAddress(data["ip_address"]);
        if (data["fingerprint"])
            this.setFingerprint(data["fingerprint"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["expires_soon"])
            this.setExpiresSoon(data["expires_soon"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Get all the cards.
     * 
     * @param {any} options
     * @return {array}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/cards";

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

                
                var a    = [];
                var body = response.body['cards'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newCard();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Find a card by its ID.
	 * @param string cardId
     * @param {any} options
     * @return {this}
     */
    public find(cardId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/cards/" + encodeURI(cardId) + "";

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
                body = body['card'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    
}
export = Card;
