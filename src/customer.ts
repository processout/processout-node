// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Customer {
    private client: ProcessOut = null;

    /**
     * ID of the customer
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the customer belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the customer belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Default token of the customer
     * @type {p.Token}
     */
    private defaultToken: p.Token = null;

    /**
     * ID of the default token of the customer
     * @type {string}
     */
    private defaultTokenId: string = null;

    /**
     * List of the customer tokens
     * @type {any}
     */
    private tokens: any = null;

    /**
     * List of the customer subscriptions
     * @type {any}
     */
    private subscriptions: any = null;

    /**
     * List of the customer transactions
     * @type {any}
     */
    private transactions: any = null;

    /**
     * Customer balance. Can be positive or negative
     * @type {string}
     */
    private balance: string = null;

    /**
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @type {string}
     */
    private currency: string = null;

    /**
     * Email of the customer
     * @type {string}
     */
    private email: string = null;

    /**
     * First name of the customer
     * @type {string}
     */
    private firstName: string = null;

    /**
     * Last name of the customer
     * @type {string}
     */
    private lastName: string = null;

    /**
     * Address of the customer
     * @type {string}
     */
    private address1: string = null;

    /**
     * Secondary address of the customer
     * @type {string}
     */
    private address2: string = null;

    /**
     * City of the customer
     * @type {string}
     */
    private city: string = null;

    /**
     * State of the customer
     * @type {string}
     */
    private state: string = null;

    /**
     * ZIP code of the customer
     * @type {string}
     */
    private zip: string = null;

    /**
     * Country code of the customer (ISO-3166, 2 characters format)
     * @type {string}
     */
    private countryCode: string = null;

    /**
     * IP address of the customer (IPv4 or IPv6)
     * @type {string}
     */
    private ipAddress: string = null;

    /**
     * Phone number of the customer
     * @type {string}
     */
    private phoneNumber: string = null;

    /**
     * Legal document number
     * @type {string}
     */
    private legalDocument: string = null;

    /**
     * Sex of the customer
     * @type {string}
     */
    private sex: string = null;

    /**
     * Define whether or not the customer is a business
     * @type {boolean}
     */
    private isBusiness: boolean = null;

    /**
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Define whether or not the customer is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the customer was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Customer constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Customer) {
        if (typeof client === 'undefined')
            throw new Error("The Customer object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCustomer()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Customer";
    }

    /**
     * Get Id
     * ID of the customer
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setId(val: string): Customer {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the customer belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the customer belongs
     * @param {p.Project} val
     * @return {Customer}
     */
    public setProject(val: p.Project): Customer {
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
     * ID of the project to which the customer belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the customer belongs
     * @param {string} val
     * @return {Customer}
     */
    public setProjectId(val: string): Customer {
        this.projectId = val;
        return this;
    }

    /**
     * Get DefaultToken
     * Default token of the customer
     * @return {p.Token}
     */
    public getDefaultToken(): p.Token {
        return this.defaultToken;
    }

    /**
     * Set DefaultToken
     * Default token of the customer
     * @param {p.Token} val
     * @return {Customer}
     */
    public setDefaultToken(val: p.Token): Customer {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.defaultToken = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.defaultToken = obj;
        }
        return this;
    }

    /**
     * Get DefaultTokenId
     * ID of the default token of the customer
     * @return {string}
     */
    public getDefaultTokenId(): string {
        return this.defaultTokenId;
    }

    /**
     * Set DefaultTokenId
     * ID of the default token of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setDefaultTokenId(val: string): Customer {
        this.defaultTokenId = val;
        return this;
    }

    /**
     * Get Tokens
     * List of the customer tokens
     * @return {any}
     */
    public getTokens(): any {
        return this.tokens;
    }

    /**
     * Set Tokens
     * List of the customer tokens
     * @param {any} val
     * @return {Customer}
     */
    public setTokens(val: any): Customer {
        if (val.length > 0 && typeof val[0] === 'object')
            this.tokens = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newToken();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.tokens = a;
        }
        return this;
    }

    /**
     * Get Subscriptions
     * List of the customer subscriptions
     * @return {any}
     */
    public getSubscriptions(): any {
        return this.subscriptions;
    }

    /**
     * Set Subscriptions
     * List of the customer subscriptions
     * @param {any} val
     * @return {Customer}
     */
    public setSubscriptions(val: any): Customer {
        if (val.length > 0 && typeof val[0] === 'object')
            this.subscriptions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newSubscription();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.subscriptions = a;
        }
        return this;
    }

    /**
     * Get Transactions
     * List of the customer transactions
     * @return {any}
     */
    public getTransactions(): any {
        return this.transactions;
    }

    /**
     * Set Transactions
     * List of the customer transactions
     * @param {any} val
     * @return {Customer}
     */
    public setTransactions(val: any): Customer {
        if (val.length > 0 && typeof val[0] === 'object')
            this.transactions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newTransaction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.transactions = a;
        }
        return this;
    }

    /**
     * Get Balance
     * Customer balance. Can be positive or negative
     * @return {string}
     */
    public getBalance(): string {
        return this.balance;
    }

    /**
     * Set Balance
     * Customer balance. Can be positive or negative
     * @param {string} val
     * @return {Customer}
     */
    public setBalance(val: string): Customer {
        this.balance = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the customer balance. Once the currency is set it cannot be modified
     * @param {string} val
     * @return {Customer}
     */
    public setCurrency(val: string): Customer {
        this.currency = val;
        return this;
    }

    /**
     * Get Email
     * Email of the customer
     * @return {string}
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Set Email
     * Email of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setEmail(val: string): Customer {
        this.email = val;
        return this;
    }

    /**
     * Get FirstName
     * First name of the customer
     * @return {string}
     */
    public getFirstName(): string {
        return this.firstName;
    }

    /**
     * Set FirstName
     * First name of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setFirstName(val: string): Customer {
        this.firstName = val;
        return this;
    }

    /**
     * Get LastName
     * Last name of the customer
     * @return {string}
     */
    public getLastName(): string {
        return this.lastName;
    }

    /**
     * Set LastName
     * Last name of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setLastName(val: string): Customer {
        this.lastName = val;
        return this;
    }

    /**
     * Get Address1
     * Address of the customer
     * @return {string}
     */
    public getAddress1(): string {
        return this.address1;
    }

    /**
     * Set Address1
     * Address of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setAddress1(val: string): Customer {
        this.address1 = val;
        return this;
    }

    /**
     * Get Address2
     * Secondary address of the customer
     * @return {string}
     */
    public getAddress2(): string {
        return this.address2;
    }

    /**
     * Set Address2
     * Secondary address of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setAddress2(val: string): Customer {
        this.address2 = val;
        return this;
    }

    /**
     * Get City
     * City of the customer
     * @return {string}
     */
    public getCity(): string {
        return this.city;
    }

    /**
     * Set City
     * City of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setCity(val: string): Customer {
        this.city = val;
        return this;
    }

    /**
     * Get State
     * State of the customer
     * @return {string}
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Set State
     * State of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setState(val: string): Customer {
        this.state = val;
        return this;
    }

    /**
     * Get Zip
     * ZIP code of the customer
     * @return {string}
     */
    public getZip(): string {
        return this.zip;
    }

    /**
     * Set Zip
     * ZIP code of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setZip(val: string): Customer {
        this.zip = val;
        return this;
    }

    /**
     * Get CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @return {string}
     */
    public getCountryCode(): string {
        return this.countryCode;
    }

    /**
     * Set CountryCode
     * Country code of the customer (ISO-3166, 2 characters format)
     * @param {string} val
     * @return {Customer}
     */
    public setCountryCode(val: string): Customer {
        this.countryCode = val;
        return this;
    }

    /**
     * Get IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @return {string}
     */
    public getIpAddress(): string {
        return this.ipAddress;
    }

    /**
     * Set IpAddress
     * IP address of the customer (IPv4 or IPv6)
     * @param {string} val
     * @return {Customer}
     */
    public setIpAddress(val: string): Customer {
        this.ipAddress = val;
        return this;
    }

    /**
     * Get PhoneNumber
     * Phone number of the customer
     * @return {string}
     */
    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    /**
     * Set PhoneNumber
     * Phone number of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setPhoneNumber(val: string): Customer {
        this.phoneNumber = val;
        return this;
    }

    /**
     * Get LegalDocument
     * Legal document number
     * @return {string}
     */
    public getLegalDocument(): string {
        return this.legalDocument;
    }

    /**
     * Set LegalDocument
     * Legal document number
     * @param {string} val
     * @return {Customer}
     */
    public setLegalDocument(val: string): Customer {
        this.legalDocument = val;
        return this;
    }

    /**
     * Get Sex
     * Sex of the customer
     * @return {string}
     */
    public getSex(): string {
        return this.sex;
    }

    /**
     * Set Sex
     * Sex of the customer
     * @param {string} val
     * @return {Customer}
     */
    public setSex(val: string): Customer {
        this.sex = val;
        return this;
    }

    /**
     * Get IsBusiness
     * Define whether or not the customer is a business
     * @return {boolean}
     */
    public getIsBusiness(): boolean {
        return this.isBusiness;
    }

    /**
     * Set IsBusiness
     * Define whether or not the customer is a business
     * @param {boolean} val
     * @return {Customer}
     */
    public setIsBusiness(val: boolean): Customer {
        this.isBusiness = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the customer, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Customer}
     */
    public setMetadata(val: any): Customer {
        this.metadata = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the customer is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the customer is in sandbox environment
     * @param {boolean} val
     * @return {Customer}
     */
    public setSandbox(val: boolean): Customer {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the customer was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the customer was created
     * @param {string} val
     * @return {Customer}
     */
    public setCreatedAt(val: string): Customer {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Customer}
     */
    public fillWithData(data: any): Customer {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["default_token"])
            this.setDefaultToken(data["default_token"]);
        if (data["default_token_id"])
            this.setDefaultTokenId(data["default_token_id"]);
        if (data["tokens"])
            this.setTokens(data["tokens"]);
        if (data["subscriptions"])
            this.setSubscriptions(data["subscriptions"]);
        if (data["transactions"])
            this.setTransactions(data["transactions"]);
        if (data["balance"])
            this.setBalance(data["balance"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["email"])
            this.setEmail(data["email"]);
        if (data["first_name"])
            this.setFirstName(data["first_name"]);
        if (data["last_name"])
            this.setLastName(data["last_name"]);
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
        if (data["phone_number"])
            this.setPhoneNumber(data["phone_number"]);
        if (data["legal_document"])
            this.setLegalDocument(data["legal_document"]);
        if (data["sex"])
            this.setSex(data["sex"]);
        if (data["is_business"])
            this.setIsBusiness(data["is_business"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "default_token": this.getDefaultToken(),
            "default_token_id": this.getDefaultTokenId(),
            "tokens": this.getTokens(),
            "subscriptions": this.getSubscriptions(),
            "transactions": this.getTransactions(),
            "balance": this.getBalance(),
            "currency": this.getCurrency(),
            "email": this.getEmail(),
            "first_name": this.getFirstName(),
            "last_name": this.getLastName(),
            "address1": this.getAddress1(),
            "address2": this.getAddress2(),
            "city": this.getCity(),
            "state": this.getState(),
            "zip": this.getZip(),
            "country_code": this.getCountryCode(),
            "ip_address": this.getIpAddress(),
            "phone_number": this.getPhoneNumber(),
            "legal_document": this.getLegalDocument(),
            "sex": this.getSex(),
            "is_business": this.getIsBusiness(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    }

    /**
     * Get the subscriptions belonging to the customer.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchSubscriptions(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/subscriptions";

        var data = {

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

                
                var a    = [];
                var body = respBody['subscriptions'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newSubscription();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get the customer's tokens.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchTokens(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens";

        var data = {

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

                
                var a    = [];
                var body = respBody['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newToken();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a customer's token by its ID.
	 * @param string tokenId
     * @param {any} options
     * @return {Promise<p.Token>}
     */
    public findToken(tokenId: string, options): Promise<p.Token> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";

        var data = {

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
                body = body['token'];
                var obj = cur.client.newToken();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete a customer's token by its ID.
	 * @param string tokenId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public deleteToken(tokenId: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/tokens/" + encodeURI(tokenId) + "";

        var data = {

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

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get the transactions belonging to the customer.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchTransactions(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "/transactions";

        var data = {

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

                
                var a    = [];
                var body = respBody['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newTransaction();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get all the customers.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers";

        var data = {

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

                
                var a    = [];
                var body = respBody['customers'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newCustomer();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Create a new customer.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers";

        var data = {
			'balance': this.getBalance(), 
			'currency': this.getCurrency(), 
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'state': this.getState(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode(), 
			'ip_address': this.getIpAddress(), 
			'phone_number': this.getPhoneNumber(), 
			'legal_document': this.getLegalDocument(), 
			'is_business': this.getIsBusiness(), 
			'sex': this.getSex(), 
			'metadata': this.getMetadata(), 
			'id': this.getId()
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
                body = body['customer'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a customer by its ID.
	 * @param string customerId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(customerId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(customerId) + "";

        var data = {

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
                body = body['customer'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Save the updated customer attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

        var data = {
			'balance': this.getBalance(), 
			'default_token_id': this.getDefaultTokenId(), 
			'email': this.getEmail(), 
			'first_name': this.getFirstName(), 
			'last_name': this.getLastName(), 
			'address1': this.getAddress1(), 
			'address2': this.getAddress2(), 
			'city': this.getCity(), 
			'state': this.getState(), 
			'zip': this.getZip(), 
			'country_code': this.getCountryCode(), 
			'ip_address': this.getIpAddress(), 
			'phone_number': this.getPhoneNumber(), 
			'legal_document': this.getLegalDocument(), 
			'is_business': this.getIsBusiness(), 
			'sex': this.getSex(), 
			'metadata': this.getMetadata()
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
                body = body['customer'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete the customer.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    public delete(options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getId()) + "";

        var data = {

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

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = Customer;
