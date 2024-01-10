import ProcessOut = require('./processout');
import * as p from '.';
declare class InvoicesProcessNativePaymentResponse {
    private client;
    /**
     * Transaction linked to this Native APM
     * @type {p.Transaction}
     */
    private transaction;
    /**
     * Native APM response
     * @type {p.NativeAPMResponse}
     */
    private nativeApm;
    /**
     * InvoicesProcessNativePaymentResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoicesProcessNativePaymentResponse);
    getProcessOutObjectClass(): string;
    /**
     * Get Transaction
     * Transaction linked to this Native APM
     * @return {p.Transaction}
     */
    getTransaction(): p.Transaction;
    /**
     * Set Transaction
     * Transaction linked to this Native APM
     * @param {p.Transaction} val
     * @return {InvoicesProcessNativePaymentResponse}
     */
    setTransaction(val: p.Transaction): InvoicesProcessNativePaymentResponse;
    /**
     * Get NativeApm
     * Native APM response
     * @return {p.NativeAPMResponse}
     */
    getNativeApm(): p.NativeAPMResponse;
    /**
     * Set NativeApm
     * Native APM response
     * @param {p.NativeAPMResponse} val
     * @return {InvoicesProcessNativePaymentResponse}
     */
    setNativeApm(val: p.NativeAPMResponse): InvoicesProcessNativePaymentResponse;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoicesProcessNativePaymentResponse}
     */
    fillWithData(data: any): InvoicesProcessNativePaymentResponse;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoicesProcessNativePaymentResponse;
//# sourceMappingURL=invoicesprocessnativepaymentresponse.d.ts.map