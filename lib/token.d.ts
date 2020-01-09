import ProcessOut = require('./processout');
import * as p from '.';
declare class Token {
    private client;
    /**
     * ID of the customer token
     * @type {string}
     */
    private id;
    /**
     * Customer owning the token
     * @type {p.Customer}
     */
    private customer;
    /**
     * ID of the customer linked to the token
     * @type {string}
     */
    private customerId;
    /**
     * Gateway configuration to which the token is linked, if any
     * @type {p.GatewayConfiguration}
     */
    private gatewayConfiguration;
    /**
     * ID of the gateway configuration to which the token is linked, if any
     * @type {string}
     */
    private gatewayConfigurationId;
    /**
     * Card used to create this token, if any
     * @type {p.Card}
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
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @type {string}
     */
    private returnUrl;
    /**
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @type {string}
     */
    private cancelUrl;
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
     * @return {p.Customer}
     */
    getCustomer(): p.Customer;
    /**
     * Set Customer
     * Customer owning the token
     * @param {p.Customer} val
     * @return {Token}
     */
    setCustomer(val: p.Customer): Token;
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
     * @return {p.GatewayConfiguration}
     */
    getGatewayConfiguration(): p.GatewayConfiguration;
    /**
     * Set GatewayConfiguration
     * Gateway configuration to which the token is linked, if any
     * @param {p.GatewayConfiguration} val
     * @return {Token}
     */
    setGatewayConfiguration(val: p.GatewayConfiguration): Token;
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
     * @return {p.Card}
     */
    getCard(): p.Card;
    /**
     * Set Card
     * Card used to create this token, if any
     * @param {p.Card} val
     * @return {Token}
     */
    setCard(val: p.Card): Token;
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
     * Get ReturnUrl
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @return {string}
     */
    getReturnUrl(): string;
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon payment authentication (if required by tokenization method)
     * @param {string} val
     * @return {Token}
     */
    setReturnUrl(val: string): Token;
    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @return {string}
     */
    getCancelUrl(): string;
    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the tokenization was canceled (if required by tokenization method)
     * @param {string} val
     * @return {Token}
     */
    setCancelUrl(val: string): Token;
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
//# sourceMappingURL=token.d.ts.map