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
     * Customer preferred scheme, such as carte bancaire vs visa. Can be set to none to clear the previous value
     * @type {string}
     */
    private preferredScheme: string = null;

    /**
     * Preferred card type for combo cards, such as credit or debit.
     * @type {string}
     */
    private preferredCardType: string = null;

    /**
     * Scheme details for transaction chaining (e.g. scheme transaction ID)
     * @type {p.CardSchemeDetails}
     */
    private schemeDetails: p.CardSchemeDetails = null;

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
     * Get PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa. Can be set to none to clear the previous value
     * @return {string}
     */
    public getPreferredScheme(): string {
        return this.preferredScheme;
    }

    /**
     * Set PreferredScheme
     * Customer preferred scheme, such as carte bancaire vs visa. Can be set to none to clear the previous value
     * @param {string} val
     * @return {CardUpdateRequest}
     */
    public setPreferredScheme(val: string): CardUpdateRequest {
        this.preferredScheme = val;
        return this;
    }

    /**
     * Get PreferredCardType
     * Preferred card type for combo cards, such as credit or debit.
     * @return {string}
     */
    public getPreferredCardType(): string {
        return this.preferredCardType;
    }

    /**
     * Set PreferredCardType
     * Preferred card type for combo cards, such as credit or debit.
     * @param {string} val
     * @return {CardUpdateRequest}
     */
    public setPreferredCardType(val: string): CardUpdateRequest {
        this.preferredCardType = val;
        return this;
    }

    /**
     * Get SchemeDetails
     * Scheme details for transaction chaining (e.g. scheme transaction ID)
     * @return {p.CardSchemeDetails}
     */
    public getSchemeDetails(): p.CardSchemeDetails {
        return this.schemeDetails;
    }

    /**
     * Set SchemeDetails
     * Scheme details for transaction chaining (e.g. scheme transaction ID)
     * @param {p.CardSchemeDetails} val
     * @return {CardUpdateRequest}
     */
    public setSchemeDetails(val: p.CardSchemeDetails): CardUpdateRequest {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCardSchemeDetails().getProcessOutObjectClass())
            this.schemeDetails = val;
        else {
            var obj = this.client.newCardSchemeDetails();
            obj.fillWithData(val);
            this.schemeDetails = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardUpdateRequest}
     */
    public fillWithData(data: any): CardUpdateRequest {
        if (data["preferred_scheme"])
            this.setPreferredScheme(data["preferred_scheme"]);
        if (data["preferred_card_type"])
            this.setPreferredCardType(data["preferred_card_type"]);
        if (data["scheme_details"])
            this.setSchemeDetails(data["scheme_details"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "preferred_scheme": this.getPreferredScheme(),
            "preferred_card_type": this.getPreferredCardType(),
            "scheme_details": this.getSchemeDetails(),
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
			'preferred_scheme': this.getPreferredScheme(), 
			'scheme_details': this.getSchemeDetails()
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
                        
                if (typeof body !== 'undefined') {
                    returnValues.push(cur.fillWithData(body));
                }

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
