// The content of this file was automatically generated

import Promise    = require('promise');
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
        if (data["is_chargeable"])
            this.setIsChargeable(data["is_chargeable"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    /**
     * Verify a customer token's card is valid.

     * @param {any} options
     * @return {bool}
     */
    public verify(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "/verify";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Get the customer's tokens.
	 * @param string customerId
     * @param {any} options
     * @return {array}
     */
    public fetchCustomerTokens(customerId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = response.body['tokens'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newToken();
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
     * Find a customer's token by its ID.
	 * @param string customerId
	 * @param string tokenId
     * @param {any} options
     * @return {this}
     */
    public find(customerId, tokenId, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(customerId) + "/tokens/" + encodeURI(tokenId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['token'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    /**
     * Create a new token for the given customer ID.

     * @param {any} options
     * @return {this}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens";

        var data = {
			'metadata': this.getMetadata(), 
			'source': (options['source']) ? options['source'] : null, 
			'settings': (options['settings']) ? options['settings'] : null, 
			'target': (options['target']) ? options['target'] : null, 
			'verify': (options['verify']) ? options['verify'] : null, 
			'verify_metadata': (options['verify_metadata']) ? options['verify_metadata'] : null, 
			'set_default': (options['set_default']) ? options['set_default'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = response.body;
                body = body['token'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };

            request.post(path, data, options, callback);
            });
    }
    /**
     * Save the updated customer attributes.

     * @param {any} options
     * @return {bool}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };

            request.put(path, data, options, callback);
            });
    }
    /**
     * Delete a customer token

     * @param {any} options
     * @return {bool}
     */
    public delete(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/customers/" + encodeURI(this.getCustomerId()) + "/tokens/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = function(err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }

                var response = new Response(body, resp);
                var err      = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };

            request.delete(path, data, options, callback);
            });
    }
    
}
export = Token;
