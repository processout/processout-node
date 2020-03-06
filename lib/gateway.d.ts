import ProcessOut = require('./processout');
declare class Gateway {
    private client;
    /**
     * ID of the gateway
     * @type {string}
     */
    private id;
    /**
     * Name of the payment gateway
     * @type {string}
     */
    private name;
    /**
     * Name of the payment gateway that can be displayed
     * @type {string}
     */
    private displayName;
    /**
     * Logo URL of the payment gateway
     * @type {string}
     */
    private logoUrl;
    /**
     * URL of the payment gateway
     * @type {string}
     */
    private url;
    /**
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @type {any}
     */
    private flows;
    /**
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @type {any}
     */
    private tags;
    /**
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @type {boolean}
     */
    private canPullTransactions;
    /**
     * True if the gateway supports refunds, false otherwise
     * @type {boolean}
     */
    private canRefund;
    /**
     * True if the gateway supports oauth authentication, false otherwise
     * @type {boolean}
     */
    private isOauthAuthentication;
    /**
     * Description of the payment gateway
     * @type {string}
     */
    private description;
    /**
     * Gateway constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Gateway);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the gateway
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the gateway
     * @param {string} val
     * @return {Gateway}
     */
    setId(val: string): Gateway;
    /**
     * Get Name
     * Name of the payment gateway
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    setName(val: string): Gateway;
    /**
     * Get DisplayName
     * Name of the payment gateway that can be displayed
     * @return {string}
     */
    getDisplayName(): string;
    /**
     * Set DisplayName
     * Name of the payment gateway that can be displayed
     * @param {string} val
     * @return {Gateway}
     */
    setDisplayName(val: string): Gateway;
    /**
     * Get LogoUrl
     * Logo URL of the payment gateway
     * @return {string}
     */
    getLogoUrl(): string;
    /**
     * Set LogoUrl
     * Logo URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    setLogoUrl(val: string): Gateway;
    /**
     * Get Url
     * URL of the payment gateway
     * @return {string}
     */
    getUrl(): string;
    /**
     * Set Url
     * URL of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    setUrl(val: string): Gateway;
    /**
     * Get Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @return {any}
     */
    getFlows(): any;
    /**
     * Set Flows
     * Supported flow by the gateway (one-off, subscription or tokenization)
     * @param {any} val
     * @return {Gateway}
     */
    setFlows(val: any): Gateway;
    /**
     * Get Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @return {any}
     */
    getTags(): any;
    /**
     * Set Tags
     * Gateway tags. Mainly used to filter gateways depending on their attributes (e-wallets and such)
     * @param {any} val
     * @return {Gateway}
     */
    setTags(val: any): Gateway;
    /**
     * Get CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @return {boolean}
     */
    getCanPullTransactions(): boolean;
    /**
     * Set CanPullTransactions
     * True if the gateway can pull old transactions into ProcessOut, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    setCanPullTransactions(val: boolean): Gateway;
    /**
     * Get CanRefund
     * True if the gateway supports refunds, false otherwise
     * @return {boolean}
     */
    getCanRefund(): boolean;
    /**
     * Set CanRefund
     * True if the gateway supports refunds, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    setCanRefund(val: boolean): Gateway;
    /**
     * Get IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @return {boolean}
     */
    getIsOauthAuthentication(): boolean;
    /**
     * Set IsOauthAuthentication
     * True if the gateway supports oauth authentication, false otherwise
     * @param {boolean} val
     * @return {Gateway}
     */
    setIsOauthAuthentication(val: boolean): Gateway;
    /**
     * Get Description
     * Description of the payment gateway
     * @return {string}
     */
    getDescription(): string;
    /**
     * Set Description
     * Description of the payment gateway
     * @param {string} val
     * @return {Gateway}
     */
    setDescription(val: string): Gateway;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Gateway}
     */
    fillWithData(data: any): Gateway;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get all the gateway configurations of the gateway

     * @param {any} options
     * @return {Promise<any>}
     */
    fetchGatewayConfigurations(options: any): Promise<any>;
}
export = Gateway;
//# sourceMappingURL=gateway.d.ts.map