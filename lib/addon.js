'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Addon = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the addon
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the addon belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the addon belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Subscription to which the addon belongs
     * @type {object}
     */
    _subscription: null,

    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    _subscriptionId: null,

    /**
     * Plan used to create the addon, if any
     * @type {object}
     */
    _plan: null,

    /**
     * ID of the plan used to create the addon, if any
     * @type {string}
     */
    _planId: null,

    /**
     * Type of the addon. Can be either metered or recurring
     * @type {string}
     */
    _type: null,

    /**
     * Name of the addon
     * @type {string}
     */
    _name: null,

    /**
     * Amount of the addon
     * @type {decimal}
     */
    _amount: null,

    /**
     * Quantity of the addon
     * @type {integer}
     */
    _quantity: null,

    /**
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the addon is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the addon was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Addon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Addon object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newAddon()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the addon
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the addon
     * @param {string} val
     * @return {Addon}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the addon belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the addon belongs
     * @param {object} val
     * @return {Addon}
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
     * ID of the project to which the addon belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Subscription
     * Subscription to which the addon belongs
     * @return {object}
     */
    getSubscription: function() {
        return this._subscription;
    },

    /**
     * Set Subscription
     * Subscription to which the addon belongs
     * @param {object} val
     * @return {Addon}
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
     * @return {Addon}
     */
    setSubscriptionId: function(val) {
        this._subscriptionId = val;
        return this;
    },

    /**
     * Get Plan
     * Plan used to create the addon, if any
     * @return {object}
     */
    getPlan: function() {
        return this._plan;
    },

    /**
     * Set Plan
     * Plan used to create the addon, if any
     * @param {object} val
     * @return {Addon}
     */
    setPlan: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newPlan().getClass())
            this._plan = val;
        else {
            var obj = this._client.newPlan();
            obj.fillWithData(val);
            this._plan = obj;
        }
        return this;
    },

    /**
     * Get PlanId
     * ID of the plan used to create the addon, if any
     * @return {string}
     */
    getPlanId: function() {
        return this._planId;
    },

    /**
     * Set PlanId
     * ID of the plan used to create the addon, if any
     * @param {string} val
     * @return {Addon}
     */
    setPlanId: function(val) {
        this._planId = val;
        return this;
    },

    /**
     * Get Type
     * Type of the addon. Can be either metered or recurring
     * @return {string}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the addon. Can be either metered or recurring
     * @param {string} val
     * @return {Addon}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get Name
     * Name of the addon
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the addon
     * @param {string} val
     * @return {Addon}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Amount of the addon
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount of the addon
     * @param {string} val
     * @return {Addon}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Quantity
     * Quantity of the addon
     * @return {int}
     */
    getQuantity: function() {
        return this._quantity;
    },

    /**
     * Set Quantity
     * Quantity of the addon
     * @param {int} val
     * @return {Addon}
     */
    setQuantity: function(val) {
        this._quantity = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Addon}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the addon is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the addon is in sandbox environment
     * @param {bool} val
     * @return {Addon}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the addon was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the addon was created
     * @param {string} val
     * @return {Addon}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Addon}
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
    },

    /**
     * Get the addons applied to the subscription.
	 * @param string subscriptionId
     * @param {object} options
     * @return {array}
     */
    fetchSubscriptionAddons: function(subscriptionId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/addons";

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
                var body = response.body['addons'];
                for (var i = body.length; i--;) {
                    var tmp = cur._client.newAddon();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new addon to the given subscription ID.

     * @param {object} options
     * @return {this}
     */
    create: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons";

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
                body = body['addon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a subscription's addon by its ID.
	 * @param string subscriptionId
	 * @param string addonId
     * @param {object} options
     * @return {this}
     */
    find: function(subscriptionId, addonId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "/addons/" + encodeURI(addonId) + "";

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
                body = body['addon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Save the updated addon attributes.

     * @param {object} options
     * @return {this}
     */
    save: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons/" + encodeURI(this.getId()) + "";

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
                body = body['addon'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete an addon applied to a subscription.

     * @param {object} options
     * @return {bool}
     */
    delete: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getSubscriptionId()) + "/addons/" + encodeURI(this.getId()) + "";

        var data = {
			'prorate': (options['prorate']) ? options['prorate'] : null, 
			'proration_date': (options['proration_date']) ? options['proration_date'] : null, 
			'preview': (options['preview']) ? options['preview'] : null
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
