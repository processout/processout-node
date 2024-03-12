"use strict";
// The content of this file was automatically generated
var PayoutItemAmountBreakdowns = /** @class */ (function () {
    /**
     * PayoutItemAmountBreakdowns constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function PayoutItemAmountBreakdowns(client, prefill) {
        this.client = null;
        /**
         * Amount relating to scheme fee
         * @type {string}
         */
        this.schemeFee = null;
        /**
         * Amount relating to interchange fee
         * @type {string}
         */
        this.interchangeFee = null;
        /**
         * Amount relating to gateway fee
         * @type {string}
         */
        this.gatewayFee = null;
        /**
         * Amount relating to markup fee
         * @type {string}
         */
        this.markupFee = null;
        /**
         * Amount relating to acquirer fee
         * @type {string}
         */
        this.acquirerFee = null;
        /**
         * Amount relating to other fee
         * @type {string}
         */
        this.otherFee = null;
        if (typeof client === 'undefined')
            throw new Error("The PayoutItemAmountBreakdowns object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newPayoutItemAmountBreakdowns()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    PayoutItemAmountBreakdowns.prototype.getProcessOutObjectClass = function () {
        return "PayoutItemAmountBreakdowns";
    };
    /**
     * Get SchemeFee
     * Amount relating to scheme fee
     * @return {string}
     */
    PayoutItemAmountBreakdowns.prototype.getSchemeFee = function () {
        return this.schemeFee;
    };
    /**
     * Set SchemeFee
     * Amount relating to scheme fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.setSchemeFee = function (val) {
        this.schemeFee = val;
        return this;
    };
    /**
     * Get InterchangeFee
     * Amount relating to interchange fee
     * @return {string}
     */
    PayoutItemAmountBreakdowns.prototype.getInterchangeFee = function () {
        return this.interchangeFee;
    };
    /**
     * Set InterchangeFee
     * Amount relating to interchange fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.setInterchangeFee = function (val) {
        this.interchangeFee = val;
        return this;
    };
    /**
     * Get GatewayFee
     * Amount relating to gateway fee
     * @return {string}
     */
    PayoutItemAmountBreakdowns.prototype.getGatewayFee = function () {
        return this.gatewayFee;
    };
    /**
     * Set GatewayFee
     * Amount relating to gateway fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.setGatewayFee = function (val) {
        this.gatewayFee = val;
        return this;
    };
    /**
     * Get MarkupFee
     * Amount relating to markup fee
     * @return {string}
     */
    PayoutItemAmountBreakdowns.prototype.getMarkupFee = function () {
        return this.markupFee;
    };
    /**
     * Set MarkupFee
     * Amount relating to markup fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.setMarkupFee = function (val) {
        this.markupFee = val;
        return this;
    };
    /**
     * Get AcquirerFee
     * Amount relating to acquirer fee
     * @return {string}
     */
    PayoutItemAmountBreakdowns.prototype.getAcquirerFee = function () {
        return this.acquirerFee;
    };
    /**
     * Set AcquirerFee
     * Amount relating to acquirer fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.setAcquirerFee = function (val) {
        this.acquirerFee = val;
        return this;
    };
    /**
     * Get OtherFee
     * Amount relating to other fee
     * @return {string}
     */
    PayoutItemAmountBreakdowns.prototype.getOtherFee = function () {
        return this.otherFee;
    };
    /**
     * Set OtherFee
     * Amount relating to other fee
     * @param {string} val
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.setOtherFee = function (val) {
        this.otherFee = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {PayoutItemAmountBreakdowns}
     */
    PayoutItemAmountBreakdowns.prototype.fillWithData = function (data) {
        if (data["scheme_fee"])
            this.setSchemeFee(data["scheme_fee"]);
        if (data["interchange_fee"])
            this.setInterchangeFee(data["interchange_fee"]);
        if (data["gateway_fee"])
            this.setGatewayFee(data["gateway_fee"]);
        if (data["markup_fee"])
            this.setMarkupFee(data["markup_fee"]);
        if (data["acquirer_fee"])
            this.setAcquirerFee(data["acquirer_fee"]);
        if (data["other_fee"])
            this.setOtherFee(data["other_fee"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    PayoutItemAmountBreakdowns.prototype.toJSON = function () {
        return {
            "scheme_fee": this.getSchemeFee(),
            "interchange_fee": this.getInterchangeFee(),
            "gateway_fee": this.getGatewayFee(),
            "markup_fee": this.getMarkupFee(),
            "acquirer_fee": this.getAcquirerFee(),
            "other_fee": this.getOtherFee(),
        };
    };
    return PayoutItemAmountBreakdowns;
}());
module.exports = PayoutItemAmountBreakdowns;
//# sourceMappingURL=payoutitemamountbreakdowns.js.map