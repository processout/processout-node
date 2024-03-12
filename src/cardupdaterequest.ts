// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CardUpdateRequest {
    private client: ProcessOut = null;

    /**
     * Card update type. Possible values: "new-cvc2" or "other"
     * @type {string}
     */
    private updateType: string = null;

    /**
     * Card update reason.
     * @type {string}
     */
    private updateReason: string = null;

    /**
     * Customer preferred scheme, such as carte bancaire vs visa
     * @type {string}
     */
    private preferredScheme: string = null;

    /**
     * CardUpdateRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardUpdateRequest) {
        if (typeof client === 'undefined')
            throw new Error("The CardUpdateRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardUpdateRequest()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CardUpdateRequest";
    }

    /**
     * Get UpdateType
     * Card update type. Possible values: "new-cvc2" or "other"
     * @return {string}
     */
    public getUpdateType(): string {
        return this.updateType;
    }

    /**
     * Set UpdateType
     * Card update type. Possible values: "new-cvc2" or "other"
     * @param {string} val
     * @return {CardUpdateRequest}
     */
    public setUpdateType(val: string): CardUpdateRequest {
        this.updateType = val;
        return this;
    }

    /**
     * Get UpdateReason
     * Card update reason.
     * @return {string}
     */
    public getUpdateReason(): string {
        return this.updateReason;
    }

    /**
     * Set UpdateReason
     * Card update reason.
     * @param {string} val
     * @return {CardUpdateRequest}
     */
    public setUpdateReason(val: string): CardUpdateRequest {
        this.updateReason = val;
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
     * @return {CardUpdateRequest}
     */
    public setPreferredScheme(val: string): CardUpdateRequest {
        this.preferredScheme = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardUpdateRequest}
     */
    public fillWithData(data: any): CardUpdateRequest {
        if (data["update_type"])
            this.setUpdateType(data["update_type"]);
        if (data["update_reason"])
            this.setUpdateReason(data["update_reason"]);
        if (data["preferred_scheme"])
            this.setPreferredScheme(data["preferred_scheme"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "update_type": this.getUpdateType(),
            "update_reason": this.getUpdateReason(),
            "preferred_scheme": this.getPreferredScheme(),
        };
    }

    /**
     * Update a card by its ID.
	 * @param string cardId
     * @param {any} options
     * @return {Promise<any>}
     */
    public update(cardId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/cards/" + encodeURI(cardId) + "";

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
                body = body['card'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = CardUpdateRequest;
