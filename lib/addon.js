"use strict";
// The content of this file was automatically generated
var Promise = require("promise");
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
     * Get the addons applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {array}
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
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var a = [];
                var body = response.body['addons'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newAddon();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }
                returnValues.push(a);
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    /**
     * Create a new addon to the given subscription ID.

     * @param {any} options
     * @return {this}
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
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['addon'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            var req = request.post(path, data, options, callback);
        });
    };
    /**
     * Find a subscription's addon by its ID.
     * @param string subscriptionId
     * @param string addonId
     * @param {any} options
     * @return {this}
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
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['addon'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            var req = request.get(path, data, options, callback);
        });
    };
    /**
     * Save the updated addon attributes.

     * @param {any} options
     * @return {this}
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
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                var body = response.body;
                body = body['addon'];
                returnValues.push(cur.fillWithData(body));
                return resolve.apply(this, returnValues);
            };
            var req = request.put(path, data, options, callback);
        });
    };
    /**
     * Delete an addon applied to a subscription.

     * @param {any} options
     * @return {bool}
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
            var callback = function (err, resp, body) {
                if (err != null) {
                    return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err));
                }
                var response = new Response(body, resp);
                var err = response.check();
                if (err != null)
                    return reject(err);
                var returnValues = [];
                returnValues.push(response.isSuccess());
                return resolve.apply(this, returnValues);
            };
            var req = request.delete(path, data, options, callback);
        });
    };
    return Addon;
}());
module.exports = Addon;
//# sourceMappingURL=addon.js.map