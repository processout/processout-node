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
        while (_) try {
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
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Discount.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "subscription": this.getSubscription(),
            "subscription_id": this.getSubscriptionId(),
            "coupon": this.getCoupon(),
            "coupon_id": this.getCouponId(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "percent": this.getPercent(),
            "expires_at": this.getExpiresAt(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get the discounts applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {Promise<any>}
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
                                body = respBody['discounts'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newDiscount();
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
     * Create a new discount for the given subscription ID.

     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body;
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
                                body = body['discount'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.post(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Find a subscription's discount by its ID.
     * @param string subscriptionId
     * @param string discountId
     * @param {any} options
     * @return {Promise<any>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues, body;
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
                                body = respBody;
                                body = body['discount'];
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
    /**
     * Delete a discount applied to a subscription.

     * @param {any} options
     * @return {Promise<boolean>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues;
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
                                returnValues.push(response.isSuccess());
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.delete(path, data, options).then(callback, callbackError);
        });
    };
    return Discount;
}());
module.exports = Discount;
//# sourceMappingURL=discount.js.map