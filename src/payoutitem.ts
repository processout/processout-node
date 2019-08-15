// The content of this file was automatically generated

import Promise    = require('promise');
import ProcessOut = require('./processout');
import Response   = require('./networking/response');
import Request    = require('./networking/request');

import ProcessOutNetworkError = require('./errors/processoutnetworkerror');

import * as p from '.';

class PayoutItem {
    private client: ProcessOut = null;

    /**
     * ID of the payout item
     * @type {string}
     */
    private id: string = null;

    /**
     * Project to which the payout item belongs
     * @type {p.Project}
     */
    private project: p.Project = null;

    /**
     * ID of the project to which the payout item belongs
     * @type {string}
     */
    private projectId: string = null;

    /**
     * Payout to which the item belongs
     * @type {p.Payout}
     */
    private payout: p.Payout = null;

    /**
     * ID of the payout to which the item belongs
     * @type {string}
     */
    private payoutId: string = null;

    /**
     * Transaction linked to this payout item. Can be null
     * @type {p.Transaction}
     */
    private transaction: p.Transaction = null;

    /**
     * ID of the transaction linked to this payout item. Can be null
     * @type {string}
     */
    private transactionId: string = null;

    /**
     * Type of the payout item
     * @type {string}
     */
    private type: string = null;

    /**
     * ID of the payout item from the payment gateway
     * @type {string}
     */
    private gatewayResourceId: string = null;

    /**
     * Amount related to this specific payout item. Can be null or 0.
     * @type {string}
     */
    private amount: string = null;

    /**
     * Fee linked to this specific payout item. Can be null or 0.
     * @type {string}
     */
    private fees: string = null;

    /**
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @type {any}
     */
    private metadata: any = null;

    /**
     * Date at which the payout item was created
     * @type {string}
     */
    private createdAt: string = null;

    /**
     * PayoutItem constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor(client: ProcessOut, prefill: PayoutItem) {
        if (typeof client === 'undefined')
            throw new Error("The PayoutItem object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayoutItem()");

        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }

    public getProcessOutObjectClass(): string {
        return "PayoutItem";
    }

    /**
     * Get Id
     * ID of the payout item
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Set Id
     * ID of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    public setId(val: string): PayoutItem {
        this.id = val;
        return this;
    }

    /**
     * Get Project
     * Project to which the payout item belongs
     * @return {p.Project}
     */
    public getProject(): p.Project {
        return this.project;
    }

    /**
     * Set Project
     * Project to which the payout item belongs
     * @param {p.Project} val
     * @return {PayoutItem}
     */
    public setProject(val: p.Project): PayoutItem {
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
     * ID of the project to which the payout item belongs
     * @return {string}
     */
    public getProjectId(): string {
        return this.projectId;
    }

    /**
     * Set ProjectId
     * ID of the project to which the payout item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    public setProjectId(val: string): PayoutItem {
        this.projectId = val;
        return this;
    }

    /**
     * Get Payout
     * Payout to which the item belongs
     * @return {p.Payout}
     */
    public getPayout(): p.Payout {
        return this.payout;
    }

    /**
     * Set Payout
     * Payout to which the item belongs
     * @param {p.Payout} val
     * @return {PayoutItem}
     */
    public setPayout(val: p.Payout): PayoutItem {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPayout().getProcessOutObjectClass())
            this.payout = val;
        else {
            var obj = this.client.newPayout();
            obj.fillWithData(val);
            this.payout = obj;
        }
        return this;
    }

    /**
     * Get PayoutId
     * ID of the payout to which the item belongs
     * @return {string}
     */
    public getPayoutId(): string {
        return this.payoutId;
    }

    /**
     * Set PayoutId
     * ID of the payout to which the item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    public setPayoutId(val: string): PayoutItem {
        this.payoutId = val;
        return this;
    }

    /**
     * Get Transaction
     * Transaction linked to this payout item. Can be null
     * @return {p.Transaction}
     */
    public getTransaction(): p.Transaction {
        return this.transaction;
    }

    /**
     * Set Transaction
     * Transaction linked to this payout item. Can be null
     * @param {p.Transaction} val
     * @return {PayoutItem}
     */
    public setTransaction(val: p.Transaction): PayoutItem {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    }

    /**
     * Get TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @return {string}
     */
    public getTransactionId(): string {
        return this.transactionId;
    }

    /**
     * Set TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @param {string} val
     * @return {PayoutItem}
     */
    public setTransactionId(val: string): PayoutItem {
        this.transactionId = val;
        return this;
    }

    /**
     * Get Type
     * Type of the payout item
     * @return {string}
     */
    public getType(): string {
        return this.type;
    }

    /**
     * Set Type
     * Type of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    public setType(val: string): PayoutItem {
        this.type = val;
        return this;
    }

    /**
     * Get GatewayResourceId
     * ID of the payout item from the payment gateway
     * @return {string}
     */
    public getGatewayResourceId(): string {
        return this.gatewayResourceId;
    }

    /**
     * Set GatewayResourceId
     * ID of the payout item from the payment gateway
     * @param {string} val
     * @return {PayoutItem}
     */
    public setGatewayResourceId(val: string): PayoutItem {
        this.gatewayResourceId = val;
        return this;
    }

    /**
     * Get Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @return {string}
     */
    public getAmount(): string {
        return this.amount;
    }

    /**
     * Set Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    public setAmount(val: string): PayoutItem {
        this.amount = val;
        return this;
    }

    /**
     * Get Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @return {string}
     */
    public getFees(): string {
        return this.fees;
    }

    /**
     * Set Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    public setFees(val: string): PayoutItem {
        this.fees = val;
        return this;
    }

    /**
     * Get Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    public getMetadata(): any {
        return this.metadata;
    }

    /**
     * Set Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {PayoutItem}
     */
    public setMetadata(val: any): PayoutItem {
        this.metadata = val;
        return this;
    }

    /**
     * Get CreatedAt
     * Date at which the payout item was created
     * @return {string}
     */
    public getCreatedAt(): string {
        return this.createdAt;
    }

    /**
     * Set CreatedAt
     * Date at which the payout item was created
     * @param {string} val
     * @return {PayoutItem}
     */
    public setCreatedAt(val: string): PayoutItem {
        this.createdAt = val;
        return this;
    }

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItem}
     */
    public fillWithData(data: any): PayoutItem {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["project_id"])
            this.setProjectId(data["project_id"]);
        if (data["payout"])
            this.setPayout(data["payout"]);
        if (data["payout_id"])
            this.setPayoutId(data["payout_id"]);
        if (data["transaction"])
            this.setTransaction(data["transaction"]);
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["gateway_resource_id"])
            this.setGatewayResourceId(data["gateway_resource_id"]);
        if (data["amount"])
            this.setAmount(data["amount"]);
        if (data["fees"])
            this.setFees(data["fees"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    }

    
}
export = PayoutItem;
