// The content of this file was automatically generated

import fetch = require('node-fetch');

import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class Subscription {
    private client: ProcessOut = null;

    /**
     * ID of the subscription
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the subscription belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the subscription belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Plan linked to this subscription, if any
     * @type {p.Plan}
     */
    private plan: p.Plan = null;

    /**
     * ID of the plan linked to this subscription, if any
     * @type {string}
     */
    private planId: string = null;

    /**
     * List of the subscription discounts
     * @type {any}
     */
    private discounts: any = null;

    /**
     * List of the subscription addons
     * @type {any}
     */
    private addons: any = null;

    /**
     * List of the subscription transactions
     * @type {any}
     */
    private transactions: any = null;

    /**
     * Customer linked to the subscription
     * @type {p.Customer}
     */
    private customer: p.Customer = null;

    /**
     * ID of the customer linked to the subscription
     * @type {string}
     */
    private customerId: string = null;

    /**
     * Token used to capture payments on this subscription
     * @type {p.Token}
     */
    private token: p.Token = null;

    /**
     * ID of the token used to capture payments on this subscription
     * @type {string}
     */
    private tokenId: string = null;

    /**
     * URL to which you may redirect your customer to activate the subscription
     * @type {string}
     */
    private url: string = null;

    /**
     * Name of the subscription
     * @type {string}
     */
    private name: string = null;

    /**
     * Base amount of the subscription
     * @type {string}
     */
    private amount: string = null;

    /**
     * Amount to be paid at each billing cycle of the subscription
     * @type {string}
     */
    private billableAmount: string = null;

    /**
     * Amount discounted by discounts applied to the subscription
     * @type {string}
     */
    private discountedAmount: string = null;

    /**
     * Amount applied on top of the subscription base price with addons
     * @type {string}
     */
    private addonsAmount: string = null;

    /**
     * Currency of the subscription
     * @type {string}
     */
    private currency: string = null;

    /**
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    private interval: string = null;

    /**
     * Date at which the subscription trial should end. Can be null to set no trial
     * @type {string}
     */
    private trialEndAt: string = null;

    /**
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @type {boolean}
     */
    private activated: boolean = null;

    /**
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @type {boolean}
     */
    private active: boolean = null;

    /**
     * Date at which the subscription will automatically be canceled. Can be null
     * @type {string}
     */
    private cancelAt: string = null;

    /**
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @type {boolean}
     */
    private canceled: boolean = null;

    /**
     * Reason as to why the subscription was cancelled
     * @type {string}
     */
    private cancellationReason: string = null;

    /**
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @type {boolean}
     */
    private pendingCancellation: boolean = null;

    /**
     * URL where the customer will be redirected upon activation of the subscription
     * @type {string}
     */
    private returnUrl: string = null;

    /**
     * URL where the customer will be redirected if the subscription activation was canceled
     * @type {string}
     */
    private cancelUrl: string = null;

    /**
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @type {string}
     */
    private unpaidState: string = null;

    /**
     * Define whether or not the subscription is in sandbox environment
     * @type {boolean}
     */
    private sandbox: boolean = null;

    /**
     * Date at which the subscription was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @type {string}
     */
    private activatedAt: string = null;

    /**
     * Next iteration date, corresponding to the next billing cycle start date
     * @type {string}
     */
    private iterateAt: string = null;

    /**
     * Subscription constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Subscription) {
        if (typeof client === 'undefined')
            throw new Error("The Subscription object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newSubscription()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "Subscription";
    }

    /**
     * Get Id
     * ID of the subscription
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setId(val: string): Subscription {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the subscription belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the subscription belongs
     * @param {p.Project} val
     * @return {Subscription}
     */
    public setProject(val: p.Project): Subscription {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    }

    /**
     * Get ProjectId
     * ID of the project to which the subscription belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the subscription belongs
     * @param {string} val
     * @return {Subscription}
     */
    public setProjectId(val: string): Subscription {
        this.projectId = val;
        return this;
    }

    /**
     * Get Plan
     * Plan linked to this subscription, if any
     * @return {p.Plan}
     */
    public getPlan(): p.Plan {
        return this.plan;
    }

    /**
     * Set Plan
     * Plan linked to this subscription, if any
     * @param {p.Plan} val
     * @return {Subscription}
     */
    public setPlan(val: p.Plan): Subscription {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPlan().getProcessOutObjectClass())
            this.plan = val;
        else {
            var obj = this.client.newPlan();
            obj.fillWithData(val);
            this.plan = obj;
        }
        return this;
    }

    /**
     * Get PlanId
     * ID of the plan linked to this subscription, if any
     * @return {string}
     */
    public getPlanId(): string {
        return this.planId;
    }

    /**
     * Set PlanId
     * ID of the plan linked to this subscription, if any
     * @param {string} val
     * @return {Subscription}
     */
    public setPlanId(val: string): Subscription {
        this.planId = val;
        return this;
    }

    /**
     * Get Discounts
     * List of the subscription discounts
     * @return {any}
     */
    public getDiscounts(): any {
        return this.discounts;
    }

    /**
     * Set Discounts
     * List of the subscription discounts
     * @param {any} val
     * @return {Subscription}
     */
    public setDiscounts(val: any): Subscription {
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
    }

    /**
     * Get Addons
     * List of the subscription addons
     * @return {any}
     */
    public getAddons(): any {
        return this.addons;
    }

    /**
     * Set Addons
     * List of the subscription addons
     * @param {any} val
     * @return {Subscription}
     */
    public setAddons(val: any): Subscription {
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
    }

    /**
     * Get Transactions
     * List of the subscription transactions
     * @return {any}
     */
    public getTransactions(): any {
        return this.transactions;
    }

    /**
     * Set Transactions
     * List of the subscription transactions
     * @param {any} val
     * @return {Subscription}
     */
    public setTransactions(val: any): Subscription {
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
    }

    /**
     * Get Customer
     * Customer linked to the subscription
     * @return {p.Customer}
     */
    public getCustomer(): p.Customer {
        return this.customer;
    }

    /**
     * Set Customer
     * Customer linked to the subscription
     * @param {p.Customer} val
     * @return {Subscription}
     */
    public setCustomer(val: p.Customer): Subscription {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newCustomer().getProcessOutObjectClass())
            this.customer = val;
        else {
            var obj = this.client.newCustomer();
            obj.fillWithData(val);
            this.customer = obj;
        }
        return this;
    }

    /**
     * Get CustomerId
     * ID of the customer linked to the subscription
     * @return {string}
     */
    public getCustomerId(): string {
        return this.customerId;
    }

    /**
     * Set CustomerId
     * ID of the customer linked to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setCustomerId(val: string): Subscription {
        this.customerId = val;
        return this;
    }

    /**
     * Get Token
     * Token used to capture payments on this subscription
     * @return {p.Token}
     */
    public getToken(): p.Token {
        return this.token;
    }

    /**
     * Set Token
     * Token used to capture payments on this subscription
     * @param {p.Token} val
     * @return {Subscription}
     */
    public setToken(val: p.Token): Subscription {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newToken().getProcessOutObjectClass())
            this.token = val;
        else {
            var obj = this.client.newToken();
            obj.fillWithData(val);
            this.token = obj;
        }
        return this;
    }

    /**
     * Get TokenId
     * ID of the token used to capture payments on this subscription
     * @return {string}
     */
    public getTokenId(): string {
        return this.tokenId;
    }

    /**
     * Set TokenId
     * ID of the token used to capture payments on this subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setTokenId(val: string): Subscription {
        this.tokenId = val;
        return this;
    }

    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription
     * @return {string}
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setUrl(val: string): Subscription {
        this.url = val;
        return this;
    }

    /**
     * Get Name
     * Name of the subscription
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Set Name
     * Name of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setName(val: string): Subscription {
        this.name = val;
        return this;
    }

    /**
     * Get Amount
     * Base amount of the subscription
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Base amount of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setAmount(val: string): Subscription {
        this.amount = val;
        return this;
    }

    /**
     * Get BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @return {string}
     */
    public getBillableAmount(): string {
        return this.billableAmount;
    }

    /**
     * Set BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setBillableAmount(val: string): Subscription {
        this.billableAmount = val;
        return this;
    }

    /**
     * Get DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @return {string}
     */
    public getDiscountedAmount(): string {
        return this.discountedAmount;
    }

    /**
     * Set DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setDiscountedAmount(val: string): Subscription {
        this.discountedAmount = val;
        return this;
    }

    /**
     * Get AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @return {string}
     */
    public getAddonsAmount(): string {
        return this.addonsAmount;
    }

    /**
     * Set AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @param {string} val
     * @return {Subscription}
     */
    public setAddonsAmount(val: string): Subscription {
        this.addonsAmount = val;
        return this;
    }

    /**
     * Get Currency
     * Currency of the subscription
     * @return {string}
     */
    public getCurrency(): string {
        return this.currency;
    }

    /**
     * Set Currency
     * Currency of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setCurrency(val: string): Subscription {
        this.currency = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Subscription}
     */
    public setMetadata(val: any): Subscription {
        this.metadata = val;
        return this;
    }

    /**
     * Get Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    public getInterval(): string {
        return this.interval;
    }

    /**
     * Set Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Subscription}
     */
    public setInterval(val: string): Subscription {
        this.interval = val;
        return this;
    }

    /**
     * Get TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @return {string}
     */
    public getTrialEndAt(): string {
        return this.trialEndAt;
    }

    /**
     * Set TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @param {string} val
     * @return {Subscription}
     */
    public setTrialEndAt(val: string): Subscription {
        this.trialEndAt = val;
        return this;
    }

    /**
     * Get Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @return {boolean}
     */
    public getActivated(): boolean {
        return this.activated;
    }

    /**
     * Set Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @param {boolean} val
     * @return {Subscription}
     */
    public setActivated(val: boolean): Subscription {
        this.activated = val;
        return this;
    }

    /**
     * Get Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @return {boolean}
     */
    public getActive(): boolean {
        return this.active;
    }

    /**
     * Set Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @param {boolean} val
     * @return {Subscription}
     */
    public setActive(val: boolean): Subscription {
        this.active = val;
        return this;
    }

    /**
     * Get CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @return {string}
     */
    public getCancelAt(): string {
        return this.cancelAt;
    }

    /**
     * Set CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @param {string} val
     * @return {Subscription}
     */
    public setCancelAt(val: string): Subscription {
        this.cancelAt = val;
        return this;
    }

    /**
     * Get Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @return {boolean}
     */
    public getCanceled(): boolean {
        return this.canceled;
    }

    /**
     * Set Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @param {boolean} val
     * @return {Subscription}
     */
    public setCanceled(val: boolean): Subscription {
        this.canceled = val;
        return this;
    }

    /**
     * Get CancellationReason
     * Reason as to why the subscription was cancelled
     * @return {string}
     */
    public getCancellationReason(): string {
        return this.cancellationReason;
    }

    /**
     * Set CancellationReason
     * Reason as to why the subscription was cancelled
     * @param {string} val
     * @return {Subscription}
     */
    public setCancellationReason(val: string): Subscription {
        this.cancellationReason = val;
        return this;
    }

    /**
     * Get PendingCancellation
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @return {boolean}
     */
    public getPendingCancellation(): boolean {
        return this.pendingCancellation;
    }

    /**
     * Set PendingCancellation
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @param {boolean} val
     * @return {Subscription}
     */
    public setPendingCancellation(val: boolean): Subscription {
        this.pendingCancellation = val;
        return this;
    }

    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @return {string}
     */
    public getReturnUrl(): string {
        return this.returnUrl;
    }

    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    public setReturnUrl(val: string): Subscription {
        this.returnUrl = val;
        return this;
    }

    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @return {string}
     */
    public getCancelUrl(): string {
        return this.cancelUrl;
    }

    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @param {string} val
     * @return {Subscription}
     */
    public setCancelUrl(val: string): Subscription {
        this.cancelUrl = val;
        return this;
    }

    /**
     * Get UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @return {string}
     */
    public getUnpaidState(): string {
        return this.unpaidState;
    }

    /**
     * Set UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @param {string} val
     * @return {Subscription}
     */
    public setUnpaidState(val: string): Subscription {
        this.unpaidState = val;
        return this;
    }

    /**
     * Get Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @return {boolean}
     */
    public getSandbox(): boolean {
        return this.sandbox;
    }

    /**
     * Set Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @param {boolean} val
     * @return {Subscription}
     */
    public setSandbox(val: boolean): Subscription {
        this.sandbox = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the subscription was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the subscription was created
     * @param {string} val
     * @return {Subscription}
     */
    public setCreatedAt(val: string): Subscription {
        this.createdAt = val;
        return this;
    }

    /**
     * Get ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @return {string}
     */
    public getActivatedAt(): string {
        return this.activatedAt;
    }

    /**
     * Set ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @param {string} val
     * @return {Subscription}
     */
    public setActivatedAt(val: string): Subscription {
        this.activatedAt = val;
        return this;
    }

    /**
     * Get IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @return {string}
     */
    public getIterateAt(): string {
        return this.iterateAt;
    }

    /**
     * Set IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @param {string} val
     * @return {Subscription}
     */
    public setIterateAt(val: string): Subscription {
        this.iterateAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Subscription}
     */
    public fillWithData(data: any): Subscription {
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
    }

    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    public toJSON(): any {
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
    }

    /**
     * Get the addons applied to the subscription.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchAddons(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/addons";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['addons'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newAddon();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a subscription's addon by its ID.
	 * @param string addonId
     * @param {any} options
     * @return {Promise<p.Addon>}
     */
    public findAddon(addonId: string, options): Promise<p.Addon> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/addons/" + encodeURI(addonId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['addon'];
                var obj0 = cur.client.newAddon();
                returnValues.push(obj0.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete an addon applied to a subscription.
	 * @param string addonId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public deleteAddon(addonId: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/addons/" + encodeURI(addonId) + "";

        var data = {
			'prorate': (options['prorate']) ? options['prorate'] : null, 
			'proration_date': (options['proration_date']) ? options['proration_date'] : null, 
			'preview': (options['preview']) ? options['preview'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get the customer owning the subscription.

     * @param {any} options
     * @return {Promise<p.Customer>}
     */
    public fetchCustomer(options): Promise<p.Customer> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/customers";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['customer'];
                var obj0 = cur.client.newCustomer();
                returnValues.push(obj0.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get the discounts applied to the subscription.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchDiscounts(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/discounts";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['discounts'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newDiscount();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a subscription's discount by its ID.
	 * @param string discountId
     * @param {any} options
     * @return {Promise<p.Discount>}
     */
    public findDiscount(discountId: string, options): Promise<p.Discount> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/discounts/" + encodeURI(discountId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['discount'];
                var obj0 = cur.client.newDiscount();
                returnValues.push(obj0.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Delete a discount applied to a subscription.
	 * @param string discountId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    public deleteDiscount(discountId: string, options): Promise<boolean> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/discounts/" + encodeURI(discountId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                returnValues.push(response.isSuccess());

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get the subscriptions past transactions.

     * @param {any} options
     * @return {Promise<any>}
     */
    public fetchTransactions(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "/transactions";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['transactions'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newTransaction();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Get all the subscriptions.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public all(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var a    = [];
                var body = respBody['subscriptions'];
                for (var i = body.length; i--;) {
                    var tmp = cur.client.newSubscription();
                    tmp.fillWithData(body[i]);
                    a.push(tmp);
                }

                returnValues.push(a);
                    

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Create a new subscription for the given customer.
     * 
     * @param {any} options
     * @return {Promise<any>}
     */
    public create(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
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

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.post(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Find a subscription by its ID.
	 * @param string subscriptionId
     * @param {any} options
     * @return {Promise<any>}
     */
    public find(subscriptionId: string, options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(subscriptionId) + "";

        var data = {

        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.get(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Save the updated subscription attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    public save(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
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

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.put(path, data, options).then(callback, callbackError);
            });
    }
    /**
     * Cancel a subscription. The reason may be provided as well.

     * @param {any} options
     * @return {Promise<any>}
     */
    public cancel(options): Promise<any> {
        if (!options) options = {};
        this.fillWithData(options);

        var request = new Request(this.client);
        var path    = "/subscriptions/" + encodeURI(this.getId()) + "";

        var data = {
			'cancel_at': this.getCancelAt(), 
			'cancellation_reason': this.getCancellationReason(), 
			'cancel_at_end': (options['cancel_at_end']) ? options['cancel_at_end'] : null
        };

        var cur = this;
        return new Promise(function(resolve, reject) {
            var callback = async function(resp: fetch.Response) {
                var respBody = {};
                try {
                    respBody = await resp.json();
                } catch(err) {}

                var response = new Response(resp, respBody);
                var err = response.check();
                if (err != null)
                    return reject(err);

                var returnValues = [];

                
                var body = respBody;
                body = body['subscription'];
                        
                returnValues.push(cur.fillWithData(body));

                return resolve.apply(this, returnValues);
            };
            var callbackError = function(err) {
                return reject(new ProcessOutNetworkError('processout-sdk.network-issue', err.message));
            };

            request.delete(path, data, options).then(callback, callbackError);
            });
    }
    
}
export = Subscription;
