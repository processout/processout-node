import ProcessOut = require('./processout');
declare class InvoiceBilling {
    private client;
    /**
     * Address of the cardholder
     * @type {string}
     */
    private address1;
    /**
     * Secondary address of the cardholder
     * @type {string}
     */
    private address2;
    /**
     * City of the cardholder
     * @type {string}
     */
    private city;
    /**
     * State of the cardholder
     * @type {string}
     */
    private state;
    /**
     * Country code of the cardholder
     * @type {string}
     */
    private countryCode;
    /**
     * ZIP of the cardholder
     * @type {string}
     */
    private zip;
    /**
     * InvoiceBilling constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceBilling);
    getProcessOutObjectClass(): string;
    /**
     * Get Address1
     * Address of the cardholder
     * @return {string}
     */
    getAddress1(): string;
    /**
     * Set Address1
     * Address of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    setAddress1(val: string): InvoiceBilling;
    /**
     * Get Address2
     * Secondary address of the cardholder
     * @return {string}
     */
    getAddress2(): string;
    /**
     * Set Address2
     * Secondary address of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    setAddress2(val: string): InvoiceBilling;
    /**
     * Get City
     * City of the cardholder
     * @return {string}
     */
    getCity(): string;
    /**
     * Set City
     * City of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    setCity(val: string): InvoiceBilling;
    /**
     * Get State
     * State of the cardholder
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * State of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    setState(val: string): InvoiceBilling;
    /**
     * Get CountryCode
     * Country code of the cardholder
     * @return {string}
     */
    getCountryCode(): string;
    /**
     * Set CountryCode
     * Country code of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    setCountryCode(val: string): InvoiceBilling;
    /**
     * Get Zip
     * ZIP of the cardholder
     * @return {string}
     */
    getZip(): string;
    /**
     * Set Zip
     * ZIP of the cardholder
     * @param {string} val
     * @return {InvoiceBilling}
     */
    setZip(val: string): InvoiceBilling;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceBilling}
     */
    fillWithData(data: any): InvoiceBilling;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceBilling;
//# sourceMappingURL=invoicebilling.d.ts.map