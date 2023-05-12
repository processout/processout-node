import ProcessOut = require('./processout');
declare class CustomerAction {
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
     * Metadata related to the customer action, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * CustomerAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CustomerAction);
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
     * @return {CustomerAction}
     */
    setType(val: string): CustomerAction;
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
     * @return {CustomerAction}
     */
    setValue(val: string): CustomerAction;
    /**
     * Get Metadata
     * Metadata related to the customer action, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the customer action, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {CustomerAction}
     */
    setMetadata(val: any): CustomerAction;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CustomerAction}
     */
    fillWithData(data: any): CustomerAction;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = CustomerAction;
//# sourceMappingURL=customeraction.d.ts.map