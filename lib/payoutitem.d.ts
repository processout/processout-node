import ProcessOut = require("./processout");
declare class PayoutItem {
    private client;
    /**
     * ID of the payout item
     * @type {string}
     */
    private id;
    /**
     * Project to which the payout item belongs
     * @type {any}
     */
    private project;
    /**
     * ID of the project to which the payout item belongs
     * @type {string}
     */
    private projectId;
    /**
     * Payout to which the item belongs
     * @type {any}
     */
    private payout;
    /**
     * ID of the payout to which the item belongs
     * @type {string}
     */
    private payoutId;
    /**
     * Transaction linked to this payout item. Can be null
     * @type {any}
     */
    private transaction;
    /**
     * ID of the transaction linked to this payout item. Can be null
     * @type {string}
     */
    private transactionId;
    /**
     * Type of the payout item
     * @type {string}
     */
    private type;
    /**
     * ID of the payout item from the payment gateway
     * @type {string}
     */
    private gatewayResourceId;
    /**
     * Amount related to this specific payout item. Can be null or 0.
     * @type {string}
     */
    private amount;
    /**
     * Fee linked to this specific payout item. Can be null or 0.
     * @type {string}
     */
    private fees;
    /**
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Date at which the payout item was created
     * @type {string}
     */
    private createdAt;
    /**
     * PayoutItem constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PayoutItem);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the payout item
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    setId(val: string): PayoutItem;
    /**
     * Get Project
     * Project to which the payout item belongs
     * @return {any}
     */
    getProject(): any;
    /**
     * Set Project
     * Project to which the payout item belongs
     * @param {any} val
     * @return {PayoutItem}
     */
    setProject(val: any): PayoutItem;
    /**
     * Get ProjectId
     * ID of the project to which the payout item belongs
     * @return {string}
     */
    getProjectId(): string;
    /**
     * Set ProjectId
     * ID of the project to which the payout item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    setProjectId(val: string): PayoutItem;
    /**
     * Get Payout
     * Payout to which the item belongs
     * @return {any}
     */
    getPayout(): any;
    /**
     * Set Payout
     * Payout to which the item belongs
     * @param {any} val
     * @return {PayoutItem}
     */
    setPayout(val: any): PayoutItem;
    /**
     * Get PayoutId
     * ID of the payout to which the item belongs
     * @return {string}
     */
    getPayoutId(): string;
    /**
     * Set PayoutId
     * ID of the payout to which the item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    setPayoutId(val: string): PayoutItem;
    /**
     * Get Transaction
     * Transaction linked to this payout item. Can be null
     * @return {any}
     */
    getTransaction(): any;
    /**
     * Set Transaction
     * Transaction linked to this payout item. Can be null
     * @param {any} val
     * @return {PayoutItem}
     */
    setTransaction(val: any): PayoutItem;
    /**
     * Get TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @return {string}
     */
    getTransactionId(): string;
    /**
     * Set TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @param {string} val
     * @return {PayoutItem}
     */
    setTransactionId(val: string): PayoutItem;
    /**
     * Get Type
     * Type of the payout item
     * @return {string}
     */
    getType(): string;
    /**
     * Set Type
     * Type of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    setType(val: string): PayoutItem;
    /**
     * Get GatewayResourceId
     * ID of the payout item from the payment gateway
     * @return {string}
     */
    getGatewayResourceId(): string;
    /**
     * Set GatewayResourceId
     * ID of the payout item from the payment gateway
     * @param {string} val
     * @return {PayoutItem}
     */
    setGatewayResourceId(val: string): PayoutItem;
    /**
     * Get Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    setAmount(val: string): PayoutItem;
    /**
     * Get Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @return {string}
     */
    getFees(): string;
    /**
     * Set Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    setFees(val: string): PayoutItem;
    /**
     * Get Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {PayoutItem}
     */
    setMetadata(val: any): PayoutItem;
    /**
     * Get CreatedAt
     * Date at which the payout item was created
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the payout item was created
     * @param {string} val
     * @return {PayoutItem}
     */
    setCreatedAt(val: string): PayoutItem;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItem}
     */
    fillWithData(data: any): PayoutItem;
}
export = PayoutItem;
//# sourceMappingURL=payoutitem.d.ts.map