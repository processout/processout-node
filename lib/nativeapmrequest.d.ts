import ProcessOut = require('./processout');
declare class NativeAPMRequest {
    private client;
    /**
     * Native APM parameter values
     * @type {any}
     */
    private parameterValues;
    /**
     * NativeAPMRequest constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMRequest);
    getProcessOutObjectClass(): string;
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
     * @return {NativeAPMRequest}
     */
    setParameterValues(val: any): NativeAPMRequest;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMRequest}
     */
    fillWithData(data: any): NativeAPMRequest;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMRequest;
//# sourceMappingURL=nativeapmrequest.d.ts.map