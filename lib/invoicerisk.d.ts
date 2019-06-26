import ProcessOut = require("./processout");
declare class InvoiceRisk {
    private client;
    /**
     * Scoring of the invoice
     * @type {string}
     */
    private score;
    /**
     * Define whether or not the invoice is legit
     * @type {boolean}
     */
    private isLegit;
    /**
     * InvoiceRisk constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceRisk);
    getProcessOutObjectClass(): string;
    /**
     * Get Score
     * Scoring of the invoice
     * @return {string}
     */
    getScore(): string;
    /**
     * Set Score
     * Scoring of the invoice
     * @param {string} val
     * @return {InvoiceRisk}
     */
    setScore(val: string): InvoiceRisk;
    /**
     * Get IsLegit
     * Define whether or not the invoice is legit
     * @return {boolean}
     */
    getIsLegit(): boolean;
    /**
     * Set IsLegit
     * Define whether or not the invoice is legit
     * @param {boolean} val
     * @return {InvoiceRisk}
     */
    setIsLegit(val: boolean): InvoiceRisk;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceRisk}
     */
    fillWithData(data: any): InvoiceRisk;
}
export = InvoiceRisk;
//# sourceMappingURL=invoicerisk.d.ts.map