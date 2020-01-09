import ProcessOut = require('./processout');
import * as p from '.';
declare class Plan {
    private client;
    /**
     * ID of the plan
     * @type {string}
     */
    private id;
    /**
     * Project to which the plan belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the plan belongs
     * @type {string}
     */
    private projectId;
    /**
     * URL to which you may redirect your customer to activate the subscription plan
     * @type {string}
     */
    private url;
    /**
     * Name of the plan
     * @type {string}
     */
    private name;
    /**
     * Amount of the plan
     * @type {string}
     */
    private amount;
    /**
     * Currency of the plan
     * @type {string}
     */
    private currency;
    /**
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    private interval;
    /**
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @type {string}
     */
    private trialPeriod;
    /**
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @type {string}
     */
    private returnUrl;
    /**
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @type {string}
     */
    private cancelUrl;
    /**
     * Define whether or not the plan is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the plan was created
     * @type {string}
     */
    private createdAt;
    /**
     * Plan constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Plan);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the plan
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the plan
     * @param {string} val
     * @return {Plan}
     */
    setId(val: string): Plan;
    /**
     * Get Project
     * Project to which the plan belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the plan belongs
     * @param {p.Project} val
     * @return {Plan}
     */
    setProject(val: p.Project): Plan;
    /**
     * Get ProjectId
     * ID of the project to which the plan belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the plan belongs
     * @param {string} val
     * @return {Plan}
     */
    setProjectId(val: string): Plan;
    /**
     * Get Url
     * URL to which you may redirect your customer to activate the subscription plan
     * @return {string}
     */
    getUrl(): string;
    /**
     * Set Url
     * URL to which you may redirect your customer to activate the subscription plan
     * @param {string} val
     * @return {Plan}
     */
    setUrl(val: string): Plan;
    /**
     * Get Name
     * Name of the plan
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the plan
     * @param {string} val
     * @return {Plan}
     */
    setName(val: string): Plan;
    /**
     * Get Amount
     * Amount of the plan
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the plan
     * @param {string} val
     * @return {Plan}
     */
    setAmount(val: string): Plan;
    /**
     * Get Currency
     * Currency of the plan
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the plan
     * @param {string} val
     * @return {Plan}
     */
    setCurrency(val: string): Plan;
    /**
     * Get Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the plan, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Plan}
     */
    setMetadata(val: any): Plan;
    /**
     * Get Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    getInterval(): string;
    /**
     * Set Interval
     * The plan interval, formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Plan}
     */
    setInterval(val: string): Plan;
    /**
     * Get TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @return {string}
     */
    getTrialPeriod(): string;
    /**
     * Set TrialPeriod
     * The trial period. The customer will not be charged during this time span. Formatted in the format "1d2w3m4y" (day, week, month, year)
     * @param {string} val
     * @return {Plan}
     */
    setTrialPeriod(val: string): Plan;
    /**
     * Get ReturnUrl
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @return {string}
     */
    getReturnUrl(): string;
    /**
     * Set ReturnUrl
     * URL where the customer will be redirected when activating the subscription created using this plan
     * @param {string} val
     * @return {Plan}
     */
    setReturnUrl(val: string): Plan;
    /**
     * Get CancelUrl
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @return {string}
     */
    getCancelUrl(): string;
    /**
     * Set CancelUrl
     * URL where the customer will be redirected when cancelling the subscription created using this plan
     * @param {string} val
     * @return {Plan}
     */
    setCancelUrl(val: string): Plan;
    /**
     * Get Sandbox
     * Define whether or not the plan is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the plan is in sandbox environment
     * @param {boolean} val
     * @return {Plan}
     */
    setSandbox(val: boolean): Plan;
    /**
     * Get CreatedAt
     * Date at which the plan was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the plan was created
     * @param {string} val
     * @return {Plan}
     */
    setCreatedAt(val: string): Plan;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Plan}
     */
    fillWithData(data: any): Plan;
    /**
     * Get all the plans.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Create a new plan.
     *
     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Find a plan by its ID.
     * @param string planId
     * @param {any} options
     * @return {this}
     */
    find(planId: any, options: any): Promise<any>;
    /**
     * Save the updated plan attributes. This action won't affect subscriptions already linked to this plan.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete a plan. Subscriptions linked to this plan won't be affected.

     * @param {any} options
     * @return {bool}
     */
    end(options: any): Promise<any>;
}
export = Plan;
//# sourceMappingURL=plan.d.ts.map