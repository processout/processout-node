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
var Subscription = /** @class */ (function () {
    /**
     * Subscription constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function Subscription(client, prefill) {
        this.client = null;
        /**
         * ID of the subscription
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the subscription belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the subscription belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Plan linked to this subscription, if any
         * @type {p.Plan}
         */
        this.plan = null;
        /**
         * ID of the plan linked to this subscription, if any
         * @type {string}
         */
        this.planId = null;
        /**
         * List of the subscription discounts
         * @type {any}
         */
        this.discounts = null;
        /**
         * List of the subscription addons
         * @type {any}
         */
        this.addons = null;
        /**
         * List of the subscription transactions
         * @type {any}
         */
        this.transactions = null;
        /**
         * Customer linked to the subscription
         * @type {p.Customer}
         */
        this.customer = null;
        /**
         * ID of the customer linked to the subscription
         * @type {string}
         */
        this.customerId = null;
        /**
         * Token used to capture payments on this subscription
         * @type {p.Token}
         */
        this.token = null;
        /**
         * ID of the token used to capture payments on this subscription
         * @type {string}
         */
        this.tokenId = null;
        /**
         * URL to which you may redirect your customer to activate the subscription
         * @type {string}
         */
        this.url = null;
        /**
         * Name of the subscription
         * @type {string}
         */
        this.name = null;
        /**
         * Base amount of the subscription
         * @type {string}
         */
        this.amount = null;
        /**
         * Amount to be paid at each billing cycle of the subscription
         * @type {string}
         */
        this.billableAmount = null;
        /**
         * Amount discounted by discounts applied to the subscription
         * @type {string}
         */
        this.discountedAmount = null;
        /**
         * Amount applied on top of the subscription base price with addons
         * @type {string}
         */
        this.addonsAmount = null;
        /**
         * Currency of the subscription
         * @type {string}
         */
        this.currency = null;
        /**
         * Metadata related to the subscription, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
         * @type {string}
         */
        this.interval = null;
        /**
         * Date at which the subscription trial should end. Can be null to set no trial
         * @type {string}
         */
        this.trialEndAt = null;
        /**
         * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
         * @type {boolean}
         */
        this.activated = null;
        /**
         * Whether or not the subscription is currently active (ie activated and not cancelled)
         * @type {boolean}
         */
        this.active = null;
        /**
         * Date at which the subscription will automatically be canceled. Can be null
         * @type {string}
         */
        this.cancelAt = null;
        /**
         * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
         * @type {boolean}
         */
        this.canceled = null;
        /**
         * Reason as to why the subscription was cancelled
         * @type {string}
         */
        this.cancellationReason = null;
        /**
         * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
         * @type {boolean}
         */
        this.pendingCancellation = null;
        /**
         * URL where the customer will be redirected upon activation of the subscription
         * @type {string}
         */
        this.returnUrl = null;
        /**
         * URL where the customer will be redirected if the subscription activation was canceled
         * @type {string}
         */
        this.cancelUrl = null;
        /**
         * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
         * @type {string}
         */
        this.unpaidState = null;
        /**
         * Define whether or not the subscription is in sandbox environment
         * @type {boolean}
         */
        this.sandbox = null;
        /**
         * Date at which the subscription was created
         * @type {string}
         */
        this.createdAt = null;
        /**
         * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
         * @type {string}
         */
        this.activatedAt = null;
        /**
         * Next iteration date, corresponding to the next billing cycle start date
         * @type {string}
         */
        this.iterateAt = null;
        if (typeof client === 'undefined')
            throw new Error("The Subscription object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubscription()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    Subscription.prototype.getProcessOutObjectClass = function () {
        return "Subscription";
    };
    /**
     * Get Id
     * ID of the subscription
     * @return {string}
     */
    Subscription.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the subscription belongs
     * @return {p.Project}
     */
    Subscription.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the subscription belongs
     * @param {p.Project} val
     * @return {Subscription}
     */
    Subscription.prototype.setProject = function (val) {
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
     * ID of the project to which the subscription belongs
     * @return {string}
     */
    Subscription.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the subscription belongs
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Plan
     * Plan linked to this subscription, if any
     * @return {p.Plan}
     */
    Subscription.prototype.getPlan = function () {
        return this.plan;
    };
    /**
     * Set Plan
     * Plan linked to this subscription, if any
     * @param {p.Plan} val
     * @return {Subscription}
     */
    Subscription.prototype.setPlan = function (val) {
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
     * ID of the plan linked to this subscription, if any
     * @return {string}
     */
    Subscription.prototype.getPlanId = function () {
        return this.planId;
    };
    /**
     * Set PlanId
     * ID of the plan linked to this subscription, if any
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setPlanId = function (val) {
        this.planId = val;
        return this;
    };
    /**
     * Get Discounts
     * List of the subscription discounts
     * @return {any}
     */
    Subscription.prototype.getDiscounts = function () {
        return this.discounts;
    };
    /**
     * Set Discounts
     * List of the subscription discounts
     * @param {any} val
     * @return {Subscription}
     */
    Subscription.prototype.setDiscounts = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.discounts = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newDiscount();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.discounts = a;
        }
        return this;
    };
    /**
     * Get Addons
     * List of the subscription addons
     * @return {any}
     */
    Subscription.prototype.getAddons = function () {
        return this.addons;
    };
    /**
     * Set Addons
     * List of the subscription addons
     * @param {any} val
     * @return {Subscription}
     */
    Subscription.prototype.setAddons = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.addons = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newAddon();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.addons = a;
        }
        return this;
    };
    /**
     * Get Transactions
     * List of the subscription transactions
     * @return {any}
     */
    Subscription.prototype.getTransactions = function () {
        return this.transactions;
    };
    /**
     * Set Transactions
     * List of the subscription transactions
     * @param {any} val
     * @return {Subscription}
     */
    Subscription.prototype.setTransactions = function (val) {
        if (val.length > 0 && typeof val[0] === 'object')
            this.transactions = val;
        else {
            var a = [];
            for (var i = val.length; i--;) {
                var obj = this.client.newTransaction();
                obj.fillWithData(val);
                a.push(obj);
            }
            this.transactions = a;
        }
        return this;
    };
    /**
     * Get Customer
     * Customer linked to the subscription
     * @return {p.Customer}
     */
    Subscription.prototype.getCustomer = function () {
        return this.customer;
    };
    /**
     * Set Customer
     * Customer linked to the subscription
     * @param {p.Customer} val
     * @return {Subscription}
     */
    Subscription.prototype.setCustomer = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomer().getProcessOutObjectClass())
            this.customer = val;
        else {
            var obj = this.client.newCustomer();
            obj.fillWithData(val);
            this.customer = obj;
        }
        return this;
    };
    /**
     * Get CustomerId
     * ID of the customer linked to the subscription
     * @return {string}
     */
    Subscription.prototype.getCustomerId = function () {
        return this.customerId;
    };
    /**
     * Set CustomerId
     * ID of the customer linked to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setCustomerId = function (val) {
        this.customerId = val;
        return this;
    };
    /**
     * Get Token
     * Token used to capture payments on this subscription
     * @return {p.Token}
     */
    Subscription.prototype.getToken = function () {
        return this.token;
    };
    /**
     * Set Token
     * Token used to capture payments on this subscription
     * @param {p.Token} val
     * @return {Subscription}
     */
    Subscription.prototype.setToken = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
        return this;
    };
    /**
     * Get TokenId
     * ID of the token used to capture payments on this subscription
     * @return {string}
     */
    Subscription.prototype.getTokenId = function () {
        return this.tokenId;
    };
    /**
     * Set TokenId
     * ID of the token used to capture payments on this subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setTokenId = function (val) {
        this.tokenId = val;
        return this;
    };
    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription
     * @return {string}
     */
    Subscription.prototype.getUrl = function () {
        return this.url;
    };
    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setUrl = function (val) {
        this.url = val;
        return this;
    };
    /**
     * Get Name
     * Name of the subscription
     * @return {string}
     */
    Subscription.prototype.getName = function () {
        return this.name;
    };
    /**
     * Set Name
     * Name of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setName = function (val) {
        this.name = val;
        return this;
    };
    /**
     * Get Amount
     * Base amount of the subscription
     * @return {string}
     */
    Subscription.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Base amount of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @return {string}
     */
    Subscription.prototype.getBillableAmount = function () {
        return this.billableAmount;
    };
    /**
     * Set BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setBillableAmount = function (val) {
        this.billableAmount = val;
        return this;
    };
    /**
     * Get DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @return {string}
     */
    Subscription.prototype.getDiscountedAmount = function () {
        return this.discountedAmount;
    };
    /**
     * Set DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setDiscountedAmount = function (val) {
        this.discountedAmount = val;
        return this;
    };
    /**
     * Get AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @return {string}
     */
    Subscription.prototype.getAddonsAmount = function () {
        return this.addonsAmount;
    };
    /**
     * Set AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setAddonsAmount = function (val) {
        this.addonsAmount = val;
        return this;
    };
    /**
     * Get Currency
     * Currency of the subscription
     * @return {string}
     */
    Subscription.prototype.getCurrency = function () {
        return this.currency;
    };
    /**
     * Set Currency
     * Currency of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setCurrency = function (val) {
        this.currency = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    Subscription.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Subscription}
     */
    Subscription.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    Subscription.prototype.getInterval = function () {
        return this.interval;
    };
    /**
     * Set Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setInterval = function (val) {
        this.interval = val;
        return this;
    };
    /**
     * Get TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @return {string}
     */
    Subscription.prototype.getTrialEndAt = function () {
        return this.trialEndAt;
    };
    /**
     * Set TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setTrialEndAt = function (val) {
        this.trialEndAt = val;
        return this;
    };
    /**
     * Get Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @return {boolean}
     */
    Subscription.prototype.getActivated = function () {
        return this.activated;
    };
    /**
     * Set Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @param {boolean} val
     * @return {Subscription}
     */
    Subscription.prototype.setActivated = function (val) {
        this.activated = val;
        return this;
    };
    /**
     * Get Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @return {boolean}
     */
    Subscription.prototype.getActive = function () {
        return this.active;
    };
    /**
     * Set Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @param {boolean} val
     * @return {Subscription}
     */
    Subscription.prototype.setActive = function (val) {
        this.active = val;
        return this;
    };
    /**
     * Get CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @return {string}
     */
    Subscription.prototype.getCancelAt = function () {
        return this.cancelAt;
    };
    /**
     * Set CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setCancelAt = function (val) {
        this.cancelAt = val;
        return this;
    };
    /**
     * Get Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @return {boolean}
     */
    Subscription.prototype.getCanceled = function () {
        return this.canceled;
    };
    /**
     * Set Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @param {boolean} val
     * @return {Subscription}
     */
    Subscription.prototype.setCanceled = function (val) {
        this.canceled = val;
        return this;
    };
    /**
     * Get CancellationReason
     * Reason as to why the subscription was cancelled
     * @return {string}
     */
    Subscription.prototype.getCancellationReason = function () {
        return this.cancellationReason;
    };
    /**
     * Set CancellationReason
     * Reason as to why the subscription was cancelled
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setCancellationReason = function (val) {
        this.cancellationReason = val;
        return this;
    };
    /**
     * Get PendingCancellation
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @return {boolean}
     */
    Subscription.prototype.getPendingCancellation = function () {
        return this.pendingCancellation;
    };
    /**
     * Set PendingCancellation
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @param {boolean} val
     * @return {Subscription}
     */
    Subscription.prototype.setPendingCancellation = function (val) {
        this.pendingCancellation = val;
        return this;
    };
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @return {string}
     */
    Subscription.prototype.getReturnUrl = function () {
        return this.returnUrl;
    };
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setReturnUrl = function (val) {
        this.returnUrl = val;
        return this;
    };
    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @return {string}
     */
    Subscription.prototype.getCancelUrl = function () {
        return this.cancelUrl;
    };
    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setCancelUrl = function (val) {
        this.cancelUrl = val;
        return this;
    };
    /**
     * Get UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @return {string}
     */
    Subscription.prototype.getUnpaidState = function () {
        return this.unpaidState;
    };
    /**
     * Set UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setUnpaidState = function (val) {
        this.unpaidState = val;
        return this;
    };
    /**
     * Get Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @return {boolean}
     */
    Subscription.prototype.getSandbox = function () {
        return this.sandbox;
    };
    /**
     * Set Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @param {boolean} val
     * @return {Subscription}
     */
    Subscription.prototype.setSandbox = function (val) {
        this.sandbox = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the subscription was created
     * @return {string}
     */
    Subscription.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the subscription was created
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Get ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @return {string}
     */
    Subscription.prototype.getActivatedAt = function () {
        return this.activatedAt;
    };
    /**
     * Set ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setActivatedAt = function (val) {
        this.activatedAt = val;
        return this;
    };
    /**
     * Get IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @return {string}
     */
    Subscription.prototype.getIterateAt = function () {
        return this.iterateAt;
    };
    /**
     * Set IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @param {string} val
     * @return {Subscription}
     */
    Subscription.prototype.setIterateAt = function (val) {
        this.iterateAt = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Subscription}
     */
    Subscription.prototype.fillWithData = function (data) {
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
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    Subscription.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "plan": this.getPlan(),
            "plan_id": this.getPlanId(),
            "discounts": this.getDiscounts(),
            "addons": this.getAddons(),
            "transactions": this.getTransactions(),
            "customer": this.getCustomer(),
            "customer_id": this.getCustomerId(),
            "token": this.getToken(),
            "token_id": this.getTokenId(),
            "url": this.getUrl(),
            "name": this.getName(),
            "amount": this.getAmount(),
            "billable_amount": this.getBillableAmount(),
            "discounted_amount": this.getDiscountedAmount(),
            "addons_amount": this.getAddonsAmount(),
            "currency": this.getCurrency(),
            "metadata": this.getMetadata(),
            "interval": this.getInterval(),
            "trial_end_at": this.getTrialEndAt(),
            "activated": this.getActivated(),
            "active": this.getActive(),
            "cancel_at": this.getCancelAt(),
            "canceled": this.getCanceled(),
            "cancellation_reason": this.getCancellationReason(),
            "pending_cancellation": this.getPendingCancellation(),
            "return_url": this.getReturnUrl(),
            "cancel_url": this.getCancelUrl(),
            "unpaid_state": this.getUnpaidState(),
            "sandbox": this.getSandbox(),
            "created_at": this.getCreatedAt(),
            "activated_at": this.getActivatedAt(),
            "iterate_at": this.getIterateAt(),
        };
    };
    /**
     * Get the addons applied to the subscription.

     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.fetchAddons = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/addons";
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
     * Find a subscription's addon by its ID.
     * @param string addonId
     * @param {any} options
     * @return {Promise<p.Addon>}
     */
    Subscription.prototype.findAddon = function (addonId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/addons/" + encodeURI(addonId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_2, response, err, returnValues, body, obj0;
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
                                obj0 = cur.client.newAddon();
                                returnValues.push(obj0.fillWithData(body));
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
     * Delete an addon applied to a subscription.
     * @param string addonId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    Subscription.prototype.deleteAddon = function (addonId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/addons/" + encodeURI(addonId) + "";
        var data = {
            'prorate': (options['prorate']) ? options['prorate'] : null,
            'proration_date': (options['proration_date']) ? options['proration_date'] : null,
            'preview': (options['preview']) ? options['preview'] : null
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_3, response, err, returnValues;
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
    /**
     * Get the customer owning the subscription.

     * @param {any} options
     * @return {Promise<p.Customer>}
     */
    Subscription.prototype.fetchCustomer = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/customers";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_4, response, err, returnValues, body, obj0;
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
                                body = body['customer'];
                                obj0 = cur.client.newCustomer();
                                returnValues.push(obj0.fillWithData(body));
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
     * Get the discounts applied to the subscription.

     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.fetchDiscounts = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/discounts";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_5, response, err, returnValues, a, body, i, tmp;
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
     * Find a subscription's discount by its ID.
     * @param string discountId
     * @param {any} options
     * @return {Promise<p.Discount>}
     */
    Subscription.prototype.findDiscount = function (discountId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/discounts/" + encodeURI(discountId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_6, response, err, returnValues, body, obj0;
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
                                err_6 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['discount'];
                                obj0 = cur.client.newDiscount();
                                returnValues.push(obj0.fillWithData(body));
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
     * @param string discountId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    Subscription.prototype.deleteDiscount = function (discountId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/discounts/" + encodeURI(discountId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_7, response, err, returnValues;
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
                                err_7 = _a.sent();
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
    /**
     * Get the subscriptions past transactions.

     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.fetchTransactions = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "/transactions";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_8, response, err, returnValues, a, body, i, tmp;
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
                                err_8 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['transactions'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newTransaction();
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
     * Get all the subscriptions.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.all = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_9, response, err, returnValues, a, body, i, tmp;
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
                                err_9 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                a = [];
                                body = respBody['subscriptions'];
                                for (i = body.length; i--;) {
                                    tmp = cur.client.newSubscription();
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
     * Create a new subscription for the given customer.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.create = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions";
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
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_10, response, err, returnValues, body;
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
                                err_10 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['subscription'];
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
     * Find a subscription by its ID.
     * @param string subscriptionId
     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.find = function (subscriptionId, options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(subscriptionId) + "";
        var data = {};
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_11, response, err, returnValues, body;
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
                                err_11 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['subscription'];
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
     * Save the updated subscription attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.save = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "";
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
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_12, response, err, returnValues, body;
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
                                err_12 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['subscription'];
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
     * Cancel a subscription. The reason may be provided as well.

     * @param {any} options
     * @return {Promise<any>}
     */
    Subscription.prototype.cancel = function (options) {
        if (!options)
            options = {};
        this.fillWithData(options);
        var request = new Request(this.client);
        var path = "/subscriptions/" + encodeURI(this.getId()) + "";
        var data = {
            'cancel_at': this.getCancelAt(),
            'cancellation_reason': this.getCancellationReason(),
            'cancel_at_end': (options['cancel_at_end']) ? options['cancel_at_end'] : null
        };
        var cur = this;
        return new Promise(function (resolve, reject) {
            var callback = function (resp) {
                return __awaiter(this, void 0, void 0, function () {
                    var respBody, err_13, response, err, returnValues, body;
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
                                err_13 = _a.sent();
                                return [3 /*break*/, 4];
                            case 4:
                                response = new Response(resp, respBody);
                                err = response.check();
                                if (err != null)
                                    return [2 /*return*/, reject(err)];
                                returnValues = [];
                                body = respBody;
                                body = body['subscription'];
                                returnValues.push(cur.fillWithData(body));
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
    return Subscription;
}());
module.exports = Subscription;
//# sourceMappingURL=subscription.js.map