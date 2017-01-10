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
     * Customer that was linked to this transaction
     * @type {object}
     */
    _customer: null,

    /**
     * Subscription to which this transaction belongs
     * @type {object}
     */
    _subscription: null,

    /**
     * Token that was used to capture the payment of this transaction, if any
     * @type {object}
     */
    _token: null,

    /**
     * Card that was used to capture the payment of this transaction, if any
     * @type {object}
     */
    _card: null,

    /**
     * Name of the transaction
     * @type {string}
     */
    _name: null,

    /**
     * Amount that was successfully authorized on the transaction
     * @type {string}
     */
    _authorizedAmount: null,

    /**
     * Amount that was successfully captured on the transaction
     * @type {string}
     */
    _capturedAmount: null,

    /**
     * Currency of the transaction
     * @type {string}
     */
    _currency: null,

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
     * @type {string}
     */
    _processoutFee: null,

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
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the transaction
     * @param {float} val
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
     * Get Customer
     * Customer that was linked to this transaction
     * @return {object}
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer that was linked to this transaction
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
     * Get Token
     * Token that was used to capture the payment of this transaction, if any
     * @return {object}
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token that was used to capture the payment of this transaction, if any
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
     * Get Card
     * Card that was used to capture the payment of this transaction, if any
     * @return {object}
     */
    getCard: function() {
        return this._card;
    },

    /**
     * Set Card
     * Card that was used to capture the payment of this transaction, if any
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
     * Get Name
     * Name of the transaction
     * @return {float}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the transaction
     * @param {float} val
     * @return {Transaction}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @return {float}
     */
    getAuthorizedAmount: function() {
        return this._authorizedAmount;
    },

    /**
     * Set AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @param {float} val
     * @return {Transaction}
     */
    setAuthorizedAmount: function(val) {
        this._authorizedAmount = val;
        return this;
    },

    /**
     * Get CapturedAmount
     * Amount that was successfully captured on the transaction
     * @return {float}
     */
    getCapturedAmount: function() {
        return this._capturedAmount;
    },

    /**
     * Set CapturedAmount
     * Amount that was successfully captured on the transaction
     * @param {float} val
     * @return {Transaction}
     */
    setCapturedAmount: function(val) {
        this._capturedAmount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the transaction
     * @return {float}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the transaction
     * @param {float} val
     * @return {Transaction}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Status
     * Status of the transaction
     * @return {float}
     */
    getStatus: function() {
        return this._status;
    },

    /**
     * Set Status
     * Status of the transaction
     * @param {float} val
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
     * @return {float}
     */
    getProcessoutFee: function() {
        return this._processoutFee;
    },

    /**
     * Set ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @param {float} val
     * @return {Transaction}
     */
    setProcessoutFee: function(val) {
        this._processoutFee = val;
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
     * @return {float}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param {float} val
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
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["subscription"])
            this.setSubscription(data["subscription"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["card"])
            this.setCard(data["card"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["authorized_amount"])
            this.setAuthorizedAmount(data["authorized_amount"]);
        if (data["captured_amount"])
            this.setCapturedAmount(data["captured_amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["authorized"])
            this.setAuthorized(data["authorized"]);
        if (data["captured"])
            this.setCaptured(data["captured"]);
        if (data["processout_fee"])
            this.setProcessoutFee(data["processout_fee"]);
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
