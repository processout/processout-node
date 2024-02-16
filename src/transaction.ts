// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Transaction {
    private client: ProcessOut = null;

    /**
     * ID of the transaction
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the transaction belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the transaction belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Invoice used to generate this transaction, if any
     * @type {p.Invoice}
     */
    private invoice: p.Invoice = null;

    /**
     * ID of the invoice used to generate this transaction, if any
     * @type {string}
     */
    private invoiceId: string = null;

    /**
     * Customer that was linked to this transaction, if any
     * @type {p.Customer}
     */
    private customer: p.Customer = null;

    /**
     * ID of the customer that was linked to the transaction, if any
     * @type {string}
     */
    private customerId: string = null;

    /**
     * Subscription to which this transaction belongs
     * @type {p.Subscription}
     */
    private subscription: p.Subscription = null;

    /**
     * ID of the subscription to which the transaction belongs, if any
     * @type {string}
     */
    private subscriptionId: string = null;

    /**
     * Token that was used to capture the payment of the transaction, if any
     * @type {p.Token}
     */
    private token: p.Token = null;

    /**
     * ID of the token was used to capture the payment of the transaction, if any
     * @type {string}
     */
    private tokenId: string = null;

    /**
     * Card that was used to capture the payment of the transaction, if any
     * @type {p.Card}
     */
    private card: p.Card = null;

    /**
     * ID of the card that was used to capture the payment of the transaction, if any
     * @type {string}
     */
    private cardId: string = null;

    /**
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @type {p.GatewayConfiguration}
     */
    private gatewayConfiguration: p.GatewayConfiguration = null;

    /**
     * External ThreeDS Gateway Configuration is the gateway configuration that was used to authenticate the payment, if configured
     * @type {p.GatewayConfiguration}
     */
    private externalThreeDSGatewayConfiguration: p.GatewayConfiguration = null;

    /**
     * ID of the last gateway configuration that was used to process the payment, if any
     * @type {string}
     */
    private gatewayConfigurationId: string = null;

    /**
     * Operations linked to the transaction
     * @type {any}
     */
    private operations: any = null;

    /**
     * List of the transaction refunds
     * @type {any}
     */
    private refunds: any = null;

    /**
     * Name of the transaction
     * @type {string}
     */
    private name: string = null;

    /**
     * Amount requested when creating the transaction
     * @type {string}
     */
    private amount: string = null;

    /**
     * Amount requested when creating the transaction, in the currency of the project
     * @type {string}
     */
    private amountLocal: string = null;

    /**
     * Amount that was successfully authorized on the transaction
     * @type {string}
     */
    private authorizedAmount: string = null;

    /**
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @type {string}
     */
    private authorizedAmountLocal: string = null;

    /**
     * Amount that was successfully captured on the transaction
     * @type {string}
     */
    private capturedAmount: string = null;

    /**
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @type {string}
     */
    private capturedAmountLocal: string = null;

    /**
     * Amount that was successfully refunded on the transaction
     * @type {string}
     */
    private refundedAmount: string = null;

    /**
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @type {string}
     */
    private refundedAmountLocal: string = null;

    /**
     * Amount available on the transaction (captured - refunded)
     * @type {string}
     */
    private availableAmount: string = null;

    /**
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @type {string}
     */
    private availableAmountLocal: string = null;

    /**
     * Amount that was voided on the transaction
     * @type {string}
     */
    private voidedAmount: string = null;

    /**
     * Amount that was voided on the transaction, in the currency of the project
     * @type {string}
     */
    private voidedAmountLocal: string = null;

    /**
     * Currency of the transaction
     * @type {string}
     */
    private currency: string = null;

    /**
     * Error code of the transaction, when the payment has failed
     * @type {string}
     */
    private errorCode: string = null;

    /**
     * Error message of the transaction, when the payment has failed
     * @type {string}
     */
    private errorMessage: string = null;

    /**
     * Name of the merchant acquirer
     * @type {string}
     */
    private acquirerName: string = null;

    /**
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @type {string}
     */
    private gatewayName: string = null;

    /**
     * Status of the potential 3-D Secure authentication
     * @type {string}
     */
    private threeDSStatus: string = null;

    /**
     * Status of the transaction
     * @type {string}
     */
    private status: string = null;

    /**
     * Whether the transaction was authorized or not
     * @type {boolean}
     */
    private authorized: boolean = null;

    /**
     * Whether the transaction was captured or not
     * @type {boolean}
     */
    private captured: boolean = null;

    /**
     * Whether the transaction was voided or not
     * @type {boolean}
     */
    private voided: boolean = null;

    /**
     * Whether the transaction was refunded or not
     * @type {boolean}
     */
    private refunded: boolean = null;

    /**
     * Whether the transaction was charged back or not
     * @type {boolean}
     */
    private chargedback: boolean = null;

    /**
     * Whether the transaction received a fraud notification event or not
     * @type {boolean}
     */
    private receivedFraudNotification: boolean = null;

    /**
     * Whether the transaction received a retrieval request event or not
     * @type {boolean}
     */
    private receivedRetrievalRequest: boolean = null;

    /**
     * ProcessOut fee applied on the transaction
     * @type {string}
     */
    private processoutFee: string = null;

    /**
     * Gateway fee estimated before processing the payment
     * @type {string}
     */
    private estimatedFee: string = null;

    /**
     * Fee taken by the payment gateway to process the payment
     * @type {string}
     */
    private gatewayFee: string = null;

    /**
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @type {string}
     */
    private gatewayFeeLocal: string = null;

    /**
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @type {string}
     */
    private currencyFee: string = null;

    /**
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Define whether or not the transaction is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the transaction was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Date at which the transaction was charged back
     * @type {string}
     */
    private chargedbackAt: string = null;

    /**
     * Date at which the transaction was refunded
     * @type {string}
     */
    private refundedAt: string = null;

    /**
     * Date at which the transaction was authorized
     * @type {string}
     */
    private authorizedAt: string = null;

    /**
     * Date at which the transaction was captured
     * @type {string}
     */
    private capturedAt: string = null;

    /**
     * Date at which the transaction was voided
     * @type {string}
     */
    private voidedAt: string = null;

    /**
     * 3DS data of a transaction if it was authenticated
     * @type {p.ThreeDS}
     */
    private threeDS: p.ThreeDS = null;

    /**
     * CVC check done during the transaction
     * @type {string}
     */
    private cvcCheck: string = null;

    /**
     * AVS check done during the transaction
     * @type {string}
     */
    private avsCheck: string = null;

    /**
     * Initial scheme ID that was referenced in the request
     * @type {string}
     */
    private initialSchemeTransactionId: string = null;

    /**
     * The ID assigned to the transaction by the scheme in the last successful authorization
     * @type {string}
     */
    private schemeId: string = null;

    /**
     * Payment type of the transaction
     * @type {string}
     */
    private paymentType: string = null;

    /**
     * The Electronic Commerce Indicator
     * @type {string}
     */
    private eci: string = null;

    /**
     * Native APM response data
     * @type {p.NativeAPMResponse}
     */
    private nativeApm: p.NativeAPMResponse = null;

    /**
     * Additional data about the transaction, originating from a PSP, for example customer shipping address
     * @type {any}
     */
    private externalDetails: any = null;

    /**
     * Transaction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Transaction) {
        if (typeof client === 'undefined')
            throw new Error("The Transaction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newTransaction()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Transaction";
    }

    /**
     * Get Id
     * ID of the transaction
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setId(val: string): Transaction {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the transaction belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the transaction belongs
     * @param {p.Project} val
     * @return {Transaction}
     */
    public setProject(val: p.Project): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ProjectId
     * ID of the project to which the transaction belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the transaction belongs
     * @param {string} val
     * @return {Transaction}
     */
    public setProjectId(val: string): Transaction {
        this.projectId = val;
        return this;
    }

    /**
     * Get Invoice
     * Invoice used to generate this transaction, if any
     * @return {p.Invoice}
     */
    public getInvoice(): p.Invoice {
        return this.invoice;
    }

    /**
     * Set Invoice
     * Invoice used to generate this transaction, if any
     * @param {p.Invoice} val
     * @return {Transaction}
     */
    public setInvoice(val: p.Invoice): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newInvoice().getProcessOutObjectClass())
            this.invoice = val;
        else {
            var obj = this.client.newInvoice();
            obj.fillWithData(val);
            this.invoice = obj;
        }
        return this;
    }

    /**
     * Get InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @return {string}
     */
    public getInvoiceId(): string {
        return this.invoiceId;
    }

    /**
     * Set InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    public setInvoiceId(val: string): Transaction {
        this.invoiceId = val;
        return this;
    }

    /**
     * Get Customer
     * Customer that was linked to this transaction, if any
     * @return {p.Customer}
     */
    public getCustomer(): p.Customer {
        return this.customer;
    }

    /**
     * Set Customer
     * Customer that was linked to this transaction, if any
     * @param {p.Customer} val
     * @return {Transaction}
     */
    public setCustomer(val: p.Customer): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomer().getProcessOutObjectClass())
            this.customer = val;
        else {
            var obj = this.client.newCustomer();
            obj.fillWithData(val);
            this.customer = obj;
        }
        return this;
    }

    /**
     * Get CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @return {string}
     */
    public getCustomerId(): string {
        return this.customerId;
    }

    /**
     * Set CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    public setCustomerId(val: string): Transaction {
        this.customerId = val;
        return this;
    }

    /**
     * Get Subscription
     * Subscription to which this transaction belongs
     * @return {p.Subscription}
     */
    public getSubscription(): p.Subscription {
        return this.subscription;
    }

    /**
     * Set Subscription
     * Subscription to which this transaction belongs
     * @param {p.Subscription} val
     * @return {Transaction}
     */
    public setSubscription(val: p.Subscription): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubscription().getProcessOutObjectClass())
            this.subscription = val;
        else {
            var obj = this.client.newSubscription();
            obj.fillWithData(val);
            this.subscription = obj;
        }
        return this;
    }

    /**
     * Get SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @return {string}
     */
    public getSubscriptionId(): string {
        return this.subscriptionId;
    }

    /**
     * Set SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @param {string} val
     * @return {Transaction}
     */
    public setSubscriptionId(val: string): Transaction {
        this.subscriptionId = val;
        return this;
    }

    /**
     * Get Token
     * Token that was used to capture the payment of the transaction, if any
     * @return {p.Token}
     */
    public getToken(): p.Token {
        return this.token;
    }

    /**
     * Set Token
     * Token that was used to capture the payment of the transaction, if any
     * @param {p.Token} val
     * @return {Transaction}
     */
    public setToken(val: p.Token): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
        return this;
    }

    /**
     * Get TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @return {string}
     */
    public getTokenId(): string {
        return this.tokenId;
    }

    /**
     * Set TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    public setTokenId(val: string): Transaction {
        this.tokenId = val;
        return this;
    }

    /**
     * Get Card
     * Card that was used to capture the payment of the transaction, if any
     * @return {p.Card}
     */
    public getCard(): p.Card {
        return this.card;
    }

    /**
     * Set Card
     * Card that was used to capture the payment of the transaction, if any
     * @param {p.Card} val
     * @return {Transaction}
     */
    public setCard(val: p.Card): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCard().getProcessOutObjectClass())
            this.card = val;
        else {
            var obj = this.client.newCard();
            obj.fillWithData(val);
            this.card = obj;
        }
        return this;
    }

    /**
     * Get CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @return {string}
     */
    public getCardId(): string {
        return this.cardId;
    }

    /**
     * Set CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    public setCardId(val: string): Transaction {
        this.cardId = val;
        return this;
    }

    /**
     * Get GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @return {p.GatewayConfiguration}
     */
    public getGatewayConfiguration(): p.GatewayConfiguration {
        return this.gatewayConfiguration;
    }

    /**
     * Set GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @param {p.GatewayConfiguration} val
     * @return {Transaction}
     */
    public setGatewayConfiguration(val: p.GatewayConfiguration): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGatewayConfiguration().getProcessOutObjectClass())
            this.gatewayConfiguration = val;
        else {
            var obj = this.client.newGatewayConfiguration();
            obj.fillWithData(val);
            this.gatewayConfiguration = obj;
        }
        return this;
    }

    /**
     * Get ExternalThreeDSGatewayConfiguration
     * External ThreeDS Gateway Configuration is the gateway configuration that was used to authenticate the payment, if configured
     * @return {p.GatewayConfiguration}
     */
    public getExternalThreeDSGatewayConfiguration(): p.GatewayConfiguration {
        return this.externalThreeDSGatewayConfiguration;
    }

    /**
     * Set ExternalThreeDSGatewayConfiguration
     * External ThreeDS Gateway Configuration is the gateway configuration that was used to authenticate the payment, if configured
     * @param {p.GatewayConfiguration} val
     * @return {Transaction}
     */
    public setExternalThreeDSGatewayConfiguration(val: p.GatewayConfiguration): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGatewayConfiguration().getProcessOutObjectClass())
            this.externalThreeDSGatewayConfiguration = val;
        else {
            var obj = this.client.newGatewayConfiguration();
            obj.fillWithData(val);
            this.externalThreeDSGatewayConfiguration = obj;
        }
        return this;
    }

    /**
     * Get GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @return {string}
     */
    public getGatewayConfigurationId(): string {
        return this.gatewayConfigurationId;
    }

    /**
     * Set GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @param {string} val
     * @return {Transaction}
     */
    public setGatewayConfigurationId(val: string): Transaction {
        this.gatewayConfigurationId = val;
        return this;
    }

    /**
     * Get Operations
     * Operations linked to the transaction
     * @return {any}
     */
    public getOperations(): any {
        return this.operations;
    }

    /**
     * Set Operations
     * Operations linked to the transaction
     * @param {any} val
     * @return {Transaction}
     */
    public setOperations(val: any): Transaction {
        if (val.length > 0 && typeof val[0] === 'object')
            this.operations = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newTransactionOperation();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.operations = a;
        }
        return this;
    }

    /**
     * Get Refunds
     * List of the transaction refunds
     * @return {any}
     */
    public getRefunds(): any {
        return this.refunds;
    }

    /**
     * Set Refunds
     * List of the transaction refunds
     * @param {any} val
     * @return {Transaction}
     */
    public setRefunds(val: any): Transaction {
        if (val.length > 0 && typeof val[0] === 'object')
            this.refunds = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newRefund();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.refunds = a;
        }
        return this;
    }

    /**
     * Get Name
     * Name of the transaction
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setName(val: string): Transaction {
        this.name = val;
        return this;
    }

    /**
     * Get Amount
     * Amount requested when creating the transaction
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount requested when creating the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setAmount(val: string): Transaction {
        this.amount = val;
        return this;
    }

    /**
     * Get AmountLocal
     * Amount requested when creating the transaction, in the currency of the project
     * @return {string}
     */
    public getAmountLocal(): string {
        return this.amountLocal;
    }

    /**
     * Set AmountLocal
     * Amount requested when creating the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setAmountLocal(val: string): Transaction {
        this.amountLocal = val;
        return this;
    }

    /**
     * Get AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @return {string}
     */
    public getAuthorizedAmount(): string {
        return this.authorizedAmount;
    }

    /**
     * Set AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setAuthorizedAmount(val: string): Transaction {
        this.authorizedAmount = val;
        return this;
    }

    /**
     * Get AuthorizedAmountLocal
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @return {string}
     */
    public getAuthorizedAmountLocal(): string {
        return this.authorizedAmountLocal;
    }

    /**
     * Set AuthorizedAmountLocal
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setAuthorizedAmountLocal(val: string): Transaction {
        this.authorizedAmountLocal = val;
        return this;
    }

    /**
     * Get CapturedAmount
     * Amount that was successfully captured on the transaction
     * @return {string}
     */
    public getCapturedAmount(): string {
        return this.capturedAmount;
    }

    /**
     * Set CapturedAmount
     * Amount that was successfully captured on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setCapturedAmount(val: string): Transaction {
        this.capturedAmount = val;
        return this;
    }

    /**
     * Get CapturedAmountLocal
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @return {string}
     */
    public getCapturedAmountLocal(): string {
        return this.capturedAmountLocal;
    }

    /**
     * Set CapturedAmountLocal
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setCapturedAmountLocal(val: string): Transaction {
        this.capturedAmountLocal = val;
        return this;
    }

    /**
     * Get RefundedAmount
     * Amount that was successfully refunded on the transaction
     * @return {string}
     */
    public getRefundedAmount(): string {
        return this.refundedAmount;
    }

    /**
     * Set RefundedAmount
     * Amount that was successfully refunded on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setRefundedAmount(val: string): Transaction {
        this.refundedAmount = val;
        return this;
    }

    /**
     * Get RefundedAmountLocal
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @return {string}
     */
    public getRefundedAmountLocal(): string {
        return this.refundedAmountLocal;
    }

    /**
     * Set RefundedAmountLocal
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setRefundedAmountLocal(val: string): Transaction {
        this.refundedAmountLocal = val;
        return this;
    }

    /**
     * Get AvailableAmount
     * Amount available on the transaction (captured - refunded)
     * @return {string}
     */
    public getAvailableAmount(): string {
        return this.availableAmount;
    }

    /**
     * Set AvailableAmount
     * Amount available on the transaction (captured - refunded)
     * @param {string} val
     * @return {Transaction}
     */
    public setAvailableAmount(val: string): Transaction {
        this.availableAmount = val;
        return this;
    }

    /**
     * Get AvailableAmountLocal
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @return {string}
     */
    public getAvailableAmountLocal(): string {
        return this.availableAmountLocal;
    }

    /**
     * Set AvailableAmountLocal
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setAvailableAmountLocal(val: string): Transaction {
        this.availableAmountLocal = val;
        return this;
    }

    /**
     * Get VoidedAmount
     * Amount that was voided on the transaction
     * @return {string}
     */
    public getVoidedAmount(): string {
        return this.voidedAmount;
    }

    /**
     * Set VoidedAmount
     * Amount that was voided on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setVoidedAmount(val: string): Transaction {
        this.voidedAmount = val;
        return this;
    }

    /**
     * Get VoidedAmountLocal
     * Amount that was voided on the transaction, in the currency of the project
     * @return {string}
     */
    public getVoidedAmountLocal(): string {
        return this.voidedAmountLocal;
    }

    /**
     * Set VoidedAmountLocal
     * Amount that was voided on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setVoidedAmountLocal(val: string): Transaction {
        this.voidedAmountLocal = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the transaction
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setCurrency(val: string): Transaction {
        this.currency = val;
        return this;
    }

    /**
     * Get ErrorCode
     * Error code of the transaction, when the payment has failed
     * @return {string}
     */
    public getErrorCode(): string {
        return this.errorCode;
    }

    /**
     * Set ErrorCode
     * Error code of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    public setErrorCode(val: string): Transaction {
        this.errorCode = val;
        return this;
    }

    /**
     * Get ErrorMessage
     * Error message of the transaction, when the payment has failed
     * @return {string}
     */
    public getErrorMessage(): string {
        return this.errorMessage;
    }

    /**
     * Set ErrorMessage
     * Error message of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    public setErrorMessage(val: string): Transaction {
        this.errorMessage = val;
        return this;
    }

    /**
     * Get AcquirerName
     * Name of the merchant acquirer
     * @return {string}
     */
    public getAcquirerName(): string {
        return this.acquirerName;
    }

    /**
     * Set AcquirerName
     * Name of the merchant acquirer
     * @param {string} val
     * @return {Transaction}
     */
    public setAcquirerName(val: string): Transaction {
        this.acquirerName = val;
        return this;
    }

    /**
     * Get GatewayName
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @return {string}
     */
    public getGatewayName(): string {
        return this.gatewayName;
    }

    /**
     * Set GatewayName
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @param {string} val
     * @return {Transaction}
     */
    public setGatewayName(val: string): Transaction {
        this.gatewayName = val;
        return this;
    }

    /**
     * Get ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @return {string}
     */
    public getThreeDSStatus(): string {
        return this.threeDSStatus;
    }

    /**
     * Set ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @param {string} val
     * @return {Transaction}
     */
    public setThreeDSStatus(val: string): Transaction {
        this.threeDSStatus = val;
        return this;
    }

    /**
     * Get Status
     * Status of the transaction
     * @return {string}
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * Set Status
     * Status of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setStatus(val: string): Transaction {
        this.status = val;
        return this;
    }

    /**
     * Get Authorized
     * Whether the transaction was authorized or not
     * @return {boolean}
     */
    public getAuthorized(): boolean {
        return this.authorized;
    }

    /**
     * Set Authorized
     * Whether the transaction was authorized or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setAuthorized(val: boolean): Transaction {
        this.authorized = val;
        return this;
    }

    /**
     * Get Captured
     * Whether the transaction was captured or not
     * @return {boolean}
     */
    public getCaptured(): boolean {
        return this.captured;
    }

    /**
     * Set Captured
     * Whether the transaction was captured or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setCaptured(val: boolean): Transaction {
        this.captured = val;
        return this;
    }

    /**
     * Get Voided
     * Whether the transaction was voided or not
     * @return {boolean}
     */
    public getVoided(): boolean {
        return this.voided;
    }

    /**
     * Set Voided
     * Whether the transaction was voided or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setVoided(val: boolean): Transaction {
        this.voided = val;
        return this;
    }

    /**
     * Get Refunded
     * Whether the transaction was refunded or not
     * @return {boolean}
     */
    public getRefunded(): boolean {
        return this.refunded;
    }

    /**
     * Set Refunded
     * Whether the transaction was refunded or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setRefunded(val: boolean): Transaction {
        this.refunded = val;
        return this;
    }

    /**
     * Get Chargedback
     * Whether the transaction was charged back or not
     * @return {boolean}
     */
    public getChargedback(): boolean {
        return this.chargedback;
    }

    /**
     * Set Chargedback
     * Whether the transaction was charged back or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setChargedback(val: boolean): Transaction {
        this.chargedback = val;
        return this;
    }

    /**
     * Get ReceivedFraudNotification
     * Whether the transaction received a fraud notification event or not
     * @return {boolean}
     */
    public getReceivedFraudNotification(): boolean {
        return this.receivedFraudNotification;
    }

    /**
     * Set ReceivedFraudNotification
     * Whether the transaction received a fraud notification event or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setReceivedFraudNotification(val: boolean): Transaction {
        this.receivedFraudNotification = val;
        return this;
    }

    /**
     * Get ReceivedRetrievalRequest
     * Whether the transaction received a retrieval request event or not
     * @return {boolean}
     */
    public getReceivedRetrievalRequest(): boolean {
        return this.receivedRetrievalRequest;
    }

    /**
     * Set ReceivedRetrievalRequest
     * Whether the transaction received a retrieval request event or not
     * @param {boolean} val
     * @return {Transaction}
     */
    public setReceivedRetrievalRequest(val: boolean): Transaction {
        this.receivedRetrievalRequest = val;
        return this;
    }

    /**
     * Get ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @return {string}
     */
    public getProcessoutFee(): string {
        return this.processoutFee;
    }

    /**
     * Set ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setProcessoutFee(val: string): Transaction {
        this.processoutFee = val;
        return this;
    }

    /**
     * Get EstimatedFee
     * Gateway fee estimated before processing the payment
     * @return {string}
     */
    public getEstimatedFee(): string {
        return this.estimatedFee;
    }

    /**
     * Set EstimatedFee
     * Gateway fee estimated before processing the payment
     * @param {string} val
     * @return {Transaction}
     */
    public setEstimatedFee(val: string): Transaction {
        this.estimatedFee = val;
        return this;
    }

    /**
     * Get GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @return {string}
     */
    public getGatewayFee(): string {
        return this.gatewayFee;
    }

    /**
     * Set GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @param {string} val
     * @return {Transaction}
     */
    public setGatewayFee(val: string): Transaction {
        this.gatewayFee = val;
        return this;
    }

    /**
     * Get GatewayFeeLocal
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @return {string}
     */
    public getGatewayFeeLocal(): string {
        return this.gatewayFeeLocal;
    }

    /**
     * Set GatewayFeeLocal
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    public setGatewayFeeLocal(val: string): Transaction {
        this.gatewayFeeLocal = val;
        return this;
    }

    /**
     * Get CurrencyFee
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @return {string}
     */
    public getCurrencyFee(): string {
        return this.currencyFee;
    }

    /**
     * Set CurrencyFee
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @param {string} val
     * @return {Transaction}
     */
    public setCurrencyFee(val: string): Transaction {
        this.currencyFee = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Transaction}
     */
    public setMetadata(val: any): Transaction {
        this.metadata = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @param {boolean} val
     * @return {Transaction}
     */
    public setSandbox(val: boolean): Transaction {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Transaction}
     */
    public setCreatedAt(val: string): Transaction {
        this.createdAt = val;
        return this;
    }

    /**
     * Get ChargedbackAt
     * Date at which the transaction was charged back
     * @return {string}
     */
    public getChargedbackAt(): string {
        return this.chargedbackAt;
    }

    /**
     * Set ChargedbackAt
     * Date at which the transaction was charged back
     * @param {string} val
     * @return {Transaction}
     */
    public setChargedbackAt(val: string): Transaction {
        this.chargedbackAt = val;
        return this;
    }

    /**
     * Get RefundedAt
     * Date at which the transaction was refunded
     * @return {string}
     */
    public getRefundedAt(): string {
        return this.refundedAt;
    }

    /**
     * Set RefundedAt
     * Date at which the transaction was refunded
     * @param {string} val
     * @return {Transaction}
     */
    public setRefundedAt(val: string): Transaction {
        this.refundedAt = val;
        return this;
    }

    /**
     * Get AuthorizedAt
     * Date at which the transaction was authorized
     * @return {string}
     */
    public getAuthorizedAt(): string {
        return this.authorizedAt;
    }

    /**
     * Set AuthorizedAt
     * Date at which the transaction was authorized
     * @param {string} val
     * @return {Transaction}
     */
    public setAuthorizedAt(val: string): Transaction {
        this.authorizedAt = val;
        return this;
    }

    /**
     * Get CapturedAt
     * Date at which the transaction was captured
     * @return {string}
     */
    public getCapturedAt(): string {
        return this.capturedAt;
    }

    /**
     * Set CapturedAt
     * Date at which the transaction was captured
     * @param {string} val
     * @return {Transaction}
     */
    public setCapturedAt(val: string): Transaction {
        this.capturedAt = val;
        return this;
    }

    /**
     * Get VoidedAt
     * Date at which the transaction was voided
     * @return {string}
     */
    public getVoidedAt(): string {
        return this.voidedAt;
    }

    /**
     * Set VoidedAt
     * Date at which the transaction was voided
     * @param {string} val
     * @return {Transaction}
     */
    public setVoidedAt(val: string): Transaction {
        this.voidedAt = val;
        return this;
    }

    /**
     * Get ThreeDS
     * 3DS data of a transaction if it was authenticated
     * @return {p.ThreeDS}
     */
    public getThreeDS(): p.ThreeDS {
        return this.threeDS;
    }

    /**
     * Set ThreeDS
     * 3DS data of a transaction if it was authenticated
     * @param {p.ThreeDS} val
     * @return {Transaction}
     */
    public setThreeDS(val: p.ThreeDS): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newThreeDS().getProcessOutObjectClass())
            this.threeDS = val;
        else {
            var obj = this.client.newThreeDS();
            obj.fillWithData(val);
            this.threeDS = obj;
        }
        return this;
    }

    /**
     * Get CvcCheck
     * CVC check done during the transaction
     * @return {string}
     */
    public getCvcCheck(): string {
        return this.cvcCheck;
    }

    /**
     * Set CvcCheck
     * CVC check done during the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setCvcCheck(val: string): Transaction {
        this.cvcCheck = val;
        return this;
    }

    /**
     * Get AvsCheck
     * AVS check done during the transaction
     * @return {string}
     */
    public getAvsCheck(): string {
        return this.avsCheck;
    }

    /**
     * Set AvsCheck
     * AVS check done during the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setAvsCheck(val: string): Transaction {
        this.avsCheck = val;
        return this;
    }

    /**
     * Get InitialSchemeTransactionId
     * Initial scheme ID that was referenced in the request
     * @return {string}
     */
    public getInitialSchemeTransactionId(): string {
        return this.initialSchemeTransactionId;
    }

    /**
     * Set InitialSchemeTransactionId
     * Initial scheme ID that was referenced in the request
     * @param {string} val
     * @return {Transaction}
     */
    public setInitialSchemeTransactionId(val: string): Transaction {
        this.initialSchemeTransactionId = val;
        return this;
    }

    /**
     * Get SchemeId
     * The ID assigned to the transaction by the scheme in the last successful authorization
     * @return {string}
     */
    public getSchemeId(): string {
        return this.schemeId;
    }

    /**
     * Set SchemeId
     * The ID assigned to the transaction by the scheme in the last successful authorization
     * @param {string} val
     * @return {Transaction}
     */
    public setSchemeId(val: string): Transaction {
        this.schemeId = val;
        return this;
    }

    /**
     * Get PaymentType
     * Payment type of the transaction
     * @return {string}
     */
    public getPaymentType(): string {
        return this.paymentType;
    }

    /**
     * Set PaymentType
     * Payment type of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    public setPaymentType(val: string): Transaction {
        this.paymentType = val;
        return this;
    }

    /**
     * Get Eci
     * The Electronic Commerce Indicator
     * @return {string}
     */
    public getEci(): string {
        return this.eci;
    }

    /**
     * Set Eci
     * The Electronic Commerce Indicator
     * @param {string} val
     * @return {Transaction}
     */
    public setEci(val: string): Transaction {
        this.eci = val;
        return this;
    }

    /**
     * Get NativeApm
     * Native APM response data
     * @return {p.NativeAPMResponse}
     */
    public getNativeApm(): p.NativeAPMResponse {
        return this.nativeApm;
    }

    /**
     * Set NativeApm
     * Native APM response data
     * @param {p.NativeAPMResponse} val
     * @return {Transaction}
     */
    public setNativeApm(val: p.NativeAPMResponse): Transaction {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newNativeAPMResponse().getProcessOutObjectClass())
            this.nativeApm = val;
        else {
            var obj = this.client.newNativeAPMResponse();
            obj.fillWithData(val);
            this.nativeApm = obj;
        }
        return this;
    }

    /**
     * Get ExternalDetails
     * Additional data about the transaction, originating from a PSP, for example customer shipping address
     * @return {any}
     */
    public getExternalDetails(): any {
        return this.externalDetails;
    }

    /**
     * Set ExternalDetails
     * Additional data about the transaction, originating from a PSP, for example customer shipping address
     * @param {any} val
     * @return {Transaction}
     */
    public setExternalDetails(val: any): Transaction {
        this.externalDetails = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Transaction}
     */
    public fillWithData(data: any): Transaction {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["invoice"])
            this.setInvoice(data["invoice"]);
        if (data["invoice_id"])
            this.setInvoiceId(data["invoice_id"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["customer_id"])
            this.setCustomerId(data["customer_id"]);
        if (data["subscription"])
            this.setSubscription(data["subscription"]);
        if (data["subscription_id"])
            this.setSubscriptionId(data["subscription_id"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["token_id"])
            this.setTokenId(data["token_id"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["card_id"])
            this.setCardId(data["card_id"]);
        if (data["gateway_configuration"])
            this.setGatewayConfiguration(data["gateway_configuration"]);
        if (data["external_three_d_s_gateway_configuration"])
            this.setExternalThreeDSGatewayConfiguration(data["external_three_d_s_gateway_configuration"]);
        if (data["gateway_configuration_id"])
            this.setGatewayConfigurationId(data["gateway_configuration_id"]);
        if (data["operations"])
            this.setOperations(data["operations"]);
        if (data["refunds"])
            this.setRefunds(data["refunds"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["amount_local"])
            this.setAmountLocal(data["amount_local"]);
        if (data["authorized_amount"])
            this.setAuthorizedAmount(data["authorized_amount"]);
        if (data["authorized_amount_local"])
            this.setAuthorizedAmountLocal(data["authorized_amount_local"]);
        if (data["captured_amount"])
            this.setCapturedAmount(data["captured_amount"]);
        if (data["captured_amount_local"])
            this.setCapturedAmountLocal(data["captured_amount_local"]);
        if (data["refunded_amount"])
            this.setRefundedAmount(data["refunded_amount"]);
        if (data["refunded_amount_local"])
            this.setRefundedAmountLocal(data["refunded_amount_local"]);
        if (data["available_amount"])
            this.setAvailableAmount(data["available_amount"]);
        if (data["available_amount_local"])
            this.setAvailableAmountLocal(data["available_amount_local"]);
        if (data["voided_amount"])
            this.setVoidedAmount(data["voided_amount"]);
        if (data["voided_amount_local"])
            this.setVoidedAmountLocal(data["voided_amount_local"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["error_code"])
            this.setErrorCode(data["error_code"]);
        if (data["error_message"])
            this.setErrorMessage(data["error_message"]);
        if (data["acquirer_name"])
            this.setAcquirerName(data["acquirer_name"]);
        if (data["gateway_name"])
            this.setGatewayName(data["gateway_name"]);
        if (data["three_d_s_status"])
            this.setThreeDSStatus(data["three_d_s_status"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["authorized"])
            this.setAuthorized(data["authorized"]);
        if (data["captured"])
            this.setCaptured(data["captured"]);
        if (data["voided"])
            this.setVoided(data["voided"]);
        if (data["refunded"])
            this.setRefunded(data["refunded"]);
        if (data["chargedback"])
            this.setChargedback(data["chargedback"]);
        if (data["received_fraud_notification"])
            this.setReceivedFraudNotification(data["received_fraud_notification"]);
        if (data["received_retrieval_request"])
            this.setReceivedRetrievalRequest(data["received_retrieval_request"]);
        if (data["processout_fee"])
            this.setProcessoutFee(data["processout_fee"]);
        if (data["estimated_fee"])
            this.setEstimatedFee(data["estimated_fee"]);
        if (data["gateway_fee"])
            this.setGatewayFee(data["gateway_fee"]);
        if (data["gateway_fee_local"])
            this.setGatewayFeeLocal(data["gateway_fee_local"]);
        if (data["currency_fee"])
            this.setCurrencyFee(data["currency_fee"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["chargedback_at"])
            this.setChargedbackAt(data["chargedback_at"]);
        if (data["refunded_at"])
            this.setRefundedAt(data["refunded_at"]);
        if (data["authorized_at"])
            this.setAuthorizedAt(data["authorized_at"]);
        if (data["captured_at"])
            this.setCapturedAt(data["captured_at"]);
        if (data["voided_at"])
            this.setVoidedAt(data["voided_at"]);
        if (data["three_d_s"])
            this.setThreeDS(data["three_d_s"]);
        if (data["cvc_check"])
            this.setCvcCheck(data["cvc_check"]);
        if (data["avs_check"])
            this.setAvsCheck(data["avs_check"]);
        if (data["initial_scheme_transaction_id"])
            this.setInitialSchemeTransactionId(data["initial_scheme_transaction_id"]);
        if (data["scheme_id"])
            this.setSchemeId(data["scheme_id"]);
        if (data["payment_type"])
            this.setPaymentType(data["payment_type"]);
        if (data["eci"])
            this.setEci(data["eci"]);
        if (data["native_apm"])
            this.setNativeApm(data["native_apm"]);
        if (data["external_details"])
            this.setExternalDetails(data["external_details"]);
        return this;
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "invoice": this.getInvoice(),
            "invoice_id": this.getInvoiceId(),
            "customer": this.getCustomer(),
            "customer_id": this.getCustomerId(),
            "subscription": this.getSubscription(),
            "subscription_id": this.getSubscriptionId(),
            "token": this.getToken(),
            "token_id": this.getTokenId(),
            "card": this.getCard(),
            "card_id": this.getCardId(),
            "gateway_configuration": this.getGatewayConfiguration(),
            "external_three_d_s_gateway_configuration": this.getExternalThreeDSGatewayConfiguration(),
            "gateway_configuration_id": this.getGatewayConfigurationId(),
            "operations": this.getOperations(),
            "refunds": this.getRefunds(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "amount_local": this.getAmountLocal(),
            "authorized_amount": this.getAuthorizedAmount(),
            "authorized_amount_local": this.getAuthorizedAmountLocal(),
            "captured_amount": this.getCapturedAmount(),
            "captured_amount_local": this.getCapturedAmountLocal(),
            "refunded_amount": this.getRefundedAmount(),
            "refunded_amount_local": this.getRefundedAmountLocal(),
            "available_amount": this.getAvailableAmount(),
            "available_amount_local": this.getAvailableAmountLocal(),
            "voided_amount": this.getVoidedAmount(),
            "voided_amount_local": this.getVoidedAmountLocal(),
            "currency": this.getCurrency(),
            "error_code": this.getErrorCode(),
            "error_message": this.getErrorMessage(),
            "acquirer_name": this.getAcquirerName(),
            "gateway_name": this.getGatewayName(),
            "three_d_s_status": this.getThreeDSStatus(),
            "status": this.getStatus(),
            "authorized": this.getAuthorized(),
            "captured": this.getCaptured(),
            "voided": this.getVoided(),
            "refunded": this.getRefunded(),
            "chargedback": this.getChargedback(),
            "received_fraud_notification": this.getReceivedFraudNotification(),
            "received_retrieval_request": this.getReceivedRetrievalRequest(),
            "processout_fee": this.getProcessoutFee(),
            "estimated_fee": this.getEstimatedFee(),
            "gateway_fee": this.getGatewayFee(),
            "gateway_fee_local": this.getGatewayFeeLocal(),
            "currency_fee": this.getCurrencyFee(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
            "chargedback_at": this.getChargedbackAt(),
            "refunded_at": this.getRefundedAt(),
            "authorized_at": this.getAuthorizedAt(),
            "captured_at": this.getCapturedAt(),
            "voided_at": this.getVoidedAt(),
            "three_d_s": this.getThreeDS(),
            "cvc_check": this.getCvcCheck(),
            "avs_check": this.getAvsCheck(),
            "initial_scheme_transaction_id": this.getInitialSchemeTransactionId(),
            "scheme_id": this.getSchemeId(),
            "payment_type": this.getPaymentType(),
            "eci": this.getEci(),
            "native_apm": this.getNativeApm(),
            "external_details": this.getExternalDetails(),
        };
    }

    /**
     * Get the transaction's refunds.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchRefunds(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions/" + encodeURI(this.getId()) + "/refunds";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['refunds'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newRefund();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a transaction's refund by its ID.
	 * @param string refundId
     * @param {any} options
     * @return {Promise<p.Refund>}
     */
    public findRefund(refundId: string, options): Promise<p.Refund> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions/" + encodeURI(this.getId()) + "/refunds/" + encodeURI(refundId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['refund'];
                var obj = cur.client.newRefund();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get all the transactions.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newTransaction();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a transaction by its ID.
	 * @param string transactionId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(transactionId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/transactions/" + encodeURI(transactionId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['transaction'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = Transaction;
