import ProcessOut = require('./processout');
declare class Phone {
    private client;
    /**
     * Phone number (without dialing code)
     * @type {string}
     */
    private number;
    /**
     * Phone number dialing code
     * @type {string}
     */
    private dialingCode;
    /**
     * Phone constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Phone);
    getProcessOutObjectClass(): string;
    /**
     * Get Number
     * Phone number (without dialing code)
     * @return {string}
     */
    getNumber(): string;
    /**
     * Set Number
     * Phone number (without dialing code)
     * @param {string} val
     * @return {Phone}
     */
    setNumber(val: string): Phone;
    /**
     * Get DialingCode
     * Phone number dialing code
     * @return {string}
     */
    getDialingCode(): string;
    /**
     * Set DialingCode
     * Phone number dialing code
     * @param {string} val
     * @return {Phone}
     */
    setDialingCode(val: string): Phone;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Phone}
     */
    fillWithData(data: any): Phone;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = Phone;
//# sourceMappingURL=phone.d.ts.map