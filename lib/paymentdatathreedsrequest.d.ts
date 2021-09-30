import ProcessOut = require('./processout');
declare class PaymentDataThreeDSRequest {
    private client;
    /**
     * URL of the ACS
     * @type {string}
     */
    private acsUrl;
    /**
     * PAReq used during the 3DS authentication
     * @type {string}
     */
    private pareq;
    /**
     * MD used during the 3DS authentication
     * @type {string}
     */
    private md;
    /**
     * URL of the 3DS term
     * @type {string}
     */
    private termUrl;
    /**
     * PaymentDataThreeDSRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PaymentDataThreeDSRequest);
    getProcessOutObjectClass(): string;
    /**
     * Get AcsUrl
     * URL of the ACS
     * @return {string}
     */
    getAcsUrl(): string;
    /**
     * Set AcsUrl
     * URL of the ACS
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setAcsUrl(val: string): PaymentDataThreeDSRequest;
    /**
     * Get Pareq
     * PAReq used during the 3DS authentication
     * @return {string}
     */
    getPareq(): string;
    /**
     * Set Pareq
     * PAReq used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setPareq(val: string): PaymentDataThreeDSRequest;
    /**
     * Get Md
     * MD used during the 3DS authentication
     * @return {string}
     */
    getMd(): string;
    /**
     * Set Md
     * MD used during the 3DS authentication
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setMd(val: string): PaymentDataThreeDSRequest;
    /**
     * Get TermUrl
     * URL of the 3DS term
     * @return {string}
     */
    getTermUrl(): string;
    /**
     * Set TermUrl
     * URL of the 3DS term
     * @param {string} val
     * @return {PaymentDataThreeDSRequest}
     */
    setTermUrl(val: string): PaymentDataThreeDSRequest;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PaymentDataThreeDSRequest}
     */
    fillWithData(data: any): PaymentDataThreeDSRequest;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = PaymentDataThreeDSRequest;
//# sourceMappingURL=paymentdatathreedsrequest.d.ts.map