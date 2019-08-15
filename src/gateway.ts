// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Gateway {
    private client: ProcessOut = null;

    /**
     * ID of the gateway
     * @type {string}
     */
    private id: string = null;

    /**
     * Name of the payment gateway
     * @type {string}
     */
    private name: string = null;

    /**
     * Name of the payment gateway that can be displayed
     * @type {string}
     */
    private displayName: string = null;

    /**
     * Logo URL of the payment gateway
     * @type {string}
     */
    private logoUrl: string = null;

    /**
     * URL of the payment gateway
     * @type {string}
     */
    private url: string = null;

    /**
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @type {any}
     */
    private flows: any = null;

    /**
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @type {any}
     */
    private tags: any = null;

    /**
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @type {boolean}
     */
    private canPullTransactions: boolean = null;

    /**
     * True if the gateway supports refunds, false otherwise
     * @type {boolean}
     */
    private canRefund: boolean = null;

    /**
     * True if the gateway supports oauth authentication, false otherwise
     * @type {boolean}
     */
    private isOauthAuthentication: boolean = null;

    /**
     * Description of the payment gateway
     * @type {string}
     */
    private description: string = null;

    /**
     * Gateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Gateway) {
        if (typeof client === 'undefined')
            throw new Error("The Gateway object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newGateway()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Gateway";
    }

    /**
     * Get Id
     * ID of the gateway
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the gateway
     * @param {string} val
     * @return {Gateway}
     */
    public setId(val: string): Gateway {
        this.id = val;
        return this;
    }

    /**
     * Get Name
     * Name of the payment gateway
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    public setName(val: string): Gateway {
        this.name = val;
        return this;
    }

    /**
     * Get DisplayName
     * Name of the payment gateway that can be displayed
     * @return {string}
     */
    public getDisplayName(): string {
        return this.displayName;
    }

    /**
     * Set DisplayName
     * Name of the payment gateway that can be displayed
     * @param {string} val
     * @return {Gateway}
     */
    public setDisplayName(val: string): Gateway {
        this.displayName = val;
        return this;
    }

    /**
     * Get LogoUrl
     * Logo URL of the payment gateway
     * @return {string}
     */
    public getLogoUrl(): string {
        return this.logoUrl;
    }

    /**
     * Set LogoUrl
     * Logo URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    public setLogoUrl(val: string): Gateway {
        this.logoUrl = val;
        return this;
    }

    /**
     * Get Url
     * URL of the payment gateway
     * @return {string}
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set Url
     * URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    public setUrl(val: string): Gateway {
        this.url = val;
        return this;
    }

    /**
     * Get Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @return {any}
     */
    public getFlows(): any {
        return this.flows;
    }

    /**
     * Set Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @param {any} val
     * @return {Gateway}
     */
    public setFlows(val: any): Gateway {
        this.flows = val;
        return this;
    }

    /**
     * Get Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @return {any}
     */
    public getTags(): any {
        return this.tags;
    }

    /**
     * Set Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @param {any} val
     * @return {Gateway}
     */
    public setTags(val: any): Gateway {
        this.tags = val;
        return this;
    }

    /**
     * Get CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @return {boolean}
     */
    public getCanPullTransactions(): boolean {
        return this.canPullTransactions;
    }

    /**
     * Set CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    public setCanPullTransactions(val: boolean): Gateway {
        this.canPullTransactions = val;
        return this;
    }

    /**
     * Get CanRefund
     * True if the gateway supports refunds, false otherwise
     * @return {boolean}
     */
    public getCanRefund(): boolean {
        return this.canRefund;
    }

    /**
     * Set CanRefund
     * True if the gateway supports refunds, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    public setCanRefund(val: boolean): Gateway {
        this.canRefund = val;
        return this;
    }

    /**
     * Get IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @return {boolean}
     */
    public getIsOauthAuthentication(): boolean {
        return this.isOauthAuthentication;
    }

    /**
     * Set IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    public setIsOauthAuthentication(val: boolean): Gateway {
        this.isOauthAuthentication = val;
        return this;
    }

    /**
     * Get Description
     * Description of the payment gateway
     * @return {string}
     */
    public getDescription(): string {
        return this.description;
    }

    /**
     * Set Description
     * Description of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    public setDescription(val: string): Gateway {
        this.description = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Gateway}
     */
    public fillWithData(data: any): Gateway {
        if (data["id"])
            this.setId(data["id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["flows"])
            this.setFlows(data["flows"]);
        if (data["tags"])
            this.setTags(data["tags"]);
        if (data["can_pull_transactions"])
            this.setCanPullTransactions(data["can_pull_transactions"]);
        if (data["can_refund"])
            this.setCanRefund(data["can_refund"]);
        if (data["is_oauth_authentication"])
            this.setIsOauthAuthentication(data["is_oauth_authentication"]);
        if (data["description"])
            this.setDescription(data["description"]);
        return this;
    }

    /**
     * Get all the gateway configurations of the gateway

     * @param {any} options
     * @return {array}
     */
    public fetchGatewayConfigurations(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/gateways/" + encodeURI(this.getName()) + "/gateway-configurations";

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
                var body = response.body['gateway_configurations'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newGatewayConfiguration();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };

            request.get(path, data, options, callback);
            });
    }
    
}
export = Gateway;
