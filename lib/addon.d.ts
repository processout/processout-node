import Promise = require("promise");
import ProcessOut = require("./processout");
declare class Addon {
    private client;
    /**
     * ID of the addon
     * @type {string}
     */
    private id;
    /**
     * Project to which the addon belongs
     * @type {any}
     */
    private project;
    /**
     * ID of the project to which the addon belongs
     * @type {string}
     */
    private projectId;
    /**
     * Subscription to which the addon belongs
     * @type {any}
     */
    private subscription;
    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    private subscriptionId;
    /**
     * Plan used to create the addon, if any
     * @type {any}
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
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project to which the addon belongs
     * @param {any} val
     * @return {Addon}
     */
    setProject(val: any): Addon;
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
     * @return {any}
     */
    getSubscription(): any;
    /**
     * Set Subscription
     * Subscription to which the addon belongs
     * @param {any} val
     * @return {Addon}
     */
    setSubscription(val: any): Addon;
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
     * @return {any}
     */
    getPlan(): any;
    /**
     * Set Plan
     * Plan used to create the addon, if any
     * @param {any} val
     * @return {Addon}
     */
    setPlan(val: any): Addon;
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
     * Get the addons applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {array}
     */
    fetchSubscriptionAddons(subscriptionId: any, options: any): Promise<any>;
    /**
     * Create a new addon to the given subscription ID.

     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Find a subscription's addon by its ID.
     * @param string subscriptionId
     * @param string addonId
     * @param {any} options
     * @return {this}
     */
    find(subscriptionId: any, addonId: any, options: any): Promise<any>;
    /**
     * Save the updated addon attributes.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete an addon applied to a subscription.

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
}
export = Addon;
//# sourceMappingURL=addon.d.ts.map