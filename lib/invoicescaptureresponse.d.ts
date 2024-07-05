import ProcessOut = require('./processout');
import * as p from '.';
declare class InvoicesCaptureResponse {
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
     * InvoicesCaptureResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoicesCaptureResponse);
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
     * @return {InvoicesCaptureResponse}
     */
    setTransaction(val: p.Transaction): InvoicesCaptureResponse;
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
     * @return {InvoicesCaptureResponse}
     */
    setCustomerAction(val: p.CustomerAction): InvoicesCaptureResponse;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesCaptureResponse}
     */
    fillWithData(data: any): InvoicesCaptureResponse;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoicesCaptureResponse;
//# sourceMappingURL=invoicescaptureresponse.d.ts.map