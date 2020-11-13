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