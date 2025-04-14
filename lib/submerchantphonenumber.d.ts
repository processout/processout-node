import ProcessOut = require('./processout');
declare class SubmerchantPhoneNumber {
    private client;
    /**
     * Dialing code of the phone number
     * @type {string}
     */
    private dialingCode;
    /**
     * Phone number
     * @type {string}
     */
    private number;
    /**
     * SubmerchantPhoneNumber constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: SubmerchantPhoneNumber);
    getProcessOutObjectClass(): string;
    /**
     * Get DialingCode
     * Dialing code of the phone number
     * @return {string}
     */
    getDialingCode(): string;
    /**
     * Set DialingCode
     * Dialing code of the phone number
     * @param {string} val
     * @return {SubmerchantPhoneNumber}
     */
    setDialingCode(val: string): SubmerchantPhoneNumber;
    /**
     * Get Number
     * Phone number
     * @return {string}
     */
    getNumber(): string;
    /**
     * Set Number
     * Phone number
     * @param {string} val
     * @return {SubmerchantPhoneNumber}
     */
    setNumber(val: string): SubmerchantPhoneNumber;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantPhoneNumber}
     */
    fillWithData(data: any): SubmerchantPhoneNumber;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = SubmerchantPhoneNumber;
//# sourceMappingURL=submerchantphonenumber.d.ts.map