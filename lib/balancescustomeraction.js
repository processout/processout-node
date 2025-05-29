"use strict";
// The content of this file was automatically generated
var BalancesCustomerAction = /** @class */ (function () {
    /**
     * BalancesCustomerAction constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    function BalancesCustomerAction(client, prefill) {
        this.client = null;
        /**
         * Customer action type (such as url)
         * @type {string}
         */
        this.type = null;
        /**
         * Value of the customer action. If type is an URL, URL to which you should redirect your customer
         * @type {string}
         */
        this.value = null;
        if (typeof client === 'undefined')
            throw new Error("The BalancesCustomerAction object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newBalancesCustomerAction()");
        this.client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    }
    BalancesCustomerAction.prototype.getProcessOutObjectClass = function () {
        return "BalancesCustomerAction";
    };
    /**
     * Get Type
     * Customer action type (such as url)
     * @return {string}
     */
    BalancesCustomerAction.prototype.getType = function () {
        return this.type;
    };
    /**
     * Set Type
     * Customer action type (such as url)
     * @param {string} val
     * @return {BalancesCustomerAction}
     */
    BalancesCustomerAction.prototype.setType = function (val) {
        this.type = val;
        return this;
    };
    /**
     * Get Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @return {string}
     */
    BalancesCustomerAction.prototype.getValue = function () {
        return this.value;
    };
    /**
     * Set Value
     * Value of the customer action. If type is an URL, URL to which you should redirect your customer
     * @param {string} val
     * @return {BalancesCustomerAction}
     */
    BalancesCustomerAction.prototype.setValue = function (val) {
        this.value = val;
        return this;
    };
    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {BalancesCustomerAction}
     */
    BalancesCustomerAction.prototype.fillWithData = function (data) {
        if (data["type"])
            this.setType(data["type"]);
        if (data["value"])
            this.setValue(data["value"]);
        return this;
    };
    /**
     * Implements a JSON custom marshaller
     * @return {any}
     */
    BalancesCustomerAction.prototype.toJSON = function () {
        return {
            "type": this.getType(),
            "value": this.getValue(),
        };
    };
    return BalancesCustomerAction;
}());
module.exports = BalancesCustomerAction;
//# sourceMappingURL=balancescustomeraction.js.map