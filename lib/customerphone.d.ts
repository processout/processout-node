import ProcessOut = require('./processout');
declare class CustomerPhone {
    private client;
    /**
     * Phone number of the customer
     * @type {string}
     */
    private number;
    /**
     * Phone number dialing code of the customer
     * @type {string}
     */
    private dialingCode;
    /**
     * CustomerPhone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CustomerPhone);
    getProcessOutObjectClass(): string;
    /**
     * Get Number
     * Phone number of the customer
     * @return {string}
     */
    getNumber(): string;
    /**
     * Set Number
     * Phone number of the customer
     * @param {string} val
     * @return {CustomerPhone}
     */
    setNumber(val: string): CustomerPhone;
    /**
     * Get DialingCode
     * Phone number dialing code of the customer
     * @return {string}
     */
    getDialingCode(): string;
    /**
     * Set DialingCode
     * Phone number dialing code of the customer
     * @param {string} val
     * @return {CustomerPhone}
     */
    setDialingCode(val: string): CustomerPhone;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CustomerPhone}
     */
    fillWithData(data: any): CustomerPhone;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = CustomerPhone;
//# sourceMappingURL=customerphone.d.ts.map