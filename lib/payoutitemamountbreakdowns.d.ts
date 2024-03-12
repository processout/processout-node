import ProcessOut = require('./processout');
declare class PayoutItemAmountBreakdowns {
    private client;
    /**
     * Amount relating to scheme fee
     * @type {string}
     */
    private schemeFee;
    /**
     * Amount relating to interchange fee
     * @type {string}
     */
    private interchangeFee;
    /**
     * Amount relating to gateway fee
     * @type {string}
     */
    private gatewayFee;
    /**
     * Amount relating to markup fee
     * @type {string}
     */
    private markupFee;
    /**
     * Amount relating to acquirer fee
     * @type {string}
     */
    private acquirerFee;
    /**
     * Amount relating to other fee
     * @type {string}
     */
    private otherFee;
    /**
     * PayoutItemAmountBreakdowns constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PayoutItemAmountBreakdowns);
    getProcessOutObjectClass(): string;
    /**
     * Get SchemeFee
     * Amount relating to scheme fee
     * @return {string}
     */
    getSchemeFee(): string;
    /**
     * Set SchemeFee
     * Amount relating to scheme fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    setSchemeFee(val: string): PayoutItemAmountBreakdowns;
    /**
     * Get InterchangeFee
     * Amount relating to interchange fee
     * @return {string}
     */
    getInterchangeFee(): string;
    /**
     * Set InterchangeFee
     * Amount relating to interchange fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    setInterchangeFee(val: string): PayoutItemAmountBreakdowns;
    /**
     * Get GatewayFee
     * Amount relating to gateway fee
     * @return {string}
     */
    getGatewayFee(): string;
    /**
     * Set GatewayFee
     * Amount relating to gateway fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    setGatewayFee(val: string): PayoutItemAmountBreakdowns;
    /**
     * Get MarkupFee
     * Amount relating to markup fee
     * @return {string}
     */
    getMarkupFee(): string;
    /**
     * Set MarkupFee
     * Amount relating to markup fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    setMarkupFee(val: string): PayoutItemAmountBreakdowns;
    /**
     * Get AcquirerFee
     * Amount relating to acquirer fee
     * @return {string}
     */
    getAcquirerFee(): string;
    /**
     * Set AcquirerFee
     * Amount relating to acquirer fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    setAcquirerFee(val: string): PayoutItemAmountBreakdowns;
    /**
     * Get OtherFee
     * Amount relating to other fee
     * @return {string}
     */
    getOtherFee(): string;
    /**
     * Set OtherFee
     * Amount relating to other fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    setOtherFee(val: string): PayoutItemAmountBreakdowns;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItemAmountBreakdowns}
     */
    fillWithData(data: any): PayoutItemAmountBreakdowns;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = PayoutItemAmountBreakdowns;
//# sourceMappingURL=payoutitemamountbreakdowns.d.ts.map