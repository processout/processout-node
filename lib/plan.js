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
var Plan = /** @class */ (function () {
    /**
     * Plan constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Plan(client, prefill) {
        this.client = null;
        /**
         * ID of the plan
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the plan belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the plan belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * URL to which you may redirect your customer to activate the subscription plan
         * @type {string}
         */
        this.url = null;
        /**
         * Name of the plan
         * @type {string}
         */
        this.name = null;
        /**
         * Amount of the plan
         * @type {string}
         */
        this.amount = null;
        /**
         * Currency of the plan
         * @type {string}
         */
        this.currency = null;
        /**
         * Metadata related to the plan, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
         * @type {string}
         */
        this.interval = null;
        /**
         * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
         * @type {string}
         */
        this.trialPeriod = null;
        /**
         * URL where the customer will be redirected when activating the subscription created using this plan
         * @type {string}
         */
        this.returnUrl = null;
        /**
         * URL where the customer will be redirected when cancelling the subscription created using this plan
         * @type {string}
         */
        this.cancelUrl = null;
        /**
         * Define whether or not the plan is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the plan was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Plan object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPlan()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Plan.prototype.getProcessOutObjectClass = function () {
        return "Plan";
    };
    /**
     * Get Id
     * ID of the plan
     * @return {string}
     */
    Plan.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the plan belongs
     * @return {p.Project}
     */
    Plan.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the plan belongs
     * @param {p.Project} val
     * @return {Plan}
     */
    Plan.prototype.setProject = function (val) {
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
     * ID of the project to which the plan belongs
     * @return {string}
     */
    Plan.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the plan belongs
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription plan
     * @return {string}
     */
    Plan.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get Name
     * Name of the plan
     * @return {string}
     */
    Plan.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Amount
     * Amount of the plan
     * @return {string}
     */
    Plan.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the plan
     * @return {string}
     */
    Plan.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Plan.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Plan}
     */
    Plan.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    Plan.prototype.getInterval = function () {
        return this.interval;
    };
    /**
     * Set Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setInterval = function (val) {
        this.interval = val;
        return this;
    };
    /**
     * Get TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    Plan.prototype.getTrialPeriod = function () {
        return this.trialPeriod;
    };
    /**
     * Set TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setTrialPeriod = function (val) {
        this.trialPeriod = val;
        return this;
    };
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @return {string}
     */
    Plan.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setReturnUrl = function (val) {
        this.returnUrl = val;
        return this;
    };
    /**
     * Get CancelUrl
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @return {string}
     */
    Plan.prototype.getCancelUrl = function () {
        return this.cancelUrl;
    };
    /**
     * Set CancelUrl
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setCancelUrl = function (val) {
        this.cancelUrl = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the plan is in sandbox environment
     * @return {boolean}
     */
    Plan.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the plan is in sandbox environment
     * @param {boolean} val
     * @return {Plan}
     */
    Plan.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the plan was created
     * @return {string}
     */
    Plan.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the plan was created
     * @param {string} val
     * @return {Plan}
     */
    Plan.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Plan}
     */
    Plan.prototype.fillWithData = function (data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["currency"])
            this.setCurrency(data["currency"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["interval"])
            this.setInterval(data["interval"]);
        if (data["trial_period"])
            this.setTrialPeriod(data["trial_period"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
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
    Plan.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "url": this.getUrl(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "currency": this.getCurrency(),
            "metadata": this.getMetadata(),
            "interval": this.getInterval(),
            "trial_period": this.getTrialPeriod(),
            "return_url": this.getReturnUrl(),
            "cancel_url": this.getCancelUrl(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get all the plans.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Plan.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/plans";
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
                                body = respBody['plans'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newPlan();
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
     * Create a new plan.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Plan.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/plans";
        var data = {
            'id': this.getId(),
            'name': this.getName(),
            'amount': this.getAmount(),
            'currency': this.getCurrency(),
            'interval': this.getInterval(),
            'trial_period': this.getTrialPeriod(),
            'metadata': this.getMetadata(),
            'return_url': this.getReturnUrl(),
            'cancel_url': this.getCancelUrl()
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
                                body = body['plan'];
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
     * Find a plan by its ID.
     * @param string planId
     * @param {any} options
     * @return {Promise<any>}
     */
    Plan.prototype.find = function (planId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/plans/" + encodeURI(planId) + "";
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
                                body = body['plan'];
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
     * Save the updated plan attributes. This action won't affect subscriptions already linked to this plan.

     * @param {any} options
     * @return {Promise<any>}
     */
    Plan.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/plans/" + encodeURI(this.getId()) + "";
        var data = {
            'name': this.getName(),
            'trial_period': this.getTrialPeriod(),
            'metadata': this.getMetadata(),
            'return_url': this.getReturnUrl(),
            'cancel_url': this.getCancelUrl()
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
                                body = body['plan'];
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
     * Delete a plan. Subscriptions linked to this plan won't be affected.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    Plan.prototype.end = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/plans/" + encodeURI(this.getId()) + "";
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
    return Plan;
}());
module.exports = Plan;
//# sourceMappingURL=plan.js.map