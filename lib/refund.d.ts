import Promise = require('promise');
import ProcessOut = require('./processout');
import * as p from '.';
declare class Refund {
    private client;
    /**
     * ID of the refund
     * @type {string}
     */
    private id;
    /**
     * Transaction to which the refund is applied
     * @type {p.Transaction}
     */
    private transaction;
    /**
     * ID of the transaction to which the refund is applied
     * @type {string}
     */
    private transactionId;
    /**
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @type {string}
     */
    private amount;
    /**
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @type {string}
     */
    private reason;
    /**
     * Custom details regarding the refund
     * @type {string}
     */
    private information;
    /**
     * True if the refund was asynchronously failed, false otherwise
     * @type {boolean}
     */
    private hasFailed;
    /**
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata;
    /**
     * Define whether or not the refund is in sandbox environment
     * @type {boolean}
     */
    private sandbox;
    /**
     * Date at which the refund was done
     * @type {string}
     */
    private createdAt;
    /**
     * Refund constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: Refund);
    getProcessOutObjectClass(): string;
    /**
     * Get Id
     * ID of the refund
     * @return {string}
     */
    getId(): string;
    /**
     * Set Id
     * ID of the refund
     * @param {string} val
     * @return {Refund}
     */
    setId(val: string): Refund;
    /**
     * Get Transaction
     * Transaction to which the refund is applied
     * @return {p.Transaction}
     */
    getTransaction(): p.Transaction;
    /**
     * Set Transaction
     * Transaction to which the refund is applied
     * @param {p.Transaction} val
     * @return {Refund}
     */
    setTransaction(val: p.Transaction): Refund;
    /**
     * Get TransactionId
     * ID of the transaction to which the refund is applied
     * @return {string}
     */
    getTransactionId(): string;
    /**
     * Set TransactionId
     * ID of the transaction to which the refund is applied
     * @param {string} val
     * @return {Refund}
     */
    setTransactionId(val: string): Refund;
    /**
     * Get Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @return {string}
     */
    getAmount(): string;
    /**
     * Set Amount
     * Amount to be refunded. Must not be greater than the amount still available on the transaction
     * @param {string} val
     * @return {Refund}
     */
    setAmount(val: string): Refund;
    /**
     * Get Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @return {string}
     */
    getReason(): string;
    /**
     * Set Reason
     * Reason for the refund. Either customer_request, duplicate or fraud
     * @param {string} val
     * @return {Refund}
     */
    setReason(val: string): Refund;
    /**
     * Get Information
     * Custom details regarding the refund
     * @return {string}
     */
    getInformation(): string;
    /**
     * Set Information
     * Custom details regarding the refund
     * @param {string} val
     * @return {Refund}
     */
    setInformation(val: string): Refund;
    /**
     * Get HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @return {boolean}
     */
    getHasFailed(): boolean;
    /**
     * Set HasFailed
     * True if the refund was asynchronously failed, false otherwise
     * @param {boolean} val
     * @return {Refund}
     */
    setHasFailed(val: boolean): Refund;
    /**
     * Get Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    getMetadata(): any;
    /**
     * Set Metadata
     * Metadata related to the refund, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {Refund}
     */
    setMetadata(val: any): Refund;
    /**
     * Get Sandbox
     * Define whether or not the refund is in sandbox environment
     * @return {boolean}
     */
    getSandbox(): boolean;
    /**
     * Set Sandbox
     * Define whether or not the refund is in sandbox environment
     * @param {boolean} val
     * @return {Refund}
     */
    setSandbox(val: boolean): Refund;
    /**
     * Get CreatedAt
     * Date at which the refund was done
     * @return {string}
     */
    getCreatedAt(): string;
    /**
     * Set CreatedAt
     * Date at which the refund was done
     * @param {string} val
     * @return {Refund}
     */
    setCreatedAt(val: string): Refund;
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Refund}
     */
    fillWithData(data: any): Refund;
    /**
     * Get the transaction's refunds.
     * @param string transactionId
     * @param {any} options
     * @return {array}
     */
    fetchTransactionRefunds(transactionId: any, options: any): Promise<any>;
    /**
     * Find a transaction's refund by its ID.
     * @param string transactionId
     * @param string refundId
     * @param {any} options
     * @return {this}
     */
    find(transactionId: any, refundId: any, options: any): Promise<any>;
    /**
     * Create a refund for a transaction.

     * @param {any} options
     * @return {bool}
     */
    create(options: any): Promise<any>;
}
export = Refund;
//# sourceMappingURL=refund.d.ts.map