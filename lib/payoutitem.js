"use strict";
// The content of this file was automatically generated
var PayoutItem = /** @class */ (function () {
    /**
     * PayoutItem constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function PayoutItem(client, prefill) {
        this.client = null;
        /**
         * ID of the payout item
         * @type {string}
         */
        this.id = null;
        /**
         * Project to which the payout item belongs
         * @type {p.Project}
         */
        this.project = null;
        /**
         * ID of the project to which the payout item belongs
         * @type {string}
         */
        this.projectId = null;
        /**
         * Payout to which the item belongs
         * @type {p.Payout}
         */
        this.payout = null;
        /**
         * ID of the payout to which the item belongs
         * @type {string}
         */
        this.payoutId = null;
        /**
         * Transaction linked to this payout item. Can be null
         * @type {p.Transaction}
         */
        this.transaction = null;
        /**
         * ID of the transaction linked to this payout item. Can be null
         * @type {string}
         */
        this.transactionId = null;
        /**
         * Type of the payout item
         * @type {string}
         */
        this.type = null;
        /**
         * ID of the payout item from the payment gateway
         * @type {string}
         */
        this.gatewayResourceId = null;
        /**
         * Amount related to this specific payout item. Can be null or 0.
         * @type {string}
         */
        this.amount = null;
        /**
         * Fee linked to this specific payout item. Can be null or 0.
         * @type {string}
         */
        this.fees = null;
        /**
         * Metadata related to the payout item, in the form of a dictionary (key-value pair)
         * @type {any}
         */
        this.metadata = null;
        /**
         * Date at which the payout item was created
         * @type {string}
         */
        this.createdAt = null;
        /**
         * breakdown of amount for the item
         * @type {p.PayoutItemAmountBreakdowns}
         */
        this.breakdown = null;
        if (typeof client === 'undefined')
            throw new Error("The PayoutItem object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayoutItem()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    PayoutItem.prototype.getProcessOutObjectClass = function () {
        return "PayoutItem";
    };
    /**
     * Get Id
     * ID of the payout item
     * @return {string}
     */
    PayoutItem.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set Id
     * ID of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setId = function (val) {
        this.id = val;
        return this;
    };
    /**
     * Get Project
     * Project to which the payout item belongs
     * @return {p.Project}
     */
    PayoutItem.prototype.getProject = function () {
        return this.project;
    };
    /**
     * Set Project
     * Project to which the payout item belongs
     * @param {p.Project} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setProject = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newProject().getProcessOutObjectClass())
            this.project = val;
        else {
            var obj = this.client.newProject();
            obj.fillWithData(val);
            this.project = obj;
        }
        return this;
    };
    /**
     * Get ProjectId
     * ID of the project to which the payout item belongs
     * @return {string}
     */
    PayoutItem.prototype.getProjectId = function () {
        return this.projectId;
    };
    /**
     * Set ProjectId
     * ID of the project to which the payout item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setProjectId = function (val) {
        this.projectId = val;
        return this;
    };
    /**
     * Get Payout
     * Payout to which the item belongs
     * @return {p.Payout}
     */
    PayoutItem.prototype.getPayout = function () {
        return this.payout;
    };
    /**
     * Set Payout
     * Payout to which the item belongs
     * @param {p.Payout} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setPayout = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPayout().getProcessOutObjectClass())
            this.payout = val;
        else {
            var obj = this.client.newPayout();
            obj.fillWithData(val);
            this.payout = obj;
        }
        return this;
    };
    /**
     * Get PayoutId
     * ID of the payout to which the item belongs
     * @return {string}
     */
    PayoutItem.prototype.getPayoutId = function () {
        return this.payoutId;
    };
    /**
     * Set PayoutId
     * ID of the payout to which the item belongs
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setPayoutId = function (val) {
        this.payoutId = val;
        return this;
    };
    /**
     * Get Transaction
     * Transaction linked to this payout item. Can be null
     * @return {p.Transaction}
     */
    PayoutItem.prototype.getTransaction = function () {
        return this.transaction;
    };
    /**
     * Set Transaction
     * Transaction linked to this payout item. Can be null
     * @param {p.Transaction} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setTransaction = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newTransaction().getProcessOutObjectClass())
            this.transaction = val;
        else {
            var obj = this.client.newTransaction();
            obj.fillWithData(val);
            this.transaction = obj;
        }
        return this;
    };
    /**
     * Get TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @return {string}
     */
    PayoutItem.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    /**
     * Set TransactionId
     * ID of the transaction linked to this payout item. Can be null
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setTransactionId = function (val) {
        this.transactionId = val;
        return this;
    };
    /**
     * Get Type
     * Type of the payout item
     * @return {string}
     */
    PayoutItem.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Type of the payout item
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get GatewayResourceId
     * ID of the payout item from the payment gateway
     * @return {string}
     */
    PayoutItem.prototype.getGatewayResourceId = function () {
        return this.gatewayResourceId;
    };
    /**
     * Set GatewayResourceId
     * ID of the payout item from the payment gateway
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setGatewayResourceId = function (val) {
        this.gatewayResourceId = val;
        return this;
    };
    /**
     * Get Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @return {string}
     */
    PayoutItem.prototype.getAmount = function () {
        return this.amount;
    };
    /**
     * Set Amount
     * Amount related to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setAmount = function (val) {
        this.amount = val;
        return this;
    };
    /**
     * Get Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @return {string}
     */
    PayoutItem.prototype.getFees = function () {
        return this.fees;
    };
    /**
     * Set Fees
     * Fee linked to this specific payout item. Can be null or 0.
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setFees = function (val) {
        this.fees = val;
        return this;
    };
    /**
     * Get Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @return {any}
     */
    PayoutItem.prototype.getMetadata = function () {
        return this.metadata;
    };
    /**
     * Set Metadata
     * Metadata related to the payout item, in the form of a dictionary (key-value pair)
     * @param {any} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setMetadata = function (val) {
        this.metadata = val;
        return this;
    };
    /**
     * Get CreatedAt
     * Date at which the payout item was created
     * @return {string}
     */
    PayoutItem.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    /**
     * Set CreatedAt
     * Date at which the payout item was created
     * @param {string} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setCreatedAt = function (val) {
        this.createdAt = val;
        return this;
    };
    /**
     * Get Breakdown
     * breakdown of amount for the item
     * @return {p.PayoutItemAmountBreakdowns}
     */
    PayoutItem.prototype.getBreakdown = function () {
        return this.breakdown;
    };
    /**
     * Set Breakdown
     * breakdown of amount for the item
     * @param {p.PayoutItemAmountBreakdowns} val
     * @return {PayoutItem}
     */
    PayoutItem.prototype.setBreakdown = function (val) {
        if (val.getProcessOutObjectClass &&
            val.getProcessOutObjectClass() == this.client.newPayoutItemAmountBreakdowns().getProcessOutObjectClass())
            this.breakdown = val;
        else {
            var obj = this.client.newPayoutItemAmountBreakdowns();
            obj.fillWithData(val);
            this.breakdown = obj;
        }
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItem}
     */
    PayoutItem.prototype.fillWithData = function (data) {
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
        if (data["breakdown"])
            this.setBreakdown(data["breakdown"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    PayoutItem.prototype.toJSON = function () {
        return {
            "id": this.getId(),
            "project": this.getProject(),
            "project_id": this.getProjectId(),
            "payout": this.getPayout(),
            "payout_id": this.getPayoutId(),
            "transaction": this.getTransaction(),
            "transaction_id": this.getTransactionId(),
            "type": this.getType(),
            "gateway_resource_id": this.getGatewayResourceId(),
            "amount": this.getAmount(),
            "fees": this.getFees(),
            "metadata": this.getMetadata(),
            "created_at": this.getCreatedAt(),
            "breakdown": this.getBreakdown(),
        };
    };
    return PayoutItem;
}());
module.exports = PayoutItem;
//# sourceMappingURL=payoutitem.js.map