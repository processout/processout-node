import ProcessOut = require('./processout');
declare class BalancesCustomerAction {
    private client;
    /**
     * Customer action type (such as url)
     * @type {string}
     */
    private type;
    /**
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @type {string}
     */
    private value;
    /**
     * BalancesCustomerAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: BalancesCustomerAction);
    getProcessOutObjectClass(): string;
    /**
     * Get Type
     * Customer action type (such as url)
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Customer action type (such as url)
     * @param {string} val
     * @return {BalancesCustomerAction}
     */
    setType(val: string): BalancesCustomerAction;
    /**
     * Get Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @return {string}
     */
    getValue(): string;
    /**
     * Set Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @param {string} val
     * @return {BalancesCustomerAction}
     */
    setValue(val: string): BalancesCustomerAction;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {BalancesCustomerAction}
     */
    fillWithData(data: any): BalancesCustomerAction;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = BalancesCustomerAction;
//# sourceMappingURL=balancescustomeraction.d.ts.map