"use strict";
// The content of this file was automatically generated
var CardSchemeDetails = /** @class */ (function () {
    /**
     * CardSchemeDetails constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function CardSchemeDetails(client, prefill) {
        this.client = null;
        /**
         * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
         * @type {string}
         */
        this.transactionId = null;
        /**
         * Transaction Link Identifier for Mastercard transaction chaining
         * @type {string}
         */
        this.transactionLinkId = null;
        if (typeof client === 'undefined')
            throw new Error("The CardSchemeDetails object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCardSchemeDetails()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    CardSchemeDetails.prototype.getProcessOutObjectClass = function () {
        return "CardSchemeDetails";
    };
    /**
     * Get TransactionId
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @return {string}
     */
    CardSchemeDetails.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    /**
     * Set TransactionId
     * Scheme transaction ID associated with the card for transaction chaining (e.g. SCA)
     * @param {string} val
     * @return {CardSchemeDetails}
     */
    CardSchemeDetails.prototype.setTransactionId = function (val) {
        this.transactionId = val;
        return this;
    };
    /**
     * Get TransactionLinkId
     * Transaction Link Identifier for Mastercard transaction chaining
     * @return {string}
     */
    CardSchemeDetails.prototype.getTransactionLinkId = function () {
        return this.transactionLinkId;
    };
    /**
     * Set TransactionLinkId
     * Transaction Link Identifier for Mastercard transaction chaining
     * @param {string} val
     * @return {CardSchemeDetails}
     */
    CardSchemeDetails.prototype.setTransactionLinkId = function (val) {
        this.transactionLinkId = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {CardSchemeDetails}
     */
    CardSchemeDetails.prototype.fillWithData = function (data) {
        if (data["transaction_id"])
            this.setTransactionId(data["transaction_id"]);
        if (data["transaction_link_id"])
            this.setTransactionLinkId(data["transaction_link_id"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    CardSchemeDetails.prototype.toJSON = function () {
        return {
            "transaction_id": this.getTransactionId(),
            "transaction_link_id": this.getTransactionLinkId(),
        };
    };
    return CardSchemeDetails;
}());
module.exports = CardSchemeDetails;
//# sourceMappingURL=cardschemedetails.js.map