import ProcessOut = require('./processout');
declare class InvoiceTax {
    private client;
    /**
     * Amount of the tax for an invoice
     * @type {string}
     */
    private amount;
    /**
     * Rate of the tax for an invoice
     * @type {string}
     */
    private rate;
    /**
     * InvoiceTax constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceTax);
    getProcessOutObjectClass(): string;
    /**
     * Get Amount
     * Amount of the tax for an invoice
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the tax for an invoice
     * @param {string} val
     * @return {InvoiceTax}
     */
    setAmount(val: string): InvoiceTax;
    /**
     * Get Rate
     * Rate of the tax for an invoice
     * @return {string}
     */
    getRate(): string;
    /**
     * Set Rate
     * Rate of the tax for an invoice
     * @param {string} val
     * @return {InvoiceTax}
     */
    setRate(val: string): InvoiceTax;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceTax}
     */
    fillWithData(data: any): InvoiceTax;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceTax;
//# sourceMappingURL=invoicetax.d.ts.map