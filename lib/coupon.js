'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Coupon = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the coupon
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the coupon belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the coupon belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Amount to be removed from the subscription price
     * @type {decimal}
     */
    _amountOff: null,

    /**
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @type {integer}
     */
    _percentOff: null,

    /**
     * Currency of the coupon amount_off
     * @type {string}
     */
    _currency: null,

    /**
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @type {integer}
     */
    _iterationCount: null,

    /**
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @type {integer}
     */
    _maxRedemptions: null,

    /**
     * Date at which the coupon will expire
     * @type {string}
     */
    _expiresAt: null,

    /**
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Number of times the coupon was already redeemed
     * @type {integer}
     */
    _redeemedNumber: null,

    /**
     * True if the coupon was created in the sandbox environment, false otherwise
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the coupon was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Coupon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Coupon object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCoupon()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the coupon
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the coupon
     * @param {string} val
     * @return {Coupon}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the coupon belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the coupon belongs
     * @param {object} val
     * @return {Coupon}
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
     * ID of the project to which the coupon belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the coupon belongs
     * @param {string} val
     * @return {Coupon}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get AmountOff
     * Amount to be removed from the subscription price
     * @return {string}
     */
    getAmountOff: function() {
        return this._amountOff;
    },

    /**
     * Set AmountOff
     * Amount to be removed from the subscription price
     * @param {string} val
     * @return {Coupon}
     */
    setAmountOff: function(val) {
        this._amountOff = val;
        return this;
    },

    /**
     * Get PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @return {int}
     */
    getPercentOff: function() {
        return this._percentOff;
    },

    /**
     * Set PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @param {int} val
     * @return {Coupon}
     */
    setPercentOff: function(val) {
        this._percentOff = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the coupon amount_off
     * @return {string}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the coupon amount_off
     * @param {string} val
     * @return {Coupon}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @return {int}
     */
    getIterationCount: function() {
        return this._iterationCount;
    },

    /**
     * Set IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @param {int} val
     * @return {Coupon}
     */
    setIterationCount: function(val) {
        this._iterationCount = val;
        return this;
    },

    /**
     * Get MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @return {int}
     */
    getMaxRedemptions: function() {
        return this._maxRedemptions;
    },

    /**
     * Set MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @param {int} val
     * @return {Coupon}
     */
    setMaxRedemptions: function(val) {
        this._maxRedemptions = val;
        return this;
    },

    /**
     * Get ExpiresAt
     * Date at which the coupon will expire
     * @return {string}
     */
    getExpiresAt: function() {
        return this._expiresAt;
    },

    /**
     * Set ExpiresAt
     * Date at which the coupon will expire
     * @param {string} val
     * @return {Coupon}
     */
    setExpiresAt: function(val) {
        this._expiresAt = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Coupon}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get RedeemedNumber
     * Number of times the coupon was already redeemed
     * @return {int}
     */
    getRedeemedNumber: function() {
        return this._redeemedNumber;
    },

    /**
     * Set RedeemedNumber
     * Number of times the coupon was already redeemed
     * @param {int} val
     * @return {Coupon}
     */
    setRedeemedNumber: function(val) {
        this._redeemedNumber = val;
        return this;
    },

    /**
     * Get Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @param {bool} val
     * @return {Coupon}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the coupon was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the coupon was created
     * @param {string} val
     * @return {Coupon}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Coupon}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["amount_off"])
            this.setAmountOff(data["amount_off"]);
        if (data["percent_off"])
            this.setPercentOff(data["percent_off"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["iteration_count"])
            this.setIterationCount(data["iteration_count"]);
        if (data["max_redemptions"])
            this.setMaxRedemptions(data["max_redemptions"]);
        if (data["expires_at"])
            this.setExpiresAt(data["expires_at"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["redeemed_number"])
            this.setRedeemedNumber(data["redeemed_number"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Get all the coupons.
     * 
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/coupons";

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
                var body = response.body['coupons'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newCoupon();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new coupon.
     * 
     * @param {object} options
     * @return {this}
     */
    create: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/coupons";

        var data = {
			'id': this.getId(), 
			'amount_off': this.getAmountOff(), 
			'percent_off': this.getPercentOff(), 
			'currency': this.getCurrency(), 
			'iteration_count': this.getIterationCount(), 
			'max_redemptions': this.getMaxRedemptions(), 
			'expires_at': this.getExpiresAt(), 
			'metadata': this.getMetadata()
        };

        var req = request.post(path, data, options);
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
                body = body['coupon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a coupon by its ID.
	 * @param string couponId
     * @param {object} options
     * @return {this}
     */
    find: function(couponId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/coupons/" + encodeURI(couponId) + "";

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
                body = body['coupon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Save the updated coupon attributes.

     * @param {object} options
     * @return {this}
     */
    save: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/coupons/" + encodeURI(this.getId()) + "";

        var data = {
			'metadata': this.getMetadata()
        };

        var req = request.put(path, data, options);
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
                body = body['coupon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete the coupon.

     * @param {object} options
     * @return {bool}
     */
    delete: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/coupons/" + encodeURI(this.getId()) + "";

        var data = {

        };

        var req = request.delete(path, data, options);
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

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {});
