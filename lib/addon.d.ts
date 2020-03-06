import ProcessOut = require('./processout');
import * as p from '.';
declare class Addon {
    private client;
    /**
     * ID of the addon
     * @type {string}
     */
    private id;
    /**
     * Project to which the addon belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the addon belongs
     * @type {string}
     */
    private projectId;
    /**
     * Subscription to which the addon belongs
     * @type {p.Subscription}
     */
    private subscription;
    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    private subscriptionId;
    /**
     * Plan used to create the addon, if any
     * @type {p.Plan}
     */
    private plan;
    /**
     * ID of the plan used to create the addon, if any
     * @type {string}
     */
    private planId;
    /**
     * Type of the addon. Can be either metered or recurring
     * @type {string}
     */
    private type;
    /**
     * Name of the addon
     * @type {string}
     */
    private name;
    /**
     * Amount of the addon
     * @type {string}
     */
    private amount;
    /**
     * Quantity of the addon
     * @type {number}
     */
    private quantity;
    /**
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Define whether or not the addon is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the addon was created
     * @type {string}
     */
    private createdAt;
    /**
     * Addon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Addon);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the addon
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the addon
     * @param {string} val
     * @return {Addon}
     */
    setId(val: string): Addon;
    /**
     * Get Project
     * Project to which the addon belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the addon belongs
     * @param {p.Project} val
     * @return {Addon}
     */
    setProject(val: p.Project): Addon;
    /**
     * Get ProjectId
     * ID of the project to which the addon belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    setProjectId(val: string): Addon;
    /**
     * Get Subscription
     * Subscription to which the addon belongs
     * @return {p.Subscription}
     */
    getSubscription(): p.Subscription;
    /**
     * Set Subscription
     * Subscription to which the addon belongs
     * @param {p.Subscription} val
     * @return {Addon}
     */
    setSubscription(val: p.Subscription): Addon;
    /**
     * Get SubscriptionId
     * ID of the subscription to which the addon belongs
     * @return {string}
     */
    getSubscriptionId(): string;
    /**
     * Set SubscriptionId
     * ID of the subscription to which the addon belongs
     * @param {string} val
     * @return {Addon}
     */
    setSubscriptionId(val: string): Addon;
    /**
     * Get Plan
     * Plan used to create the addon, if any
     * @return {p.Plan}
     */
    getPlan(): p.Plan;
    /**
     * Set Plan
     * Plan used to create the addon, if any
     * @param {p.Plan} val
     * @return {Addon}
     */
    setPlan(val: p.Plan): Addon;
    /**
     * Get PlanId
     * ID of the plan used to create the addon, if any
     * @return {string}
     */
    getPlanId(): string;
    /**
     * Set PlanId
     * ID of the plan used to create the addon, if any
     * @param {string} val
     * @return {Addon}
     */
    setPlanId(val: string): Addon;
    /**
     * Get Type
     * Type of the addon. Can be either metered or recurring
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the addon. Can be either metered or recurring
     * @param {string} val
     * @return {Addon}
     */
    setType(val: string): Addon;
    /**
     * Get Name
     * Name of the addon
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the addon
     * @param {string} val
     * @return {Addon}
     */
    setName(val: string): Addon;
    /**
     * Get Amount
     * Amount of the addon
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount of the addon
     * @param {string} val
     * @return {Addon}
     */
    setAmount(val: string): Addon;
    /**
     * Get Quantity
     * Quantity of the addon
     * @return {number}
     */
    getQuantity(): number;
    /**
     * Set Quantity
     * Quantity of the addon
     * @param {number} val
     * @return {Addon}
     */
    setQuantity(val: number): Addon;
    /**
     * Get Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the addon, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Addon}
     */
    setMetadata(val: any): Addon;
    /**
     * Get Sandbox
     * Define whether or not the addon is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the addon is in sandbox environment
     * @param {boolean} val
     * @return {Addon}
     */
    setSandbox(val: boolean): Addon;
    /**
     * Get CreatedAt
     * Date at which the addon was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the addon was created
     * @param {string} val
     * @return {Addon}
     */
    setCreatedAt(val: string): Addon;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Addon}
     */
    fillWithData(data: any): Addon;
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    toJSON(): any;
    /**
     * Get the addons applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {Promise<any>}
     */
    fetchSubscriptionAddons(subscriptionId: string, options: any): Promise<any>;
    /**
     * Create a new addon to the given subscription ID.

     * @param {any} options
     * @return {Promise<any>}
     */
    create(options: any): Promise<any>;
    /**
     * Find a subscription's addon by its ID.
     * @param string subscriptionId
     * @param string addonId
     * @param {any} options
     * @return {Promise<any>}
     */
    find(subscriptionId: string, addonId: string, options: any): Promise<any>;
    /**
     * Save the updated addon attributes.

     * @param {any} options
     * @return {Promise<any>}
     */
    save(options: any): Promise<any>;
    /**
     * Delete an addon applied to a subscription.

     * @param {any} options
     * @return {Promise<boolean>}
     */
    delete(options: any): Promise<boolean>;
}
export = Addon;
//# sourceMappingURL=addon.d.ts.map