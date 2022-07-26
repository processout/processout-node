import ProcessOut = require('./processout');
import * as p from '.';
declare class AlternativeMerchantCertificate {
    private client;
    /**
     * id of the alternative merchant certificate
     * @type {string}
     */
    private id;
    /**
     * AlternativeMerchantCertificate constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: AlternativeMerchantCertificate);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * id of the alternative merchant certificate
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * id of the alternative merchant certificate
     * @param {string} val
     * @return {AlternativeMerchantCertificate}
     */
    setId(val: string): AlternativeMerchantCertificate;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {AlternativeMerchantCertificate}
     */
    fillWithData(data: any): AlternativeMerchantCertificate;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Save new alternative apple pay certificates
     *
     * @param {any} options
     * @return {Promise<p.AlternativeMerchantCertificate>}
     */
    save(options: any): Promise<p.AlternativeMerchantCertificate>;
    /**
     * Delete a given alternative merchant certificate

     * @param {any} options
     * @return {Promise<boolean>}
     */
    delete(options: any): Promise<boolean>;
}
export = AlternativeMerchantCertificate;
//# sourceMappingURL=alternativemerchantcertificate.d.ts.map