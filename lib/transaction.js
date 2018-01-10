'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Transaction = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the transaction
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the transaction belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the transaction belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Invoice used to generate this transaction, if any
     * @type {object}
     */
    _invoice: null,

    /**
     * ID of the invoice used to generate this transaction, if any
     * @type {string}
     */
    _invoiceId: null,

    /**
     * Customer that was linked to this transaction, if any
     * @type {object}
     */
    _customer: null,

    /**
     * ID of the customer that was linked to the transaction, if any
     * @type {string}
     */
    _customerId: null,

    /**
     * Subscription to which this transaction belongs
     * @type {object}
     */
    _subscription: null,

    /**
     * ID of the subscription to which the transaction belongs, if any
     * @type {string}
     */
    _subscriptionId: null,

    /**
     * Token that was used to capture the payment of the transaction, if any
     * @type {object}
     */
    _token: null,

    /**
     * ID of the token was used to capture the payment of the transaction, if any
     * @type {string}
     */
    _tokenId: null,

    /**
     * Card that was used to capture the payment of the transaction, if any
     * @type {object}
     */
    _card: null,

    /**
     * ID of the card that was used to capture the payment of the transaction, if any
     * @type {string}
     */
    _cardId: null,

    /**
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @type {object}
     */
    _gatewayConfiguration: null,

    /**
     * ID of the last gateway configuration that was used to process the payment, if any
     * @type {string}
     */
    _gatewayConfigurationId: null,

    /**
     * Operations linked to the transaction
     * @type {list}
     */
    _operations: null,

    /**
     * List of the transaction refunds
     * @type {list}
     */
    _refunds: null,

    /**
     * Name of the transaction
     * @type {string}
     */
    _name: null,

    /**
     * Amount requested when creating the transaction
     * @type {decimal}
     */
    _amount: null,

    /**
     * Amount that was successfully authorized on the transaction
     * @type {decimal}
     */
    _authorizedAmount: null,

    /**
     * Amount that was successfully captured on the transaction
     * @type {decimal}
     */
    _capturedAmount: null,

    /**
     * Currency of the transaction
     * @type {string}
     */
    _currency: null,

    /**
     * Error code of the transaction, when the payment has failed
     * @type {string}
     */
    _errorCode: null,

    /**
     * Status of the potential 3-D Secure authentication
     * @type {string}
     */
    _threeDSStatus: null,

    /**
     * Status of the transaction
     * @type {string}
     */
    _status: null,

    /**
     * Whether the transaction was authorized or not
     * @type {boolean}
     */
    _authorized: null,

    /**
     * Whether the transaction was captured or not
     * @type {boolean}
     */
    _captured: null,

    /**
     * ProcessOut fee applied on the transaction
     * @type {decimal}
     */
    _processoutFee: null,

    /**
     * Gateway fee estimated before processing the payment
     * @type {decimal}
     */
    _estimatedFee: null,

    /**
     * Fee taken by the payment gateway to process the payment
     * @type {decimal}
     */
    _gatewayFee: null,

    /**
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the transaction is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the transaction was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Transaction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Transaction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newTransaction()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the transaction
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the transaction belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the transaction belongs
     * @param {object} val
     * @return {Transaction}
     */
    setProject: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newProject().getClass())
            this._project = val;
        else {
            var obj = this._client.newProject();
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get ProjectId
     * ID of the project to which the transaction belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the transaction belongs
     * @param {string} val
     * @return {Transaction}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Invoice
     * Invoice used to generate this transaction, if any
     * @return {object}
     */
    getInvoice: function() {
        return this._invoice;
    },

    /**
     * Set Invoice
     * Invoice used to generate this transaction, if any
     * @param {object} val
     * @return {Transaction}
     */
    setInvoice: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCustomer().getClass())
            this._invoice = val;
        else {
            var obj = this._client.newCustomer();
            obj.fillWithData(val);
            this._invoice = obj;
        }
        return this;
    },

    /**
     * Get InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @return {string}
     */
    getInvoiceId: function() {
        return this._invoiceId;
    },

    /**
     * Set InvoiceId
     * ID of the invoice used to generate this transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setInvoiceId: function(val) {
        this._invoiceId = val;
        return this;
    },

    /**
     * Get Customer
     * Customer that was linked to this transaction, if any
     * @return {object}
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer that was linked to this transaction, if any
     * @param {object} val
     * @return {Transaction}
     */
    setCustomer: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCustomer().getClass())
            this._customer = val;
        else {
            var obj = this._client.newCustomer();
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @return {string}
     */
    getCustomerId: function() {
        return this._customerId;
    },

    /**
     * Set CustomerId
     * ID of the customer that was linked to the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setCustomerId: function(val) {
        this._customerId = val;
        return this;
    },

    /**
     * Get Subscription
     * Subscription to which this transaction belongs
     * @return {object}
     */
    getSubscription: function() {
        return this._subscription;
    },

    /**
     * Set Subscription
     * Subscription to which this transaction belongs
     * @param {object} val
     * @return {Transaction}
     */
    setSubscription: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newSubscription().getClass())
            this._subscription = val;
        else {
            var obj = this._client.newSubscription();
            obj.fillWithData(val);
            this._subscription = obj;
        }
        return this;
    },

    /**
     * Get SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @return {string}
     */
    getSubscriptionId: function() {
        return this._subscriptionId;
    },

    /**
     * Set SubscriptionId
     * ID of the subscription to which the transaction belongs, if any
     * @param {string} val
     * @return {Transaction}
     */
    setSubscriptionId: function(val) {
        this._subscriptionId = val;
        return this;
    },

    /**
     * Get Token
     * Token that was used to capture the payment of the transaction, if any
     * @return {object}
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token that was used to capture the payment of the transaction, if any
     * @param {object} val
     * @return {Transaction}
     */
    setToken: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newToken().getClass())
            this._token = val;
        else {
            var obj = this._client.newToken();
            obj.fillWithData(val);
            this._token = obj;
        }
        return this;
    },

    /**
     * Get TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @return {string}
     */
    getTokenId: function() {
        return this._tokenId;
    },

    /**
     * Set TokenId
     * ID of the token was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setTokenId: function(val) {
        this._tokenId = val;
        return this;
    },

    /**
     * Get Card
     * Card that was used to capture the payment of the transaction, if any
     * @return {object}
     */
    getCard: function() {
        return this._card;
    },

    /**
     * Set Card
     * Card that was used to capture the payment of the transaction, if any
     * @param {object} val
     * @return {Transaction}
     */
    setCard: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCard().getClass())
            this._card = val;
        else {
            var obj = this._client.newCard();
            obj.fillWithData(val);
            this._card = obj;
        }
        return this;
    },

    /**
     * Get CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @return {string}
     */
    getCardId: function() {
        return this._cardId;
    },

    /**
     * Set CardId
     * ID of the card that was used to capture the payment of the transaction, if any
     * @param {string} val
     * @return {Transaction}
     */
    setCardId: function(val) {
        this._cardId = val;
        return this;
    },

    /**
     * Get GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @return {object}
     */
    getGatewayConfiguration: function() {
        return this._gatewayConfiguration;
    },

    /**
     * Set GatewayConfiguration
     * Gateway Configuration is the last gateway configuration that was used to process the payment, if any
     * @param {object} val
     * @return {Transaction}
     */
    setGatewayConfiguration: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newGatewayConfiguration().getClass())
            this._gatewayConfiguration = val;
        else {
            var obj = this._client.newGatewayConfiguration();
            obj.fillWithData(val);
            this._gatewayConfiguration = obj;
        }
        return this;
    },

    /**
     * Get GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @return {string}
     */
    getGatewayConfigurationId: function() {
        return this._gatewayConfigurationId;
    },

    /**
     * Set GatewayConfigurationId
     * ID of the last gateway configuration that was used to process the payment, if any
     * @param {string} val
     * @return {Transaction}
     */
    setGatewayConfigurationId: function(val) {
        this._gatewayConfigurationId = val;
        return this;
    },

    /**
     * Get Operations
     * Operations linked to the transaction
     * @return {array}
     */
    getOperations: function() {
        return this._operations;
    },

    /**
     * Set Operations
     * Operations linked to the transaction
     * @param {array} val
     * @return {Transaction}
     */
    setOperations: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._operations = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newTransactionOperation();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._operations = a;
        }
        return this;
    },

    /**
     * Get Refunds
     * List of the transaction refunds
     * @return {array}
     */
    getRefunds: function() {
        return this._refunds;
    },

    /**
     * Set Refunds
     * List of the transaction refunds
     * @param {array} val
     * @return {Transaction}
     */
    setRefunds: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._refunds = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newRefund();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._refunds = a;
        }
        return this;
    },

    /**
     * Get Name
     * Name of the transaction
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Amount requested when creating the transaction
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount requested when creating the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @return {string}
     */
    getAuthorizedAmount: function() {
        return this._authorizedAmount;
    },

    /**
     * Set AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setAuthorizedAmount: function(val) {
        this._authorizedAmount = val;
        return this;
    },

    /**
     * Get CapturedAmount
     * Amount that was successfully captured on the transaction
     * @return {string}
     */
    getCapturedAmount: function() {
        return this._capturedAmount;
    },

    /**
     * Set CapturedAmount
     * Amount that was successfully captured on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setCapturedAmount: function(val) {
        this._capturedAmount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the transaction
     * @return {string}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get ErrorCode
     * Error code of the transaction, when the payment has failed
     * @return {string}
     */
    getErrorCode: function() {
        return this._errorCode;
    },

    /**
     * Set ErrorCode
     * Error code of the transaction, when the payment has failed
     * @param {string} val
     * @return {Transaction}
     */
    setErrorCode: function(val) {
        this._errorCode = val;
        return this;
    },

    /**
     * Get ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @return {string}
     */
    getThreeDSStatus: function() {
        return this._threeDSStatus;
    },

    /**
     * Set ThreeDSStatus
     * Status of the potential 3-D Secure authentication
     * @param {string} val
     * @return {Transaction}
     */
    setThreeDSStatus: function(val) {
        this._threeDSStatus = val;
        return this;
    },

    /**
     * Get Status
     * Status of the transaction
     * @return {string}
     */
    getStatus: function() {
        return this._status;
    },

    /**
     * Set Status
     * Status of the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setStatus: function(val) {
        this._status = val;
        return this;
    },

    /**
     * Get Authorized
     * Whether the transaction was authorized or not
     * @return {bool}
     */
    getAuthorized: function() {
        return this._authorized;
    },

    /**
     * Set Authorized
     * Whether the transaction was authorized or not
     * @param {bool} val
     * @return {Transaction}
     */
    setAuthorized: function(val) {
        this._authorized = val;
        return this;
    },

    /**
     * Get Captured
     * Whether the transaction was captured or not
     * @return {bool}
     */
    getCaptured: function() {
        return this._captured;
    },

    /**
     * Set Captured
     * Whether the transaction was captured or not
     * @param {bool} val
     * @return {Transaction}
     */
    setCaptured: function(val) {
        this._captured = val;
        return this;
    },

    /**
     * Get ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @return {string}
     */
    getProcessoutFee: function() {
        return this._processoutFee;
    },

    /**
     * Set ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @param {string} val
     * @return {Transaction}
     */
    setProcessoutFee: function(val) {
        this._processoutFee = val;
        return this;
    },

    /**
     * Get EstimatedFee
     * Gateway fee estimated before processing the payment
     * @return {string}
     */
    getEstimatedFee: function() {
        return this._estimatedFee;
    },

    /**
     * Set EstimatedFee
     * Gateway fee estimated before processing the payment
     * @param {string} val
     * @return {Transaction}
     */
    setEstimatedFee: function(val) {
        this._estimatedFee = val;
        return this;
    },

    /**
     * Get GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @return {string}
     */
    getGatewayFee: function() {
        return this._gatewayFee;
    },

    /**
     * Set GatewayFee
     * Fee taken by the payment gateway to process the payment
     * @param {string} val
     * @return {Transaction}
     */
    setGatewayFee: function(val) {
        this._gatewayFee = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Transaction}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @param {bool} val
     * @return {Transaction}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {string} val
     * @return {Transaction}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Transaction}
     */
    fillWithData: function(data) {
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
        if (data["authorized_amount"])
            this.setAuthorizedAmount(data["authorized_amount"]);
        if (data["captured_amount"])
            this.setCapturedAmount(data["captured_amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["error_code"])
            this.setErrorCode(data["error_code"]);
        if (data["three_d_s_status"])
            this.setThreeDSStatus(data["three_d_s_status"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["authorized"])
            this.setAuthorized(data["authorized"]);
        if (data["captured"])
            this.setCaptured(data["captured"]);
        if (data["processout_fee"])
            this.setProcessoutFee(data["processout_fee"]);
        if (data["estimated_fee"])
            this.setEstimatedFee(data["estimated_fee"]);
        if (data["gateway_fee"])
            this.setGatewayFee(data["gateway_fee"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get the transaction's refunds.

     * @param {object} options
     * @return {array}
     */
    fetchRefunds: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/transactions/" + encodeURI(this.getId()) + "/refunds";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['refunds'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newRefund();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a transaction's refund by its ID.
	 * @param string refundId
     * @param {object} options
     * @return {Refund}
     */
    findRefund: function(refundId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/transactions/" + encodeURI(this.getId()) + "/refunds/" + encodeURI(refundId) + "";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['refund'];
                var obj = cur._client.newRefund();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the transactions.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/transactions";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var a    = [];
                var body = response.body['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newTransaction();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a transaction by its ID.
	 * @param string transactionId
     * @param {object} options
     * @return {this}
     */
    find: function(transactionId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/transactions/" + encodeURI(transactionId) + "";

        var data = {

        };

        var req = request.get(path, data, options);
        var cur = this;
        return new Promise(function(resolve, reject) {
            req.on('complete', function(result, r) {
                if (result instanceof Error)
                    return reject(result);

                var response = new Response(result, r);
                var err      = response.check();
                if (err != null)
                    return reject(err);
                
                var returnValues = [];

                
                var body = response.body;
                body = body['transaction'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
