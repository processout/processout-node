import ProcessOut = require('./processout');
import * as p from '.';
declare class Discount {
    private client;
    /**
     * ID of the discount
     * @type {string}
     */
    private id;
    /**
     * Project to which the discount belongs
     * @type {p.Project}
     */
    private project;
    /**
     * ID of the project to which the discount belongs
     * @type {string}
     */
    private projectId;
    /**
     * Subscription to which the discount belongs
     * @type {p.Subscription}
     */
    private subscription;
    /**
     * ID of the subscription to which the addon belongs
     * @type {string}
     */
    private subscriptionId;
    /**
     * Coupon used to create the discount, if any
     * @type {p.Coupon}
     */
    private coupon;
    /**
     * ID of the coupon used to create the discount, if any
     * @type {string}
     */
    private couponId;
    /**
     * Name of the discount
     * @type {string}
     */
    private name;
    /**
     * Amount discounted
     * @type {string}
     */
    private amount;
    /**
     * Percentage discounted
     * @type {number}
     */
    private percent;
    /**
     * Date at which the discount will expire
     * @type {string}
     */
    private expiresAt;
    /**
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Define whether or not the discount is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the discount was created
     * @type {string}
     */
    private createdAt;
    /**
     * Discount constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Discount);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the discount
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the discount
     * @param {string} val
     * @return {Discount}
     */
    setId(val: string): Discount;
    /**
     * Get Project
     * Project to which the discount belongs
     * @return {p.Project}
     */
    getProject(): p.Project;
    /**
     * Set Project
     * Project to which the discount belongs
     * @param {p.Project} val
     * @return {Discount}
     */
    setProject(val: p.Project): Discount;
    /**
     * Get ProjectId
     * ID of the project to which the discount belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the discount belongs
     * @param {string} val
     * @return {Discount}
     */
    setProjectId(val: string): Discount;
    /**
     * Get Subscription
     * Subscription to which the discount belongs
     * @return {p.Subscription}
     */
    getSubscription(): p.Subscription;
    /**
     * Set Subscription
     * Subscription to which the discount belongs
     * @param {p.Subscription} val
     * @return {Discount}
     */
    setSubscription(val: p.Subscription): Discount;
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
     * @return {Discount}
     */
    setSubscriptionId(val: string): Discount;
    /**
     * Get Coupon
     * Coupon used to create the discount, if any
     * @return {p.Coupon}
     */
    getCoupon(): p.Coupon;
    /**
     * Set Coupon
     * Coupon used to create the discount, if any
     * @param {p.Coupon} val
     * @return {Discount}
     */
    setCoupon(val: p.Coupon): Discount;
    /**
     * Get CouponId
     * ID of the coupon used to create the discount, if any
     * @return {string}
     */
    getCouponId(): string;
    /**
     * Set CouponId
     * ID of the coupon used to create the discount, if any
     * @param {string} val
     * @return {Discount}
     */
    setCouponId(val: string): Discount;
    /**
     * Get Name
     * Name of the discount
     * @return {string}
     */
    getName(): string;
    /**
     * Set Name
     * Name of the discount
     * @param {string} val
     * @return {Discount}
     */
    setName(val: string): Discount;
    /**
     * Get Amount
     * Amount discounted
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount discounted
     * @param {string} val
     * @return {Discount}
     */
    setAmount(val: string): Discount;
    /**
     * Get Percent
     * Percentage discounted
     * @return {number}
     */
    getPercent(): number;
    /**
     * Set Percent
     * Percentage discounted
     * @param {number} val
     * @return {Discount}
     */
    setPercent(val: number): Discount;
    /**
     * Get ExpiresAt
     * Date at which the discount will expire
     * @return {string}
     */
    getExpiresAt(): string;
    /**
     * Set ExpiresAt
     * Date at which the discount will expire
     * @param {string} val
     * @return {Discount}
     */
    setExpiresAt(val: string): Discount;
    /**
     * Get Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the discount, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Discount}
     */
    setMetadata(val: any): Discount;
    /**
     * Get Sandbox
     * Define whether or not the discount is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the discount is in sandbox environment
     * @param {boolean} val
     * @return {Discount}
     */
    setSandbox(val: boolean): Discount;
    /**
     * Get CreatedAt
     * Date at which the discount was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the discount was created
     * @param {string} val
     * @return {Discount}
     */
    setCreatedAt(val: string): Discount;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Discount}
     */
    fillWithData(data: any): Discount;
    /**
     * Get the discounts applied to the subscription.
     * @param string subscriptionId
     * @param {any} options
     * @return {array}
     */
    fetchSubscriptionDiscounts(subscriptionId: any, options: any): Promise<any>;
    /**
     * Create a new discount for the given subscription ID.

     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Find a subscription's discount by its ID.
     * @param string subscriptionId
     * @param string discountId
     * @param {any} options
     * @return {this}
     */
    find(subscriptionId: any, discountId: any, options: any): Promise<any>;
    /**
     * Delete a discount applied to a subscription.

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
}
export = Discount;
//# sourceMappingURL=discount.d.ts.map