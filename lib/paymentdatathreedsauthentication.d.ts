import ProcessOut = require('./processout');
declare class PaymentDataThreeDSAuthentication {
    private client;
    /**
     * Authentication XID
     * @type {string}
     */
    private xID;
    /**
     * PaymentDataThreeDSAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentDataThreeDSAuthentication);
    getProcessOutObjectClass(): string;
    /**
     * Get XID
     * Authentication XID
     * @return {string}
     */
    getXID(): string;
    /**
     * Set XID
     * Authentication XID
     * @param {string} val
     * @return {PaymentDataThreeDSAuthentication}
     */
    setXID(val: string): PaymentDataThreeDSAuthentication;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSAuthentication}
     */
    fillWithData(data: any): PaymentDataThreeDSAuthentication;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = PaymentDataThreeDSAuthentication;
//# sourceMappingURL=paymentdatathreedsauthentication.d.ts.map