import ProcessOut = require('./processout');
declare class InvoiceExternalFraudTools {
    private client;
    /**
     * Forter
     * @type {any}
     */
    private forter;
    /**
     * Ravelin
     * @type {any}
     */
    private ravelin;
    /**
     * Signifyd
     * @type {any}
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
     * @return {any}
     */
    getForter(): any;
    /**
     * Set Forter
     * Forter
     * @param {any} val
     * @return {InvoiceExternalFraudTools}
     */
    setForter(val: any): InvoiceExternalFraudTools;
    /**
     * Get Ravelin
     * Ravelin
     * @return {any}
     */
    getRavelin(): any;
    /**
     * Set Ravelin
     * Ravelin
     * @param {any} val
     * @return {InvoiceExternalFraudTools}
     */
    setRavelin(val: any): InvoiceExternalFraudTools;
    /**
     * Get Signifyd
     * Signifyd
     * @return {any}
     */
    getSignifyd(): any;
    /**
     * Set Signifyd
     * Signifyd
     * @param {any} val
     * @return {InvoiceExternalFraudTools}
     */
    setSignifyd(val: any): InvoiceExternalFraudTools;
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