import ProcessOut = require('./processout');
import * as p from '.';
declare class Balances {
    private client;
    /**
     * Vouchers linked to the customer
     * @type {any}
     */
    private vouchers;
    /**
     * Balances constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Balances);
    getProcessOutObjectClass(): string;
    /**
     * Get Vouchers
     * Vouchers linked to the customer
     * @return {any}
     */
    getVouchers(): any;
    /**
     * Set Vouchers
     * Vouchers linked to the customer
     * @param {any} val
     * @return {Balances}
     */
    setVouchers(val: any): Balances;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Balances}
     */
    fillWithData(data: any): Balances;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Fetch a customer token's balance
     * @param string tokenId
     * @param {any} options
     * @return {Promise<p.Balances>}
     */
    find(tokenId: string, options: any): Promise<p.Balances>;
}
export = Balances;
//# sourceMappingURL=balances.d.ts.map