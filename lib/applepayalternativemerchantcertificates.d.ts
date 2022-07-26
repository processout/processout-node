import ProcessOut = require('./processout');
import * as p from '.';
declare class ApplePayAlternativeMerchantCertificates {
    private client;
    /**
     * number of alternative merchant certificate
     * @type {string}
     */
    private count;
    /**
     * Alternative merchant certificates available
     * @type {any}
     */
    private alternativeMerchantCertificates;
    /**
     * ApplePayAlternativeMerchantCertificates constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ApplePayAlternativeMerchantCertificates);
    getProcessOutObjectClass(): string;
    /**
     * Get Count
     * number of alternative merchant certificate
     * @return {string}
     */
    getCount(): string;
    /**
     * Set Count
     * number of alternative merchant certificate
     * @param {string} val
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    setCount(val: string): ApplePayAlternativeMerchantCertificates;
    /**
     * Get AlternativeMerchantCertificates
     * Alternative merchant certificates available
     * @return {any}
     */
    getAlternativeMerchantCertificates(): any;
    /**
     * Set AlternativeMerchantCertificates
     * Alternative merchant certificates available
     * @param {any} val
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    setAlternativeMerchantCertificates(val: any): ApplePayAlternativeMerchantCertificates;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ApplePayAlternativeMerchantCertificates}
     */
    fillWithData(data: any): ApplePayAlternativeMerchantCertificates;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Fetch the project's alternative certificates by ID
     *
     * @param {any} options
     * @return {Promise<p.ApplePayAlternativeMerchantCertificates>}
     */
    fetch(options: any): Promise<p.ApplePayAlternativeMerchantCertificates>;
}
export = ApplePayAlternativeMerchantCertificates;
//# sourceMappingURL=applepayalternativemerchantcertificates.d.ts.map