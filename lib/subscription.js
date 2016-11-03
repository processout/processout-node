'use strict';

// The content of this file was automatically generated

var Promise  = require('promise');
var Base     = require('basejs');
var ProcessOut = require('./processout');
var Response = require('./networking/response');
var RequestProcessoutPrivate = require('./networking/requestprocessoutprivate');


var Subscription = module.exports = Base.extend({
    _instance: null,

    /**
     * ID of the subscription
     * @type string
     */
    _id: "",

    /**
     * Project to which the subscription belongs
     * @type object
     */
    _project: null,

    /**
     * Plan used to create this subscription
     * @type object
     */
    _plan: null,

    /**
     * Customer linked to the subscription
     * @type object
     */
    _customer: null,

    /**
     * Token used to capture payments on this subscription
     * @type object
     */
    _token: null,

    /**
     * URL to which you may redirect your customer to activate the subscription
     * @type string
     */
    _url: "",

    /**
     * Name of the subscription
     * @type string
     */
    _name: "",

    /**
     * Amount to be paid at each billing cycle of the subscription
     * @type string
     */
    _amount: "",

    /**
     * Currency of the subscription
     * @type string
     */
    _currency: "",

    /**
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @type dictionary
     */
    _metadata: {},

    /**
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type string
     */
    _interval: "",

    /**
     * Date at which the subscription trial should end. Can be null to set no trial
     * @type string
     */
    _trialEndAt: "",

    /**
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Used the active field to know if the subscription is currently active
     * @type boolean
     */
    _activated: false,

    /**
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @type boolean
     */
    _active: false,

    /**
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @type boolean
     */
    _canceled: false,

    /**
     * Reason as to why the subscription was cancelled
     * @type string
     */
    _cancellationReason: "",

    /**
     * Wheither or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @type boolean
     */
    _pendingCancellation: false,

    /**
     * Date at which the subscription will automatically be canceled. Can be null
     * @type string
     */
    _cancelAt: "",

    /**
     * URL where the customer will be redirected upon activation of the subscription
     * @type string
     */
    _returnUrl: "",

    /**
     * URL where the customer will be redirected if the subscription activation was canceled
     * @type string
     */
    _cancelUrl: "",

    /**
     * Define whether or not the subscription is in sandbox environment
     * @type boolean
     */
    _sandbox: false,

    /**
     * Date at which the subscription was created
     * @type string
     */
    _createdAt: "",

    /**
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @type string
     */
    _activatedAt: "",

    /**
     * Next iteration date, corresponding to the next billing cycle start date
     * @type string
     */
    _iterateAt: "",

    /**
     * Subscription constructor
     * @param ProcessOut|null instance
     */
    constructor: function(instance) {
        if (typeof instance === 'undefined')
            instance = ProcessOut.getDefault();

        this._instance = instance;
    },

    /**
     * Get Id
     * ID of the subscription
     * @return float
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the subscription
     * @param float val
     * @return this
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the subscription belongs
     * @return object
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the subscription belongs
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
     * Get Plan
     * Plan used to create this subscription
     * @return object
     */
    getPlan: function() {
        return this._plan;
    },

    /**
     * Set Plan
     * Plan used to create this subscription
     * @param object val
     * @return this
     */
    setPlan: function(val) {
        if (typeof val === 'object')
            this._plan = val;
        else {
            var obj = new Plan(this._instance);
            obj.fillWithData(val);
            this._plan = obj;
        }
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the subscription
     * @return object
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the subscription
     * @param object val
     * @return this
     */
    setCustomer: function(val) {
        if (typeof val === 'object')
            this._customer = val;
        else {
            var obj = new Customer(this._instance);
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get Token
     * Token used to capture payments on this subscription
     * @return object
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token used to capture payments on this subscription
     * @param object val
     * @return this
     */
    setToken: function(val) {
        if (typeof val === 'object')
            this._token = val;
        else {
            var obj = new Token(this._instance);
            obj.fillWithData(val);
            this._token = obj;
        }
        return this;
    },

    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription
     * @return float
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription
     * @param float val
     * @return this
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Name
     * Name of the subscription
     * @return float
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the subscription
     * @param float val
     * @return this
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Amount to be paid at each billing cycle of the subscription
     * @return float
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Amount to be paid at each billing cycle of the subscription
     * @param float val
     * @return this
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the subscription
     * @return float
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the subscription
     * @param float val
     * @return this
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @return object
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @param object val
     * @return this
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return float
     */
    getInterval: function() {
        return this._interval;
    },

    /**
     * Set Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param float val
     * @return this
     */
    setInterval: function(val) {
        this._interval = val;
        return this;
    },

    /**
     * Get TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @return float
     */
    getTrialEndAt: function() {
        return this._trialEndAt;
    },

    /**
     * Set TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @param float val
     * @return this
     */
    setTrialEndAt: function(val) {
        this._trialEndAt = val;
        return this;
    },

    /**
     * Get Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Used the active field to know if the subscription is currently active
     * @return bool
     */
    getActivated: function() {
        return this._activated;
    },

    /**
     * Set Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Used the active field to know if the subscription is currently active
     * @param bool val
     * @return this
     */
    setActivated: function(val) {
        this._activated = val;
        return this;
    },

    /**
     * Get Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @return bool
     */
    getActive: function() {
        return this._active;
    },

    /**
     * Set Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @param bool val
     * @return this
     */
    setActive: function(val) {
        this._active = val;
        return this;
    },

    /**
     * Get Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @return bool
     */
    getCanceled: function() {
        return this._canceled;
    },

    /**
     * Set Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @param bool val
     * @return this
     */
    setCanceled: function(val) {
        this._canceled = val;
        return this;
    },

    /**
     * Get CancellationReason
     * Reason as to why the subscription was cancelled
     * @return float
     */
    getCancellationReason: function() {
        return this._cancellationReason;
    },

    /**
     * Set CancellationReason
     * Reason as to why the subscription was cancelled
     * @param float val
     * @return this
     */
    setCancellationReason: function(val) {
        this._cancellationReason = val;
        return this;
    },

    /**
     * Get PendingCancellation
     * Wheither or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @return bool
     */
    getPendingCancellation: function() {
        return this._pendingCancellation;
    },

    /**
     * Set PendingCancellation
     * Wheither or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @param bool val
     * @return this
     */
    setPendingCancellation: function(val) {
        this._pendingCancellation = val;
        return this;
    },

    /**
     * Get CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @return float
     */
    getCancelAt: function() {
        return this._cancelAt;
    },

    /**
     * Set CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @param float val
     * @return this
     */
    setCancelAt: function(val) {
        this._cancelAt = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @return float
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @param float val
     * @return this
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @return float
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @param float val
     * @return this
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @return bool
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @param bool val
     * @return this
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the subscription was created
     * @return float
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the subscription was created
     * @param float val
     * @return this
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Get ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @return float
     */
    getActivatedAt: function() {
        return this._activatedAt;
    },

    /**
     * Set ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @param float val
     * @return this
     */
    setActivatedAt: function(val) {
        this._activatedAt = val;
        return this;
    },

    /**
     * Get IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @return float
     */
    getIterateAt: function() {
        return this._iterateAt;
    },

    /**
     * Set IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @param float val
     * @return this
     */
    setIterateAt: function(val) {
        this._iterateAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  array data
     * @return Subscription
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["plan"])
            this.setPlan(data["plan"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["token"])
            this.setToken(data["token"]);
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
        if (data["trial_end_at"])
            this.setTrialEndAt(data["trial_end_at"]);
        if (data["activated"])
            this.setActivated(data["activated"]);
        if (data["active"])
            this.setActive(data["active"]);
        if (data["canceled"])
            this.setCanceled(data["canceled"]);
        if (data["cancellation_reason"])
            this.setCancellationReason(data["cancellation_reason"]);
        if (data["pending_cancellation"])
            this.setPendingCancellation(data["pending_cancellation"]);
        if (data["cancel_at"])
            this.setCancelAt(data["cancel_at"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        if (data["activated_at"])
            this.setActivatedAt(data["activated_at"]);
        if (data["iterate_at"])
            this.setIterateAt(data["iterate_at"]);
        return this;
    },

    /**
     * Get the customer owning the subscription.

     * @param object options
     * @return Customer
     */
    customer: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/customers";

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
                body = body['customer'];
                var obj = new Customer(cur._instance);
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get the discounts applied to the subscription.

     * @param object options
     * @return array
     */
    discounts: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/discounts";

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
                var body = response.body['discounts'];
                for (var i = body.length; i--;) {
                    var tmp = new Discount(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get the subscriptions past transactions.

     * @param object options
     * @return array
     */
    transactions: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/transactions";

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
                var body = response.body['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = new Transaction(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get all the subscriptions.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions";

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
                var body = response.body['subscriptions'];
                for (var i = body.length; i--;) {
                    var tmp = new Subscription(cur._instance);
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new subscription for the given customer.
	 * @param string customerId
     * @param object options
     * @return this
     */
    create: function(customerId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions";

        var data = {
			'cancel_at': this.getCancelAt(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'interval': this.getInterval(), 
			'trial_end_at': this.getTrialEndAt(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'customer_id': customerId
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
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Create a new subscription for the customer from the given plan ID.
	 * @param string customerId
	 * @param string planId
     * @param object options
     * @return this
     */
    createFromPlan: function(customerId, planId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions";

        var data = {
			'cancel_at': this.getCancelAt(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'interval': this.getInterval(), 
			'trial_end_at': this.getTrialEndAt(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'customer_id': customerId, 
			'plan_id': planId
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
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a subscription by its ID.
	 * @param string subscriptionId
     * @param object options
     * @return this
     */
    find: function(subscriptionId, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "";

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
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Update the subscription.

     * @param object options
     * @return this
     */
    update: function(options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'trial_end_at': this.getTrialEndAt()
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
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Update the subscription's plan.
	 * @param string planId
	 * @param string prorate
     * @param object options
     * @return this
     */
    updatePlan: function(planId, prorate, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'plan_id': planId, 
			'prorate': prorate
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
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Apply a source to the subscription to activate or update the subscription's source.
	 * @param string source
     * @param object options
     * @return this
     */
    applySource: function(source, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'source': source
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
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Cancel a subscription. The reason may be provided as well.
	 * @param string cancellationReason
     * @param object options
     * @return this
     */
    cancel: function(cancellationReason, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'cancellation_reason': cancellationReason
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

                
                var body = response.body;
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Schedule the cancellation of the subscription. The reason may be provided as well.
	 * @param string cancelAt
	 * @param string cancellationReason
     * @param object options
     * @return this
     */
    cancelAt: function(cancelAt, cancellationReason, options) {
        var request = new RequestProcessoutPrivate(this._instance);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'cancel_at': cancelAt, 
			'cancellation_reason': cancellationReason
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

                
                var body = response.body;
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    
}, {
    /**
     * Get all the subscriptions.
     * 
     * @param object options
     * @return array
     */
    all: function(options) {
        var obj = new Subscription();
        return obj.all(options);
    },

    /**
     * Find a subscription by its ID.
	 * @param string subscriptionId
     * @param object options
     * @return this
     */
    find: function(subscriptionId, options) {
        var obj = new Subscription();
        return obj.find(subscriptionId, options);
    },

    
});
