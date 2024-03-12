// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class PayoutItemAmountBreakdowns {
    private client: ProcessOut = null;

    /**
     * Amount relating to scheme fee
     * @type {string}
     */
    private schemeFee: string = null;

    /**
     * Amount relating to interchange fee
     * @type {string}
     */
    private interchangeFee: string = null;

    /**
     * Amount relating to gateway fee
     * @type {string}
     */
    private gatewayFee: string = null;

    /**
     * Amount relating to markup fee
     * @type {string}
     */
    private markupFee: string = null;

    /**
     * Amount relating to acquirer fee
     * @type {string}
     */
    private acquirerFee: string = null;

    /**
     * Amount relating to other fee
     * @type {string}
     */
    private otherFee: string = null;

    /**
     * PayoutItemAmountBreakdowns constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PayoutItemAmountBreakdowns) {
        if (typeof client === 'undefined')
            throw new Error("The PayoutItemAmountBreakdowns object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayoutItemAmountBreakdowns()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "PayoutItemAmountBreakdowns";
    }

    /**
     * Get SchemeFee
     * Amount relating to scheme fee
     * @return {string}
     */
    public getSchemeFee(): string {
        return this.schemeFee;
    }

    /**
     * Set SchemeFee
     * Amount relating to scheme fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    public setSchemeFee(val: string): PayoutItemAmountBreakdowns {
        this.schemeFee = val;
        return this;
    }

    /**
     * Get InterchangeFee
     * Amount relating to interchange fee
     * @return {string}
     */
    public getInterchangeFee(): string {
        return this.interchangeFee;
    }

    /**
     * Set InterchangeFee
     * Amount relating to interchange fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    public setInterchangeFee(val: string): PayoutItemAmountBreakdowns {
        this.interchangeFee = val;
        return this;
    }

    /**
     * Get GatewayFee
     * Amount relating to gateway fee
     * @return {string}
     */
    public getGatewayFee(): string {
        return this.gatewayFee;
    }

    /**
     * Set GatewayFee
     * Amount relating to gateway fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    public setGatewayFee(val: string): PayoutItemAmountBreakdowns {
        this.gatewayFee = val;
        return this;
    }

    /**
     * Get MarkupFee
     * Amount relating to markup fee
     * @return {string}
     */
    public getMarkupFee(): string {
        return this.markupFee;
    }

    /**
     * Set MarkupFee
     * Amount relating to markup fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    public setMarkupFee(val: string): PayoutItemAmountBreakdowns {
        this.markupFee = val;
        return this;
    }

    /**
     * Get AcquirerFee
     * Amount relating to acquirer fee
     * @return {string}
     */
    public getAcquirerFee(): string {
        return this.acquirerFee;
    }

    /**
     * Set AcquirerFee
     * Amount relating to acquirer fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    public setAcquirerFee(val: string): PayoutItemAmountBreakdowns {
        this.acquirerFee = val;
        return this;
    }

    /**
     * Get OtherFee
     * Amount relating to other fee
     * @return {string}
     */
    public getOtherFee(): string {
        return this.otherFee;
    }

    /**
     * Set OtherFee
     * Amount relating to other fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    public setOtherFee(val: string): PayoutItemAmountBreakdowns {
        this.otherFee = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItemAmountBreakdowns}
     */
    public fillWithData(data: any): PayoutItemAmountBreakdowns {
        if (data["scheme_fee"])
            this.setSchemeFee(data["scheme_fee"]);
        if (data["interchange_fee"])
            this.setInterchangeFee(data["interchange_fee"]);
        if (data["gateway_fee"])
            this.setGatewayFee(data["gateway_fee"]);
        if (data["markup_fee"])
            this.setMarkupFee(data["markup_fee"]);
        if (data["acquirer_fee"])
            this.setAcquirerFee(data["acquirer_fee"]);
        if (data["other_fee"])
            this.setOtherFee(data["other_fee"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "scheme_fee": this.getSchemeFee(),
            "interchange_fee": this.getInterchangeFee(),
            "gateway_fee": this.getGatewayFee(),
            "markup_fee": this.getMarkupFee(),
            "acquirer_fee": this.getAcquirerFee(),
            "other_fee": this.getOtherFee(),
        };
    }

    
}
export = PayoutItemAmountBreakdowns;
