import ProcessOut = require('./processout');
declare class NativeAPMTransactionDetailsInvoice {
    private client;
    /**
     * Native APM Invoice amount
     * @type {string}
     */
    private amount;
    /**
     * Native APM Invoice currency code
     * @type {string}
     */
    private currencyCode;
    /**
     * NativeAPMTransactionDetailsInvoice constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMTransactionDetailsInvoice);
    getProcessOutObjectClass(): string;
    /**
     * Get Amount
     * Native APM Invoice amount
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Native APM Invoice amount
     * @param {string} val
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    setAmount(val: string): NativeAPMTransactionDetailsInvoice;
    /**
     * Get CurrencyCode
     * Native APM Invoice currency code
     * @return {string}
     */
    getCurrencyCode(): string;
    /**
     * Set CurrencyCode
     * Native APM Invoice currency code
     * @param {string} val
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    setCurrencyCode(val: string): NativeAPMTransactionDetailsInvoice;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetailsInvoice}
     */
    fillWithData(data: any): NativeAPMTransactionDetailsInvoice;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMTransactionDetailsInvoice;
//# sourceMappingURL=nativeapmtransactiondetailsinvoice.d.ts.map