import ProcessOut = require('./processout');
import * as p from '.';
declare class Transaction {
    private client;
    /**
     * ID of the transaction
     * @type {string}
     */
    private id;
    /**
     * Project to which the transaction belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the transaction belongs
     * @type {string}
     */
    private projectId;
    /**
     * Invoice used to generate this transaction, if any
     * @type {p.Invoice}
     */
    private invoice;
    /**
     * ID of the invoice used to generate this transaction, if any
     * @type {string}
     */
    private invoiceId;
    /**
     * Customer that was linked to this transaction, if any
     * @type {p.Customer}
     */
    private customer;
    /**
     * ID of the customer that was linked to the transaction, if any
     * @type {string}
     */
    private customerId;
    /**
     * Subscription to which this transaction belongs
     * @type {p.Subscription}
     */
    private subscription;
    /**
     * ID of the subscription to which the transaction belongs, if any
     * @type {string}
     */
    private subscriptionId;
    /**
     * Token that was used to capture the payment of the transaction, if any
     * @type {p.Token}
     */
    private token;
    /**
     * ID of the token was used to capture the payment of the transaction, if any
     * @type {string}
     */
    private tokenId;
    /**
     * Card that was used to capture the payment of the transaction, if any
     * @type {p.Card}
     */
    private card;
    /**
     * ID of the card that was used to capture the payment of the transaction, if any
     * @type {string}
     */
    private cardId;
    /**
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @type {p.GatewayConfiguration}
     */
    private gatewayConfiguration;
    /**
     * External ThreeDS Gateway Configuration is the gateway configuration that was used to authenticate the payment, if configured
     * @type {p.GatewayConfiguration}
     */
    private externalThreeDSGatewayConfiguration;
    /**
     * ID of the last gateway configuration that was used to process the payment, if any
     * @type {string}
     */
    private gatewayConfigurationId;
    /**
     * Operations linked to the transaction
     * @type {any}
     */
    private operations;
    /**
     * List of the transaction refunds
     * @type {any}
     */
    private refunds;
    /**
     * Name of the transaction
     * @type {string}
     */
    private name;
    /**
     * Amount requested when creating the transaction
     * @type {string}
     */
    private amount;
    /**
     * Amount requested when creating the transaction, in the currency of the project
     * @type {string}
     */
    private amountLocal;
    /**
     * Amount that was successfully authorized on the transaction
     * @type {string}
     */
    private authorizedAmount;
    /**
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @type {string}
     */
    private authorizedAmountLocal;
    /**
     * Amount that was successfully captured on the transaction
     * @type {string}
     */
    private capturedAmount;
    /**
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @type {string}
     */
    private capturedAmountLocal;
    /**
     * Amount that was successfully refunded on the transaction
     * @type {string}
     */
    private refundedAmount;
    /**
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @type {string}
     */
    private refundedAmountLocal;
    /**
     * Amount available on the transaction (captured - refunded)
     * @type {string}
     */
    private availableAmount;
    /**
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @type {string}
     */
    private availableAmountLocal;
    /**
     * Amount that was voided on the transaction
     * @type {string}
     */
    private voidedAmount;
    /**
     * Amount that was voided on the transaction, in the currency of the project
     * @type {string}
     */
    private voidedAmountLocal;
    /**
     * Currency of the transaction
     * @type {string}
     */
    private currency;
    /**
     * Error code of the transaction, when the payment has failed
     * @type {string}
     */
    private errorCode;
    /**
     * Error message of the transaction, when the payment has failed
     * @type {string}
     */
    private errorMessage;
    /**
     * Name of the merchant acquirer
     * @type {string}
     */
    private acquirerName;
    /**
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @type {string}
     */
    private gatewayName;
    /**
     * Status of the potential 3-D Secure authentication
     * @type {string}
     */
    private threeDSStatus;
    /**
     * Status of the transaction
     * @type {string}
     */
    private status;
    /**
     * Whether the transaction was authorized or not
     * @type {boolean}
     */
    private authorized;
    /**
     * Whether the transaction was captured or not
     * @type {boolean}
     */
    private captured;
    /**
     * Whether the transaction was voided or not
     * @type {boolean}
     */
    private voided;
    /**
     * Whether the transaction was refunded or not
     * @type {boolean}
     */
    private refunded;
    /**
     * Whether the transaction was charged back or not
     * @type {boolean}
     */
    private chargedback;
    /**
     * Whether the transaction received a fraud notification event or not
     * @type {boolean}
     */
    private receivedFraudNotification;
    /**
     * Whether the transaction received a retrieval request event or not
     * @type {boolean}
     */
    private receivedRetrievalRequest;
    /**
     * ProcessOut fee applied on the transaction
     * @type {string}
     */
    private processoutFee;
    /**
     * Gateway fee estimated before processing the payment
     * @type {string}
     */
    private estimatedFee;
    /**
     * Fee taken by the payment gateway to process the payment
     * @type {string}
     */
    private gatewayFee;
    /**
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @type {string}
     */
    private gatewayFeeLocal;
    /**
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @type {string}
     */
    private currencyFee;
    /**
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Define whether or not the transaction is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the transaction was created
     * @type {string}
     */
    private createdAt;
    /**
     * Date at which the transaction was charged back
     * @type {string}
     */
    private chargedbackAt;
    /**
     * Date at which the transaction was refunded
     * @type {string}
     */
    private refundedAt;
    /**
     * 3DS data of a transaction if it was authenticated
     * @type {p.ThreeDS}
     */
    private threeDS;
    /**
     * CVC check done during the transaction
     * @type {string}
     */
    private cvcCheck;
    /**
     * AVS check done during the transaction
     * @type {string}
     */
    private avsCheck;
    /**
     * Initial scheme ID that was referenced in the request
     * @type {string}
     */
    private initialSchemeTransactionId;
    /**
     * The ID assigned to the transaction by the scheme in the last successful authorization
     * @type {string}
     */
    private schemeId;
    /**
     * Payment type of the transaction
     * @type {string}
     */
    private paymentType;
    /**
     * Native APM response data
     * @type {p.NativeAPMResponse}
     */
    private nativeApm;
    /**
     * Additional data about the transaction, originating from a PSP, for example customer shipping address
     * @type {any}
     */
    private externalDetails;
    /**
     * Transaction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Transaction);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the transaction
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setId(val: string): Transaction;
    /**
     * Get Project
     * Project to which the transaction belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the transaction belongs
     * @param {p.Project} val
     * @return {Transaction}
     */
    setProject(val: p.Project): Transaction;
    /**
     * Get ProjectId
     * ID of the project to which the transaction belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the transaction belongs
     * @param {string} val
     * @return {Transaction}
     */
    setProjectId(val: string): Transaction;
    /**
     * Get Invoice
     * Invoice used to generate this transaction, if any
     * @return {p.Invoice}
     */
    getInvoice(): p.Invoice;
    /**
     * Set Invoice
     * Invoice used to generate this transaction, if any
     * @param {p.Invoice} val
     * @return {Transaction}
     */
    setInvoice(val: p.Invoice): Transaction;
    /**
     * Get InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @return {string}
     */
    getInvoiceId(): string;
    /**
     * Set InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setInvoiceId(val: string): Transaction;
    /**
     * Get Customer
     * Customer that was linked to this transaction, if any
     * @return {p.Customer}
     */
    getCustomer(): p.Customer;
    /**
     * Set Customer
     * Customer that was linked to this transaction, if any
     * @param {p.Customer} val
     * @return {Transaction}
     */
    setCustomer(val: p.Customer): Transaction;
    /**
     * Get CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @return {string}
     */
    getCustomerId(): string;
    /**
     * Set CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setCustomerId(val: string): Transaction;
    /**
     * Get Subscription
     * Subscription to which this transaction belongs
     * @return {p.Subscription}
     */
    getSubscription(): p.Subscription;
    /**
     * Set Subscription
     * Subscription to which this transaction belongs
     * @param {p.Subscription} val
     * @return {Transaction}
     */
    setSubscription(val: p.Subscription): Transaction;
    /**
     * Get SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @return {string}
     */
    getSubscriptionId(): string;
    /**
     * Set SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @param {string} val
     * @return {Transaction}
     */
    setSubscriptionId(val: string): Transaction;
    /**
     * Get Token
     * Token that was used to capture the payment of the transaction, if any
     * @return {p.Token}
     */
    getToken(): p.Token;
    /**
     * Set Token
     * Token that was used to capture the payment of the transaction, if any
     * @param {p.Token} val
     * @return {Transaction}
     */
    setToken(val: p.Token): Transaction;
    /**
     * Get TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @return {string}
     */
    getTokenId(): string;
    /**
     * Set TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setTokenId(val: string): Transaction;
    /**
     * Get Card
     * Card that was used to capture the payment of the transaction, if any
     * @return {p.Card}
     */
    getCard(): p.Card;
    /**
     * Set Card
     * Card that was used to capture the payment of the transaction, if any
     * @param {p.Card} val
     * @return {Transaction}
     */
    setCard(val: p.Card): Transaction;
    /**
     * Get CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @return {string}
     */
    getCardId(): string;
    /**
     * Set CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setCardId(val: string): Transaction;
    /**
     * Get GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @return {p.GatewayConfiguration}
     */
    getGatewayConfiguration(): p.GatewayConfiguration;
    /**
     * Set GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @param {p.GatewayConfiguration} val
     * @return {Transaction}
     */
    setGatewayConfiguration(val: p.GatewayConfiguration): Transaction;
    /**
     * Get ExternalThreeDSGatewayConfiguration
     * External ThreeDS Gateway Configuration is the gateway configuration that was used to authenticate the payment, if configured
     * @return {p.GatewayConfiguration}
     */
    getExternalThreeDSGatewayConfiguration(): p.GatewayConfiguration;
    /**
     * Set ExternalThreeDSGatewayConfiguration
     * External ThreeDS Gateway Configuration is the gateway configuration that was used to authenticate the payment, if configured
     * @param {p.GatewayConfiguration} val
     * @return {Transaction}
     */
    setExternalThreeDSGatewayConfiguration(val: p.GatewayConfiguration): Transaction;
    /**
     * Get GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @return {string}
     */
    getGatewayConfigurationId(): string;
    /**
     * Set GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @param {string} val
     * @return {Transaction}
     */
    setGatewayConfigurationId(val: string): Transaction;
    /**
     * Get Operations
     * Operations linked to the transaction
     * @return {any}
     */
    getOperations(): any;
    /**
     * Set Operations
     * Operations linked to the transaction
     * @param {any} val
     * @return {Transaction}
     */
    setOperations(val: any): Transaction;
    /**
     * Get Refunds
     * List of the transaction refunds
     * @return {any}
     */
    getRefunds(): any;
    /**
     * Set Refunds
     * List of the transaction refunds
     * @param {any} val
     * @return {Transaction}
     */
    setRefunds(val: any): Transaction;
    /**
     * Get Name
     * Name of the transaction
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setName(val: string): Transaction;
    /**
     * Get Amount
     * Amount requested when creating the transaction
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount requested when creating the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setAmount(val: string): Transaction;
    /**
     * Get AmountLocal
     * Amount requested when creating the transaction, in the currency of the project
     * @return {string}
     */
    getAmountLocal(): string;
    /**
     * Set AmountLocal
     * Amount requested when creating the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setAmountLocal(val: string): Transaction;
    /**
     * Get AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @return {string}
     */
    getAuthorizedAmount(): string;
    /**
     * Set AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setAuthorizedAmount(val: string): Transaction;
    /**
     * Get AuthorizedAmountLocal
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @return {string}
     */
    getAuthorizedAmountLocal(): string;
    /**
     * Set AuthorizedAmountLocal
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setAuthorizedAmountLocal(val: string): Transaction;
    /**
     * Get CapturedAmount
     * Amount that was successfully captured on the transaction
     * @return {string}
     */
    getCapturedAmount(): string;
    /**
     * Set CapturedAmount
     * Amount that was successfully captured on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setCapturedAmount(val: string): Transaction;
    /**
     * Get CapturedAmountLocal
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @return {string}
     */
    getCapturedAmountLocal(): string;
    /**
     * Set CapturedAmountLocal
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setCapturedAmountLocal(val: string): Transaction;
    /**
     * Get RefundedAmount
     * Amount that was successfully refunded on the transaction
     * @return {string}
     */
    getRefundedAmount(): string;
    /**
     * Set RefundedAmount
     * Amount that was successfully refunded on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setRefundedAmount(val: string): Transaction;
    /**
     * Get RefundedAmountLocal
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @return {string}
     */
    getRefundedAmountLocal(): string;
    /**
     * Set RefundedAmountLocal
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setRefundedAmountLocal(val: string): Transaction;
    /**
     * Get AvailableAmount
     * Amount available on the transaction (captured - refunded)
     * @return {string}
     */
    getAvailableAmount(): string;
    /**
     * Set AvailableAmount
     * Amount available on the transaction (captured - refunded)
     * @param {string} val
     * @return {Transaction}
     */
    setAvailableAmount(val: string): Transaction;
    /**
     * Get AvailableAmountLocal
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @return {string}
     */
    getAvailableAmountLocal(): string;
    /**
     * Set AvailableAmountLocal
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setAvailableAmountLocal(val: string): Transaction;
    /**
     * Get VoidedAmount
     * Amount that was voided on the transaction
     * @return {string}
     */
    getVoidedAmount(): string;
    /**
     * Set VoidedAmount
     * Amount that was voided on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setVoidedAmount(val: string): Transaction;
    /**
     * Get VoidedAmountLocal
     * Amount that was voided on the transaction, in the currency of the project
     * @return {string}
     */
    getVoidedAmountLocal(): string;
    /**
     * Set VoidedAmountLocal
     * Amount that was voided on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setVoidedAmountLocal(val: string): Transaction;
    /**
     * Get Currency
     * Currency of the transaction
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setCurrency(val: string): Transaction;
    /**
     * Get ErrorCode
     * Error code of the transaction, when the payment has failed
     * @return {string}
     */
    getErrorCode(): string;
    /**
     * Set ErrorCode
     * Error code of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    setErrorCode(val: string): Transaction;
    /**
     * Get ErrorMessage
     * Error message of the transaction, when the payment has failed
     * @return {string}
     */
    getErrorMessage(): string;
    /**
     * Set ErrorMessage
     * Error message of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    setErrorMessage(val: string): Transaction;
    /**
     * Get AcquirerName
     * Name of the merchant acquirer
     * @return {string}
     */
    getAcquirerName(): string;
    /**
     * Set AcquirerName
     * Name of the merchant acquirer
     * @param {string} val
     * @return {Transaction}
     */
    setAcquirerName(val: string): Transaction;
    /**
     * Get GatewayName
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @return {string}
     */
    getGatewayName(): string;
    /**
     * Set GatewayName
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @param {string} val
     * @return {Transaction}
     */
    setGatewayName(val: string): Transaction;
    /**
     * Get ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @return {string}
     */
    getThreeDSStatus(): string;
    /**
     * Set ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @param {string} val
     * @return {Transaction}
     */
    setThreeDSStatus(val: string): Transaction;
    /**
     * Get Status
     * Status of the transaction
     * @return {string}
     */
    getStatus(): string;
    /**
     * Set Status
     * Status of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setStatus(val: string): Transaction;
    /**
     * Get Authorized
     * Whether the transaction was authorized or not
     * @return {boolean}
     */
    getAuthorized(): boolean;
    /**
     * Set Authorized
     * Whether the transaction was authorized or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setAuthorized(val: boolean): Transaction;
    /**
     * Get Captured
     * Whether the transaction was captured or not
     * @return {boolean}
     */
    getCaptured(): boolean;
    /**
     * Set Captured
     * Whether the transaction was captured or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setCaptured(val: boolean): Transaction;
    /**
     * Get Voided
     * Whether the transaction was voided or not
     * @return {boolean}
     */
    getVoided(): boolean;
    /**
     * Set Voided
     * Whether the transaction was voided or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setVoided(val: boolean): Transaction;
    /**
     * Get Refunded
     * Whether the transaction was refunded or not
     * @return {boolean}
     */
    getRefunded(): boolean;
    /**
     * Set Refunded
     * Whether the transaction was refunded or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setRefunded(val: boolean): Transaction;
    /**
     * Get Chargedback
     * Whether the transaction was charged back or not
     * @return {boolean}
     */
    getChargedback(): boolean;
    /**
     * Set Chargedback
     * Whether the transaction was charged back or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setChargedback(val: boolean): Transaction;
    /**
     * Get ReceivedFraudNotification
     * Whether the transaction received a fraud notification event or not
     * @return {boolean}
     */
    getReceivedFraudNotification(): boolean;
    /**
     * Set ReceivedFraudNotification
     * Whether the transaction received a fraud notification event or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setReceivedFraudNotification(val: boolean): Transaction;
    /**
     * Get ReceivedRetrievalRequest
     * Whether the transaction received a retrieval request event or not
     * @return {boolean}
     */
    getReceivedRetrievalRequest(): boolean;
    /**
     * Set ReceivedRetrievalRequest
     * Whether the transaction received a retrieval request event or not
     * @param {boolean} val
     * @return {Transaction}
     */
    setReceivedRetrievalRequest(val: boolean): Transaction;
    /**
     * Get ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @return {string}
     */
    getProcessoutFee(): string;
    /**
     * Set ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setProcessoutFee(val: string): Transaction;
    /**
     * Get EstimatedFee
     * Gateway fee estimated before processing the payment
     * @return {string}
     */
    getEstimatedFee(): string;
    /**
     * Set EstimatedFee
     * Gateway fee estimated before processing the payment
     * @param {string} val
     * @return {Transaction}
     */
    setEstimatedFee(val: string): Transaction;
    /**
     * Get GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @return {string}
     */
    getGatewayFee(): string;
    /**
     * Set GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @param {string} val
     * @return {Transaction}
     */
    setGatewayFee(val: string): Transaction;
    /**
     * Get GatewayFeeLocal
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @return {string}
     */
    getGatewayFeeLocal(): string;
    /**
     * Set GatewayFeeLocal
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    setGatewayFeeLocal(val: string): Transaction;
    /**
     * Get CurrencyFee
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @return {string}
     */
    getCurrencyFee(): string;
    /**
     * Set CurrencyFee
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @param {string} val
     * @return {Transaction}
     */
    setCurrencyFee(val: string): Transaction;
    /**
     * Get Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Transaction}
     */
    setMetadata(val: any): Transaction;
    /**
     * Get Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @param {boolean} val
     * @return {Transaction}
     */
    setSandbox(val: boolean): Transaction;
    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Transaction}
     */
    setCreatedAt(val: string): Transaction;
    /**
     * Get ChargedbackAt
     * Date at which the transaction was charged back
     * @return {string}
     */
    getChargedbackAt(): string;
    /**
     * Set ChargedbackAt
     * Date at which the transaction was charged back
     * @param {string} val
     * @return {Transaction}
     */
    setChargedbackAt(val: string): Transaction;
    /**
     * Get RefundedAt
     * Date at which the transaction was refunded
     * @return {string}
     */
    getRefundedAt(): string;
    /**
     * Set RefundedAt
     * Date at which the transaction was refunded
     * @param {string} val
     * @return {Transaction}
     */
    setRefundedAt(val: string): Transaction;
    /**
     * Get ThreeDS
     * 3DS data of a transaction if it was authenticated
     * @return {p.ThreeDS}
     */
    getThreeDS(): p.ThreeDS;
    /**
     * Set ThreeDS
     * 3DS data of a transaction if it was authenticated
     * @param {p.ThreeDS} val
     * @return {Transaction}
     */
    setThreeDS(val: p.ThreeDS): Transaction;
    /**
     * Get CvcCheck
     * CVC check done during the transaction
     * @return {string}
     */
    getCvcCheck(): string;
    /**
     * Set CvcCheck
     * CVC check done during the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setCvcCheck(val: string): Transaction;
    /**
     * Get AvsCheck
     * AVS check done during the transaction
     * @return {string}
     */
    getAvsCheck(): string;
    /**
     * Set AvsCheck
     * AVS check done during the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setAvsCheck(val: string): Transaction;
    /**
     * Get InitialSchemeTransactionId
     * Initial scheme ID that was referenced in the request
     * @return {string}
     */
    getInitialSchemeTransactionId(): string;
    /**
     * Set InitialSchemeTransactionId
     * Initial scheme ID that was referenced in the request
     * @param {string} val
     * @return {Transaction}
     */
    setInitialSchemeTransactionId(val: string): Transaction;
    /**
     * Get SchemeId
     * The ID assigned to the transaction by the scheme in the last successful authorization
     * @return {string}
     */
    getSchemeId(): string;
    /**
     * Set SchemeId
     * The ID assigned to the transaction by the scheme in the last successful authorization
     * @param {string} val
     * @return {Transaction}
     */
    setSchemeId(val: string): Transaction;
    /**
     * Get PaymentType
     * Payment type of the transaction
     * @return {string}
     */
    getPaymentType(): string;
    /**
     * Set PaymentType
     * Payment type of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setPaymentType(val: string): Transaction;
    /**
     * Get NativeApm
     * Native APM response data
     * @return {p.NativeAPMResponse}
     */
    getNativeApm(): p.NativeAPMResponse;
    /**
     * Set NativeApm
     * Native APM response data
     * @param {p.NativeAPMResponse} val
     * @return {Transaction}
     */
    setNativeApm(val: p.NativeAPMResponse): Transaction;
    /**
     * Get ExternalDetails
     * Additional data about the transaction, originating from a PSP, for example customer shipping address
     * @return {any}
     */
    getExternalDetails(): any;
    /**
     * Set ExternalDetails
     * Additional data about the transaction, originating from a PSP, for example customer shipping address
     * @param {any} val
     * @return {Transaction}
     */
    setExternalDetails(val: any): Transaction;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Transaction}
     */
    fillWithData(data: any): Transaction;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get the transaction's refunds.

     * @param {any} options
     * @return {Promise<any>}
     */
    fetchRefunds(options: any): Promise<any>;
    /**
     * Find a transaction's refund by its ID.
     * @param string refundId
     * @param {any} options
     * @return {Promise<p.Refund>}
     */
    findRefund(refundId: string, options: any): Promise<p.Refund>;
    /**
     * Get all the transactions.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    all(options: any): Promise<any>;
    /**
     * Find a transaction by its ID.
     * @param string transactionId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(transactionId: string, options: any): Promise<any>;
}
export = Transaction;
//# sourceMappingURL=transaction.d.ts.map