import ProcessOut = require('./processout');
declare class NativeAPMParameterValue {
    private client;
    /**
     * Native APM parameter value key
     * @type {string}
     */
    private key;
    /**
     * Native APM parameter value value
     * @type {string}
     */
    private value;
    /**
     * NativeAPMParameterValue constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMParameterValue);
    getProcessOutObjectClass(): string;
    /**
     * Get Key
     * Native APM parameter value key
     * @return {string}
     */
    getKey(): string;
    /**
     * Set Key
     * Native APM parameter value key
     * @param {string} val
     * @return {NativeAPMParameterValue}
     */
    setKey(val: string): NativeAPMParameterValue;
    /**
     * Get Value
     * Native APM parameter value value
     * @return {string}
     */
    getValue(): string;
    /**
     * Set Value
     * Native APM parameter value value
     * @param {string} val
     * @return {NativeAPMParameterValue}
     */
    setValue(val: string): NativeAPMParameterValue;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterValue}
     */
    fillWithData(data: any): NativeAPMParameterValue;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMParameterValue;
//# sourceMappingURL=nativeapmparametervalue.d.ts.map