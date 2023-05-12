import ProcessOut = require('./processout');
declare class InvoiceExternalFraudTools {
    private client;
    /**
     * Forter
     * @type {string}
     */
    private forter;
    /**
     * Signifyd
     * @type {string}
     */
    private signifyd;
    /**
     * InvoiceExternalFraudTools constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceExternalFraudTools);
    getProcessOutObjectClass(): string;
    /**
     * Get Forter
     * Forter
     * @return {string}
     */
    getForter(): string;
    /**
     * Set Forter
     * Forter
     * @param {string} val
     * @return {InvoiceExternalFraudTools}
     */
    setForter(val: string): InvoiceExternalFraudTools;
    /**
     * Get Signifyd
     * Signifyd
     * @return {string}
     */
    getSignifyd(): string;
    /**
     * Set Signifyd
     * Signifyd
     * @param {string} val
     * @return {InvoiceExternalFraudTools}
     */
    setSignifyd(val: string): InvoiceExternalFraudTools;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceExternalFraudTools}
     */
    fillWithData(data: any): InvoiceExternalFraudTools;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceExternalFraudTools;
//# sourceMappingURL=invoiceexternalfraudtools.d.ts.map