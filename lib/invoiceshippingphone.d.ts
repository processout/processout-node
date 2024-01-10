import ProcessOut = require('./processout');
declare class InvoiceShippingPhone {
    private client;
    /**
     * Phone number for the shipment
     * @type {string}
     */
    private number;
    /**
     * Phone number dialing code for the shipment
     * @type {string}
     */
    private dialingCode;
    /**
     * InvoiceShippingPhone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: InvoiceShippingPhone);
    getProcessOutObjectClass(): string;
    /**
     * Get Number
     * Phone number for the shipment
     * @return {string}
     */
    getNumber(): string;
    /**
     * Set Number
     * Phone number for the shipment
     * @param {string} val
     * @return {InvoiceShippingPhone}
     */
    setNumber(val: string): InvoiceShippingPhone;
    /**
     * Get DialingCode
     * Phone number dialing code for the shipment
     * @return {string}
     */
    getDialingCode(): string;
    /**
     * Set DialingCode
     * Phone number dialing code for the shipment
     * @param {string} val
     * @return {InvoiceShippingPhone}
     */
    setDialingCode(val: string): InvoiceShippingPhone;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {InvoiceShippingPhone}
     */
    fillWithData(data: any): InvoiceShippingPhone;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = InvoiceShippingPhone;
//# sourceMappingURL=invoiceshippingphone.d.ts.map