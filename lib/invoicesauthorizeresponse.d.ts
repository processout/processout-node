import ProcessOut = require('./processout');
import * as p from '.';
declare class InvoicesAuthorizeResponse {
    private client;
    /**
     * Transaction linked to the invoice
     * @type {p.Transaction}
     */
    private transaction;
    /**
     * Customer action to be performed
     * @type {p.CustomerAction}
     */
    private customerAction;
    /**
     * InvoicesAuthorizeResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoicesAuthorizeResponse);
    getProcessOutObjectClass(): string;
    /**
     * Get Transaction
     * Transaction linked to the invoice
     * @return {p.Transaction}
     */
    getTransaction(): p.Transaction;
    /**
     * Set Transaction
     * Transaction linked to the invoice
     * @param {p.Transaction} val
     * @return {InvoicesAuthorizeResponse}
     */
    setTransaction(val: p.Transaction): InvoicesAuthorizeResponse;
    /**
     * Get CustomerAction
     * Customer action to be performed
     * @return {p.CustomerAction}
     */
    getCustomerAction(): p.CustomerAction;
    /**
     * Set CustomerAction
     * Customer action to be performed
     * @param {p.CustomerAction} val
     * @return {InvoicesAuthorizeResponse}
     */
    setCustomerAction(val: p.CustomerAction): InvoicesAuthorizeResponse;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesAuthorizeResponse}
     */
    fillWithData(data: any): InvoicesAuthorizeResponse;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoicesAuthorizeResponse;
//# sourceMappingURL=invoicesauthorizeresponse.d.ts.map