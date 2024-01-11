import ProcessOut = require('./processout');
declare class NativeAPMTransactionDetailsGateway {
    private client;
    /**
     * Native APM Gateway display name
     * @type {string}
     */
    private displayName;
    /**
     * Native APM Gateway logo url
     * @type {string}
     */
    private logoUrl;
    /**
     * NativeAPMTransactionDetailsGateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMTransactionDetailsGateway);
    getProcessOutObjectClass(): string;
    /**
     * Get DisplayName
     * Native APM Gateway display name
     * @return {string}
     */
    getDisplayName(): string;
    /**
     * Set DisplayName
     * Native APM Gateway display name
     * @param {string} val
     * @return {NativeAPMTransactionDetailsGateway}
     */
    setDisplayName(val: string): NativeAPMTransactionDetailsGateway;
    /**
     * Get LogoUrl
     * Native APM Gateway logo url
     * @return {string}
     */
    getLogoUrl(): string;
    /**
     * Set LogoUrl
     * Native APM Gateway logo url
     * @param {string} val
     * @return {NativeAPMTransactionDetailsGateway}
     */
    setLogoUrl(val: string): NativeAPMTransactionDetailsGateway;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMTransactionDetailsGateway}
     */
    fillWithData(data: any): NativeAPMTransactionDetailsGateway;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMTransactionDetailsGateway;
//# sourceMappingURL=nativeapmtransactiondetailsgateway.d.ts.map