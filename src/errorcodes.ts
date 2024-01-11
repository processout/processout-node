// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class ErrorCodes {
    private client: ProcessOut = null;

    /**
     * Error codes from gateways by category.
     * @type {p.CategoryErrorCodes}
     */
    private gateway: p.CategoryErrorCodes = null;

    /**
     * ErrorCodes constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ErrorCodes) {
        if (typeof client === 'undefined')
            throw new Error("The ErrorCodes object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newErrorCodes()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "ErrorCodes";
    }

    /**
     * Get Gateway
     * Error codes from gateways by category.
     * @return {p.CategoryErrorCodes}
     */
    public getGateway(): p.CategoryErrorCodes {
        return this.gateway;
    }

    /**
     * Set Gateway
     * Error codes from gateways by category.
     * @param {p.CategoryErrorCodes} val
     * @return {ErrorCodes}
     */
    public setGateway(val: p.CategoryErrorCodes): ErrorCodes {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCategoryErrorCodes().getProcessOutObjectClass())
            this.gateway = val;
        else {
            var obj = this.client.newCategoryErrorCodes();
            obj.fillWithData(val);
            this.gateway = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ErrorCodes}
     */
    public fillWithData(data: any): ErrorCodes {
        if (data["gateway"])
            this.setGateway(data["gateway"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "gateway": this.getGateway(),
        };
    }

    /**
     * Get all error codes.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/error-codes";

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
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = ErrorCodes;
