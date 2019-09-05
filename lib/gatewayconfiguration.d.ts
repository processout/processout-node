import Promise = require('promise');
import ProcessOut = require('./processout');
import * as p from '.';
declare class GatewayConfiguration {
    private client;
    /**
     * ID of the gateway configuration
     * @type {string}
     */
    private id;
    /**
     * Project to which the gateway configuration belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the gateway configuration belongs
     * @type {string}
     */
    private projectId;
    /**
     * Gateway that the configuration configures
     * @type {p.Gateway}
     */
    private gateway;
    /**
     * ID of the gateway to which the gateway configuration belongs
     * @type {number}
     */
    private gatewayId;
    /**
     * Name of the gateway configuration
     * @type {string}
     */
    private name;
    /**
     * Default currency of the gateway configuration
     * @type {string}
     */
    private defaultCurrency;
    /**
     * Define whether or not the gateway configuration is enabled
     * @type {boolean}
     */
    private enabled;
    /**
     * Public keys of the payment gateway configuration (key-value pair)
     * @type {any}
     */
    private publicKeys;
    /**
     * Date at which the gateway configuration was created
     * @type {string}
     */
    private createdAt;
    /**
     * Date at which the gateway configuration was enabled
     * @type {string}
     */
    private enabledAt;
    /**
     * GatewayConfiguration constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: GatewayConfiguration);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the gateway configuration
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setId(val: string): GatewayConfiguration;
    /**
     * Get Project
     * Project to which the gateway configuration belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the gateway configuration belongs
     * @param {p.Project} val
     * @return {GatewayConfiguration}
     */
    setProject(val: p.Project): GatewayConfiguration;
    /**
     * Get ProjectId
     * ID of the project to which the gateway configuration belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the gateway configuration belongs
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setProjectId(val: string): GatewayConfiguration;
    /**
     * Get Gateway
     * Gateway that the configuration configures
     * @return {p.Gateway}
     */
    getGateway(): p.Gateway;
    /**
     * Set Gateway
     * Gateway that the configuration configures
     * @param {p.Gateway} val
     * @return {GatewayConfiguration}
     */
    setGateway(val: p.Gateway): GatewayConfiguration;
    /**
     * Get GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @return {number}
     */
    getGatewayId(): number;
    /**
     * Set GatewayId
     * ID of the gateway to which the gateway configuration belongs
     * @param {number} val
     * @return {GatewayConfiguration}
     */
    setGatewayId(val: number): GatewayConfiguration;
    /**
     * Get Name
     * Name of the gateway configuration
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setName(val: string): GatewayConfiguration;
    /**
     * Get DefaultCurrency
     * Default currency of the gateway configuration
     * @return {string}
     */
    getDefaultCurrency(): string;
    /**
     * Set DefaultCurrency
     * Default currency of the gateway configuration
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setDefaultCurrency(val: string): GatewayConfiguration;
    /**
     * Get Enabled
     * Define whether or not the gateway configuration is enabled
     * @return {boolean}
     */
    getEnabled(): boolean;
    /**
     * Set Enabled
     * Define whether or not the gateway configuration is enabled
     * @param {boolean} val
     * @return {GatewayConfiguration}
     */
    setEnabled(val: boolean): GatewayConfiguration;
    /**
     * Get PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @return {any}
     */
    getPublicKeys(): any;
    /**
     * Set PublicKeys
     * Public keys of the payment gateway configuration (key-value pair)
     * @param {any} val
     * @return {GatewayConfiguration}
     */
    setPublicKeys(val: any): GatewayConfiguration;
    /**
     * Get CreatedAt
     * Date at which the gateway configuration was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the gateway configuration was created
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setCreatedAt(val: string): GatewayConfiguration;
    /**
     * Get EnabledAt
     * Date at which the gateway configuration was enabled
     * @return {string}
     */
    getEnabledAt(): string;
    /**
     * Set EnabledAt
     * Date at which the gateway configuration was enabled
     * @param {string} val
     * @return {GatewayConfiguration}
     */
    setEnabledAt(val: string): GatewayConfiguration;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {GatewayConfiguration}
     */
    fillWithData(data: any): GatewayConfiguration;
    /**
     * Get all the gateway configurations.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Find a gateway configuration by its ID.
     * @param string configurationId
     * @param {any} options
     * @return {this}
     */
    find(configurationId: any, options: any): Promise<any>;
    /**
     * Save the updated gateway configuration attributes and settings.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete the gateway configuration.

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
    /**
     * Create a new gateway configuration.
     * @param string gatewayName
     * @param {any} options
     * @return {this}
     */
    create(gatewayName: any, options: any): Promise<any>;
}
export = GatewayConfiguration;
//# sourceMappingURL=gatewayconfiguration.d.ts.map