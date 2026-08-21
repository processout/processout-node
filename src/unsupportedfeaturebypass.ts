// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class UnsupportedFeatureBypass {
    private client: ProcessOut = null;

    /**
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @type {boolean}
     */
    private incrementalAuthorization: boolean = null;

    /**
     * Indicates whether to fallback to normal payment if split payments are not supported
     * @type {boolean}
     */
    private splitPayments: boolean = null;

    /**
     * UnsupportedFeatureBypass constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: UnsupportedFeatureBypass) {
        if (typeof client === 'undefined')
            throw new Error("The UnsupportedFeatureBypass object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newUnsupportedFeatureBypass()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "UnsupportedFeatureBypass";
    }

    /**
     * Get IncrementalAuthorization
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @return {boolean}
     */
    public getIncrementalAuthorization(): boolean {
        return this.incrementalAuthorization;
    }

    /**
     * Set IncrementalAuthorization
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @param {boolean} val
     * @return {UnsupportedFeatureBypass}
     */
    public setIncrementalAuthorization(val: boolean): UnsupportedFeatureBypass {
        this.incrementalAuthorization = val;
        return this;
    }

    /**
     * Get SplitPayments
     * Indicates whether to fallback to normal payment if split payments are not supported
     * @return {boolean}
     */
    public getSplitPayments(): boolean {
        return this.splitPayments;
    }

    /**
     * Set SplitPayments
     * Indicates whether to fallback to normal payment if split payments are not supported
     * @param {boolean} val
     * @return {UnsupportedFeatureBypass}
     */
    public setSplitPayments(val: boolean): UnsupportedFeatureBypass {
        this.splitPayments = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {UnsupportedFeatureBypass}
     */
    public fillWithData(data: any): UnsupportedFeatureBypass {
        if (data["incremental_authorization"])
            this.setIncrementalAuthorization(data["incremental_authorization"]);
        if (data["split_payments"])
            this.setSplitPayments(data["split_payments"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "incremental_authorization": this.getIncrementalAuthorization(),
            "split_payments": this.getSplitPayments(),
        };
    }

    
}
export = UnsupportedFeatureBypass;
