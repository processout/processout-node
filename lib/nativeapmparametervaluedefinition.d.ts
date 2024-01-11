import ProcessOut = require('./processout');
declare class NativeAPMParameterValueDefinition {
    private client;
    /**
     * Native APM parameter value
     * @type {string}
     */
    private value;
    /**
     * Native APM parameter default value flag
     * @type {boolean}
     */
    private default;
    /**
     * Native APM parameter value display name
     * @type {string}
     */
    private displayName;
    /**
     * NativeAPMParameterValueDefinition constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMParameterValueDefinition);
    getProcessOutObjectClass(): string;
    /**
     * Get Value
     * Native APM parameter value
     * @return {string}
     */
    getValue(): string;
    /**
     * Set Value
     * Native APM parameter value
     * @param {string} val
     * @return {NativeAPMParameterValueDefinition}
     */
    setValue(val: string): NativeAPMParameterValueDefinition;
    /**
     * Get Default
     * Native APM parameter default value flag
     * @return {boolean}
     */
    getDefault(): boolean;
    /**
     * Set Default
     * Native APM parameter default value flag
     * @param {boolean} val
     * @return {NativeAPMParameterValueDefinition}
     */
    setDefault(val: boolean): NativeAPMParameterValueDefinition;
    /**
     * Get DisplayName
     * Native APM parameter value display name
     * @return {string}
     */
    getDisplayName(): string;
    /**
     * Set DisplayName
     * Native APM parameter value display name
     * @param {string} val
     * @return {NativeAPMParameterValueDefinition}
     */
    setDisplayName(val: string): NativeAPMParameterValueDefinition;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterValueDefinition}
     */
    fillWithData(data: any): NativeAPMParameterValueDefinition;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMParameterValueDefinition;
//# sourceMappingURL=nativeapmparametervaluedefinition.d.ts.map