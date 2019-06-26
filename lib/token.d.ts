import Promise = require("promise");
import ProcessOut = require("./processout");
declare class Token {
    private client;
    /**
     * ID of the customer token
     * @type {string}
     */
    private id;
    /**
     * Customer owning the token
     * @type {any}
     */
    private customer;
    /**
     * ID of the customer linked to the token
     * @type {string}
     */
    private customerId;
    /**
     * Gateway configuration to which the token is linked, if any
     * @type {any}
     */
    private gatewayConfiguration;
    /**
     * ID of the gateway configuration to which the token is linked, if any
     * @type {string}
     */
    private gatewayConfigurationId;
    /**
     * Card used to create this token, if any
     * @type {any}
     */
    private card;
    /**
     * ID of the card used to create the token, if any
     * @type {string}
     */
    private cardId;
    /**
     * Type of the token. Can be card or gateway_token
     * @type {string}
     */
    private type;
    /**
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Define whether or not the customer token is used on a recurring invoice
     * @type {boolean}
     */
    private isSubscriptionOnly;
    /**
     * True if the token it the default token of the customer, false otherwise
     * @type {boolean}
     */
    private isDefault;
    /**
     * True if the token is chargeable, false otherwise
     * @type {boolean}
     */
    private isChargeable;
    /**
     * Date at which the customer token was created
     * @type {string}
     */
    private createdAt;
    /**
     * Token constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Token);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the customer token
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the customer token
     * @param {string} val
     * @return {Token}
     */
    setId(val: string): Token;
    /**
     * Get Customer
     * Customer owning the token
     * @return {any}
     */
    getCustomer(): any;
    /**
     * Set Customer
     * Customer owning the token
     * @param {any} val
     * @return {Token}
     */
    setCustomer(val: any): Token;
    /**
     * Get CustomerId
     * ID of the customer linked to the token
     * @return {string}
     */
    getCustomerId(): string;
    /**
     * Set CustomerId
     * ID of the customer linked to the token
     * @param {string} val
     * @return {Token}
     */
    setCustomerId(val: string): Token;
    /**
     * Get GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @return {any}
     */
    getGatewayConfiguration(): any;
    /**
     * Set GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @param {any} val
     * @return {Token}
     */
    setGatewayConfiguration(val: any): Token;
    /**
     * Get GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @return {string}
     */
    getGatewayConfigurationId(): string;
    /**
     * Set GatewayConfigurationId
     * ID of the gateway configuration to which the token is linked, if any
     * @param {string} val
     * @return {Token}
     */
    setGatewayConfigurationId(val: string): Token;
    /**
     * Get Card
     * Card used to create this token, if any
     * @return {any}
     */
    getCard(): any;
    /**
     * Set Card
     * Card used to create this token, if any
     * @param {any} val
     * @return {Token}
     */
    setCard(val: any): Token;
    /**
     * Get CardId
     * ID of the card used to create the token, if any
     * @return {string}
     */
    getCardId(): string;
    /**
     * Set CardId
     * ID of the card used to create the token, if any
     * @param {string} val
     * @return {Token}
     */
    setCardId(val: string): Token;
    /**
     * Get Type
     * Type of the token. Can be card or gateway_token
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the token. Can be card or gateway_token
     * @param {string} val
     * @return {Token}
     */
    setType(val: string): Token;
    /**
     * Get Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the token, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Token}
     */
    setMetadata(val: any): Token;
    /**
     * Get IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @return {boolean}
     */
    getIsSubscriptionOnly(): boolean;
    /**
     * Set IsSubscriptionOnly
     * Define whether or not the customer token is used on a recurring invoice
     * @param {boolean} val
     * @return {Token}
     */
    setIsSubscriptionOnly(val: boolean): Token;
    /**
     * Get IsDefault
     * True if the token it the default token of the customer, false otherwise
     * @return {boolean}
     */
    getIsDefault(): boolean;
    /**
     * Set IsDefault
     * True if the token it the default token of the customer, false otherwise
     * @param {boolean} val
     * @return {Token}
     */
    setIsDefault(val: boolean): Token;
    /**
     * Get IsChargeable
     * True if the token is chargeable, false otherwise
     * @return {boolean}
     */
    getIsChargeable(): boolean;
    /**
     * Set IsChargeable
     * True if the token is chargeable, false otherwise
     * @param {boolean} val
     * @return {Token}
     */
    setIsChargeable(val: boolean): Token;
    /**
     * Get CreatedAt
     * Date at which the customer token was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the customer token was created
     * @param {string} val
     * @return {Token}
     */
    setCreatedAt(val: string): Token;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Token}
     */
    fillWithData(data: any): Token;
    /**
     * Verify a customer token's card is valid.

     * @param {any} options
     * @return {bool}
     */
    verify(options: any): Promise<any>;
    /**
     * Get the customer's tokens.
     * @param string customerId
     * @param {any} options
     * @return {array}
     */
    fetchCustomerTokens(customerId: any, options: any): Promise<any>;
    /**
     * Find a customer's token by its ID.
     * @param string customerId
     * @param string tokenId
     * @param {any} options
     * @return {this}
     */
    find(customerId: any, tokenId: any, options: any): Promise<any>;
    /**
     * Create a new token for the given customer ID.

     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Save the updated customer attributes.

     * @param {any} options
     * @return {bool}
     */
    save(options: any): Promise<any>;
    /**
     * Delete a customer token

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
}
export = Token;
