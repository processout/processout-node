'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Discount = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the discount
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the discount belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the discount belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Subscription to which the discount belongs
     * @type {object}
     */
    _subscription: null,

    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    _subscriptionId: null,

    /**
     * Coupon used to create the discount, if any
     * @type {object}
     */
    _coupon: null,

    /**
     * ID of the coupon used to create the discount, if any
     * @type {string}
     */
    _couponId: null,

    /**
     * Name of the discount
     * @type {string}
     */
    _name: null,

    /**
     * Amount discounted
     * @type {decimal}
     */
    _amount: null,

    /**
     * Percentage discounted
     * @type {integer}
     */
    _percent: null,

    /**
     * Date at which the discount will expire
     * @type {string}
     */
    _expiresAt: null,

    /**
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the discount is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the discount was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Discount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Discount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDiscount()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the discount
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the discount
     * @param {string} val
     * @return {Discount}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the discount belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the discount belongs
     * @param {object} val
     * @return {Discount}
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
     * ID of the project to which the discount belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the discount belongs
     * @param {string} val
     * @return {Discount}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Subscription
     * Subscription to which the discount belongs
     * @return {object}
     */
    getSubscription: function() {
        return this._subscription;
    },

    /**
     * Set Subscription
     * Subscription to which the discount belongs
     * @param {object} val
     * @return {Discount}
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
     * ID of the subscription to which the addon belongs
     * @return {string}
     */
    getSubscriptionId: function() {
        return this._subscriptionId;
    },

    /**
     * Set SubscriptionId
     * ID of the subscription to which the addon belongs
     * @param {string} val
     * @return {Discount}
     */
    setSubscriptionId: function(val) {
        this._subscriptionId = val;
        return this;
    },

    /**
     * Get Coupon
     * Coupon used to create the discount, if any
     * @return {object}
     */
    getCoupon: function() {
        return this._coupon;
    },

    /**
     * Set Coupon
     * Coupon used to create the discount, if any
     * @param {object} val
     * @return {Discount}
     */
    setCoupon: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCoupon().getClass())
            this._coupon = val;
        else {
            var obj = this._client.newCoupon();
            obj.fillWithData(val);
            this._coupon = obj;
        }
        return this;
    },

    /**
     * Get CouponId
     * ID of the coupon used to create the discount, if any
     * @return {string}
     */
    getCouponId: function() {
        return this._couponId;
    },

    /**
     * Set CouponId
     * ID of the coupon used to create the discount, if any
     * @param {string} val
     * @return {Discount}
     */
    setCouponId: function(val) {
        this._couponId = val;
        return this;
    },

    /**
     * Get Name
     * Name of the discount
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the discount
     * @param {string} val
     * @return {Discount}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Amount discounted
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount discounted
     * @param {string} val
     * @return {Discount}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Percent
     * Percentage discounted
     * @return {int}
     */
    getPercent: function() {
        return this._percent;
    },

    /**
     * Set Percent
     * Percentage discounted
     * @param {int} val
     * @return {Discount}
     */
    setPercent: function(val) {
        this._percent = val;
        return this;
    },

    /**
     * Get ExpiresAt
     * Date at which the discount will expire
     * @return {string}
     */
    getExpiresAt: function() {
        return this._expiresAt;
    },

    /**
     * Set ExpiresAt
     * Date at which the discount will expire
     * @param {string} val
     * @return {Discount}
     */
    setExpiresAt: function(val) {
        this._expiresAt = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Discount}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the discount is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the discount is in sandbox environment
     * @param {bool} val
     * @return {Discount}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the discount was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the discount was created
     * @param {string} val
     * @return {Discount}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Discount}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["subscription"])
            this.setSubscription(data["subscription"]);
        if (data["subscription_id"])
            this.setSubscriptionId(data["subscription_id"]);
        if (data["coupon"])
            this.setCoupon(data["coupon"]);
        if (data["coupon_id"])
            this.setCouponId(data["coupon_id"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["percent"])
            this.setPercent(data["percent"]);
        if (data["expires_at"])
            this.setExpiresAt(data["expires_at"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    /**
     * Apply a new discount to the given subscription ID.
	 * @param string subscriptionId
     * @param {object} options
     * @return {this}
     */
    apply: function(subscriptionId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts";

        var data = {
			'coupon_id': this.getCouponId(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
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
                body = body['discount'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a subscription's discount by its ID.
	 * @param string subscriptionId
	 * @param string discountId
     * @param {object} options
     * @return {this}
     */
    find: function(subscriptionId, discountId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts/" + encodeURI(discountId) + "";

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
                body = body['discount'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Remove a discount applied to a subscription.
	 * @param string subscriptionId
	 * @param string discountId
     * @param {object} options
     * @return {bool}
     */
    remove: function(subscriptionId, discountId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts/" + encodeURI(discountId) + "";

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
