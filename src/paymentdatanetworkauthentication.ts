// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class PaymentDataNetworkAuthentication {
    private client: ProcessOut = null;

    /**
     * Authentication CAVV
     * @type {string}
     */
    private cavv: string = null;

    /**
     * PaymentDataNetworkAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentDataNetworkAuthentication) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataNetworkAuthentication object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataNetworkAuthentication()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "PaymentDataNetworkAuthentication";
    }

    /**
     * Get Cavv
     * Authentication CAVV
     * @return {string}
     */
    public getCavv(): string {
        return this.cavv;
    }

    /**
     * Set Cavv
     * Authentication CAVV
     * @param {string} val
     * @return {PaymentDataNetworkAuthentication}
     */
    public setCavv(val: string): PaymentDataNetworkAuthentication {
        this.cavv = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataNetworkAuthentication}
     */
    public fillWithData(data: any): PaymentDataNetworkAuthentication {
        if (data["cavv"])
            this.setCavv(data["cavv"]);
        return this;
    }

    
}
export = PaymentDataNetworkAuthentication;
