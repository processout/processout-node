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
     * Type of the token. Can be card, bank_account or gateway_token
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
     * Summary of the customer token, such as a description of the card used or bank account or the email of a PayPal account
     * @type {string}
     */
    private summary;
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
     * Description of the created token
     * @type {string}
     */
    private description;
    /**
     * Invoice used to verify this token, if any
     * @type {p.Invoice}
     */
    private invoice;
    /**
     * ID of the invoice used to verify that token
     * @type {string}
     */
    private invoiceId;
    /**
     * If true, allows to refund or void the invoice manually following the token verification process
     * @type {boolean}
     */
    private manualInvoiceCancellation;
    /**
     * When a token has been requested to be verified, the status will be displayed using this field. The status can have the following values: `success`, `pending`, `failed`, `not-requested` and `unknown`
     * @type {string}
     */
    private verificationStatus;
    /**
     * If true, the balance can be retrieved from the balances endpoint
     * @type {boolean}
     */
    private canGetBalance;
    /**
     * Custom webhook URL where updates about this specific customer token will be sent, on top of your project-wide URLs
     * @type {string}
     */
    private webhookUrl;
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
     * Type of the token. Can be card, bank_account or gateway_token
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the token. Can be card, bank_account or gateway_token
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
     * Get Summary
     * Summary of the customer token, such as a description of the card used or bank account or the email of a PayPal account
     * @return {string}
     */
    getSummary(): string;
    /**
     * Set Summary
     * Summary of the customer token, such as a description of the card used or bank account or the email of a PayPal account
     * @param {string} val
     * @return {Token}
     */
    setSummary(val: string): Token;
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
     * Get Description
     * Description of the created token
     * @return {string}
     */
    getDescription(): string;
    /**
     * Set Description
     * Description of the created token
     * @param {string} val
     * @return {Token}
     */
    setDescription(val: string): Token;
    /**
     * Get Invoice
     * Invoice used to verify this token, if any
     * @return {p.Invoice}
     */
    getInvoice(): p.Invoice;
    /**
     * Set Invoice
     * Invoice used to verify this token, if any
     * @param {p.Invoice} val
     * @return {Token}
     */
    setInvoice(val: p.Invoice): Token;
    /**
     * Get InvoiceId
     * ID of the invoice used to verify that token
     * @return {string}
     */
    getInvoiceId(): string;
    /**
     * Set InvoiceId
     * ID of the invoice used to verify that token
     * @param {string} val
     * @return {Token}
     */
    setInvoiceId(val: string): Token;
    /**
     * Get ManualInvoiceCancellation
     * If true, allows to refund or void the invoice manually following the token verification process
     * @return {boolean}
     */
    getManualInvoiceCancellation(): boolean;
    /**
     * Set ManualInvoiceCancellation
     * If true, allows to refund or void the invoice manually following the token verification process
     * @param {boolean} val
     * @return {Token}
     */
    setManualInvoiceCancellation(val: boolean): Token;
    /**
     * Get VerificationStatus
     * When a token has been requested to be verified, the status will be displayed using this field. The status can have the following values: `success`, `pending`, `failed`, `not-requested` and `unknown`
     * @return {string}
     */
    getVerificationStatus(): string;
    /**
     * Set VerificationStatus
     * When a token has been requested to be verified, the status will be displayed using this field. The status can have the following values: `success`, `pending`, `failed`, `not-requested` and `unknown`
     * @param {string} val
     * @return {Token}
     */
    setVerificationStatus(val: string): Token;
    /**
     * Get CanGetBalance
     * If true, the balance can be retrieved from the balances endpoint
     * @return {boolean}
     */
    getCanGetBalance(): boolean;
    /**
     * Set CanGetBalance
     * If true, the balance can be retrieved from the balances endpoint
     * @param {boolean} val
     * @return {Token}
     */
    setCanGetBalance(val: boolean): Token;
    /**
     * Get WebhookUrl
     * Custom webhook URL where updates about this specific customer token will be sent, on top of your project-wide URLs
     * @return {string}
     */
    getWebhookUrl(): string;
    /**
     * Set WebhookUrl
     * Custom webhook URL where updates about this specific customer token will be sent, on top of your project-wide URLs
     * @param {string} val
     * @return {Token}
     */
    setWebhookUrl(val: string): Token;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Token}
     */
    fillWithData(data: any): Token;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get the customer's tokens.
     * @param string customerId
     * @param {any} options
     * @return {Promise<any>}
     */
    fetchCustomerTokens(customerId: string, options: any): Promise<any>;
    /**
     * Find a customer's token by its ID.
     * @param string customerId
     * @param string tokenId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(customerId: string, tokenId: string, options: any): Promise<any>;
    /**
     * Create a new token for the given customer ID.

     * @param {any} options
     * @return {Promise<any>}
     */
    create(options: any): Promise<any>;
    /**
     * Save the updated customer attributes.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    save(options: any): Promise<boolean>;
    /**
     * Delete a customer token

     * @param {any} options
     * @return {Promise<boolean>}
     */
    delete(options: any): Promise<boolean>;
}
export = Token;
//# sourceMappingURL=token.d.ts.map