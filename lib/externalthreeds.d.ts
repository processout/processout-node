import ProcessOut = require('./processout');
declare class ExternalThreeDS {
    private client;
    /**
     * ThreeDS v1 ID
     * @type {string}
     */
    private xid;
    /**
     * Transaction status
     * @type {string}
     */
    private transStatus;
    /**
     * ECI
     * @type {string}
     */
    private eci;
    /**
     * Authentication value
     * @type {string}
     */
    private cavv;
    /**
     * DS Transaction ID
     * @type {string}
     */
    private dsTransId;
    /**
     * ThreeDS Message version
     * @type {string}
     */
    private version;
    /**
     * Authentication flow: one of `frictionless` or 'challenge`
     * @type {string}
     */
    private authenticationFlow;
    /**
     * ExternalThreeDS constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ExternalThreeDS);
    getProcessOutObjectClass(): string;
    /**
     * Get Xid
     * ThreeDS v1 ID
     * @return {string}
     */
    getXid(): string;
    /**
     * Set Xid
     * ThreeDS v1 ID
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setXid(val: string): ExternalThreeDS;
    /**
     * Get TransStatus
     * Transaction status
     * @return {string}
     */
    getTransStatus(): string;
    /**
     * Set TransStatus
     * Transaction status
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setTransStatus(val: string): ExternalThreeDS;
    /**
     * Get Eci
     * ECI
     * @return {string}
     */
    getEci(): string;
    /**
     * Set Eci
     * ECI
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setEci(val: string): ExternalThreeDS;
    /**
     * Get Cavv
     * Authentication value
     * @return {string}
     */
    getCavv(): string;
    /**
     * Set Cavv
     * Authentication value
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setCavv(val: string): ExternalThreeDS;
    /**
     * Get DsTransId
     * DS Transaction ID
     * @return {string}
     */
    getDsTransId(): string;
    /**
     * Set DsTransId
     * DS Transaction ID
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setDsTransId(val: string): ExternalThreeDS;
    /**
     * Get Version
     * ThreeDS Message version
     * @return {string}
     */
    getVersion(): string;
    /**
     * Set Version
     * ThreeDS Message version
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setVersion(val: string): ExternalThreeDS;
    /**
     * Get AuthenticationFlow
     * Authentication flow: one of `frictionless` or 'challenge`
     * @return {string}
     */
    getAuthenticationFlow(): string;
    /**
     * Set AuthenticationFlow
     * Authentication flow: one of `frictionless` or 'challenge`
     * @param {string} val
     * @return {ExternalThreeDS}
     */
    setAuthenticationFlow(val: string): ExternalThreeDS;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ExternalThreeDS}
     */
    fillWithData(data: any): ExternalThreeDS;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ExternalThreeDS;
//# sourceMappingURL=externalthreeds.d.ts.map