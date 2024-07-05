// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class InvoicesAuthorizeResponse {
    private client: ProcessOut = null;

    /**
     * Transaction linked to the invoice
     * @type {p.Transaction}
     */
    private transaction: p.Transaction = null;

    /**
     * Customer action to be performed
     * @type {p.CustomerAction}
     */
    private customerAction: p.CustomerAction = null;

    /**
     * InvoicesAuthorizeResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoicesAuthorizeResponse) {
        if (typeof client === 'undefined')
            throw new Error("The InvoicesAuthorizeResponse object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newInvoicesAuthorizeResponse()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "InvoicesAuthorizeResponse";
    }

    /**
     * Get Transaction
     * Transaction linked to the invoice
     * @return {p.Transaction}
     */
    public getTransaction(): p.Transaction {
        return this.transaction;
    }

    /**
     * Set Transaction
     * Transaction linked to the invoice
     * @param {p.Transaction} val
     * @return {InvoicesAuthorizeResponse}
     */
    public setTransaction(val: p.Transaction): InvoicesAuthorizeResponse {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    }

    /**
     * Get CustomerAction
     * Customer action to be performed
     * @return {p.CustomerAction}
     */
    public getCustomerAction(): p.CustomerAction {
        return this.customerAction;
    }

    /**
     * Set CustomerAction
     * Customer action to be performed
     * @param {p.CustomerAction} val
     * @return {InvoicesAuthorizeResponse}
     */
    public setCustomerAction(val: p.CustomerAction): InvoicesAuthorizeResponse {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomerAction().getProcessOutObjectClass())
            this.customerAction = val;
        else {
            var obj = this.client.newCustomerAction();
            obj.fillWithData(val);
            this.customerAction = obj;
        }
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesAuthorizeResponse}
     */
    public fillWithData(data: any): InvoicesAuthorizeResponse {
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["customer_action"])
            this.setCustomerAction(data["customer_action"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "transaction": this.getTransaction(),
            "customer_action": this.getCustomerAction(),
        };
    }

    
}
export = InvoicesAuthorizeResponse;
