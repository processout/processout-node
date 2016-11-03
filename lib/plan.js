'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Plan = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the plan
     * @type string
     */
    _id: "",

    /**
     * Project to which the plan belongs
     * @type object
     */
    _project: null,

    /**
     * Name of the plan
     * @type string
     */
    _name: "",

    /**
     * Amount of the plan
     * @type string
     */
    _amount: "",

    /**
     * Currency of the plan
     * @type string
     */
    _currency: "",

    /**
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @type dictionary
     */
    _metadata: {},

    /**
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type string
     */
    _interval: "",

    /**
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type string
     */
    _trialPeriod: "0d",

    /**
     * URL where the customer will be redirected when he activates the subscription created using this plan
     * @type string
     */
    _returnUrl: "",

    /**
     * URL where the customer will be redirected when he cancelling the subscription created using this plan
     * @type string
     */
    _cancelUrl: "",

    /**
     * Define whether or not the plan is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the plan was created
     * @type string
     */
    _createdAt: "",

    /**
     * Plan constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the plan
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the plan
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the plan belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the plan belongs
     * @param object val
     * @return this
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._instance);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Name
     * Name of the plan
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the plan
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Amount of the plan
     * @return float
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount of the plan
     * @param float val
     * @return this
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the plan
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the plan
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @return object
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @param object val
     * @return this
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return float
     */
    getInterval: function() {
        return this._interval;
    },

    /**
     * Set Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param float val
     * @return this
     */
    setInterval: function(val) {
        this._interval = val;
        return this;
    },

    /**
     * Get TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return float
     */
    getTrialPeriod: function() {
        return this._trialPeriod;
    },

    /**
     * Set TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param float val
     * @return this
     */
    setTrialPeriod: function(val) {
        this._trialPeriod = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected when he activates the subscription created using this plan
     * @return float
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected when he activates the subscription created using this plan
     * @param float val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected when he cancelling the subscription created using this plan
     * @return float
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected when he cancelling the subscription created using this plan
     * @param float val
     * @return this
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the plan is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the plan is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the plan was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the plan was created
     * @param float val
     * @return this
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Plan
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
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
    },

    /**
     * Get all the plans.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/plans";

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
                var body = response.body['plans'];
                for (var i = body.length; i--;) {
                    var tmp = new Plan(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new plan.
     * 
     * @param object options
     * @return this
     */
    create: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/plans";

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
                body = body['plan'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a plan by its ID.
	 * @param string planId
     * @param object options
     * @return this
     */
    find: function(planId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/plans/" + encodeURI(planId) + "";

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
                body = body['plan'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Update the plan. This action won't affect subscriptions already linked to this plan.

     * @param object options
     * @return this
     */
    update: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/plans/" + encodeURI(this.getId()) + "";

        var data = {
			'name': this.getName(), 
			'trial_period': this.getTrialPeriod(), 
			'metadata': this.getMetadata(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl()
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
                body = body['plan'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete a plan. Subscriptions linked to this plan won't be affected.

     * @param object options
     * @return bool
     */
    end: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/plans/" + encodeURI(this.getId()) + "";

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
    
}, {
    /**
     * Get all the plans.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Plan();
        return obj.all(options);
    },

    /**
     * Find a plan by its ID.
	 * @param string planId
     * @param object options
     * @return this
     */
    find: function(planId, options) {
        var obj = new Plan();
        return obj.find(planId, options);
    },

    
});
