"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Discount = /** @class */ (function () {
    /**
     * Discount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Discount(client, prefill) {
        this.client = null;
        /**
         * ID of the discount
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the discount belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the discount belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Subscription to which the discount belongs
         * @type {p.Subscription}
         */
        this.subscription = null;
        /**
         * ID of the subscription to which the addon belongs
         * @type {string}
         */
        this.subscriptionId = null;
        /**
         * Coupon used to create the discount, if any
         * @type {p.Coupon}
         */
        this.coupon = null;
        /**
         * ID of the coupon used to create the discount, if any
         * @type {string}
         */
        this.couponId = null;
        /**
         * Name of the discount
         * @type {string}
         */
        this.name = null;
        /**
         * Amount discounted
         * @type {string}
         */
        this.amount = null;
        /**
         * Percentage discounted
         * @type {number}
         */
        this.percent = null;
        /**
         * Date at which the discount will expire
         * @type {string}
         */
        this.expiresAt = null;
        /**
         * Metadata related to the discount, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Define whether or not the discount is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the discount was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Discount object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newDiscount()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Discount.prototype.getProcessOutObjectClass = function () {
        return "Discount";
    };
    /**
     * Get Id
     * ID of the discount
     * @return {string}
     */
    Discount.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the discount
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the discount belongs
     * @return {p.Project}
     */
    Discount.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the discount belongs
     * @param {p.Project} val
     * @return {Discount}
     */
    Discount.prototype.setProject = function (val) {
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
     * ID of the project to which the discount belongs
     * @return {string}
     */
    Discount.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the discount belongs
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Subscription
     * Subscription to which the discount belongs
     * @return {p.Subscription}
     */
    Discount.prototype.getSubscription = function () {
        return this.subscription;
    };
    /**
     * Set Subscription
     * Subscription to which the discount belongs
     * @param {p.Subscription} val
     * @return {Discount}
     */
    Discount.prototype.setSubscription = function (val) {
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
     * ID of the subscription to which the addon belongs
     * @return {string}
     */
    Discount.prototype.getSubscriptionId = function () {
        return this.subscriptionId;
    };
    /**
     * Set SubscriptionId
     * ID of the subscription to which the addon belongs
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setSubscriptionId = function (val) {
        this.subscriptionId = val;
        return this;
    };
    /**
     * Get Coupon
     * Coupon used to create the discount, if any
     * @return {p.Coupon}
     */
    Discount.prototype.getCoupon = function () {
        return this.coupon;
    };
    /**
     * Set Coupon
     * Coupon used to create the discount, if any
     * @param {p.Coupon} val
     * @return {Discount}
     */
    Discount.prototype.setCoupon = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCoupon().getProcessOutObjectClass())
            this.coupon = val;
        else {
            var obj = this.client.newCoupon();
            obj.fillWithData(val);
            this.coupon = obj;
        }
        return this;
    };
    /**
     * Get CouponId
     * ID of the coupon used to create the discount, if any
     * @return {string}
     */
    Discount.prototype.getCouponId = function () {
        return this.couponId;
    };
    /**
     * Set CouponId
     * ID of the coupon used to create the discount, if any
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setCouponId = function (val) {
        this.couponId = val;
        return this;
    };
    /**
     * Get Name
     * Name of the discount
     * @return {string}
     */
    Discount.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the discount
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Amount
     * Amount discounted
     * @return {string}
     */
    Discount.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount discounted
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Percent
     * Percentage discounted
     * @return {number}
     */
    Discount.prototype.getPercent = function () {
        return this.percent;
    };
    /**
     * Set Percent
     * Percentage discounted
     * @param {number} val
     * @return {Discount}
     */
    Discount.prototype.setPercent = function (val) {
        this.percent = val;
        return this;
    };
    /**
     * Get ExpiresAt
     * Date at which the discount will expire
     * @return {string}
     */
    Discount.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    /**
     * Set ExpiresAt
     * Date at which the discount will expire
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setExpiresAt = function (val) {
        this.expiresAt = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Discount.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Discount}
     */
    Discount.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the discount is in sandbox environment
     * @return {boolean}
     */
    Discount.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the discount is in sandbox environment
     * @param {boolean} val
     * @return {Discount}
     */
    Discount.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the discount was created
     * @return {string}
     */
    Discount.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the discount was created
     * @param {string} val
     * @return {Discount}
     */
    Discount.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Discount}
     */
    Discount.prototype.fillWithData = function (data) {
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
    };
    /**
     * Get the discounts applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {array}
     */
    Discount.prototype.fetchSubscriptionDiscounts = function (subscriptionId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['discounts'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newDiscount();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Create a new discount for the given subscription ID.

     * @param {any} options
     * @return {this}
     */
    Discount.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/discounts";
        var data = {
            'coupon_id': this.getCouponId(),
            'name': this.getName(),
            'amount': this.getAmount(),
            'expires_at': this.getExpiresAt(),
            'metadata': this.getMetadata()
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['discount'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    /**
     * Find a subscription's discount by its ID.
     * @param string subscriptionId
     * @param string discountId
     * @param {any} options
     * @return {this}
     */
    Discount.prototype.find = function (subscriptionId, discountId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(subscriptionId) + "/discounts/" + encodeURI(discountId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['discount'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Delete a discount applied to a subscription.

     * @param {any} options
     * @return {bool}
     */
    Discount.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/discounts/" + encodeURI(this.getId()) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            request.delete(path, data, options, callback);
        });
    };
    return Discount;
}());
module.exports = Discount;
//# sourceMappingURL=discount.js.map