// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ApplePayAlternativeMerchantCertificates {
    private client: ProcessOut = null;

    /**
     * number of alternative merchant certificate
     * @type {string}
     */
    private count: string = null;

    /**
     * Alternative merchant certificates available
     * @type {any}
     */
    private alternativeMerchantCertificates: any = null;

    /**
     * ApplePayAlternativeMerchantCertificates constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ApplePayAlternativeMerchantCertificates) {
        if (typeof client === 'undefined')
            throw new Error("The ApplePayAlternativeMerchantCertificates object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newApplePayAlternativeMerchantCertificates()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ApplePayAlternativeMerchantCertificates";
    }

    /**
     * Get Count
     * number of alternative merchant certificate
     * @return {string}
     */
    public getCount(): string {
        return this.count;
    }

    /**
     * Set Count
     * number of alternative merchant certificate
     * @param {string} val
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    public setCount(val: string): ApplePayAlternativeMerchantCertificates {
        this.count = val;
        return this;
    }

    /**
     * Get AlternativeMerchantCertificates
     * Alternative merchant certificates available
     * @return {any}
     */
    public getAlternativeMerchantCertificates(): any {
        return this.alternativeMerchantCertificates;
    }

    /**
     * Set AlternativeMerchantCertificates
     * Alternative merchant certificates available
     * @param {any} val
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    public setAlternativeMerchantCertificates(val: any): ApplePayAlternativeMerchantCertificates {
        if (val.length > 0 && typeof val[0] === 'object')
            this.alternativeMerchantCertificates = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newAlternativeMerchantCertificate();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.alternativeMerchantCertificates = a;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    public fillWithData(data: any): ApplePayAlternativeMerchantCertificates {
        if (data["count"])
            this.setCount(data["count"]);
        if (data["alternative_merchant_certificates"])
            this.setAlternativeMerchantCertificates(data["alternative_merchant_certificates"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "count": this.getCount(),
            "alternative_merchant_certificates": this.getAlternativeMerchantCertificates(),
        };
    }

    /**
     * Fetch the project's alternative certificates by ID
     * 
     * @param {any} options
     * @return {Promise<p.ApplePayAlternativeMerchantCertificates>}
     */
    public fetch(options): Promise<p.ApplePayAlternativeMerchantCertificates> {
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
                body = body['applepay_certificates'];
                var obj0 = cur.client.newApplePayAlternativeMerchantCertificates();
                returnValues.push(obj0.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = ApplePayAlternativeMerchantCertificates;
