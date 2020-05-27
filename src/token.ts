// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Token {
    private client: ProcessOut = null;

    /**
     * ID of the customer token
     * @type {string}
     */
    private id: string = null;

    /**
     * Customer owning the token
     * @type {p.Customer}
     */
    private customer: p.Customer = null;

    /**
     * ID of the customer linked to the token
     * @type {string}
     */
    private customerId: string = null;

    /**
     * Gateway configuration to which the token is linked, if any
     * @type {p.GatewayConfiguration}
     */
    private gatewayConfiguration: p.GatewayConfiguration = null;

    /**
     * ID of the gateway configuration to which the token is linked, if any
     * @type {string}
     */
    private gatewayConfigurationId: string = null;

    /**
     * Card used to create this token, if any
     * @type {p.Card}
     */
    private card: p.Card = null;

    /**
     * ID of the card used to create the token, if any
     * @type {string}
     */
    private cardId: string = null;

    /**
     * Type of the token. Can be card or gateway_token
     * @type {string}
     */
    private type: string = null;

    /**
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Define whether or not the customer token is used on a recurring invoice
     * @type {boolean}
     */
    private isSubscriptionOnly: boolean = null;

    /**
     * True if the token it the default token of the customer, false otherwise
     * @type {boolean}
     */
    private isDefault: boolean = null;

    /**
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @type {string}
     */
    private returnUrl: string = null;

    /**
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @type {string}
     */
    private cancelUrl: string = null;

    /**
     * Summary of the customer token, such as a description of the card used or the email of a PayPal account
     * @type {string}
     */
    private summary: string = null;

    /**
     * True if the token is chargeable, false otherwise
     * @type {boolean}
     */
    private isChargeable: boolean = null;

    /**
     * Date at which the customer token was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Description of the created token
     * @type {string}
     */
    private description: string = null;

    /**
     * Token constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Token) {
        if (typeof client === 'undefined')
            throw new Error("The Token object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newToken()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Token";
    }

    /**
     * Get Id
     * ID of the customer token
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the customer token
     * @param {string} val
     * @return {Token}
     */
    public setId(val: string): Token {
        this.id = val;
        return this;
    }

    /**
     * Get Customer
     * Customer owning the token
     * @return {p.Customer}
     */
    public getCustomer(): p.Customer {
        return this.customer;
    }

    /**
     * Set Customer
     * Customer owning the token
     * @param {p.Customer} val
     * @return {Token}
     */
    public setCustomer(val: p.Customer): Token {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomer().getProcessOutObjectClass())
            this.customer = val;
        else {
            var obj = this.client.newCustomer();
            obj.fillWithData(val);
            this.customer = obj;
        }
        return this;
    }

    /**
     * Get CustomerId
     * ID of the customer linked to the token
     * @return {string}
     */
    public getCustomerId(): string {
        return this.customerId;
    }

    /**
     * Set CustomerId
     * ID of the customer linked to the token
     * @param {string} val
     * @return {Token}
     */
    public setCustomerId(val: string): Token {
        this.customerId = val;
        return this;
    }

    /**
     * Get GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @return {p.GatewayConfiguration}
     */
    public getGatewayConfiguration(): p.GatewayConfiguration {
        return this.gatewayConfiguration;
    }

    /**
     * Set GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @param {p.GatewayConfiguration} val
     * @return {Token}
     */
    public setGatewayConfiguration(val: p.GatewayConfiguration): Token {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGatewayConfiguration().getProcessOutObjectClass())
            this.gatewayConfiguration = val;
        else {
            var obj = this.client.newGatewayConfiguration();
            obj.fillWithData(val);
            this.gatewayConfiguration = obj;
        }
        return this;
    }

    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @return {string}
     */
    public getGatewayConfigurationId(): string {
        return this.gatewayConfigurationId;
    }

    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @param {string} val
     * @return {Token}
     */
    public setGatewayConfigurationId(val: string): Token {
        this.gatewayConfigurationId = val;
        return this;
    }

    /**
     * Get Card
     * Card used to create this token, if any
     * @return {p.Card}
     */
    public getCard(): p.Card {
        return this.card;
    }

    /**
     * Set Card
     * Card used to create this token, if any
     * @param {p.Card} val
     * @return {Token}
     */
    public setCard(val: p.Card): Token {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCard().getProcessOutObjectClass())
            this.card = val;
        else {
            var obj = this.client.newCard();
            obj.fillWithData(val);
            this.card = obj;
        }
        return this;
    }

    /**
     * Get CardId
     * ID of the card used to create the token, if any
     * @return {string}
     */
    public getCardId(): string {
        return this.cardId;
    }

    /**
     * Set CardId
     * ID of the card used to create the token, if any
     * @param {string} val
     * @return {Token}
     */
    public setCardId(val: string): Token {
        this.cardId = val;
        return this;
    }

    /**
     * Get Type
     * Type of the token. Can be card or gateway_token
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the token. Can be card or gateway_token
     * @param {string} val
     * @return {Token}
     */
    public setType(val: string): Token {
        this.type = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Token}
     */
    public setMetadata(val: any): Token {
        this.metadata = val;
        return this;
    }

    /**
     * Get IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @return {boolean}
     */
    public getIsSubscriptionOnly(): boolean {
        return this.isSubscriptionOnly;
    }

    /**
     * Set IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @param {boolean} val
     * @return {Token}
     */
    public setIsSubscriptionOnly(val: boolean): Token {
        this.isSubscriptionOnly = val;
        return this;
    }

    /**
     * Get IsDefault
     * True if the token it the default token of the customer, false otherwise
     * @return {boolean}
     */
    public getIsDefault(): boolean {
        return this.isDefault;
    }

    /**
     * Set IsDefault
     * True if the token it the default token of the customer, false otherwise
     * @param {boolean} val
     * @return {Token}
     */
    public setIsDefault(val: boolean): Token {
        this.isDefault = val;
        return this;
    }

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @return {string}
     */
    public getReturnUrl(): string {
        return this.returnUrl;
    }

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @param {string} val
     * @return {Token}
     */
    public setReturnUrl(val: string): Token {
        this.returnUrl = val;
        return this;
    }

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @return {string}
     */
    public getCancelUrl(): string {
        return this.cancelUrl;
    }

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @param {string} val
     * @return {Token}
     */
    public setCancelUrl(val: string): Token {
        this.cancelUrl = val;
        return this;
    }

    /**
     * Get Summary
     * Summary of the customer token, such as a description of the card used or the email of a PayPal account
     * @return {string}
     */
    public getSummary(): string {
        return this.summary;
    }

    /**
     * Set Summary
     * Summary of the customer token, such as a description of the card used or the email of a PayPal account
     * @param {string} val
     * @return {Token}
     */
    public setSummary(val: string): Token {
        this.summary = val;
        return this;
    }

    /**
     * Get IsChargeable
     * True if the token is chargeable, false otherwise
     * @return {boolean}
     */
    public getIsChargeable(): boolean {
        return this.isChargeable;
    }

    /**
     * Set IsChargeable
     * True if the token is chargeable, false otherwise
     * @param {boolean} val
     * @return {Token}
     */
    public setIsChargeable(val: boolean): Token {
        this.isChargeable = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the customer token was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the customer token was created
     * @param {string} val
     * @return {Token}
     */
    public setCreatedAt(val: string): Token {
        this.createdAt = val;
        return this;
    }

    /**
     * Get Description
     * Description of the created token
     * @return {string}
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Set Description
     * Description of the created token
     * @param {string} val
     * @return {Token}
     */
    public setDescription(val: string): Token {
        this.description = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Token}
     */
    public fillWithData(data: any): Token {
        if (data["id"])
            this.setId(data["id"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["customer_id"])
            this.setCustomerId(data["customer_id"]);
        if (data["gateway_configuration"])
            this.setGatewayConfiguration(data["gateway_configuration"]);
        if (data["gateway_configuration_id"])
            this.setGatewayConfigurationId(data["gateway_configuration_id"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["card_id"])
            this.setCardId(data["card_id"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["is_subscription_only"])
            this.setIsSubscriptionOnly(data["is_subscription_only"]);
        if (data["is_default"])
            this.setIsDefault(data["is_default"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["summary"])
            this.setSummary(data["summary"]);
        if (data["is_chargeable"])
            this.setIsChargeable(data["is_chargeable"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["description"])
            this.setDescription(data["description"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
            "customer": this.getCustomer(),
            "customer_id": this.getCustomerId(),
            "gateway_configuration": this.getGatewayConfiguration(),
            "gateway_configuration_id": this.getGatewayConfigurationId(),
            "card": this.getCard(),
            "card_id": this.getCardId(),
            "type": this.getType(),
            "metadata": this.getMetadata(),
            "is_subscription_only": this.getIsSubscriptionOnly(),
            "is_default": this.getIsDefault(),
            "return_url": this.getReturnUrl(),
            "cancel_url": this.getCancelUrl(),
            "summary": this.getSummary(),
            "is_chargeable": this.getIsChargeable(),
            "created_at": this.getCreatedAt(),
            "description": this.getDescription(),
        };
    }

    /**
     * Get the customer's tokens.
	 * @param string customerId
     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchCustomerTokens(customerId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens";

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
	 * @param string customerId
	 * @param string tokenId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(customerId: string, tokenId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens/" + encodeURI(tokenId) + "";

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
     * Create a new token for the given customer ID.

     * @param {any} options
     * @return {Promise<any>}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens";

        var data = {
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'description': this.getDescription(), 
			'source': (options['source']) ? options['source'] : null, 
			'settings': (options['settings']) ? options['settings'] : null, 
			'device': (options['device']) ? options['device'] : null, 
			'verify': (options['verify']) ? options['verify'] : null, 
			'verify_metadata': (options['verify_metadata']) ? options['verify_metadata'] : null, 
			'set_default': (options['set_default']) ? options['set_default'] : null
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
     * Save the updated customer attributes.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    public save(options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";

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

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete a customer token

     * @param {any} options
     * @return {Promise<boolean>}
     */
    public delete(options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";

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
export = Token;
