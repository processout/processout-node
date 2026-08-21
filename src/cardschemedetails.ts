// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class CardSchemeDetails {
    private client: ProcessOut = null;

    /**
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @type {string}
     */
    private transactionId: string = null;

    /**
     * Transaction Link Identifier for Mastercard transaction chaining
     * @type {string}
     */
    private transactionLinkId: string = null;

    /**
     * CardSchemeDetails constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CardSchemeDetails) {
        if (typeof client === 'undefined')
            throw new Error("The CardSchemeDetails object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardSchemeDetails()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "CardSchemeDetails";
    }

    /**
     * Get TransactionId
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @return {string}
     */
    public getTransactionId(): string {
        return this.transactionId;
    }

    /**
     * Set TransactionId
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @param {string} val
     * @return {CardSchemeDetails}
     */
    public setTransactionId(val: string): CardSchemeDetails {
        this.transactionId = val;
        return this;
    }

    /**
     * Get TransactionLinkId
     * Transaction Link Identifier for Mastercard transaction chaining
     * @return {string}
     */
    public getTransactionLinkId(): string {
        return this.transactionLinkId;
    }

    /**
     * Set TransactionLinkId
     * Transaction Link Identifier for Mastercard transaction chaining
     * @param {string} val
     * @return {CardSchemeDetails}
     */
    public setTransactionLinkId(val: string): CardSchemeDetails {
        this.transactionLinkId = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardSchemeDetails}
     */
    public fillWithData(data: any): CardSchemeDetails {
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["transaction_link_id"])
            this.setTransactionLinkId(data["transaction_link_id"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "transaction_id": this.getTransactionId(),
            "transaction_link_id": this.getTransactionLinkId(),
        };
    }

    
}
export = CardSchemeDetails;
