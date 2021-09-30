import ProcessOut = require('./processout');
declare class ThreeDS {
    private client;
    /**
     * Version of the 3DS
     * @type {string}
     */
    private version;
    /**
     * Current status of the authentication
     * @type {string}
     */
    private status;
    /**
     * True if a fingerprint has occured
     * @type {boolean}
     */
    private fingerprinted;
    /**
     * True if a challenge has occured
     * @type {boolean}
     */
    private challenged;
    /**
     * Ares transaction status
     * @type {string}
     */
    private aresTransStatus;
    /**
     * Cres transaction status
     * @type {string}
     */
    private cresTransStatus;
    /**
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @type {string}
     */
    private dsTransId;
    /**
     * Indicates whether the 3DS fingerprint successfully completed
     * @type {string}
     */
    private fingerprintCompletionIndicator;
    /**
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @type {string}
     */
    private serverTransId;
    /**
     * ThreeDS constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: ThreeDS);
    getProcessOutObjectClass(): string;
    /**
     * Get Version
     * Version of the 3DS
     * @return {string}
     */
    getVersion(): string;
    /**
     * Set Version
     * Version of the 3DS
     * @param {string} val
     * @return {ThreeDS}
     */
    setVersion(val: string): ThreeDS;
    /**
     * Get Status
     * Current status of the authentication
     * @return {string}
     */
    getStatus(): string;
    /**
     * Set Status
     * Current status of the authentication
     * @param {string} val
     * @return {ThreeDS}
     */
    setStatus(val: string): ThreeDS;
    /**
     * Get Fingerprinted
     * True if a fingerprint has occured
     * @return {boolean}
     */
    getFingerprinted(): boolean;
    /**
     * Set Fingerprinted
     * True if a fingerprint has occured
     * @param {boolean} val
     * @return {ThreeDS}
     */
    setFingerprinted(val: boolean): ThreeDS;
    /**
     * Get Challenged
     * True if a challenge has occured
     * @return {boolean}
     */
    getChallenged(): boolean;
    /**
     * Set Challenged
     * True if a challenge has occured
     * @param {boolean} val
     * @return {ThreeDS}
     */
    setChallenged(val: boolean): ThreeDS;
    /**
     * Get AresTransStatus
     * Ares transaction status
     * @return {string}
     */
    getAresTransStatus(): string;
    /**
     * Set AresTransStatus
     * Ares transaction status
     * @param {string} val
     * @return {ThreeDS}
     */
    setAresTransStatus(val: string): ThreeDS;
    /**
     * Get CresTransStatus
     * Cres transaction status
     * @return {string}
     */
    getCresTransStatus(): string;
    /**
     * Set CresTransStatus
     * Cres transaction status
     * @param {string} val
     * @return {ThreeDS}
     */
    setCresTransStatus(val: string): ThreeDS;
    /**
     * Get DsTransId
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @return {string}
     */
    getDsTransId(): string;
    /**
     * Set DsTransId
     * Universally unique transaction identifier assigned by the DS to identify a single transaction
     * @param {string} val
     * @return {ThreeDS}
     */
    setDsTransId(val: string): ThreeDS;
    /**
     * Get FingerprintCompletionIndicator
     * Indicates whether the 3DS fingerprint successfully completed
     * @return {string}
     */
    getFingerprintCompletionIndicator(): string;
    /**
     * Set FingerprintCompletionIndicator
     * Indicates whether the 3DS fingerprint successfully completed
     * @param {string} val
     * @return {ThreeDS}
     */
    setFingerprintCompletionIndicator(val: string): ThreeDS;
    /**
     * Get ServerTransId
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @return {string}
     */
    getServerTransId(): string;
    /**
     * Set ServerTransId
     * Universally unique transaction identifier assigned by the 3DS Server to identify a single transaction
     * @param {string} val
     * @return {ThreeDS}
     */
    setServerTransId(val: string): ThreeDS;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {ThreeDS}
     */
    fillWithData(data: any): ThreeDS;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = ThreeDS;
//# sourceMappingURL=threeds.d.ts.map