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
var Addon = /** @class */ (function () {
    /**
     * Addon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Addon(client, prefill) {
        this.client = null;
        /**
         * ID of the addon
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the addon belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the addon belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Subscription to which the addon belongs
         * @type {p.Subscription}
         */
        this.subscription = null;
        /**
         * ID of the subscription to which the addon belongs
         * @type {string}
         */
        this.subscriptionId = null;
        /**
         * Plan used to create the addon, if any
         * @type {p.Plan}
         */
        this.plan = null;
        /**
         * ID of the plan used to create the addon, if any
         * @type {string}
         */
        this.planId = null;
        /**
         * Type of the addon. Can be either metered or recurring
         * @type {string}
         */
        this.type = null;
        /**
         * Name of the addon
         * @type {string}
         */
        this.name = null;
        /**
         * Amount of the addon
         * @type {string}
         */
        this.amount = null;
        /**
         * Quantity of the addon
         * @type {number}
         */
        this.quantity = null;
        /**
         * Metadata related to the addon, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Define whether or not the addon is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the addon was created
         * @type {string}
         */
        this.createdAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Addon object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAddon()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Addon.prototype.getProcessOutObjectClass = function () {
        return "Addon";
    };
    /**
     * Get Id
     * ID of the addon
     * @return {string}
     */
    Addon.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the addon
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the addon belongs
     * @return {p.Project}
     */
    Addon.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the addon belongs
     * @param {p.Project} val
     * @return {Addon}
     */
    Addon.prototype.setProject = function (val) {
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
     * ID of the project to which the addon belongs
     * @return {string}
     */
    Addon.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Subscription
     * Subscription to which the addon belongs
     * @return {p.Subscription}
     */
    Addon.prototype.getSubscription = function () {
        return this.subscription;
    };
    /**
     * Set Subscription
     * Subscription to which the addon belongs
     * @param {p.Subscription} val
     * @return {Addon}
     */
    Addon.prototype.setSubscription = function (val) {
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
    Addon.prototype.getSubscriptionId = function () {
        return this.subscriptionId;
    };
    /**
     * Set SubscriptionId
     * ID of the subscription to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setSubscriptionId = function (val) {
        this.subscriptionId = val;
        return this;
    };
    /**
     * Get Plan
     * Plan used to create the addon, if any
     * @return {p.Plan}
     */
    Addon.prototype.getPlan = function () {
        return this.plan;
    };
    /**
     * Set Plan
     * Plan used to create the addon, if any
     * @param {p.Plan} val
     * @return {Addon}
     */
    Addon.prototype.setPlan = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPlan().getProcessOutObjectClass())
            this.plan = val;
        else {
            var obj = this.client.newPlan();
            obj.fillWithData(val);
            this.plan = obj;
        }
        return this;
    };
    /**
     * Get PlanId
     * ID of the plan used to create the addon, if any
     * @return {string}
     */
    Addon.prototype.getPlanId = function () {
        return this.planId;
    };
    /**
     * Set PlanId
     * ID of the plan used to create the addon, if any
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setPlanId = function (val) {
        this.planId = val;
        return this;
    };
    /**
     * Get Type
     * Type of the addon. Can be either metered or recurring
     * @return {string}
     */
    Addon.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the addon. Can be either metered or recurring
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get Name
     * Name of the addon
     * @return {string}
     */
    Addon.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the addon
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Amount
     * Amount of the addon
     * @return {string}
     */
    Addon.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount of the addon
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Quantity
     * Quantity of the addon
     * @return {number}
     */
    Addon.prototype.getQuantity = function () {
        return this.quantity;
    };
    /**
     * Set Quantity
     * Quantity of the addon
     * @param {number} val
     * @return {Addon}
     */
    Addon.prototype.setQuantity = function (val) {
        this.quantity = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Addon.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Addon}
     */
    Addon.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the addon is in sandbox environment
     * @return {boolean}
     */
    Addon.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the addon is in sandbox environment
     * @param {boolean} val
     * @return {Addon}
     */
    Addon.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the addon was created
     * @return {string}
     */
    Addon.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the addon was created
     * @param {string} val
     * @return {Addon}
     */
    Addon.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Addon}
     */
    Addon.prototype.fillWithData = function (data) {
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
        if (data["plan"])
            this.setPlan(data["plan"]);
        if (data["plan_id"])
            this.setPlanId(data["plan_id"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["quantity"])
            this.setQuantity(data["quantity"]);
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
    Addon.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "subscription": this.getSubscription(),
            "subscription_id": this.getSubscriptionId(),
            "plan": this.getPlan(),
            "plan_id": this.getPlanId(),
            "type": this.getType(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "quantity": this.getQuantity(),
            "metadata": this.getMetadata(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
        };
    };
    /**
     * Get the addons applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {Promise<any>}
     */
    Addon.prototype.fetchSubscriptionAddons = function (subscriptionId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(subscriptionId) + "/addons";
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
                                body = respBody['addons'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newAddon();
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
     * Create a new addon to the given subscription ID.

     * @param {any} options
     * @return {Promise<any>}
     */
    Addon.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons";
        var data = {
            'plan_id': this.getPlanId(),
            'type': this.getType(),
            'name': this.getName(),
            'amount': this.getAmount(),
            'quantity': this.getQuantity(),
            'metadata': this.getMetadata(),
            'prorate': (options['prorate']) ? options['prorate'] : null,
            'proration_date': (options['proration_date']) ? options['proration_date'] : null,
            'preview': (options['preview']) ? options['preview'] : null
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
                                body = body['addon'];
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
     * Find a subscription's addon by its ID.
     * @param string subscriptionId
     * @param string addonId
     * @param {any} options
     * @return {Promise<any>}
     */
    Addon.prototype.find = function (subscriptionId, addonId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(subscriptionId) + "/addons/" + encodeURI(addonId) + "";
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
                                body = body['addon'];
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
     * Save the updated addon attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    Addon.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons/" + encodeURI(this.getId()) + "";
        var data = {
            'plan_id': this.getPlanId(),
            'type': this.getType(),
            'name': this.getName(),
            'amount': this.getAmount(),
            'quantity': this.getQuantity(),
            'metadata': this.getMetadata(),
            'prorate': (options['prorate']) ? options['prorate'] : null,
            'proration_date': (options['proration_date']) ? options['proration_date'] : null,
            'preview': (options['preview']) ? options['preview'] : null,
            'increment_quantity_by': (options['increment_quantity_by']) ? options['increment_quantity_by'] : null
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
                                body = body['addon'];
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
     * Delete an addon applied to a subscription.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    Addon.prototype.delete = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons/" + encodeURI(this.getId()) + "";
        var data = {
            'prorate': (options['prorate']) ? options['prorate'] : null,
            'proration_date': (options['proration_date']) ? options['proration_date'] : null,
            'preview': (options['preview']) ? options['preview'] : null
        };
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
    return Addon;
}());
module.exports = Addon;
//# sourceMappingURL=addon.js.map