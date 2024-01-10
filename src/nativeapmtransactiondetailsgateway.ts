// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class NativeAPMTransactionDetailsGateway {
    private client: ProcessOut = null;

    /**
     * Native APM Gateway display name
     * @type {string}
     */
    private displayName: string = null;

    /**
     * Native APM Gateway logo url
     * @type {string}
     */
    private logoUrl: string = null;

    /**
     * NativeAPMTransactionDetailsGateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMTransactionDetailsGateway) {
        if (typeof client === 'undefined')
            throw new Error("The NativeAPMTransactionDetailsGateway object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newNativeAPMTransactionDetailsGateway()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "NativeAPMTransactionDetailsGateway";
    }

    /**
     * Get DisplayName
     * Native APM Gateway display name
     * @return {string}
     */
    public getDisplayName(): string {
        return this.displayName;
    }

    /**
     * Set DisplayName
     * Native APM Gateway display name
     * @param {string} val
     * @return {NativeAPMTransactionDetailsGateway}
     */
    public setDisplayName(val: string): NativeAPMTransactionDetailsGateway {
        this.displayName = val;
        return this;
    }

    /**
     * Get LogoUrl
     * Native APM Gateway logo url
     * @return {string}
     */
    public getLogoUrl(): string {
        return this.logoUrl;
    }

    /**
     * Set LogoUrl
     * Native APM Gateway logo url
     * @param {string} val
     * @return {NativeAPMTransactionDetailsGateway}
     */
    public setLogoUrl(val: string): NativeAPMTransactionDetailsGateway {
        this.logoUrl = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetailsGateway}
     */
    public fillWithData(data: any): NativeAPMTransactionDetailsGateway {
        if (data["display_name"])
            this.setDisplayName(data["display_name"]);
        if (data["logo_url"])
            this.setLogoUrl(data["logo_url"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "display_name": this.getDisplayName(),
            "logo_url": this.getLogoUrl(),
        };
    }

    
}
export = NativeAPMTransactionDetailsGateway;
