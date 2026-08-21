// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class APMPaymentProcessingConfiguration {
    private client: ProcessOut = null;

    /**
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @type {string}
     */
    private returnRedirectType: string = null;

    /**
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @type {string}
     */
    private preferredFinalizationMode: string = null;

    /**
     * APMPaymentProcessingConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: APMPaymentProcessingConfiguration) {
        if (typeof client === 'undefined')
            throw new Error("The APMPaymentProcessingConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAPMPaymentProcessingConfiguration()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "APMPaymentProcessingConfiguration";
    }

    /**
     * Get ReturnRedirectType
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @return {string}
     */
    public getReturnRedirectType(): string {
        return this.returnRedirectType;
    }

    /**
     * Set ReturnRedirectType
     * Type of redirection performed once the customer returns from the Alternative Payment Method (APM) flow.
     * @param {string} val
     * @return {APMPaymentProcessingConfiguration}
     */
    public setReturnRedirectType(val: string): APMPaymentProcessingConfiguration {
        this.returnRedirectType = val;
        return this;
    }

    /**
     * Get PreferredFinalizationMode
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @return {string}
     */
    public getPreferredFinalizationMode(): string {
        return this.preferredFinalizationMode;
    }

    /**
     * Set PreferredFinalizationMode
     * Preferred finalization mode requested for the Alternative Payment Method (APM) flow.
     * @param {string} val
     * @return {APMPaymentProcessingConfiguration}
     */
    public setPreferredFinalizationMode(val: string): APMPaymentProcessingConfiguration {
        this.preferredFinalizationMode = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {APMPaymentProcessingConfiguration}
     */
    public fillWithData(data: any): APMPaymentProcessingConfiguration {
        if (data["return_redirect_type"])
            this.setReturnRedirectType(data["return_redirect_type"]);
        if (data["preferred_finalization_mode"])
            this.setPreferredFinalizationMode(data["preferred_finalization_mode"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "return_redirect_type": this.getReturnRedirectType(),
            "preferred_finalization_mode": this.getPreferredFinalizationMode(),
        };
    }

    
}
export = APMPaymentProcessingConfiguration;
