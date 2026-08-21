// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class PaymentProcessingConfiguration {
    private client: ProcessOut = null;

    /**
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @type {boolean}
     */
    private bypassUnsupportedSplitPayments: boolean = null;

    /**
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @type {p.APMPaymentProcessingConfiguration}
     */
    private apmPaymentConfig: p.APMPaymentProcessingConfiguration = null;

    /**
     * PaymentProcessingConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentProcessingConfiguration) {
        if (typeof client === 'undefined')
            throw new Error("The PaymentProcessingConfiguration object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPaymentProcessingConfiguration()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "PaymentProcessingConfiguration";
    }

    /**
     * Get BypassUnsupportedSplitPayments
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @return {boolean}
     */
    public getBypassUnsupportedSplitPayments(): boolean {
        return this.bypassUnsupportedSplitPayments;
    }

    /**
     * Set BypassUnsupportedSplitPayments
     * Payment processing should bypass unsupported split payments validation when no payment gateway supports it.
     * @param {boolean} val
     * @return {PaymentProcessingConfiguration}
     */
    public setBypassUnsupportedSplitPayments(val: boolean): PaymentProcessingConfiguration {
        this.bypassUnsupportedSplitPayments = val;
        return this;
    }

    /**
     * Get ApmPaymentConfig
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @return {p.APMPaymentProcessingConfiguration}
     */
    public getApmPaymentConfig(): p.APMPaymentProcessingConfiguration {
        return this.apmPaymentConfig;
    }

    /**
     * Set ApmPaymentConfig
     * Alternative Payment Method (APM) specific payment processing cofiguration.
     * @param {p.APMPaymentProcessingConfiguration} val
     * @return {PaymentProcessingConfiguration}
     */
    public setApmPaymentConfig(val: p.APMPaymentProcessingConfiguration): PaymentProcessingConfiguration {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newAPMPaymentProcessingConfiguration().getProcessOutObjectClass())
            this.apmPaymentConfig = val;
        else {
            var obj = this.client.newAPMPaymentProcessingConfiguration();
            obj.fillWithData(val);
            this.apmPaymentConfig = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentProcessingConfiguration}
     */
    public fillWithData(data: any): PaymentProcessingConfiguration {
        if (data["bypass_unsupported_split_payments"])
            this.setBypassUnsupportedSplitPayments(data["bypass_unsupported_split_payments"]);
        if (data["apm_payment_config"])
            this.setApmPaymentConfig(data["apm_payment_config"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "bypass_unsupported_split_payments": this.getBypassUnsupportedSplitPayments(),
            "apm_payment_config": this.getApmPaymentConfig(),
        };
    }

    
}
export = PaymentProcessingConfiguration;
