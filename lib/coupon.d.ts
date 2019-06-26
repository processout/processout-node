import Promise = require("promise");
import ProcessOut = require("./processout");
declare class Coupon {
    private client;
    /**
     * ID of the coupon
     * @type {string}
     */
    private id;
    /**
     * Project to which the coupon belongs
     * @type {any}
     */
    private project;
    /**
     * ID of the project to which the coupon belongs
     * @type {string}
     */
    private projectId;
    /**
     * Amount to be removed from the subscription price
     * @type {string}
     */
    private amountOff;
    /**
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @type {number}
     */
    private percentOff;
    /**
     * Currency of the coupon amount_off
     * @type {string}
     */
    private currency;
    /**
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @type {number}
     */
    private iterationCount;
    /**
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @type {number}
     */
    private maxRedemptions;
    /**
     * Date at which the coupon will expire
     * @type {string}
     */
    private expiresAt;
    /**
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Number of times the coupon was already redeemed
     * @type {number}
     */
    private redeemedNumber;
    /**
     * True if the coupon was created in the sandbox environment, false otherwise
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the coupon was created
     * @type {string}
     */
    private createdAt;
    /**
     * Coupon constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Coupon);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the coupon
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the coupon
     * @param {string} val
     * @return {Coupon}
     */
    setId(val: string): Coupon;
    /**
     * Get Project
     * Project to which the coupon belongs
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project to which the coupon belongs
     * @param {any} val
     * @return {Coupon}
     */
    setProject(val: any): Coupon;
    /**
     * Get ProjectId
     * ID of the project to which the coupon belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the coupon belongs
     * @param {string} val
     * @return {Coupon}
     */
    setProjectId(val: string): Coupon;
    /**
     * Get AmountOff
     * Amount to be removed from the subscription price
     * @return {string}
     */
    getAmountOff(): string;
    /**
     * Set AmountOff
     * Amount to be removed from the subscription price
     * @param {string} val
     * @return {Coupon}
     */
    setAmountOff(val: string): Coupon;
    /**
     * Get PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @return {number}
     */
    getPercentOff(): number;
    /**
     * Set PercentOff
     * Percent of the subscription amount to be removed (integer between 0 and 100)
     * @param {number} val
     * @return {Coupon}
     */
    setPercentOff(val: number): Coupon;
    /**
     * Get Currency
     * Currency of the coupon amount_off
     * @return {string}
     */
    getCurrency(): string;
    /**
     * Set Currency
     * Currency of the coupon amount_off
     * @param {string} val
     * @return {Coupon}
     */
    setCurrency(val: string): Coupon;
    /**
     * Get IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @return {number}
     */
    getIterationCount(): number;
    /**
     * Set IterationCount
     * Number billing cycles the coupon will last when applied to a subscription. If 0, will last forever
     * @param {number} val
     * @return {Coupon}
     */
    setIterationCount(val: number): Coupon;
    /**
     * Get MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @return {number}
     */
    getMaxRedemptions(): number;
    /**
     * Set MaxRedemptions
     * Number of time the coupon can be redeemed. If 0, there's no limit
     * @param {number} val
     * @return {Coupon}
     */
    setMaxRedemptions(val: number): Coupon;
    /**
     * Get ExpiresAt
     * Date at which the coupon will expire
     * @return {string}
     */
    getExpiresAt(): string;
    /**
     * Set ExpiresAt
     * Date at which the coupon will expire
     * @param {string} val
     * @return {Coupon}
     */
    setExpiresAt(val: string): Coupon;
    /**
     * Get Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the coupon, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Coupon}
     */
    setMetadata(val: any): Coupon;
    /**
     * Get RedeemedNumber
     * Number of times the coupon was already redeemed
     * @return {number}
     */
    getRedeemedNumber(): number;
    /**
     * Set RedeemedNumber
     * Number of times the coupon was already redeemed
     * @param {number} val
     * @return {Coupon}
     */
    setRedeemedNumber(val: number): Coupon;
    /**
     * Get Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * True if the coupon was created in the sandbox environment, false otherwise
     * @param {boolean} val
     * @return {Coupon}
     */
    setSandbox(val: boolean): Coupon;
    /**
     * Get CreatedAt
     * Date at which the coupon was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the coupon was created
     * @param {string} val
     * @return {Coupon}
     */
    setCreatedAt(val: string): Coupon;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Coupon}
     */
    fillWithData(data: any): Coupon;
    /**
     * Get all the coupons.
     *
     * @param {any} options
     * @return {array}
     */
    all(options: any): Promise<any>;
    /**
     * Create a new coupon.
     *
     * @param {any} options
     * @return {this}
     */
    create(options: any): Promise<any>;
    /**
     * Find a coupon by its ID.
     * @param string couponId
     * @param {any} options
     * @return {this}
     */
    find(couponId: any, options: any): Promise<any>;
    /**
     * Save the updated coupon attributes.

     * @param {any} options
     * @return {this}
     */
    save(options: any): Promise<any>;
    /**
     * Delete the coupon.

     * @param {any} options
     * @return {bool}
     */
    delete(options: any): Promise<any>;
}
export = Coupon;
