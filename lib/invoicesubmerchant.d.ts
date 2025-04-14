import ProcessOut = require('./processout');
import * as p from '.';
declare class InvoiceSubmerchant {
    private client;
    /**
     * ID of the invoice submerchant
     * @type {string}
     */
    private id;
    /**
     * Name of the submerchant
     * @type {string}
     */
    private name;
    /**
     * Submerchant's reference ID
     * @type {string}
     */
    private reference;
    /**
     * Submerchant's MCC (Merchant Category Code).
     * @type {string}
     */
    private mcc;
    /**
     * Submerchant's phone number
     * @type {p.SubmerchantPhoneNumber}
     */
    private phoneNumber;
    /**
     * Email address
     * @type {string}
     */
    private email;
    /**
     * Submerchant's address
     * @type {p.SubmerchantAddress}
     */
    private address;
    /**
     * Tax reference
     * @type {string}
     */
    private taxReference;
    /**
     * Service establishment number
     * @type {string}
     */
    private serviceEstablishmentNumber;
    /**
     * InvoiceSubmerchant constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceSubmerchant);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the invoice submerchant
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the invoice submerchant
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setId(val: string): InvoiceSubmerchant;
    /**
     * Get Name
     * Name of the submerchant
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the submerchant
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setName(val: string): InvoiceSubmerchant;
    /**
     * Get Reference
     * Submerchant's reference ID
     * @return {string}
     */
    getReference(): string;
    /**
     * Set Reference
     * Submerchant's reference ID
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setReference(val: string): InvoiceSubmerchant;
    /**
     * Get Mcc
     * Submerchant's MCC (Merchant Category Code).
     * @return {string}
     */
    getMcc(): string;
    /**
     * Set Mcc
     * Submerchant's MCC (Merchant Category Code).
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setMcc(val: string): InvoiceSubmerchant;
    /**
     * Get PhoneNumber
     * Submerchant's phone number
     * @return {p.SubmerchantPhoneNumber}
     */
    getPhoneNumber(): p.SubmerchantPhoneNumber;
    /**
     * Set PhoneNumber
     * Submerchant's phone number
     * @param {p.SubmerchantPhoneNumber} val
     * @return {InvoiceSubmerchant}
     */
    setPhoneNumber(val: p.SubmerchantPhoneNumber): InvoiceSubmerchant;
    /**
     * Get Email
     * Email address
     * @return {string}
     */
    getEmail(): string;
    /**
     * Set Email
     * Email address
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setEmail(val: string): InvoiceSubmerchant;
    /**
     * Get Address
     * Submerchant's address
     * @return {p.SubmerchantAddress}
     */
    getAddress(): p.SubmerchantAddress;
    /**
     * Set Address
     * Submerchant's address
     * @param {p.SubmerchantAddress} val
     * @return {InvoiceSubmerchant}
     */
    setAddress(val: p.SubmerchantAddress): InvoiceSubmerchant;
    /**
     * Get TaxReference
     * Tax reference
     * @return {string}
     */
    getTaxReference(): string;
    /**
     * Set TaxReference
     * Tax reference
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setTaxReference(val: string): InvoiceSubmerchant;
    /**
     * Get ServiceEstablishmentNumber
     * Service establishment number
     * @return {string}
     */
    getServiceEstablishmentNumber(): string;
    /**
     * Set ServiceEstablishmentNumber
     * Service establishment number
     * @param {string} val
     * @return {InvoiceSubmerchant}
     */
    setServiceEstablishmentNumber(val: string): InvoiceSubmerchant;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceSubmerchant}
     */
    fillWithData(data: any): InvoiceSubmerchant;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceSubmerchant;
//# sourceMappingURL=invoicesubmerchant.d.ts.map