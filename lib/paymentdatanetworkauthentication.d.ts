import ProcessOut = require("./processout");
declare class PaymentDataNetworkAuthentication {
    private client;
    /**
     * Authentication CAVV
     * @type {string}
     */
    private cavv;
    /**
     * PaymentDataNetworkAuthentication constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentDataNetworkAuthentication);
    getProcessOutObjectClass(): string;
    /**
     * Get Cavv
     * Authentication CAVV
     * @return {string}
     */
    getCavv(): string;
    /**
     * Set Cavv
     * Authentication CAVV
     * @param {string} val
     * @return {PaymentDataNetworkAuthentication}
     */
    setCavv(val: string): PaymentDataNetworkAuthentication;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataNetworkAuthentication}
     */
    fillWithData(data: any): PaymentDataNetworkAuthentication;
}
export = PaymentDataNetworkAuthentication;
//# sourceMappingURL=paymentdatanetworkauthentication.d.ts.map