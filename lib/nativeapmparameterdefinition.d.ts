import ProcessOut = require('./processout');
declare class NativeAPMParameterDefinition {
    private client;
    /**
     * Native APM parameter value key
     * @type {string}
     */
    private key;
    /**
     * NativeAPM parameter value type
     * @type {string}
     */
    private type;
    /**
     * NativeAPM parameter value requirement
     * @type {boolean}
     */
    private required;
    /**
     * NativeAPM parameter value length
     * @type {number}
     */
    private length;
    /**
     * Native APM parameter display name
     * @type {string}
     */
    private displayName;
    /**
     * Native APM parameter available input values
     * @type {any}
     */
    private availableValues;
    /**
     * NativeAPMParameterDefinition constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: NativeAPMParameterDefinition);
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
     * @return {NativeAPMParameterDefinition}
     */
    setKey(val: string): NativeAPMParameterDefinition;
    /**
     * Get Type
     * NativeAPM parameter value type
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * NativeAPM parameter value type
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    setType(val: string): NativeAPMParameterDefinition;
    /**
     * Get Required
     * NativeAPM parameter value requirement
     * @return {boolean}
     */
    getRequired(): boolean;
    /**
     * Set Required
     * NativeAPM parameter value requirement
     * @param {boolean} val
     * @return {NativeAPMParameterDefinition}
     */
    setRequired(val: boolean): NativeAPMParameterDefinition;
    /**
     * Get Length
     * NativeAPM parameter value length
     * @return {number}
     */
    getLength(): number;
    /**
     * Set Length
     * NativeAPM parameter value length
     * @param {number} val
     * @return {NativeAPMParameterDefinition}
     */
    setLength(val: number): NativeAPMParameterDefinition;
    /**
     * Get DisplayName
     * Native APM parameter display name
     * @return {string}
     */
    getDisplayName(): string;
    /**
     * Set DisplayName
     * Native APM parameter display name
     * @param {string} val
     * @return {NativeAPMParameterDefinition}
     */
    setDisplayName(val: string): NativeAPMParameterDefinition;
    /**
     * Get AvailableValues
     * Native APM parameter available input values
     * @return {any}
     */
    getAvailableValues(): any;
    /**
     * Set AvailableValues
     * Native APM parameter available input values
     * @param {any} val
     * @return {NativeAPMParameterDefinition}
     */
    setAvailableValues(val: any): NativeAPMParameterDefinition;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {NativeAPMParameterDefinition}
     */
    fillWithData(data: any): NativeAPMParameterDefinition;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = NativeAPMParameterDefinition;
//# sourceMappingURL=nativeapmparameterdefinition.d.ts.map