import ProcessOut = require('./processout');
declare class CategoryErrorCodes {
    private client;
    /**
     * Generic error codes.
     * @type {any}
     */
    private generic;
    /**
     * Service related error codes.
     * @type {any}
     */
    private service;
    /**
     * Gateway related error codes.
     * @type {any}
     */
    private gateway;
    /**
     * Card related error codes.
     * @type {any}
     */
    private card;
    /**
     * Check related error codes.
     * @type {any}
     */
    private check;
    /**
     * Shipping related error codes.
     * @type {any}
     */
    private shipping;
    /**
     * Customer related error codes.
     * @type {any}
     */
    private customer;
    /**
     * Payment related error codes.
     * @type {any}
     */
    private payment;
    /**
     * Refund related error codes.
     * @type {any}
     */
    private refund;
    /**
     * Wallet related error codes.
     * @type {any}
     */
    private wallet;
    /**
     * Request related error codes.
     * @type {any}
     */
    private request;
    /**
     * CategoryErrorCodes constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: CategoryErrorCodes);
    getProcessOutObjectClass(): string;
    /**
     * Get Generic
     * Generic error codes.
     * @return {any}
     */
    getGeneric(): any;
    /**
     * Set Generic
     * Generic error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setGeneric(val: any): CategoryErrorCodes;
    /**
     * Get Service
     * Service related error codes.
     * @return {any}
     */
    getService(): any;
    /**
     * Set Service
     * Service related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setService(val: any): CategoryErrorCodes;
    /**
     * Get Gateway
     * Gateway related error codes.
     * @return {any}
     */
    getGateway(): any;
    /**
     * Set Gateway
     * Gateway related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setGateway(val: any): CategoryErrorCodes;
    /**
     * Get Card
     * Card related error codes.
     * @return {any}
     */
    getCard(): any;
    /**
     * Set Card
     * Card related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setCard(val: any): CategoryErrorCodes;
    /**
     * Get Check
     * Check related error codes.
     * @return {any}
     */
    getCheck(): any;
    /**
     * Set Check
     * Check related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setCheck(val: any): CategoryErrorCodes;
    /**
     * Get Shipping
     * Shipping related error codes.
     * @return {any}
     */
    getShipping(): any;
    /**
     * Set Shipping
     * Shipping related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setShipping(val: any): CategoryErrorCodes;
    /**
     * Get Customer
     * Customer related error codes.
     * @return {any}
     */
    getCustomer(): any;
    /**
     * Set Customer
     * Customer related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setCustomer(val: any): CategoryErrorCodes;
    /**
     * Get Payment
     * Payment related error codes.
     * @return {any}
     */
    getPayment(): any;
    /**
     * Set Payment
     * Payment related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setPayment(val: any): CategoryErrorCodes;
    /**
     * Get Refund
     * Refund related error codes.
     * @return {any}
     */
    getRefund(): any;
    /**
     * Set Refund
     * Refund related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setRefund(val: any): CategoryErrorCodes;
    /**
     * Get Wallet
     * Wallet related error codes.
     * @return {any}
     */
    getWallet(): any;
    /**
     * Set Wallet
     * Wallet related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setWallet(val: any): CategoryErrorCodes;
    /**
     * Get Request
     * Request related error codes.
     * @return {any}
     */
    getRequest(): any;
    /**
     * Set Request
     * Request related error codes.
     * @param {any} val
     * @return {CategoryErrorCodes}
     */
    setRequest(val: any): CategoryErrorCodes;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CategoryErrorCodes}
     */
    fillWithData(data: any): CategoryErrorCodes;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = CategoryErrorCodes;
//# sourceMappingURL=categoryerrorcodes.d.ts.map