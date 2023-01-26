"use strict";
// The content of this file was automatically generated
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Transaction = /** @class */ (function () {
    /**
     * Transaction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Transaction(client, prefill) {
        this.client = null;
        /**
         * ID of the transaction
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the transaction belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the transaction belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Invoice used to generate this transaction, if any
         * @type {p.Invoice}
         */
        this.invoice = null;
        /**
         * ID of the invoice used to generate this transaction, if any
         * @type {string}
         */
        this.invoiceId = null;
        /**
         * Customer that was linked to this transaction, if any
         * @type {p.Customer}
         */
        this.customer = null;
        /**
         * ID of the customer that was linked to the transaction, if any
         * @type {string}
         */
        this.customerId = null;
        /**
         * Subscription to which this transaction belongs
         * @type {p.Subscription}
         */
        this.subscription = null;
        /**
         * ID of the subscription to which the transaction belongs, if any
         * @type {string}
         */
        this.subscriptionId = null;
        /**
         * Token that was used to capture the payment of the transaction, if any
         * @type {p.Token}
         */
        this.token = null;
        /**
         * ID of the token was used to capture the payment of the transaction, if any
         * @type {string}
         */
        this.tokenId = null;
        /**
         * Card that was used to capture the payment of the transaction, if any
         * @type {p.Card}
         */
        this.card = null;
        /**
         * ID of the card that was used to capture the payment of the transaction, if any
         * @type {string}
         */
        this.cardId = null;
        /**
         * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
         * @type {p.GatewayConfiguration}
         */
        this.gatewayConfiguration = null;
        /**
         * ID of the last gateway configuration that was used to process the payment, if any
         * @type {string}
         */
        this.gatewayConfigurationId = null;
        /**
         * Operations linked to the transaction
         * @type {any}
         */
        this.operations = null;
        /**
         * List of the transaction refunds
         * @type {any}
         */
        this.refunds = null;
        /**
         * Name of the transaction
         * @type {string}
         */
        this.name = null;
        /**
         * Amount requested when creating the transaction
         * @type {string}
         */
        this.amount = null;
        /**
         * Amount requested when creating the transaction, in the currency of the project
         * @type {string}
         */
        this.amountLocal = null;
        /**
         * Amount that was successfully authorized on the transaction
         * @type {string}
         */
        this.authorizedAmount = null;
        /**
         * Amount that was successfully authorized on the transaction, in the currency of the project
         * @type {string}
         */
        this.authorizedAmountLocal = null;
        /**
         * Amount that was successfully captured on the transaction
         * @type {string}
         */
        this.capturedAmount = null;
        /**
         * Amount that was successfully captured on the transaction, in the currency of the project
         * @type {string}
         */
        this.capturedAmountLocal = null;
        /**
         * Amount that was successfully refunded on the transaction
         * @type {string}
         */
        this.refundedAmount = null;
        /**
         * Amount that was successfully refunded on the transaction, in the currency of the project
         * @type {string}
         */
        this.refundedAmountLocal = null;
        /**
         * Amount available on the transaction (captured - refunded)
         * @type {string}
         */
        this.availableAmount = null;
        /**
         * Amount available on the transaction (captured - refunded), in the currency of the project
         * @type {string}
         */
        this.availableAmountLocal = null;
        /**
         * Currency of the transaction
         * @type {string}
         */
        this.currency = null;
        /**
         * Error code of the transaction, when the payment has failed
         * @type {string}
         */
        this.errorCode = null;
        /**
         * Error message of the transaction, when the payment has failed
         * @type {string}
         */
        this.errorMessage = null;
        /**
         * Name of the merchant acquirer
         * @type {string}
         */
        this.acquirerName = null;
        /**
         * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
         * @type {string}
         */
        this.gatewayName = null;
        /**
         * Status of the potential 3-D Secure authentication
         * @type {string}
         */
        this.threeDSStatus = null;
        /**
         * Status of the transaction
         * @type {string}
         */
        this.status = null;
        /**
         * Whether the transaction was authorized or not
         * @type {boolean}
         */
        this.authorized = null;
        /**
         * Whether the transaction was captured or not
         * @type {boolean}
         */
        this.captured = null;
        /**
         * Whether the transaction was voided or not
         * @type {boolean}
         */
        this.voided = null;
        /**
         * Whether the transaction was refunded or not
         * @type {boolean}
         */
        this.refunded = null;
        /**
         * Whether the transaction was charged back or not
         * @type {boolean}
         */
        this.chargedback = null;
        /**
         * Whether the transaction received a fraud notification event or not
         * @type {boolean}
         */
        this.receivedFraudNotification = null;
        /**
         * Whether the transaction received a retrieval request event or not
         * @type {boolean}
         */
        this.receivedRetrievalRequest = null;
        /**
         * ProcessOut fee applied on the transaction
         * @type {string}
         */
        this.processoutFee = null;
        /**
         * Gateway fee estimated before processing the payment
         * @type {string}
         */
        this.estimatedFee = null;
        /**
         * Fee taken by the payment gateway to process the payment
         * @type {string}
         */
        this.gatewayFee = null;
        /**
         * Fee taken by the payment gateway to process the payment, in the currency of the project
         * @type {string}
         */
        this.gatewayFeeLocal = null;
        /**
         * Currency of the fee taken on the transaction (field `gateway_fee`)
         * @type {string}
         */
        this.currencyFee = null;
        /**
         * Metadata related to the transaction, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Define whether or not the transaction is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the transaction was created
         * @type {string}
         */
        this.createdAt = null;
        /**
         * Date at which the transaction was charged back
         * @type {string}
         */
        this.chargedbackAt = null;
        /**
         * Date at which the transaction was refunded
         * @type {string}
         */
        this.refundedAt = null;
        /**
         * 3DS data of a transaction if it was authenticated
         * @type {p.ThreeDS}
         */
        this.threeDS = null;
        /**
         * CVC check done during the transaction
         * @type {string}
         */
        this.cvcCheck = null;
        /**
         * AVS check done during the transaction
         * @type {string}
         */
        this.avsCheck = null;
        if (typeof client === 'undefined')
            throw new Error("The Transaction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newTransaction()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Transaction.prototype.getProcessOutObjectClass = function () {
        return "Transaction";
    };
    /**
     * Get Id
     * ID of the transaction
     * @return {string}
     */
    Transaction.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the transaction belongs
     * @return {p.Project}
     */
    Transaction.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the transaction belongs
     * @param {p.Project} val
     * @return {Transaction}
     */
    Transaction.prototype.setProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    };
    /**
     * Get ProjectId
     * ID of the project to which the transaction belongs
     * @return {string}
     */
    Transaction.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the transaction belongs
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Invoice
     * Invoice used to generate this transaction, if any
     * @return {p.Invoice}
     */
    Transaction.prototype.getInvoice = function () {
        return this.invoice;
    };
    /**
     * Set Invoice
     * Invoice used to generate this transaction, if any
     * @param {p.Invoice} val
     * @return {Transaction}
     */
    Transaction.prototype.setInvoice = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newInvoice().getProcessOutObjectClass())
            this.invoice = val;
        else {
            var obj = this.client.newInvoice();
            obj.fillWithData(val);
            this.invoice = obj;
        }
        return this;
    };
    /**
     * Get InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @return {string}
     */
    Transaction.prototype.getInvoiceId = function () {
        return this.invoiceId;
    };
    /**
     * Set InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setInvoiceId = function (val) {
        this.invoiceId = val;
        return this;
    };
    /**
     * Get Customer
     * Customer that was linked to this transaction, if any
     * @return {p.Customer}
     */
    Transaction.prototype.getCustomer = function () {
        return this.customer;
    };
    /**
     * Set Customer
     * Customer that was linked to this transaction, if any
     * @param {p.Customer} val
     * @return {Transaction}
     */
    Transaction.prototype.setCustomer = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomer().getProcessOutObjectClass())
            this.customer = val;
        else {
            var obj = this.client.newCustomer();
            obj.fillWithData(val);
            this.customer = obj;
        }
        return this;
    };
    /**
     * Get CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @return {string}
     */
    Transaction.prototype.getCustomerId = function () {
        return this.customerId;
    };
    /**
     * Set CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCustomerId = function (val) {
        this.customerId = val;
        return this;
    };
    /**
     * Get Subscription
     * Subscription to which this transaction belongs
     * @return {p.Subscription}
     */
    Transaction.prototype.getSubscription = function () {
        return this.subscription;
    };
    /**
     * Set Subscription
     * Subscription to which this transaction belongs
     * @param {p.Subscription} val
     * @return {Transaction}
     */
    Transaction.prototype.setSubscription = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newSubscription().getProcessOutObjectClass())
            this.subscription = val;
        else {
            var obj = this.client.newSubscription();
            obj.fillWithData(val);
            this.subscription = obj;
        }
        return this;
    };
    /**
     * Get SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @return {string}
     */
    Transaction.prototype.getSubscriptionId = function () {
        return this.subscriptionId;
    };
    /**
     * Set SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setSubscriptionId = function (val) {
        this.subscriptionId = val;
        return this;
    };
    /**
     * Get Token
     * Token that was used to capture the payment of the transaction, if any
     * @return {p.Token}
     */
    Transaction.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Set Token
     * Token that was used to capture the payment of the transaction, if any
     * @param {p.Token} val
     * @return {Transaction}
     */
    Transaction.prototype.setToken = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
        return this;
    };
    /**
     * Get TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @return {string}
     */
    Transaction.prototype.getTokenId = function () {
        return this.tokenId;
    };
    /**
     * Set TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setTokenId = function (val) {
        this.tokenId = val;
        return this;
    };
    /**
     * Get Card
     * Card that was used to capture the payment of the transaction, if any
     * @return {p.Card}
     */
    Transaction.prototype.getCard = function () {
        return this.card;
    };
    /**
     * Set Card
     * Card that was used to capture the payment of the transaction, if any
     * @param {p.Card} val
     * @return {Transaction}
     */
    Transaction.prototype.setCard = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCard().getProcessOutObjectClass())
            this.card = val;
        else {
            var obj = this.client.newCard();
            obj.fillWithData(val);
            this.card = obj;
        }
        return this;
    };
    /**
     * Get CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @return {string}
     */
    Transaction.prototype.getCardId = function () {
        return this.cardId;
    };
    /**
     * Set CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCardId = function (val) {
        this.cardId = val;
        return this;
    };
    /**
     * Get GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @return {p.GatewayConfiguration}
     */
    Transaction.prototype.getGatewayConfiguration = function () {
        return this.gatewayConfiguration;
    };
    /**
     * Set GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @param {p.GatewayConfiguration} val
     * @return {Transaction}
     */
    Transaction.prototype.setGatewayConfiguration = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newGatewayConfiguration().getProcessOutObjectClass())
            this.gatewayConfiguration = val;
        else {
            var obj = this.client.newGatewayConfiguration();
            obj.fillWithData(val);
            this.gatewayConfiguration = obj;
        }
        return this;
    };
    /**
     * Get GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @return {string}
     */
    Transaction.prototype.getGatewayConfigurationId = function () {
        return this.gatewayConfigurationId;
    };
    /**
     * Set GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setGatewayConfigurationId = function (val) {
        this.gatewayConfigurationId = val;
        return this;
    };
    /**
     * Get Operations
     * Operations linked to the transaction
     * @return {any}
     */
    Transaction.prototype.getOperations = function () {
        return this.operations;
    };
    /**
     * Set Operations
     * Operations linked to the transaction
     * @param {any} val
     * @return {Transaction}
     */
    Transaction.prototype.setOperations = function (val) {
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
    };
    /**
     * Get Refunds
     * List of the transaction refunds
     * @return {any}
     */
    Transaction.prototype.getRefunds = function () {
        return this.refunds;
    };
    /**
     * Set Refunds
     * List of the transaction refunds
     * @param {any} val
     * @return {Transaction}
     */
    Transaction.prototype.setRefunds = function (val) {
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
    };
    /**
     * Get Name
     * Name of the transaction
     * @return {string}
     */
    Transaction.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Amount
     * Amount requested when creating the transaction
     * @return {string}
     */
    Transaction.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount requested when creating the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get AmountLocal
     * Amount requested when creating the transaction, in the currency of the project
     * @return {string}
     */
    Transaction.prototype.getAmountLocal = function () {
        return this.amountLocal;
    };
    /**
     * Set AmountLocal
     * Amount requested when creating the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAmountLocal = function (val) {
        this.amountLocal = val;
        return this;
    };
    /**
     * Get AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @return {string}
     */
    Transaction.prototype.getAuthorizedAmount = function () {
        return this.authorizedAmount;
    };
    /**
     * Set AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAuthorizedAmount = function (val) {
        this.authorizedAmount = val;
        return this;
    };
    /**
     * Get AuthorizedAmountLocal
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @return {string}
     */
    Transaction.prototype.getAuthorizedAmountLocal = function () {
        return this.authorizedAmountLocal;
    };
    /**
     * Set AuthorizedAmountLocal
     * Amount that was successfully authorized on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAuthorizedAmountLocal = function (val) {
        this.authorizedAmountLocal = val;
        return this;
    };
    /**
     * Get CapturedAmount
     * Amount that was successfully captured on the transaction
     * @return {string}
     */
    Transaction.prototype.getCapturedAmount = function () {
        return this.capturedAmount;
    };
    /**
     * Set CapturedAmount
     * Amount that was successfully captured on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCapturedAmount = function (val) {
        this.capturedAmount = val;
        return this;
    };
    /**
     * Get CapturedAmountLocal
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @return {string}
     */
    Transaction.prototype.getCapturedAmountLocal = function () {
        return this.capturedAmountLocal;
    };
    /**
     * Set CapturedAmountLocal
     * Amount that was successfully captured on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCapturedAmountLocal = function (val) {
        this.capturedAmountLocal = val;
        return this;
    };
    /**
     * Get RefundedAmount
     * Amount that was successfully refunded on the transaction
     * @return {string}
     */
    Transaction.prototype.getRefundedAmount = function () {
        return this.refundedAmount;
    };
    /**
     * Set RefundedAmount
     * Amount that was successfully refunded on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setRefundedAmount = function (val) {
        this.refundedAmount = val;
        return this;
    };
    /**
     * Get RefundedAmountLocal
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @return {string}
     */
    Transaction.prototype.getRefundedAmountLocal = function () {
        return this.refundedAmountLocal;
    };
    /**
     * Set RefundedAmountLocal
     * Amount that was successfully refunded on the transaction, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setRefundedAmountLocal = function (val) {
        this.refundedAmountLocal = val;
        return this;
    };
    /**
     * Get AvailableAmount
     * Amount available on the transaction (captured - refunded)
     * @return {string}
     */
    Transaction.prototype.getAvailableAmount = function () {
        return this.availableAmount;
    };
    /**
     * Set AvailableAmount
     * Amount available on the transaction (captured - refunded)
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAvailableAmount = function (val) {
        this.availableAmount = val;
        return this;
    };
    /**
     * Get AvailableAmountLocal
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @return {string}
     */
    Transaction.prototype.getAvailableAmountLocal = function () {
        return this.availableAmountLocal;
    };
    /**
     * Set AvailableAmountLocal
     * Amount available on the transaction (captured - refunded), in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAvailableAmountLocal = function (val) {
        this.availableAmountLocal = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the transaction
     * @return {string}
     */
    Transaction.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get ErrorCode
     * Error code of the transaction, when the payment has failed
     * @return {string}
     */
    Transaction.prototype.getErrorCode = function () {
        return this.errorCode;
    };
    /**
     * Set ErrorCode
     * Error code of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setErrorCode = function (val) {
        this.errorCode = val;
        return this;
    };
    /**
     * Get ErrorMessage
     * Error message of the transaction, when the payment has failed
     * @return {string}
     */
    Transaction.prototype.getErrorMessage = function () {
        return this.errorMessage;
    };
    /**
     * Set ErrorMessage
     * Error message of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setErrorMessage = function (val) {
        this.errorMessage = val;
        return this;
    };
    /**
     * Get AcquirerName
     * Name of the merchant acquirer
     * @return {string}
     */
    Transaction.prototype.getAcquirerName = function () {
        return this.acquirerName;
    };
    /**
     * Set AcquirerName
     * Name of the merchant acquirer
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAcquirerName = function (val) {
        this.acquirerName = val;
        return this;
    };
    /**
     * Get GatewayName
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @return {string}
     */
    Transaction.prototype.getGatewayName = function () {
        return this.gatewayName;
    };
    /**
     * Set GatewayName
     * Name of the last gateway the transaction was attempted on (successfully or not). Use the operations list to get the full transaction's history
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setGatewayName = function (val) {
        this.gatewayName = val;
        return this;
    };
    /**
     * Get ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @return {string}
     */
    Transaction.prototype.getThreeDSStatus = function () {
        return this.threeDSStatus;
    };
    /**
     * Set ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setThreeDSStatus = function (val) {
        this.threeDSStatus = val;
        return this;
    };
    /**
     * Get Status
     * Status of the transaction
     * @return {string}
     */
    Transaction.prototype.getStatus = function () {
        return this.status;
    };
    /**
     * Set Status
     * Status of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setStatus = function (val) {
        this.status = val;
        return this;
    };
    /**
     * Get Authorized
     * Whether the transaction was authorized or not
     * @return {boolean}
     */
    Transaction.prototype.getAuthorized = function () {
        return this.authorized;
    };
    /**
     * Set Authorized
     * Whether the transaction was authorized or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setAuthorized = function (val) {
        this.authorized = val;
        return this;
    };
    /**
     * Get Captured
     * Whether the transaction was captured or not
     * @return {boolean}
     */
    Transaction.prototype.getCaptured = function () {
        return this.captured;
    };
    /**
     * Set Captured
     * Whether the transaction was captured or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setCaptured = function (val) {
        this.captured = val;
        return this;
    };
    /**
     * Get Voided
     * Whether the transaction was voided or not
     * @return {boolean}
     */
    Transaction.prototype.getVoided = function () {
        return this.voided;
    };
    /**
     * Set Voided
     * Whether the transaction was voided or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setVoided = function (val) {
        this.voided = val;
        return this;
    };
    /**
     * Get Refunded
     * Whether the transaction was refunded or not
     * @return {boolean}
     */
    Transaction.prototype.getRefunded = function () {
        return this.refunded;
    };
    /**
     * Set Refunded
     * Whether the transaction was refunded or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setRefunded = function (val) {
        this.refunded = val;
        return this;
    };
    /**
     * Get Chargedback
     * Whether the transaction was charged back or not
     * @return {boolean}
     */
    Transaction.prototype.getChargedback = function () {
        return this.chargedback;
    };
    /**
     * Set Chargedback
     * Whether the transaction was charged back or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setChargedback = function (val) {
        this.chargedback = val;
        return this;
    };
    /**
     * Get ReceivedFraudNotification
     * Whether the transaction received a fraud notification event or not
     * @return {boolean}
     */
    Transaction.prototype.getReceivedFraudNotification = function () {
        return this.receivedFraudNotification;
    };
    /**
     * Set ReceivedFraudNotification
     * Whether the transaction received a fraud notification event or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setReceivedFraudNotification = function (val) {
        this.receivedFraudNotification = val;
        return this;
    };
    /**
     * Get ReceivedRetrievalRequest
     * Whether the transaction received a retrieval request event or not
     * @return {boolean}
     */
    Transaction.prototype.getReceivedRetrievalRequest = function () {
        return this.receivedRetrievalRequest;
    };
    /**
     * Set ReceivedRetrievalRequest
     * Whether the transaction received a retrieval request event or not
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setReceivedRetrievalRequest = function (val) {
        this.receivedRetrievalRequest = val;
        return this;
    };
    /**
     * Get ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @return {string}
     */
    Transaction.prototype.getProcessoutFee = function () {
        return this.processoutFee;
    };
    /**
     * Set ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setProcessoutFee = function (val) {
        this.processoutFee = val;
        return this;
    };
    /**
     * Get EstimatedFee
     * Gateway fee estimated before processing the payment
     * @return {string}
     */
    Transaction.prototype.getEstimatedFee = function () {
        return this.estimatedFee;
    };
    /**
     * Set EstimatedFee
     * Gateway fee estimated before processing the payment
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setEstimatedFee = function (val) {
        this.estimatedFee = val;
        return this;
    };
    /**
     * Get GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @return {string}
     */
    Transaction.prototype.getGatewayFee = function () {
        return this.gatewayFee;
    };
    /**
     * Set GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setGatewayFee = function (val) {
        this.gatewayFee = val;
        return this;
    };
    /**
     * Get GatewayFeeLocal
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @return {string}
     */
    Transaction.prototype.getGatewayFeeLocal = function () {
        return this.gatewayFeeLocal;
    };
    /**
     * Set GatewayFeeLocal
     * Fee taken by the payment gateway to process the payment, in the currency of the project
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setGatewayFeeLocal = function (val) {
        this.gatewayFeeLocal = val;
        return this;
    };
    /**
     * Get CurrencyFee
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @return {string}
     */
    Transaction.prototype.getCurrencyFee = function () {
        return this.currencyFee;
    };
    /**
     * Set CurrencyFee
     * Currency of the fee taken on the transaction (field `gateway_fee`)
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCurrencyFee = function (val) {
        this.currencyFee = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Transaction.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Transaction}
     */
    Transaction.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @return {boolean}
     */
    Transaction.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @param {boolean} val
     * @return {Transaction}
     */
    Transaction.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    Transaction.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Get ChargedbackAt
     * Date at which the transaction was charged back
     * @return {string}
     */
    Transaction.prototype.getChargedbackAt = function () {
        return this.chargedbackAt;
    };
    /**
     * Set ChargedbackAt
     * Date at which the transaction was charged back
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setChargedbackAt = function (val) {
        this.chargedbackAt = val;
        return this;
    };
    /**
     * Get RefundedAt
     * Date at which the transaction was refunded
     * @return {string}
     */
    Transaction.prototype.getRefundedAt = function () {
        return this.refundedAt;
    };
    /**
     * Set RefundedAt
     * Date at which the transaction was refunded
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setRefundedAt = function (val) {
        this.refundedAt = val;
        return this;
    };
    /**
     * Get ThreeDS
     * 3DS data of a transaction if it was authenticated
     * @return {p.ThreeDS}
     */
    Transaction.prototype.getThreeDS = function () {
        return this.threeDS;
    };
    /**
     * Set ThreeDS
     * 3DS data of a transaction if it was authenticated
     * @param {p.ThreeDS} val
     * @return {Transaction}
     */
    Transaction.prototype.setThreeDS = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newThreeDS().getProcessOutObjectClass())
            this.threeDS = val;
        else {
            var obj = this.client.newThreeDS();
            obj.fillWithData(val);
            this.threeDS = obj;
        }
        return this;
    };
    /**
     * Get CvcCheck
     * CVC check done during the transaction
     * @return {string}
     */
    Transaction.prototype.getCvcCheck = function () {
        return this.cvcCheck;
    };
    /**
     * Set CvcCheck
     * CVC check done during the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setCvcCheck = function (val) {
        this.cvcCheck = val;
        return this;
    };
    /**
     * Get AvsCheck
     * AVS check done during the transaction
     * @return {string}
     */
    Transaction.prototype.getAvsCheck = function () {
        return this.avsCheck;
    };
    /**
     * Set AvsCheck
     * AVS check done during the transaction
     * @param {string} val
     * @return {Transaction}
     */
    Transaction.prototype.setAvsCheck = function (val) {
        this.avsCheck = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Transaction}
     */
    Transaction.prototype.fillWithData = function (data) {
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
        if (data["three_d_s"])
            this.setThreeDS(data["three_d_s"]);
        if (data["cvc_check"])
            this.setCvcCheck(data["cvc_check"]);
        if (data["avs_check"])
            this.setAvsCheck(data["avs_check"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Transaction.prototype.toJSON = function () {
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
            "three_d_s": this.getThreeDS(),
            "cvc_check": this.getCvcCheck(),
            "avs_check": this.getAvsCheck(),
        };
    };
    /**
     * Get the transaction's refunds.

     * @param {any} options
     * @return {Promise<any>}
     */
    Transaction.prototype.fetchRefunds = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions/" + encodeURI(this.getId()) + "/refunds";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_1, response, err, returnValues, a, body, i, tmp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['refunds'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newRefund();
                                    tmp.fillWithData(body[i]);
                                    a.push(tmp);
                                }
                                returnValues.push(a);
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Find a transaction's refund by its ID.
     * @param string refundId
     * @param {any} options
     * @return {Promise<p.Refund>}
     */
    Transaction.prototype.findRefund = function (refundId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions/" + encodeURI(this.getId()) + "/refunds/" + encodeURI(refundId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body, obj;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_2 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['refund'];
                                obj = cur.client.newRefund();
                                returnValues.push(obj.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Get all the transactions.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Transaction.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues, a, body, i, tmp;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_3 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['transactions'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newTransaction();
                                    tmp.fillWithData(body[i]);
                                    a.push(tmp);
                                }
                                returnValues.push(a);
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Find a transaction by its ID.
     * @param string transactionId
     * @param {any} options
     * @return {Promise<any>}
     */
    Transaction.prototype.find = function (transactionId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/transactions/" + encodeURI(transactionId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues, body;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                respBody = {};
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, resp.json()];
                            case 2:
                                respBody = _a.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                err_4 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['transaction'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.get(path, data, options).then(callback, callbackError);
        });
    };
    return Transaction;
}());
module.exports = Transaction;
//# sourceMappingURL=transaction.js.map