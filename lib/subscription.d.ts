import ProcessOut = require('./processout');
import * as p from '.';
declare class Subscription {
    private client;
    /**
     * ID of the subscription
     * @type {string}
     */
    private id;
    /**
     * Project to which the subscription belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the subscription belongs
     * @type {string}
     */
    private projectId;
    /**
     * Plan linked to this subscription, if any
     * @type {p.Plan}
     */
    private plan;
    /**
     * ID of the plan linked to this subscription, if any
     * @type {string}
     */
    private planId;
    /**
     * List of the subscription discounts
     * @type {any}
     */
    private discounts;
    /**
     * List of the subscription addons
     * @type {any}
     */
    private addons;
    /**
     * List of the subscription transactions
     * @type {any}
     */
    private transactions;
    /**
     * Customer linked to the subscription
     * @type {p.Customer}
     */
    private customer;
    /**
     * ID of the customer linked to the subscription
     * @type {string}
     */
    private customerId;
    /**
     * Token used to capture payments on this subscription
     * @type {p.Token}
     */
    private token;
    /**
     * ID of the token used to capture payments on this subscription
     * @type {string}
     */
    private tokenId;
    /**
     * URL to which you may redirect your customer to activate the subscription
     * @type {string}
     */
    private url;
    /**
     * Name of the subscription
     * @type {string}
     */
    private name;
    /**
     * Base amount of the subscription
     * @type {string}
     */
    private amount;
    /**
     * Amount to be paid at each billing cycle of the subscription
     * @type {string}
     */
    private billableAmount;
    /**
     * Amount discounted by discounts applied to the subscription
     * @type {string}
     */
    private discountedAmount;
    /**
     * Amount applied on top of the subscription base price with addons
     * @type {string}
     */
    private addonsAmount;
    /**
     * Currency of the subscription
     * @type {string}
     */
    private currency;
    /**
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    private interval;
    /**
     * Date at which the subscription trial should end. Can be null to set no trial
     * @type {string}
     */
    private trialEndAt;
    /**
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @type {boolean}
     */
    private activated;
    /**
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @type {boolean}
     */
    private active;
    /**
     * Date at which the subscription will automatically be canceled. Can be null
     * @type {string}
     */
    private cancelAt;
    /**
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @type {boolean}
     */
    private canceled;
    /**
     * Reason as to why the subscription was cancelled
     * @type {string}
     */
    private cancellationReason;
    /**
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @type {boolean}
     */
    private pendingCancellation;
    /**
     * URL where the customer will be redirected upon activation of the subscription
     * @type {string}
     */
    private returnUrl;
    /**
     * URL where the customer will be redirected if the subscription activation was canceled
     * @type {string}
     */
    private cancelUrl;
    /**
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @type {string}
     */
    private unpaidState;
    /**
     * Define whether or not the subscription is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the subscription was created
     * @type {string}
     */
    private createdAt;
    /**
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @type {string}
     */
    private activatedAt;
    /**
     * Next iteration date, corresponding to the next billing cycle start date
     * @type {string}
     */
    private iterateAt;
    /**
     * Subscription constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Subscription);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the subscription
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setId(val: string): Subscription;
    /**
     * Get Project
     * Project to which the subscription belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the subscription belongs
     * @param {p.Project} val
     * @return {Subscription}
     */
    setProject(val: p.Project): Subscription;
    /**
     * Get ProjectId
     * ID of the project to which the subscription belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the subscription belongs
     * @param {string} val
     * @return {Subscription}
     */
    setProjectId(val: string): Subscription;
    /**
     * Get Plan
     * Plan linked to this subscription, if any
     * @return {p.Plan}
     */
    getPlan(): p.Plan;
    /**
     * Set Plan
     * Plan linked to this subscription, if any
     * @param {p.Plan} val
     * @return {Subscription}
     */
    setPlan(val: p.Plan): Subscription;
    /**
     * Get PlanId
     * ID of the plan linked to this subscription, if any
     * @return {string}
     */
    getPlanId(): string;
    /**
     * Set PlanId
     * ID of the plan linked to this subscription, if any
     * @param {string} val
     * @return {Subscription}
     */
    setPlanId(val: string): Subscription;
    /**
     * Get Discounts
     * List of the subscription discounts
     * @return {any}
     */
    getDiscounts(): any;
    /**
     * Set Discounts
     * List of the subscription discounts
     * @param {any} val
     * @return {Subscription}
     */
    setDiscounts(val: any): Subscription;
    /**
     * Get Addons
     * List of the subscription addons
     * @return {any}
     */
    getAddons(): any;
    /**
     * Set Addons
     * List of the subscription addons
     * @param {any} val
     * @return {Subscription}
     */
    setAddons(val: any): Subscription;
    /**
     * Get Transactions
     * List of the subscription transactions
     * @return {any}
     */
    getTransactions(): any;
    /**
     * Set Transactions
     * List of the subscription transactions
     * @param {any} val
     * @return {Subscription}
     */
    setTransactions(val: any): Subscription;
    /**
     * Get Customer
     * Customer linked to the subscription
     * @return {p.Customer}
     */
    getCustomer(): p.Customer;
    /**
     * Set Customer
     * Customer linked to the subscription
     * @param {p.Customer} val
     * @return {Subscription}
     */
    setCustomer(val: p.Customer): Subscription;
    /**
     * Get CustomerId
     * ID of the customer linked to the subscription
     * @return {string}
     */
    getCustomerId(): string;
    /**
     * Set CustomerId
     * ID of the customer linked to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setCustomerId(val: string): Subscription;
    /**
     * Get Token
     * Token used to capture payments on this subscription
     * @return {p.Token}
     */
    getToken(): p.Token;
    /**
     * Set Token
     * Token used to capture payments on this subscription
     * @param {p.Token} val
     * @return {Subscription}
     */
    setToken(val: p.Token): Subscription;
    /**
     * Get TokenId
     * ID of the token used to capture payments on this subscription
     * @return {string}
     */
    getTokenId(): string;
    /**
     * Set TokenId
     * ID of the token used to capture payments on this subscription
     * @param {string} val
     * @return {Subscription}
     */
    setTokenId(val: string): Subscription;
    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription
     * @return {string}
     */
    getUrl(): string;
    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setUrl(val: string): Subscription;
    /**
     * Get Name
     * Name of the subscription
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setName(val: string): Subscription;
    /**
     * Get Amount
     * Base amount of the subscription
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Base amount of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setAmount(val: string): Subscription;
    /**
     * Get BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @return {string}
     */
    getBillableAmount(): string;
    /**
     * Set BillableAmount
     * Amount to be paid at each billing cycle of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setBillableAmount(val: string): Subscription;
    /**
     * Get DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @return {string}
     */
    getDiscountedAmount(): string;
    /**
     * Set DiscountedAmount
     * Amount discounted by discounts applied to the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setDiscountedAmount(val: string): Subscription;
    /**
     * Get AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @return {string}
     */
    getAddonsAmount(): string;
    /**
     * Set AddonsAmount
     * Amount applied on top of the subscription base price with addons
     * @param {string} val
     * @return {Subscription}
     */
    setAddonsAmount(val: string): Subscription;
    /**
     * Get Currency
     * Currency of the subscription
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setCurrency(val: string): Subscription;
    /**
     * Get Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the subscription, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Subscription}
     */
    setMetadata(val: any): Subscription;
    /**
     * Get Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    getInterval(): string;
    /**
     * Set Interval
     * The subscription interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Subscription}
     */
    setInterval(val: string): Subscription;
    /**
     * Get TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @return {string}
     */
    getTrialEndAt(): string;
    /**
     * Set TrialEndAt
     * Date at which the subscription trial should end. Can be null to set no trial
     * @param {string} val
     * @return {Subscription}
     */
    setTrialEndAt(val: string): Subscription;
    /**
     * Get Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @return {boolean}
     */
    getActivated(): boolean;
    /**
     * Set Activated
     * Whether or not the subscription was activated. This field does not take into account whether or not the subscription was canceled. Use the active field to know if the subscription is currently active
     * @param {boolean} val
     * @return {Subscription}
     */
    setActivated(val: boolean): Subscription;
    /**
     * Get Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @return {boolean}
     */
    getActive(): boolean;
    /**
     * Set Active
     * Whether or not the subscription is currently active (ie activated and not cancelled)
     * @param {boolean} val
     * @return {Subscription}
     */
    setActive(val: boolean): Subscription;
    /**
     * Get CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @return {string}
     */
    getCancelAt(): string;
    /**
     * Set CancelAt
     * Date at which the subscription will automatically be canceled. Can be null
     * @param {string} val
     * @return {Subscription}
     */
    setCancelAt(val: string): Subscription;
    /**
     * Get Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @return {boolean}
     */
    getCanceled(): boolean;
    /**
     * Set Canceled
     * Whether or not the subscription was canceled. The cancellation reason can be found in the cancellation_reason field
     * @param {boolean} val
     * @return {Subscription}
     */
    setCanceled(val: boolean): Subscription;
    /**
     * Get CancellationReason
     * Reason as to why the subscription was cancelled
     * @return {string}
     */
    getCancellationReason(): string;
    /**
     * Set CancellationReason
     * Reason as to why the subscription was cancelled
     * @param {string} val
     * @return {Subscription}
     */
    setCancellationReason(val: string): Subscription;
    /**
     * Get PendingCancellation
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @return {boolean}
     */
    getPendingCancellation(): boolean;
    /**
     * Set PendingCancellation
     * Whether or not the subscription is pending cancellation (meaning a cancel_at date was set)
     * @param {boolean} val
     * @return {Subscription}
     */
    setPendingCancellation(val: boolean): Subscription;
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @return {string}
     */
    getReturnUrl(): string;
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected upon activation of the subscription
     * @param {string} val
     * @return {Subscription}
     */
    setReturnUrl(val: string): Subscription;
    /**
     * Get CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @return {string}
     */
    getCancelUrl(): string;
    /**
     * Set CancelUrl
     * URL where the customer will be redirected if the subscription activation was canceled
     * @param {string} val
     * @return {Subscription}
     */
    setCancelUrl(val: string): Subscription;
    /**
     * Get UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @return {string}
     */
    getUnpaidState(): string;
    /**
     * Set UnpaidState
     * When the subscription has unpaid invoices, defines the dunning logic of the subscription (as specified in the project settings)
     * @param {string} val
     * @return {Subscription}
     */
    setUnpaidState(val: string): Subscription;
    /**
     * Get Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the subscription is in sandbox environment
     * @param {boolean} val
     * @return {Subscription}
     */
    setSandbox(val: boolean): Subscription;
    /**
     * Get CreatedAt
     * Date at which the subscription was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the subscription was created
     * @param {string} val
     * @return {Subscription}
     */
    setCreatedAt(val: string): Subscription;
    /**
     * Get ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @return {string}
     */
    getActivatedAt(): string;
    /**
     * Set ActivatedAt
     * Date at which the subscription was activated. Null if the subscription hasn't been activated yet
     * @param {string} val
     * @return {Subscription}
     */
    setActivatedAt(val: string): Subscription;
    /**
     * Get IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @return {string}
     */
    getIterateAt(): string;
    /**
     * Set IterateAt
     * Next iteration date, corresponding to the next billing cycle start date
     * @param {string} val
     * @return {Subscription}
     */
    setIterateAt(val: string): Subscription;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Subscription}
     */
    fillWithData(data: any): Subscription;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get the addons applied to the subscription.

     * @param {any} options
     * @return {Promise<any>}
     */
    fetchAddons(options: any): Promise<any>;
    /**
     * Find a subscription's addon by its ID.
     * @param string addonId
     * @param {any} options
     * @return {Promise<p.Addon>}
     */
    findAddon(addonId: string, options: any): Promise<p.Addon>;
    /**
     * Delete an addon applied to a subscription.
     * @param string addonId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    deleteAddon(addonId: string, options: any): Promise<boolean>;
    /**
     * Get the customer owning the subscription.

     * @param {any} options
     * @return {Promise<p.Customer>}
     */
    fetchCustomer(options: any): Promise<p.Customer>;
    /**
     * Get the discounts applied to the subscription.

     * @param {any} options
     * @return {Promise<any>}
     */
    fetchDiscounts(options: any): Promise<any>;
    /**
     * Find a subscription's discount by its ID.
     * @param string discountId
     * @param {any} options
     * @return {Promise<p.Discount>}
     */
    findDiscount(discountId: string, options: any): Promise<p.Discount>;
    /**
     * Delete a discount applied to a subscription.
     * @param string discountId
     * @param {any} options
     * @return {Promise<boolean>}
     */
    deleteDiscount(discountId: string, options: any): Promise<boolean>;
    /**
     * Get the subscriptions past transactions.

     * @param {any} options
     * @return {Promise<any>}
     */
    fetchTransactions(options: any): Promise<any>;
    /**
     * Get all the subscriptions.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    all(options: any): Promise<any>;
    /**
     * Create a new subscription for the given customer.
     *
     * @param {any} options
     * @return {Promise<any>}
     */
    create(options: any): Promise<any>;
    /**
     * Find a subscription by its ID.
     * @param string subscriptionId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(subscriptionId: string, options: any): Promise<any>;
    /**
     * Save the updated subscription attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    save(options: any): Promise<any>;
    /**
     * Cancel a subscription. The reason may be provided as well.

     * @param {any} options
     * @return {Promise<any>}
     */
    cancel(options: any): Promise<any>;
}
export = Subscription;
//# sourceMappingURL=subscription.d.ts.map