'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Subscription = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the subscription
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the subscription belongs
     * @type {object}
     */
    _project: null,

    /**
     * ID of the project to which the subscription belongs
     * @type {string}
     */
    _projectId: null,

    /**
     * Plan linked to this subscription, if any
     * @type {object}
     */
    _plan: null,

    /**
     * ID of the plan linked to this subscription, if any
     * @type {string}
     */
    _planId: null,

    /**
     * List of the subscription discounts
     * @type {list}
     */
    _discounts: null,

    /**
     * List of the subscription addons
     * @type {list}
     */
    _addons: null,

    /**
     * List of the subscription transactions
     * @type {list}
     */
    _transactions: null,

    /**
     * Customer linked to the subscription
     * @type {object}
     */
    _customer: null,

    /**
     * ID of the customer linked to the subscription
     * @type {string}
     */
    _customerId: null,

    /**
     * Token used to capture payments on this subscription
     * @type {object}
     */
    _token: null,

    /**
     * ID of the token used to capture payments on this subscription
     * @type {string}
     */
    _tokenId: null,

    /**
     * URL to which you may redirect your customer to activate the subscription
     * @type {string}
     */
    _url: null,

    /**
     * Name of the subscription
     * @type {string}
     */
    _name: null,

    /**
     * Base amount of the subscription
     * @type {decimal}
     */
    _amount: null,

    /**
     * Amount to be paid at each billing cycle of the subscription
     * @type {decimal}
     */
    _billableAmount: null,

    /**
     * Amount discounted by discounts applied to the subscription
     * @type {decimal}
     */
    _discountedAmount: null,

    /**
     * Amount applied on top of the subscription base price with addons
     * @type {decimal}
     */
    _addonsAmount: null,

    /**
     * Currency of the subscription
     * @type {string}
     */
    _currency: null,

    /**
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    _interval: null,

    /**
     * Date at which the subscription trial should end. Can be null to set no trial
     * @type {string}
     */
    _trialEndAt: null,

    /**
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @type {boolean}
     */
    _activated: null,

    /**
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @type {boolean}
     */
    _active: null,

    /**
     * Date at which the subscription will automatically be canceled. Can be null
     * @type {string}
     */
    _cancelAt: null,

    /**
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @type {boolean}
     */
    _canceled: null,

    /**
     * Reason as to why the subscription was cancelled
     * @type {string}
     */
    _cancellationReason: null,

    /**
     * Wheither or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @type {boolean}
     */
    _pendingCancellation: null,

    /**
     * URL where the customer will be redirected upon activation of the subscription
     * @type {string}
     */
    _returnUrl: null,

    /**
     * URL where the customer will be redirected if the subscription activation was canceled
     * @type {string}
     */
    _cancelUrl: null,

    /**
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project setting)
     * @type {string}
     */
    _unpaidState: null,

    /**
     * Define whether or not the subscription is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the subscription was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @type {string}
     */
    _activatedAt: null,

    /**
     * Next iteration date, corresponding to the next billing cycle start date
     * @type {string}
     */
    _iterateAt: null,

    /**
     * Subscription constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Subscription object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubscription()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the subscription
     * @return {string}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the subscription belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the subscription belongs
     * @param {object} val
     * @return {Subscription}
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
     * ID of the project to which the subscription belongs
     * @return {string}
     */
    getProjectId: function() {
        return this._projectId;
    },

    /**
     * Set ProjectId
     * ID of the project to which the subscription belongs
     * @param {string} val
     * @return {Subscription}
     */
    setProjectId: function(val) {
        this._projectId = val;
        return this;
    },

    /**
     * Get Plan
     * Plan linked to this subscription, if any
     * @return {object}
     */
    getPlan: function() {
        return this._plan;
    },

    /**
     * Set Plan
     * Plan linked to this subscription, if any
     * @param {object} val
     * @return {Subscription}
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
     * ID of the plan linked to this subscription, if any
     * @return {string}
     */
    getPlanId: function() {
        return this._planId;
    },

    /**
     * Set PlanId
     * ID of the plan linked to this subscription, if any
     * @param {string} val
     * @return {Subscription}
     */
    setPlanId: function(val) {
        this._planId = val;
        return this;
    },

    /**
     * Get Discounts
     * List of the subscription discounts
     * @return {array}
     */
    getDiscounts: function() {
        return this._discounts;
    },

    /**
     * Set Discounts
     * List of the subscription discounts
     * @param {array} val
     * @return {Subscription}
     */
    setDiscounts: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._discounts = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newDiscount();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._discounts = a;
        }
        return this;
    },

    /**
     * Get Addons
     * List of the subscription addons
     * @return {array}
     */
    getAddons: function() {
        return this._addons;
    },

    /**
     * Set Addons
     * List of the subscription addons
     * @param {array} val
     * @return {Subscription}
     */
    setAddons: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._addons = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newAddon();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._addons = a;
        }
        return this;
    },

    /**
     * Get Transactions
     * List of the subscription transactions
     * @return {array}
     */
    getTransactions: function() {
        return this._transactions;
    },

    /**
     * Set Transactions
     * List of the subscription transactions
     * @param {array} val
     * @return {Subscription}
     */
    setTransactions: function(val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this._transactions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this._client.newTransaction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this._transactions = a;
        }
        return this;
    },

    /**
     * Get Customer
     * Customer linked to the subscription
     * @return {object}
     */
    getCustomer: function() {
        return this._customer;
    },

    /**
     * Set Customer
     * Customer linked to the subscription
     * @param {object} val
     * @return {Subscription}
     */
    setCustomer: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newCustomer().getClass())
            this._customer = val;
        else {
            var obj = this._client.newCustomer();
            obj.fillWithData(val);
            this._customer = obj;
        }
        return this;
    },

    /**
     * Get CustomerId
     * ID of the customer linked to the subscription
     * @return {string}
     */
    getCustomerId: function() {
        return this._customerId;
    },

    /**
     * Set CustomerId
     * ID of the customer linked to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setCustomerId: function(val) {
        this._customerId = val;
        return this;
    },

    /**
     * Get Token
     * Token used to capture payments on this subscription
     * @return {object}
     */
    getToken: function() {
        return this._token;
    },

    /**
     * Set Token
     * Token used to capture payments on this subscription
     * @param {object} val
     * @return {Subscription}
     */
    setToken: function(val) {
        if (typeof val.getClass === "function" &&
            val.getClass() == this._client.newToken().getClass())
            this._token = val;
        else {
            var obj = this._client.newToken();
            obj.fillWithData(val);
            this._token = obj;
        }
        return this;
    },

    /**
     * Get TokenId
     * ID of the token used to capture payments on this subscription
     * @return {string}
     */
    getTokenId: function() {
        return this._tokenId;
    },

    /**
     * Set TokenId
     * ID of the token used to capture payments on this subscription
     * @param {string} val
     * @return {Subscription}
     */
    setTokenId: function(val) {
        this._tokenId = val;
        return this;
    },

    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription
     * @return {string}
     */
    getUrl: function() {
        return this._url;
    },

    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setUrl: function(val) {
        this._url = val;
        return this;
    },

    /**
     * Get Name
     * Name of the subscription
     * @return {string}
     */
    getName: function() {
        return this._name;
    },

    /**
     * Set Name
     * Name of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setName: function(val) {
        this._name = val;
        return this;
    },

    /**
     * Get Amount
     * Base amount of the subscription
     * @return {string}
     */
    getAmount: function() {
        return this._amount;
    },

    /**
     * Set Amount
     * Base amount of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setAmount: function(val) {
        this._amount = val;
        return this;
    },

    /**
     * Get BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @return {string}
     */
    getBillableAmount: function() {
        return this._billableAmount;
    },

    /**
     * Set BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setBillableAmount: function(val) {
        this._billableAmount = val;
        return this;
    },

    /**
     * Get DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @return {string}
     */
    getDiscountedAmount: function() {
        return this._discountedAmount;
    },

    /**
     * Set DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setDiscountedAmount: function(val) {
        this._discountedAmount = val;
        return this;
    },

    /**
     * Get AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @return {string}
     */
    getAddonsAmount: function() {
        return this._addonsAmount;
    },

    /**
     * Set AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @param {string} val
     * @return {Subscription}
     */
    setAddonsAmount: function(val) {
        this._addonsAmount = val;
        return this;
    },

    /**
     * Get Currency
     * Currency of the subscription
     * @return {string}
     */
    getCurrency: function() {
        return this._currency;
    },

    /**
     * Set Currency
     * Currency of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setCurrency: function(val) {
        this._currency = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Subscription}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    getInterval: function() {
        return this._interval;
    },

    /**
     * Set Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Subscription}
     */
    setInterval: function(val) {
        this._interval = val;
        return this;
    },

    /**
     * Get TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @return {string}
     */
    getTrialEndAt: function() {
        return this._trialEndAt;
    },

    /**
     * Set TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @param {string} val
     * @return {Subscription}
     */
    setTrialEndAt: function(val) {
        this._trialEndAt = val;
        return this;
    },

    /**
     * Get Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @return {bool}
     */
    getActivated: function() {
        return this._activated;
    },

    /**
     * Set Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @param {bool} val
     * @return {Subscription}
     */
    setActivated: function(val) {
        this._activated = val;
        return this;
    },

    /**
     * Get Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @return {bool}
     */
    getActive: function() {
        return this._active;
    },

    /**
     * Set Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @param {bool} val
     * @return {Subscription}
     */
    setActive: function(val) {
        this._active = val;
        return this;
    },

    /**
     * Get CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @return {string}
     */
    getCancelAt: function() {
        return this._cancelAt;
    },

    /**
     * Set CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @param {string} val
     * @return {Subscription}
     */
    setCancelAt: function(val) {
        this._cancelAt = val;
        return this;
    },

    /**
     * Get Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @return {bool}
     */
    getCanceled: function() {
        return this._canceled;
    },

    /**
     * Set Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @param {bool} val
     * @return {Subscription}
     */
    setCanceled: function(val) {
        this._canceled = val;
        return this;
    },

    /**
     * Get CancellationReason
     * Reason as to why the subscription was cancelled
     * @return {string}
     */
    getCancellationReason: function() {
        return this._cancellationReason;
    },

    /**
     * Set CancellationReason
     * Reason as to why the subscription was cancelled
     * @param {string} val
     * @return {Subscription}
     */
    setCancellationReason: function(val) {
        this._cancellationReason = val;
        return this;
    },

    /**
     * Get PendingCancellation
     * Wheither or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @return {bool}
     */
    getPendingCancellation: function() {
        return this._pendingCancellation;
    },

    /**
     * Set PendingCancellation
     * Wheither or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @param {bool} val
     * @return {Subscription}
     */
    setPendingCancellation: function(val) {
        this._pendingCancellation = val;
        return this;
    },

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @return {string}
     */
    getReturnUrl: function() {
        return this._returnUrl;
    },

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setReturnUrl: function(val) {
        this._returnUrl = val;
        return this;
    },

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @return {string}
     */
    getCancelUrl: function() {
        return this._cancelUrl;
    },

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @param {string} val
     * @return {Subscription}
     */
    setCancelUrl: function(val) {
        this._cancelUrl = val;
        return this;
    },

    /**
     * Get UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project setting)
     * @return {string}
     */
    getUnpaidState: function() {
        return this._unpaidState;
    },

    /**
     * Set UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project setting)
     * @param {string} val
     * @return {Subscription}
     */
    setUnpaidState: function(val) {
        this._unpaidState = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @param {bool} val
     * @return {Subscription}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the subscription was created
     * @return {string}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the subscription was created
     * @param {string} val
     * @return {Subscription}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Get ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @return {string}
     */
    getActivatedAt: function() {
        return this._activatedAt;
    },

    /**
     * Set ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @param {string} val
     * @return {Subscription}
     */
    setActivatedAt: function(val) {
        this._activatedAt = val;
        return this;
    },

    /**
     * Get IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @return {string}
     */
    getIterateAt: function() {
        return this._iterateAt;
    },

    /**
     * Set IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @param {string} val
     * @return {Subscription}
     */
    setIterateAt: function(val) {
        this._iterateAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Subscription}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["plan"])
            this.setPlan(data["plan"]);
        if (data["plan_id"])
            this.setPlanId(data["plan_id"]);
        if (data["discounts"])
            this.setDiscounts(data["discounts"]);
        if (data["addons"])
            this.setAddons(data["addons"]);
        if (data["transactions"])
            this.setTransactions(data["transactions"]);
        if (data["customer"])
            this.setCustomer(data["customer"]);
        if (data["customer_id"])
            this.setCustomerId(data["customer_id"]);
        if (data["token"])
            this.setToken(data["token"]);
        if (data["token_id"])
            this.setTokenId(data["token_id"]);
        if (data["url"])
            this.setUrl(data["url"]);
        if (data["name"])
            this.setName(data["name"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["billable_amount"])
            this.setBillableAmount(data["billable_amount"]);
        if (data["discounted_amount"])
            this.setDiscountedAmount(data["discounted_amount"]);
        if (data["addons_amount"])
            this.setAddonsAmount(data["addons_amount"]);
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
        if (data["cancel_at"])
            this.setCancelAt(data["cancel_at"]);
        if (data["canceled"])
            this.setCanceled(data["canceled"]);
        if (data["cancellation_reason"])
            this.setCancellationReason(data["cancellation_reason"]);
        if (data["pending_cancellation"])
            this.setPendingCancellation(data["pending_cancellation"]);
        if (data["return_url"])
            this.setReturnUrl(data["return_url"]);
        if (data["cancel_url"])
            this.setCancelUrl(data["cancel_url"]);
        if (data["unpaid_state"])
            this.setUnpaidState(data["unpaid_state"]);
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
     * Get the addons applied to the subscription.

     * @param {object} options
     * @return {array}
     */
    fetchAddons: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/addons";

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
     * Find a subscription's addon by its ID.
	 * @param string addonId
     * @param {object} options
     * @return {Addon}
     */
    findAddon: function(addonId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/addons/" + encodeURI(addonId) + "";

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
                var obj = cur._client.newAddon();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete an addon applied to a subscription.
	 * @param string addonId
     * @param {object} options
     * @return {bool}
     */
    deleteAddon: function(addonId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/addons/" + encodeURI(addonId) + "";

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
    /**
     * Get the customer owning the subscription.

     * @param {object} options
     * @return {Customer}
     */
    fetchCustomer: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                var obj = cur._client.newCustomer();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Get the discounts applied to the subscription.

     * @param {object} options
     * @return {array}
     */
    fetchDiscounts: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                    var tmp = cur._client.newDiscount();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Find a subscription's discount by its ID.
	 * @param string discountId
     * @param {object} options
     * @return {Discount}
     */
    findDiscount: function(discountId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/discounts/" + encodeURI(discountId) + "";

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
                body = body['discount'];
                var obj = cur._client.newDiscount();
                returnValues.push(obj.fillWithData(body));

                return resolve.apply(this, returnValues);
            });
        });
    },
    /**
     * Delete a discount applied to a subscription.
	 * @param string discountId
     * @param {object} options
     * @return {bool}
     */
    deleteDiscount: function(discountId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/discounts/" + encodeURI(discountId) + "";

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
    /**
     * Get the subscriptions past transactions.

     * @param {object} options
     * @return {array}
     */
    fetchTransactions: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                    var tmp = cur._client.newTransaction();
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
     * @param {object} options
     * @return {array}
     */
    all: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
                    var tmp = cur._client.newSubscription();
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
     * 
     * @param {object} options
     * @return {this}
     */
    create: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions";

        var data = {
			'plan_id': this.getPlanId(), 
			'cancel_at': this.getCancelAt(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'currency': this.getCurrency(), 
			'metadata': this.getMetadata(), 
			'interval': this.getInterval(), 
			'trial_end_at': this.getTrialEndAt(), 
			'customer_id': this.getCustomerId(), 
			'return_url': this.getReturnUrl(), 
			'cancel_url': this.getCancelUrl(), 
			'source': (options['source']) ? options['source'] : null, 
			'coupon_id': (options['coupon_id']) ? options['coupon_id'] : null
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
     * @param {object} options
     * @return {this}
     */
    find: function(subscriptionId, options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
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
     * Save the updated subscription attributes.

     * @param {object} options
     * @return {this}
     */
    save: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'plan_id': this.getPlanId(), 
			'name': this.getName(), 
			'amount': this.getAmount(), 
			'interval': this.getInterval(), 
			'trial_end_at': this.getTrialEndAt(), 
			'metadata': this.getMetadata(), 
			'coupon_id': (options['coupon_id']) ? options['coupon_id'] : null, 
			'source': (options['source']) ? options['source'] : null, 
			'prorate': (options['prorate']) ? options['prorate'] : null, 
			'proration_date': (options['proration_date']) ? options['proration_date'] : null, 
			'preview': (options['preview']) ? options['preview'] : null
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

     * @param {object} options
     * @return {this}
     */
    cancel: function(options) {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this._client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'cancel_at': this.getCancelAt(), 
			'cancellation_reason': this.getCancellationReason(), 
			'cancel_at_end': (options['cancel_at_end']) ? options['cancel_at_end'] : null
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
    
}, {});
