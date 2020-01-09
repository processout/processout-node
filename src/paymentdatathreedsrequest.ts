// The content of this file was automatically generated

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class PaymentDataThreeDSRequest {
    private client: ProcessOut = null;

    /**
     * URL of the ACS
     * @type {string}
     */
    private acsUrl: string = null;

    /**
     * PAReq used during the 3DS authentication
     * @type {string}
     */
    private pareq: string = null;

    /**
     * MD used during the 3DS authentication
     * @type {string}
     */
    private md: string = null;

    /**
     * URL of the 3DS term
     * @type {string}
     */
    private termUrl: string = null;

    /**
     * PaymentDataThreeDSRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentDataThreeDSRequest) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentDataThreeDSRequest object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentDataThreeDSRequest()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "PaymentDataThreeDSRequest";
    }

    /**
     * Get AcsUrl
     * URL of the ACS
     * @return {string}
     */
    public getAcsUrl(): string {
        return this.acsUrl;
    }

    /**
     * Set AcsUrl
     * URL of the ACS
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    public setAcsUrl(val: string): PaymentDataThreeDSRequest {
        this.acsUrl = val;
        return this;
    }

    /**
     * Get Pareq
     * PAReq used during the 3DS authentication
     * @return {string}
     */
    public getPareq(): string {
        return this.pareq;
    }

    /**
     * Set Pareq
     * PAReq used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    public setPareq(val: string): PaymentDataThreeDSRequest {
        this.pareq = val;
        return this;
    }

    /**
     * Get Md
     * MD used during the 3DS authentication
     * @return {string}
     */
    public getMd(): string {
        return this.md;
    }

    /**
     * Set Md
     * MD used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    public setMd(val: string): PaymentDataThreeDSRequest {
        this.md = val;
        return this;
    }

    /**
     * Get TermUrl
     * URL of the 3DS term
     * @return {string}
     */
    public getTermUrl(): string {
        return this.termUrl;
    }

    /**
     * Set TermUrl
     * URL of the 3DS term
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    public setTermUrl(val: string): PaymentDataThreeDSRequest {
        this.termUrl = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSRequest}
     */
    public fillWithData(data: any): PaymentDataThreeDSRequest {
        if (data["acs_url"])
            this.setAcsUrl(data["acs_url"]);
        if (data["pareq"])
            this.setPareq(data["pareq"]);
        if (data["md"])
            this.setMd(data["md"]);
        if (data["term_url"])
            this.setTermUrl(data["term_url"]);
        return this;
    }

    
}
export = PaymentDataThreeDSRequest;
