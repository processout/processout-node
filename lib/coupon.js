"use strict";
// The content of this file was automatically generated
var Response = require("./networking/response");
var Request = require("./networking/request");
var ProcessOutNetworkError = require("./errors/processoutnetworkerror");
var Coupon = /** @class */ (function () {
    /**
     * Coupon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Coupon(client, prefill) {
        this.client = null;
        /**
         * ID of the coupon
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the coupon belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the coupon belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Amount to be removed from the subscription price
         * @type {string}
         */
        this.amountOff = null;
        /**
         * Percent of the subscription amount to be removed (integer between 0 and 100)
         * @type {number}
         */
        this.percentOff = null;
        /**
         * Currency of the coupon amount_off
         * @type {string}
         */
        this.currency = null;
        /**
         * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
         * @type {number}
         */
        this.iterationCount = null;
        /**
         * Number of time the coupon can be redeemed. If 0, there's no limit
         * @type {number}
         */
        this.maxRedemptions = null;
        /**
         * Date at which the coupon will expire
         * @type {string}
         */
        this.expiresAt = null;
        /**
         * Metadata related to the coupon, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Number of times the coupon was already redeemed
         * @type {number}
         */
        this.redeemedNumber = null;
        /**
         * True if the coupon was created in the sandbox environment, false otherwise
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the coupon was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Coupon object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCoupon()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Coupon.prototype.getProcessOutObjectClass = function () {
        return "Coupon";
    };
    /**
     * Get Id
     * ID of the coupon
     * @return {string}
     */
    Coupon.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the coupon
     * @param {string} val
     * @return {Coupon}
     */
    Coupon.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the coupon belongs
     * @return {p.Project}
     */
    Coupon.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the coupon belongs
     * @param {p.Project} val
     * @return {Coupon}
     */
    Coupon.prototype.setProject = function (val) {
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
     * ID of the project to which the coupon belongs
     * @return {string}
     */
    Coupon.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the coupon belongs
     * @param {string} val
     * @return {Coupon}
     */
    Coupon.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get AmountOff
     * Amount to be removed from the subscription price
     * @return {string}
     */
    Coupon.prototype.getAmountOff = function () {
        return this.amountOff;
    };
    /**
     * Set AmountOff
     * Amount to be removed from the subscription price
     * @param {string} val
     * @return {Coupon}
     */
    Coupon.prototype.setAmountOff = function (val) {
        this.amountOff = val;
        return this;
    };
    /**
     * Get PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @return {number}
     */
    Coupon.prototype.getPercentOff = function () {
        return this.percentOff;
    };
    /**
     * Set PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @param {number} val
     * @return {Coupon}
     */
    Coupon.prototype.setPercentOff = function (val) {
        this.percentOff = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the coupon amount_off
     * @return {string}
     */
    Coupon.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the coupon amount_off
     * @param {string} val
     * @return {Coupon}
     */
    Coupon.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @return {number}
     */
    Coupon.prototype.getIterationCount = function () {
        return this.iterationCount;
    };
    /**
     * Set IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @param {number} val
     * @return {Coupon}
     */
    Coupon.prototype.setIterationCount = function (val) {
        this.iterationCount = val;
        return this;
    };
    /**
     * Get MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @return {number}
     */
    Coupon.prototype.getMaxRedemptions = function () {
        return this.maxRedemptions;
    };
    /**
     * Set MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @param {number} val
     * @return {Coupon}
     */
    Coupon.prototype.setMaxRedemptions = function (val) {
        this.maxRedemptions = val;
        return this;
    };
    /**
     * Get ExpiresAt
     * Date at which the coupon will expire
     * @return {string}
     */
    Coupon.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    /**
     * Set ExpiresAt
     * Date at which the coupon will expire
     * @param {string} val
     * @return {Coupon}
     */
    Coupon.prototype.setExpiresAt = function (val) {
        this.expiresAt = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Coupon.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Coupon}
     */
    Coupon.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get RedeemedNumber
     * Number of times the coupon was already redeemed
     * @return {number}
     */
    Coupon.prototype.getRedeemedNumber = function () {
        return this.redeemedNumber;
    };
    /**
     * Set RedeemedNumber
     * Number of times the coupon was already redeemed
     * @param {number} val
     * @return {Coupon}
     */
    Coupon.prototype.setRedeemedNumber = function (val) {
        this.redeemedNumber = val;
        return this;
    };
    /**
     * Get Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @return {boolean}
     */
    Coupon.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @param {boolean} val
     * @return {Coupon}
     */
    Coupon.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the coupon was created
     * @return {string}
     */
    Coupon.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the coupon was created
     * @param {string} val
     * @return {Coupon}
     */
    Coupon.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Coupon}
     */
    Coupon.prototype.fillWithData = function (data) {
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
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Coupon.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "amount_off": this.getAmountOff(),
            "percent_off": this.getPercentOff(),
            "currency": this.getCurrency(),
            "iteration_count": this.getIterationCount(),
            "max_redemptions": this.getMaxRedemptions(),
            "expires_at": this.getExpiresAt(),
            "metadata": this.getMetadata(),
            "redeemed_number": this.getRedeemedNumber(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get all the coupons.
     *
     * @param {any} options
     * @return {array}
     */
    Coupon.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/coupons";
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
                var body = response.body['coupons'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newCoupon();
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
     * Create a new coupon.
     *
     * @param {any} options
     * @return {this}
     */
    Coupon.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/coupons";
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
                body = body['coupon'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.post(path, data, options, callback);
        });
    };
    /**
     * Find a coupon by its ID.
     * @param string couponId
     * @param {any} options
     * @return {this}
     */
    Coupon.prototype.find = function (couponId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/coupons/" + encodeURI(couponId) + "";
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
                body = body['coupon'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.get(path, data, options, callback);
        });
    };
    /**
     * Save the updated coupon attributes.

     * @param {any} options
     * @return {this}
     */
    Coupon.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/coupons/" + encodeURI(this.getId()) + "";
        var data = {
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
                body = body['coupon'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            request.put(path, data, options, callback);
        });
    };
    /**
     * Delete the coupon.

     * @param {any} options
     * @return {bool}
     */
    Coupon.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/coupons/" + encodeURI(this.getId()) + "";
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
    return Coupon;
}());
module.exports = Coupon;
//# sourceMappingURL=coupon.js.map