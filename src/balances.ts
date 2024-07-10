// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Balances {
    private client: ProcessOut = null;

    /**
     * Vouchers linked to the customer
     * @type {any}
     */
    private vouchers: any = null;

    /**
     * Balances constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Balances) {
        if (typeof client === 'undefined')
            throw new Error("The Balances object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newBalances()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Balances";
    }

    /**
     * Get Vouchers
     * Vouchers linked to the customer
     * @return {any}
     */
    public getVouchers(): any {
        return this.vouchers;
    }

    /**
     * Set Vouchers
     * Vouchers linked to the customer
     * @param {any} val
     * @return {Balances}
     */
    public setVouchers(val: any): Balances {
        if (val.length > 0 && typeof val[0] === 'object')
            this.vouchers = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newBalance();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.vouchers = a;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Balances}
     */
    public fillWithData(data: any): Balances {
        if (data["vouchers"])
            this.setVouchers(data["vouchers"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "vouchers": this.getVouchers(),
        };
    }

    /**
     * Fetch a customer token's balance
	 * @param string tokenId
     * @param {any} options
     * @return {Promise<p.Balances>}
     */
    public find(tokenId: string, options): Promise<p.Balances> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/balances/tokens/" + encodeURI(tokenId) + "";

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
                body = body['balances'];
                var obj0 = cur.client.newBalances();
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
export = Balances;
