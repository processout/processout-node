'use strict';

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
     * Status of the transaction
     * @type string
     */
    _status: "",

    /**
     * ProcessOut fee applied on the transaction
     * @type string
     */
    _fee: "",

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
     * Get Fee
     * ProcessOut fee applied on the transaction
     * @return float
     */
    getFee: function() {
        return this._fee;
    },

    /**
     * Set Fee
     * ProcessOut fee applied on the transaction
     * @param float val
     * @return this
     */
    setFee: function(val) {
        this._fee = val;
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
        if (data["status"])
            this.setStatus(data["status"]);
        if (data["fee"])
            this.setFee(data["fee"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
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

                var a    = [];
                var body = response.body['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = new Transaction(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                return resolve(a);
            });
        });
    },
    /**
     * Find a transaction by its ID.
	 * @param string transactionId
     * @param object options
     * @return Transaction
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

                var body = response.body;
                body = body['transaction'];
                var obj = new Transaction(cur._instance);
                return resolve(obj.fillWithData(body));
                
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
     * @return Transaction
     */
    find: function(transactionId, options) {
        var obj = new Transaction();
        return obj.find(transactionId, options);
    },

    
});
