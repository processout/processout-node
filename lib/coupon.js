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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
     * @return {Promise<any>}
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
                                body = respBody['coupons'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newCoupon();
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
     * Create a new coupon.
     *
     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['coupon'];
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
     * Find a coupon by its ID.
     * @param string couponId
     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['coupon'];
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
     * Save the updated coupon attributes.

     * @param {any} options
     * @return {Promise<any>}
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
                                body = body['coupon'];
                                returnValues.push(cur.fillWithData(body));
                                return [2 /*return*/, resolve.apply(this, returnValues)];
                        }
                    });
                });
            };
            var callbackError = function (err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };
            request.put(path, data, options).then(callback, callbackError);
        });
    };
    /**
     * Delete the coupon.

     * @param {any} options
     * @return {Promise<boolean>}
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
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_5, response, err, returnValues;
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
                                err_5 = _a.sent();
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
    return Coupon;
}());
module.exports = Coupon;
//# sourceMappingURL=coupon.js.map