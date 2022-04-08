// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class AlternativeMerchantCertificate {
    private client: ProcessOut = null;

    /**
     * id of the alternative merchant certificate
     * @type {string}
     */
    private id: string = null;

    /**
     * AlternativeMerchantCertificate constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: AlternativeMerchantCertificate) {
        if (typeof client === 'undefined')
            throw new Error("The AlternativeMerchantCertificate object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAlternativeMerchantCertificate()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "AlternativeMerchantCertificate";
    }

    /**
     * Get Id
     * id of the alternative merchant certificate
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * id of the alternative merchant certificate
     * @param {string} val
     * @return {AlternativeMerchantCertificate}
     */
    public setId(val: string): AlternativeMerchantCertificate {
        this.id = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {AlternativeMerchantCertificate}
     */
    public fillWithData(data: any): AlternativeMerchantCertificate {
        if (data["id"])
            this.setId(data["id"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
        };
    }

    /**
     * Save new alternative apple pay certificates
     * 
     * @param {any} options
     * @return {Promise<p.AlternativeMerchantCertificate>}
     */
    public save(options): Promise<p.AlternativeMerchantCertificate> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/projects/applepay/alternative-merchant-certificates";

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
                body = body['alternative_merchant_certificate'];
                var obj = cur.client.newAlternativeMerchantCertificate();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = AlternativeMerchantCertificate;
