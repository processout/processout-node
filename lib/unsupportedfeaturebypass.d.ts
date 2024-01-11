import ProcessOut = require('./processout');
declare class UnsupportedFeatureBypass {
    private client;
    /**
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @type {boolean}
     */
    private incrementalAuthorization;
    /**
     * UnsupportedFeatureBypass constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: UnsupportedFeatureBypass);
    getProcessOutObjectClass(): string;
    /**
     * Get IncrementalAuthorization
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @return {boolean}
     */
    getIncrementalAuthorization(): boolean;
    /**
     * Set IncrementalAuthorization
     * Indicates whether to fallback to normal authorization if incremental is not supported
     * @param {boolean} val
     * @return {UnsupportedFeatureBypass}
     */
    setIncrementalAuthorization(val: boolean): UnsupportedFeatureBypass;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {UnsupportedFeatureBypass}
     */
    fillWithData(data: any): UnsupportedFeatureBypass;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = UnsupportedFeatureBypass;
//# sourceMappingURL=unsupportedfeaturebypass.d.ts.map