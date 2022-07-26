import ProcessOut = require('./processout');
declare class Balance {
    private client;
    /**
     * Amount available
     * @type {string}
     */
    private amount;
    /**
     * Currency the balance is in
     * @type {string}
     */
    private currency;
    /**
     * Expiry time of the voucher
     * @type {string}
     */
    private expiry;
    /**
     * Balance constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Balance);
    getProcessOutObjectClass(): string;
    /**
     * Get Amount
     * Amount available
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount available
     * @param {string} val
     * @return {Balance}
     */
    setAmount(val: string): Balance;
    /**
     * Get Currency
     * Currency the balance is in
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency the balance is in
     * @param {string} val
     * @return {Balance}
     */
    setCurrency(val: string): Balance;
    /**
     * Get Expiry
     * Expiry time of the voucher
     * @return {string}
     */
    getExpiry(): string;
    /**
     * Set Expiry
     * Expiry time of the voucher
     * @param {string} val
     * @return {Balance}
     */
    setExpiry(val: string): Balance;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Balance}
     */
    fillWithData(data: any): Balance;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = Balance;
//# sourceMappingURL=balance.d.ts.map