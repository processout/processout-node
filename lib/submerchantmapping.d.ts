import ProcessOut = require('./processout');
declare class SubmerchantMapping {
    private client;
    /**
     * ID of the ProcessOut submerchant this mapping belongs to
     * @type {string}
     */
    private submerchantId;
    /**
     * ID of the gateway configuration this mapping applies to
     * @type {string}
     */
    private gatewayConfigurationId;
    /**
     * Submerchant ID at the PSP the gateway configuration connects to
     * @type {string}
     */
    private pspSubmerchantId;
    /**
     * Time at which the mapping was created
     * @type {string}
     */
    private createdAt;
    /**
     * SubmerchantMapping constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: SubmerchantMapping);
    getProcessOutObjectClass(): string;
    /**
     * Get SubmerchantId
     * ID of the ProcessOut submerchant this mapping belongs to
     * @return {string}
     */
    getSubmerchantId(): string;
    /**
     * Set SubmerchantId
     * ID of the ProcessOut submerchant this mapping belongs to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    setSubmerchantId(val: string): SubmerchantMapping;
    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration this mapping applies to
     * @return {string}
     */
    getGatewayConfigurationId(): string;
    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration this mapping applies to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    setGatewayConfigurationId(val: string): SubmerchantMapping;
    /**
     * Get PspSubmerchantId
     * Submerchant ID at the PSP the gateway configuration connects to
     * @return {string}
     */
    getPspSubmerchantId(): string;
    /**
     * Set PspSubmerchantId
     * Submerchant ID at the PSP the gateway configuration connects to
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    setPspSubmerchantId(val: string): SubmerchantMapping;
    /**
     * Get CreatedAt
     * Time at which the mapping was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Time at which the mapping was created
     * @param {string} val
     * @return {SubmerchantMapping}
     */
    setCreatedAt(val: string): SubmerchantMapping;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {SubmerchantMapping}
     */
    fillWithData(data: any): SubmerchantMapping;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
}
export = SubmerchantMapping;
//# sourceMappingURL=submerchantmapping.d.ts.map