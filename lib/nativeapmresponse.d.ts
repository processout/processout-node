import ProcessOut = require('./processout');
declare class NativeAPMResponse {
    private client;
    /**
     * Native APM response state
     * @type {string}
     */
    private state;
    /**
     * Native APM parameter values description
     * @type {any}
     */
    private parameterDefinitions;
    /**
     * Native APM parameter values
     * @type {any}
     */
    private parameterValues;
    /**
     * NativeAPMResponse constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMResponse);
    getProcessOutObjectClass(): string;
    /**
     * Get State
     * Native APM response state
     * @return {string}
     */
    getState(): string;
    /**
     * Set State
     * Native APM response state
     * @param {string} val
     * @return {NativeAPMResponse}
     */
    setState(val: string): NativeAPMResponse;
    /**
     * Get ParameterDefinitions
     * Native APM parameter values description
     * @return {any}
     */
    getParameterDefinitions(): any;
    /**
     * Set ParameterDefinitions
     * Native APM parameter values description
     * @param {any} val
     * @return {NativeAPMResponse}
     */
    setParameterDefinitions(val: any): NativeAPMResponse;
    /**
     * Get ParameterValues
     * Native APM parameter values
     * @return {any}
     */
    getParameterValues(): any;
    /**
     * Set ParameterValues
     * Native APM parameter values
     * @param {any} val
     * @return {NativeAPMResponse}
     */
    setParameterValues(val: any): NativeAPMResponse;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMResponse}
     */
    fillWithData(data: any): NativeAPMResponse;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMResponse;
//# sourceMappingURL=nativeapmresponse.d.ts.map