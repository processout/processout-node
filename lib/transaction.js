'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Transaction = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the transaction
     * @type string
     */
    _id: "",

    /**
     * Project to which the transaction belongs
     * @type object
     */
    _project: null,

    /**
     * Subscription to which this transaction belongs
     * @type object
     */
    _subscription: null,

    /**
     * Customer that was linked to this transaction
     * @type object
     */
    _customer: null,

    /**
     * Token that was used to capture the payment of this transaction
     * @type object
     */
    _token: null,

    /**
     * Card that was used to capture the payment of this transaction
     * @type object
     */
    _card: null,

    /**
     * Name of the transaction
     * @type string
     */
    _name: "",

    /**
     * Amount that was successfully authorized on the transaction
     * @type string
     */
    _authorizedAmount: "",

    /**
     * Amount that was successfully captured on the transaction
     * @type string
     */
    _capturedAmount: "",

    /**
     * Currency of the transaction
     * @type string
     */
    _currency: "",

    /**
     * Status of the transaction
     * @type string
     */
    _status: "",

    /**
     * Whether the transaction was authorized or not
     * @type boolean
     */
    _authorized: false,

    /**
     * Whether the transaction was captured or not
     * @type boolean
     */
    _captured: false,

    /**
     * ProcessOut fee applied on the transaction
     * @type string
     */
    _processoutFee: "",

    /**
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @type dictionary
     */
    _metadata: {},

    /**
     * Define whether or not the transaction is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the transaction was created
     * @type string
     */
    _createdAt: "",

    /**
     * Transaction constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the transaction
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the transaction
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the transaction belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the transaction belongs
     * @param object val
     * @return this
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._instance);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Subscription
     * Subscription to which this transaction belongs
     * @return object
     */
    getSubscription: function() {
        return this._subscription;
    },

    /**
     * Set Subscription
     * Subscription to which this transaction belongs
     * @param object val
     * @return this
     */
    setSubscription: function(val) {
        if (typeof val === 'object')
            this._subscription = val;
        else {
            var obj = new Subscription(this._instance);
            obj.fillWithData(val);
            this._subscription = obj;
        }
        return this;
    },

    /**
     * Get Customer
     * Customer that was linked to this transaction
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer that was linked to this transaction
     * @param object val
     * @return this
     */
    setCustomer: function(val) {
        if (typeof val === 'object')
            this._customer = val;
        else {
            var obj = new Customer(this._instance);
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get Token
     * Token that was used to capture the payment of this transaction
     * @return object
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token that was used to capture the payment of this transaction
     * @param object val
     * @return this
     */
    setToken: function(val) {
        if (typeof val === 'object')
            this._token = val;
        else {
            var obj = new Token(this._instance);
            obj.fillWithData(val);
            this._token = obj;
        }
        return this;
    },

    /**
     * Get Card
     * Card that was used to capture the payment of this transaction
     * @return object
     */
    getCard: function() {
        return this._card;
    },

    /**
     * Set Card
     * Card that was used to capture the payment of this transaction
     * @param object val
     * @return this
     */
    setCard: function(val) {
        if (typeof val === 'object')
            this._card = val;
        else {
            var obj = new Card(this._instance);
            obj.fillWithData(val);
            this._card = obj;
        }
        return this;
    },

    /**
     * Get Name
     * Name of the transaction
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the transaction
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @return float
     */
    getAuthorizedAmount: function() {
        return this._authorizedAmount;
    },

    /**
     * Set AuthorizedAmount
     * Amount that was successfully authorized on the transaction
     * @param float val
     * @return this
     */
    setAuthorizedAmount: function(val) {
        this._authorizedAmount = val;
        return this;
    },

    /**
     * Get CapturedAmount
     * Amount that was successfully captured on the transaction
     * @return float
     */
    getCapturedAmount: function() {
        return this._capturedAmount;
    },

    /**
     * Set CapturedAmount
     * Amount that was successfully captured on the transaction
     * @param float val
     * @return this
     */
    setCapturedAmount: function(val) {
        this._capturedAmount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the transaction
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the transaction
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Status
     * Status of the transaction
     * @return float
     */
    getStatus: function() {
        return this._status;
    },

    /**
     * Set Status
     * Status of the transaction
     * @param float val
     * @return this
     */
    setStatus: function(val) {
        this._status = val;
        return this;
    },

    /**
     * Get Authorized
     * Whether the transaction was authorized or not
     * @return bool
     */
    getAuthorized: function() {
        return this._authorized;
    },

    /**
     * Set Authorized
     * Whether the transaction was authorized or not
     * @param bool val
     * @return this
     */
    setAuthorized: function(val) {
        this._authorized = val;
        return this;
    },

    /**
     * Get Captured
     * Whether the transaction was captured or not
     * @return bool
     */
    getCaptured: function() {
        return this._captured;
    },

    /**
     * Set Captured
     * Whether the transaction was captured or not
     * @param bool val
     * @return this
     */
    setCaptured: function(val) {
        this._captured = val;
        return this;
    },

    /**
     * Get ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @return float
     */
    getProcessoutFee: function() {
        return this._processoutFee;
    },

    /**
     * Set ProcessoutFee
     * ProcessOut fee applied on the transaction
     * @param float val
     * @return this
     */
    setProcessoutFee: function(val) {
        this._processoutFee = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @return object
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the transaction, in the form of a dictionary (key-value pair)
     * @param object val
     * @return this
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the transaction is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the transaction was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the transaction was created
     * @param float val
     * @return this
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Transaction
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["subscription"])
            this.setSubscription(data["subscription"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
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

     * @param object options
     * @return array
     */
    refunds: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
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
                    var tmp = new Refund(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the transactions.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
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
                    var tmp = new Transaction(cur._instance);
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
     * @param object options
     * @return this
     */
    find: function(transactionId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
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
    
}, {
    /**
     * Get all the transactions.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Transaction();
        return obj.all(options);
    },

    /**
     * Find a transaction by its ID.
	 * @param string transactionId
     * @param object options
     * @return this
     */
    find: function(transactionId, options) {
        var obj = new Transaction();
        return obj.find(transactionId, options);
    },

    
});
