import ProcessOut = require('./processout');
import * as p from '.';
declare class NativeAPMTransactionDetails {
    private client;
    /**
     * Native APM Gateway details
     * @type {p.NativeAPMTransactionDetailsGateway}
     */
    private gateway;
    /**
     * Native APM Invoice details
     * @type {p.NativeAPMTransactionDetailsInvoice}
     */
    private invoice;
    /**
     * Native APM Parameter details
     * @type {any}
     */
    private parameters;
    /**
     * Native APM Transaction State
     * @type {string}
     */
    private state;
    /**
     * NativeAPMTransactionDetails constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMTransactionDetails);
    getProcessOutObjectClass(): string;
    /**
     * Get Gateway
     * Native APM Gateway details
     * @return {p.NativeAPMTransactionDetailsGateway}
     */
    getGateway(): p.NativeAPMTransactionDetailsGateway;
    /**
     * Set Gateway
     * Native APM Gateway details
     * @param {p.NativeAPMTransactionDetailsGateway} val
     * @return {NativeAPMTransactionDetails}
     */
    setGateway(val: p.NativeAPMTransactionDetailsGateway): NativeAPMTransactionDetails;
    /**
     * Get Invoice
     * Native APM Invoice details
     * @return {p.NativeAPMTransactionDetailsInvoice}
     */
    getInvoice(): p.NativeAPMTransactionDetailsInvoice;
    /**
     * Set Invoice
     * Native APM Invoice details
     * @param {p.NativeAPMTransactionDetailsInvoice} val
     * @return {NativeAPMTransactionDetails}
     */
    setInvoice(val: p.NativeAPMTransactionDetailsInvoice): NativeAPMTransactionDetails;
    /**
     * Get Parameters
     * Native APM Parameter details
     * @return {any}
     */
    getParameters(): any;
    /**
     * Set Parameters
     * Native APM Parameter details
     * @param {any} val
     * @return {NativeAPMTransactionDetails}
     */
    setParameters(val: any): NativeAPMTransactionDetails;
    /**
     * Get State
     * Native APM Transaction State
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * Native APM Transaction State
     * @param {string} val
     * @return {NativeAPMTransactionDetails}
     */
    setState(val: string): NativeAPMTransactionDetails;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetails}
     */
    fillWithData(data: any): NativeAPMTransactionDetails;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMTransactionDetails;
//# sourceMappingURL=nativeapmtransactiondetails.d.ts.map